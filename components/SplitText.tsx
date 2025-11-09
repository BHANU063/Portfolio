"use client";
import { useRef, useEffect, useState, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

type SplitKind = 'chars' | 'words' | 'lines' | 'chars,words' | 'words,chars' | 'chars,words,lines';

type Props = {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: SplitKind;
  from?: Record<string, any>;
  to?: Record<string, any>;
  threshold?: number;
  rootMargin?: string;
  textAlign?: React.CSSProperties['textAlign'];
  tag?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  onLetterAnimationComplete?: () => void;
};

export default function SplitText({
  text,
  className = '',
  delay = 100,
  duration = 0.6,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  tag = 'p',
  onLetterAnimationComplete,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [pluginReady, setPluginReady] = useState(false);
  const targetsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    if (document.fonts?.status === 'loaded') setFontsLoaded(true);
    else document.fonts?.ready.then(() => setFontsLoaded(true));
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const mod: any = await import('gsap/SplitText');
        if (!cancelled && mod) {
          // @ts-ignore
          gsap.registerPlugin(mod.SplitText || mod.default);
          setPluginReady(true);
        }
      } catch (_) {
        setPluginReady(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const Tag = useMemo(() => tag, [tag]) as any;

  useGSAP(
    () => {
      const el = ref.current as any;
      if (!el || !text || !fontsLoaded) return;

      targetsRef.current = [];

      if (pluginReady) {
        try {
          // dynamic require to avoid build-time resolution
          const Split: any = (window as any).SplitText || (require('gsap/SplitText').SplitText);
          const split = new Split(el, {
            type: splitType,
            smartWrap: true,
            autoSplit: splitType === 'lines',
            linesClass: 'split-line',
            wordsClass: 'split-word',
            charsClass: 'split-char',
          });
          targetsRef.current = split.chars?.length ? split.chars : split.words?.length ? split.words : split.lines || [];
          el._rbsplitInstance = split;
        } catch {
          manualSplit(el, splitType, targetsRef);
        }
      } else {
        manualSplit(el, splitType, targetsRef);
      }

      const startPct = (1 - threshold) * 100;
      const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin || '0');
      const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
      const marginUnit = marginMatch ? marginMatch[2] || 'px' : 'px';
      const sign = marginValue === 0 ? '' : marginValue < 0 ? `-=${Math.abs(marginValue)}${marginUnit}` : `+=${marginValue}${marginUnit}`;
      const start = `top ${startPct}%${sign}`;

      const tween = gsap.fromTo(
        targetsRef.current,
        { ...from },
        {
          ...to,
          duration,
          ease,
          stagger: delay / 1000,
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
            fastScrollEnd: true,
            anticipatePin: 0.4,
          },
          onComplete: () => onLetterAnimationComplete?.(),
          willChange: 'transform, opacity',
          force3D: true,
        }
      );

      return () => {
        try {
          tween?.kill?.();
        } catch {}
        ScrollTrigger.getAll().forEach((st: any) => {
          if ((st as any).trigger === el) st.kill();
        });
        if ((el as any)._rbsplitInstance) {
          try { (el as any)._rbsplitInstance.revert(); } catch {}
          (el as any)._rbsplitInstance = null;
        } else {
          try { unsplitManual(el); } catch {}
        }
      };
    },
    { dependencies: [text, delay, duration, ease, splitType, JSON.stringify(from), JSON.stringify(to), threshold, rootMargin, fontsLoaded, pluginReady, onLetterAnimationComplete], scope: ref }
  );

  return (
    <Tag ref={ref} style={{ textAlign, overflow: 'hidden', display: 'inline-block', whiteSpace: 'normal', wordWrap: 'break-word', willChange: 'transform, opacity' }} className={`split-parent ${className}`}>
      {text}
    </Tag>
  );
}

function manualSplit(el: HTMLElement, splitType: SplitKind, targetsRef: React.MutableRefObject<HTMLElement[]>) {
  const textContent = el.textContent || '';
  el.innerHTML = '';
  const container = document.createElement('span');
  el.appendChild(container);

  const addSpan = (t: string, cls: string) => {
    const s = document.createElement('span');
    s.className = cls;
    s.textContent = t;
    container.appendChild(s);
    return s as HTMLElement;
  };

  const targets: HTMLElement[] = [];
  if ((splitType as string).includes('words')) {
    const parts = textContent.split(/(\s+)/);
    parts.forEach((p) => {
      if (p.trim() === '') container.appendChild(document.createTextNode(p));
      else targets.push(addSpan(p, 'split-word inline-block')); 
    });
  } else {
    for (const ch of Array.from(textContent)) {
      if (ch === ' ') container.appendChild(document.createTextNode(' '));
      else targets.push(addSpan(ch, 'split-char inline-block'));
    }
  }
  targetsRef.current = targets;
}

function unsplitManual(el: HTMLElement) {
  const text = el.textContent || '';
  el.innerHTML = '';
  el.textContent = text;
}

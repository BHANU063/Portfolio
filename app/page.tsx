'use client';
import { useEffect, useRef } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplitText from "@/components/SplitText";
import LightRays from "@/components/LightRays";
import { profile } from "@/data/profile";
import { ExternalLink, ArrowRight, Download } from "lucide-react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Animate sections on scroll
    sectionRefs.current.forEach((section) => {
      if (!section) return;
      
      gsap.fromTo(
        section,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((t: any) => t.kill());
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div className="bg-gradient-to-br from-neutral-950 to-neutral-900 min-h-screen">
      <Navbar />

      <main className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 -z-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-900/20 to-transparent"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
        </div>

        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative min-h-screen flex items-center pt-20 pb-28 overflow-hidden"
        >
          <div className="absolute inset-0 -z-10">
            <LightRays 
              className="h-full w-full" 
              raysColor="#0ea5ff" 
              raysSpeed={1.1} 
              lightSpread={1.2} 
              rayLength={2.2} 
              pulsating 
              fadeDistance={1.2} 
              saturation={1.0} 
              noiseAmount={0.02} 
            />
          </div>
          
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative z-10">
                <div className="inline-block mb-2 px-3 py-1 text-sm text-blue-400 bg-blue-900/30 backdrop-blur-sm rounded-full border border-blue-800/50">
                  Welcome to my portfolio
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                  <span className="gradient-text">{profile.name}</span>
                </h1>
                
                <div className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-2xl">
                  <p className="mb-2">{profile.role}</p>
                  <p className="text-lg text-neutral-400">{profile.summary}</p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="#projects" 
                    className="btn btn-primary group"
                  >
                    View My Work
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="#contact" 
                    className="btn btn-outline group"
                  >
                    Get In Touch
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
                
                <div className="mt-12 flex items-center gap-6">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div 
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-neutral-800 bg-neutral-800/80 backdrop-blur-sm flex items-center justify-center text-xs font-medium text-white"
                        style={{ zIndex: 3 - i }}
                      >
                        {i}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm text-neutral-400">Trusted by 3+ clients</p>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-sm text-neutral-400 ml-1">5.0</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative hidden lg:block">
                <div className="relative z-10 max-w-md mx-auto">
                  <div className="card p-8 backdrop-blur-sm">
                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-xl opacity-70"></div>
                    <h3 className="text-xl font-semibold mb-6">Let's Connect</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-blue-900/30 border border-blue-800/50 text-blue-400">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-neutral-400">Email</p>
                          <a href={`mailto:${profile.contact.email}`} className="text-white hover:text-blue-400 transition-colors">
                            {profile.contact.email}
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-blue-900/30 border border-blue-800/50 text-blue-400">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-neutral-400">Phone</p>
                          <a href={`tel:${profile.contact.phone.replace(/\D/g, '')}`} className="text-white hover:text-blue-400 transition-colors">
                            {profile.contact.phone}
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-blue-900/30 border border-blue-800/50 text-blue-400">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-neutral-400">Location</p>
                          <p className="text-white">{profile.contact.location}</p>
                        </div>
                      </div>
                      
                      <div className="pt-4 mt-6 border-t border-neutral-800">
                        <div className="flex items-center gap-4">
                          <a 
                            href={profile.contact.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-neutral-800/50 hover:bg-blue-900/30 hover:border-blue-800/50 border border-neutral-800 text-neutral-300 hover:text-blue-400 transition-all"
                            aria-label="LinkedIn"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          </a>
                          
                          {profile.contact.github && (
                            <a 
                              href={profile.contact.github} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg bg-neutral-800/50 hover:bg-neutral-700/50 border border-neutral-800 text-neutral-300 hover:text-white transition-all"
                              aria-label="GitHub"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                              </svg>
                            </a>
                          )}
                          
                          <a 
                            href="#" 
                            className="ml-auto px-4 py-2 text-sm font-medium rounded-lg bg-neutral-800/50 hover:bg-neutral-700/50 border border-neutral-800 text-white flex items-center gap-2 group"
                          >
                            <Download className="w-4 h-4" />
                            Download CV
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-blue-500/20 blur-xl"></div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-indigo-500/20 blur-xl"></div>
                </div>
                
                <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-gradient-to-br from-blue-500/10 to-indigo-600/10 blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <div className="animate-bounce flex flex-col items-center">
              <p className="text-sm text-neutral-400 mb-2">Scroll down</p>
              <svg className="w-6 h-6 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="container">
            <h2 className="section-title">About</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-8 items-center">
              <div className="relative order-last md:order-first">
                <div className="relative w-full h-56 md:h-72 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-indigo-600/20 to-purple-600/20" />
                  <div className="absolute -inset-12 bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-blue-500/10 via-indigo-500/10 to-transparent animate-pulse" />
                </div>
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-blue-500/20 blur-2xl" />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-indigo-500/20 blur-3xl" />
              </div>
              <div>
                <p className="text-neutral-300 leading-relaxed text-lg">{profile.summary}</p>
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="card p-4 text-center">
                    <p className="text-2xl font-bold text-white">3+</p>
                    <p className="text-xs text-neutral-400">Projects</p>
                  </div>
                  <div className="card p-4 text-center">
                    <p className="text-2xl font-bold text-white">2</p>
                    <p className="text-xs text-neutral-400">Domains</p>
                  </div>
                  <div className="card p-4 text-center">
                    <p className="text-2xl font-bold text-white">5.0</p>
                    <p className="text-xs text-neutral-400">Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <div className="container">
            <h2 className="section-title">Projects</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {profile.projects.map((p) => (
                <article key={p.title} className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 transition-all hover:border-neutral-700 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-blue-500/10 to-indigo-600/10 blur-2xl transition-all group-hover:scale-125" />
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <span key={s} className="text-xs px-2.5 py-1 rounded-full border border-neutral-800/80 bg-neutral-900/60 text-neutral-300">{s}</span>
                      ))}
                    </div>
                    <ul className="mt-4 space-y-2 text-neutral-300">
                      {p.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <div className="container">
            <h2 className="section-title">Skills</h2>
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {Object.entries(profile.skills).map(([k, v]) => (
                <div key={k} className="card p-6">
                  <h3 className="text-lg font-semibold capitalize">{k.replace(/([A-Z])/g, ' $1')}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {(v as readonly string[]).map((s) => (
                      <span key={s} className="px-3 py-1 rounded-full text-xs border border-neutral-800 bg-neutral-900/60 text-neutral-300">{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="section">
          <div className="container">
            <h2 className="section-title">Education</h2>
            <div className="mt-8 relative">
              <div className="absolute left-2 md:left-3 top-0 bottom-0 w-px bg-neutral-800" />
              <div className="space-y-6">
                {profile.education.map((e) => (
                  <div key={e.school} className="relative pl-8 md:pl-12">
                    <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 ring-4 ring-neutral-900" />
                    <div className="card p-6">
                      <div className="flex items-center justify-between gap-4 flex-wrap">
                        <h3 className="text-lg font-semibold">{e.school}</h3>
                        <span className="text-sm text-neutral-400">{e.period}</span>
                      </div>
                      <p className="text-neutral-300 mt-2">{e.degree}</p>
                      <p className="text-neutral-400 mt-1 text-sm">{e.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CERTIFICATES */}
        <section id="certificates" className="section">
          <div className="container">
            <h2 className="section-title">Certificates</h2>
            <div className="mt-8 grid md:grid-cols-2 gap-4">
              {profile.certificates.map((c) => (
                <div key={c} className="card p-5 flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600" />
                  <p className="text-neutral-300">{c}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <div className="container">
            <h2 className="section-title">Contact</h2>
            <div className="mt-8 relative overflow-hidden rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-900/60 p-8">
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-900/20 via-indigo-900/10 to-transparent" />
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-semibold">Let’s build something great</h3>
                  <p className="mt-2 text-neutral-400">Open to collaborations, internships, and exciting projects.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href={`mailto:${profile.contact.email}`} className="btn btn-primary">Email Me</a>
                  <a href={`tel:${profile.contact.phone.replace(/\D/g, '')}`} className="btn btn-outline">Call</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

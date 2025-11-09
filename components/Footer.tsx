export default function Footer() {
  return (
    <footer className="border-t border-neutral-800/80 mt-16">
      <div className="container py-8 text-sm text-neutral-400 flex flex-col md:flex-row items-center justify-between gap-3">
        <p>
          © {new Date().getFullYear()} Bhanu Reddy.M. All rights reserved.
        </p>
        <div className="inline-flex gap-4">
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href="#projects">Projects</a>
          <a className="nav-link" href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

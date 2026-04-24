const Footer = () => {
  return (
    <footer
      className="bg-surface-container-low border-t border-outline-variant mt-xl transition-colors duration-300"
      id="contact"
    >
      <div className="flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto px-6 py-12 gap-8 w-full">
        <div className="text-primary font-black font-code text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} JUNAIDIRAH. ALL RIGHTS RESERVED.
        </div>
        <div className="flex gap-8">
          <a
            className="font-code text-xs tracking-widest uppercase text-slate-500 hover:text-blue-900 underline decoration-1 underline-offset-4 transition-all duration-200 ease-in-out"
            href="#"
          >
            GitHub
          </a>
          <a
            className="font-code text-xs tracking-widest uppercase text-slate-500 hover:text-blue-900 underline decoration-1 underline-offset-4 transition-all duration-200 ease-in-out"
            href="#"
          >
            LinkedIn
          </a>
          <a
            className="font-code text-xs tracking-widest uppercase text-slate-500 hover:text-blue-900 underline decoration-1 underline-offset-4 transition-all duration-200 ease-in-out"
            href="#"
          >
            ResearchGate
          </a>
          <a
            className="font-code text-xs tracking-widest uppercase text-slate-500 hover:text-blue-900 underline decoration-1 underline-offset-4 transition-all duration-200 ease-in-out"
            href="#"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

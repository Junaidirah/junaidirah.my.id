import HeroCanvas from "./HeroCanvas";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="py-xl md:py-32 flex flex-col md:flex-row items-center gap-xl border-b border-outline-variant"
        id="intro"
      >
        <div className="flex-1 space-y-md">
          <div className="inline-block px-2 py-1 bg-surface-container border border-outline-variant rounded-sm">
            <span className="font-label-caps text-label-caps text-secondary uppercase">
              Software Engineer
            </span>
          </div>
          <h1 className="font-h1 text-h1 text-primary max-w-2xl">
            Engineering Stability through Mathematical Precision.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            Transforming complex business bottlenecks into streamlined,
            data-driven architectures. I build the systems that allow your
            business to grow without breaking.
          </p>
          <div className="pt-sm flex flex-wrap gap-md">
            <a
              href="#projects"
              className="bg-secondary text-on-secondary px-lg py-sm font-label-caps text-label-caps uppercase tracking-widest hover:brightness-110 transition-all border border-transparent flex items-center justify-center"
            >
              View Projects
            </a>
            <a
              href="#stack"
              className="bg-transparent border border-outline text-on-surface px-lg py-sm font-label-caps text-label-caps uppercase tracking-widest hover:bg-surface-container transition-all flex items-center justify-center"
            >
              Technical Stack
            </a>
          </div>
        </div>

        <div className="flex-1 w-full max-w-[480px] aspect-square relative bg-transparent p-md">
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#00103e 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          ></div>
          <HeroCanvas />
          {/* <div className="absolute bottom-4 right-4 bg-white border border-outline-variant px-sm py-xs font-code text-code">
            LOC: 51.5074° N, 0.1278° W
          </div> */}
        </div>
      </section>

      {/* System Status 'Dashboard' Utility */}
      <section className="py-lg border-b border-outline-variant flex flex-wrap justify-between gap-md items-center">
        <div className="flex items-center gap-sm">
          <span
            className="material-symbols-outlined text-secondary"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            terminal
          </span>
          <span className="font-code text-code uppercase tracking-tighter">
            Status: OPTIMIZED
          </span>
        </div>
        <div className="flex items-center gap-sm">
          <span
            className="material-symbols-outlined text-secondary"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            memory
          </span>
          <span className="font-code text-code uppercase tracking-tighter">
            Latency: 14ms (AVG)
          </span>
        </div>
        <div className="flex items-center gap-sm">
          <span
            className="material-symbols-outlined text-secondary"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            science
          </span>
          <span className="font-code text-code uppercase tracking-tighter">
            Entropy: MINIMIZED
          </span>
        </div>
        <div className="flex items-center gap-sm">
          <span
            className="material-symbols-outlined text-secondary"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            database
          </span>
          <span className="font-code text-code uppercase tracking-tighter">
            Core: DISTRIBUTED
          </span>
        </div>
      </section>
    </>
  );
};

export default Hero;

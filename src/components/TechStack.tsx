const TechStack = () => {
  return (
    <section className="py-xl grid grid-cols-1 md:grid-cols-4 gap-md border-t border-outline-variant" id="stack">
      <div className="md:col-span-2 bg-surface-container p-lg space-y-md border border-outline-variant">
        <h3 className="font-h3 text-primary">Core Competencies</h3>
        <div className="grid grid-cols-2 gap-sm">
          <div className="p-sm bg-surface border border-outline-variant">
            <span className="font-label-caps text-[10px] text-outline block mb-1 uppercase">Concurrency</span>
            <div className="w-full bg-surface-dim h-1">
              <div className="bg-secondary h-1 w-[95%]"></div>
            </div>
          </div>
          <div className="p-sm bg-surface border border-outline-variant">
            <span className="font-label-caps text-[10px] text-outline block mb-1 uppercase">Data Modeling</span>
            <div className="w-full bg-surface-dim h-1">
              <div className="bg-secondary h-1 w-[90%]"></div>
            </div>
          </div>
          <div className="p-sm bg-surface border border-outline-variant">
            <span className="font-label-caps text-[10px] text-outline block mb-1 uppercase">Physics Logic</span>
            <div className="w-full bg-surface-dim h-1">
              <div className="bg-secondary h-1 w-[85%]"></div>
            </div>
          </div>
          <div className="p-sm bg-surface border border-outline-variant">
            <span className="font-label-caps text-[10px] text-outline block mb-1 uppercase">Infrastructure</span>
            <div className="w-full bg-surface-dim h-1">
              <div className="bg-secondary h-1 w-[98%]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary text-on-primary p-lg flex flex-col justify-between border border-transparent">
        <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: '"FILL" 1' }}>terminal</span>
        <div>
          <span className="font-label-caps text-xs opacity-60 uppercase">System Logs</span>
          <p className="font-code text-xs leading-relaxed mt-2">
            &gt; INITIALIZING CORE...<br/>
            &gt; LOADING PHYSICS_LIB...<br/>
            &gt; UPTIME: 99.999%
          </p>
        </div>
      </div>
      <div className="bg-surface p-lg border border-outline-variant flex flex-col justify-center text-center">
        <span className="font-h1 text-h1 text-secondary">08+</span>
        <span className="font-label-caps text-xs text-outline uppercase">Years of Architecture</span>
      </div>
    </section>
  );
};

export default TechStack;

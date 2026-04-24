const Projects = () => {
  return (
    <section className="py-xl" id="projects">

      {/* Header */}
      <header className="mb-xl border-l-4 border-primary pl-lg">
        <span className="font-code text-label-caps text-secondary uppercase mb-sm block">
          [SYSTEM_STATUS: OPERATIONAL]
        </span>
        <h2 className="font-h1 text-h1 text-primary mb-md">
          Research &amp; Active Projects
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
          Advancing the frontiers of high-performance computing through
          physics-driven engineering. My work focuses on the intersection of
          theoretical fluid dynamics and distributed backend architecture,
          ensuring absolute reliability in simulation-heavy environments.
        </p>
      </header>

      {/* Ongoing Simulations */}
      <div className="mb-xl">
        <div className="flex items-center justify-between mb-lg border-b border-outline-variant pb-sm">
          <h3 className="font-h2 text-h2 text-primary uppercase tracking-tighter">
            Ongoing Simulations
          </h3>
          <span className="font-code text-xs text-outline flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse inline-block"></span>
            [LIVE_FEED_V2.0]
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-md">
          {/* Main Sim Card */}
          <div className="md:col-span-8 border border-outline bg-surface overflow-hidden relative group transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="h-[400px] overflow-hidden relative">
              <img
                alt="Fluid dynamics visualization"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5cnq9CMwmNgV23NNnMuNQCNZ5ysMflAJxfFAIoJdD199C2UGK7dOAzznoT9Y_tZHCLGrGGxLHRAfulyiT0uByCCt_3NJu5Cr0PIKsV-Ti72kbgp1arLz0WG_mpVCNg1GoQLjb0TwRzZjyTcsY1X1-y16Q-Ksx1StVxvXk1WbCg_VWIo3RIxSBROlUVvFI7D5777o8DINWxaMcKK6QXIPbYfVpHsGeGkYUseBGXGdjbgbTkT9dgmk94mOXW4m_FOXbssLLyjC0Ai4"
              />
              <div className="absolute top-md left-md bg-primary/90 text-white px-sm py-xs font-code text-xs flex items-center gap-2">
                <span
                  className="material-symbols-outlined animate-spin"
                  style={{ fontSize: "14px" }}
                >
                  autorenew
                </span>
                SIM_RUN: 884-X
              </div>
            </div>
            <div className="p-lg bg-surface border-t border-outline-variant relative z-10 transition-colors">
              <h4 className="font-h3 text-h3 text-primary mb-xs group-hover:text-secondary transition-colors">
                Lattice Boltzmann Method (LBM) Analysis
              </h4>
              <p className="font-body-md text-on-surface-variant">
                Real-time turbulent flow analysis across irregular geometries
                using GPU-accelerated kernels.
              </p>
              <div className="mt-md flex gap-sm flex-wrap">
                <span className="px-xs py-1 border border-outline text-label-caps bg-surface-container text-[10px] uppercase">
                  C++17
                </span>
                <span className="px-xs py-1 border border-outline text-label-caps bg-surface-container text-[10px] uppercase">
                  CUDA
                </span>
                <span className="px-xs py-1 border border-outline text-label-caps bg-surface-container text-[10px] uppercase">
                  MPI
                </span>
              </div>
            </div>
          </div>

          {/* Sidebar Metrics */}
          <div className="md:col-span-4 flex flex-col gap-md">
            <div className="flex-1 border border-outline bg-surface-container-low p-md flex flex-col justify-between group hover:bg-surface transition-colors">
              <div>
                <span className="font-code text-label-caps text-secondary">
                  [THROUGHPUT]
                </span>
                <div className="font-h2 text-h2 text-primary mt-xs group-hover:scale-105 origin-left transition-transform">
                  1.2 TB/s
                </div>
              </div>
              <div className="mt-md">
                <div className="w-full bg-outline-variant h-1 mb-2">
                  <div className="bg-secondary h-1 w-[85%] animate-pulse"></div>
                </div>
                <p className="text-xs text-outline font-code">
                  Memory bandwidth utilization: ACTIVE
                </p>
              </div>
            </div>

            <div className="flex-1 border border-outline bg-surface p-md group transition-colors">
              <div className="flex items-center gap-sm mb-md">
                <span
                  className="material-symbols-outlined text-secondary group-hover:rotate-12 transition-transform"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  analytics
                </span>
                <span className="font-label-caps text-primary text-xs uppercase">
                  Convergence Rate
                </span>
              </div>
              <div className="w-full bg-surface-container-low border border-outline-variant h-24 flex items-end gap-1 p-2 overflow-hidden">
                {[40, 65, 45, 80, 60, 90, 75, 95, 85, 98].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-secondary/60 group-hover:bg-secondary transition-colors duration-300"
                    style={{ height: `${h}%` }}
                  ></div>
                ))}
              </div>
              <span className="font-code text-xs text-on-surface-variant group-hover:text-primary transition-colors mt-sm block">
                Error Residual: 1.04e-12
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Publications */}
      <div className="mb-xl">
        <div className="flex items-center justify-between mb-lg border-b border-outline-variant pb-sm">
          <h3 className="font-h2 text-h2 text-primary uppercase tracking-tighter">
            Featured Publications
          </h3>
          <span className="font-code text-xs text-outline">[ARCHIVE_ROOT]</span>
        </div>

        <div className="space-y-md">
          {/* Paper 1 */}
          <div className="border border-outline bg-surface p-lg hover:border-secondary hover:-translate-y-1 hover:shadow-lg transition-all group cursor-default">
            <div className="flex flex-col md:flex-row justify-between items-start gap-md">
              <div className="flex-1">
                <div className="flex justify-between items-start mb-xs">
                  <span className="font-code text-xs text-secondary">
                    [PAPER_001_2024]
                  </span>
                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="flex items-center gap-1 text-[10px] font-label-caps text-outline hover:text-primary transition-colors uppercase cursor-pointer">
                      <span className="material-symbols-outlined text-sm">
                        content_copy
                      </span>
                      Copy Citation
                    </button>
                    <button className="flex items-center gap-1 text-[10px] font-label-caps text-outline hover:text-primary transition-colors uppercase cursor-pointer">
                      <span className="material-symbols-outlined text-sm">
                        share
                      </span>
                      Share
                    </button>
                  </div>
                </div>
                <h4 className="font-h3 text-h3 text-primary mb-sm group-hover:text-secondary transition-colors duration-300">
                  Distributed Solver Architectures for Massively Parallel CFD
                </h4>
                <p className="font-body-md text-on-surface-variant mb-md leading-relaxed">
                  This paper explores a novel decomposition strategy for
                  Navier-Stokes equations across heterogeneous computing
                  clusters, reducing communication overhead by 34%.
                </p>
                <div className="flex flex-wrap gap-sm items-center">
                  <span className="px-xs py-1 border border-outline text-label-caps bg-surface-container-low text-[10px] uppercase">
                    IEEE TRANSACTIONS
                  </span>
                  <span className="px-xs py-1 border border-outline text-label-caps bg-surface-container-low text-[10px] uppercase">
                    DISTRIBUTED COMPUTING
                  </span>
                  <a
                    className="text-secondary font-code text-xs ml-auto flex items-center gap-1 hover:underline"
                    href="#"
                  >
                    DOI: 10.1109/TPDS.2024.12345
                    <span className="material-symbols-outlined text-sm">
                      open_in_new
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Paper 2 */}
          <div className="border border-outline bg-surface p-lg hover:border-secondary hover:-translate-y-1 hover:shadow-lg transition-all group cursor-default">
            <div className="flex flex-col md:flex-row justify-between items-start gap-md">
              <div className="flex-1">
                <div className="flex justify-between items-start mb-xs">
                  <span className="font-code text-xs text-secondary">
                    [PAPER_002_2023]
                  </span>
                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="flex items-center gap-1 text-[10px] font-label-caps text-outline hover:text-primary transition-colors uppercase cursor-pointer">
                      <span className="material-symbols-outlined text-sm">
                        content_copy
                      </span>
                      Copy Citation
                    </button>
                    <button className="flex items-center gap-1 text-[10px] font-label-caps text-outline hover:text-primary transition-colors uppercase cursor-pointer">
                      <span className="material-symbols-outlined text-sm">
                        share
                      </span>
                      Share
                    </button>
                  </div>
                </div>
                <h4 className="font-h3 text-h3 text-primary mb-sm group-hover:text-secondary transition-colors duration-300">
                  Stochastic Modeling of Sub-grid Scale Turbulence in Backend
                  Microservices
                </h4>
                <p className="font-body-md text-on-surface-variant mb-md leading-relaxed">
                  Applying Kolmogorov scales to predict latency spikes in
                  microservice architectures during high-concurrency traffic
                  events.
                </p>
                <div className="flex flex-wrap gap-sm items-center">
                  <span className="px-xs py-1 border border-outline text-label-caps bg-surface-container-low text-[10px] uppercase">
                    ACM SIGMETRICS
                  </span>
                  <span className="px-xs py-1 border border-outline text-label-caps bg-surface-container-low text-[10px] uppercase">
                    PHYSICS-INSPIRED ML
                  </span>
                  <a
                    className="text-secondary font-code text-xs ml-auto flex items-center gap-1 hover:underline"
                    href="#"
                  >
                    DOI: 10.1145/354321.67890
                    <span className="material-symbols-outlined text-sm">
                      open_in_new
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Whitepapers & Technical Specs */}
      <div className="mb-xl">
        <div className="flex items-center justify-between mb-lg border-b border-outline-variant pb-sm">
          <h3 className="font-h2 text-h2 text-primary uppercase tracking-tighter">
            Whitepapers &amp; Technical Specs
          </h3>
          <span className="font-code text-xs text-outline">[DOCS_V4]</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
          {/* File list */}
          <div className="border border-outline bg-surface rounded-sm overflow-hidden">
            <div className="flex items-center gap-sm p-md bg-surface-container border-b border-outline">
              <span className="material-symbols-outlined text-primary">
                folder_open
              </span>
              <span className="font-label-caps text-primary text-xs uppercase">
                System Architecture / Docs
              </span>
            </div>
            <ul className="divide-y divide-outline-variant">
              {[
                "Low-Latency Data Pipelines",
                "Memory Alignment Strategies",
                "Scaling Redis for Distributed State",
              ].map((doc) => (
                <li
                  key={doc}
                  className="flex justify-between items-center px-md py-4 hover:bg-surface-container-low transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-outline group-hover:text-secondary text-sm">
                      description
                    </span>
                    <span className="font-body-md text-on-surface group-hover:text-primary transition-colors">
                      {doc}
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary transition-all group-hover:translate-y-1 text-sm">
                    download
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Terminal Log */}
          <div
            className="border border-outline bg-surface p-md group/terminal cursor-text overflow-hidden"
            style={{
              backgroundImage: "radial-gradient(#dce4e1 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          >
            <div className="flex justify-between items-center mb-md border-b border-outline pb-xs">
              <span className="font-code text-xs text-outline uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary inline-block"></span>
                terminal_log.json
              </span>
              <span className="material-symbols-outlined text-xs text-outline cursor-pointer hover:text-primary transition-colors">
                content_copy
              </span>
            </div>
            <div className="relative overflow-hidden">
              <pre className="font-code text-xs leading-relaxed text-on-surface-variant transition-all duration-300 group-hover/terminal:opacity-40">
                {`{
  `}
                <span className="text-secondary font-semibold">"project"</span>
                {`: `}
                <span className="text-secondary">"LBM_SOLVER_3"</span>
                {`,
  `}
                <span className="text-secondary font-semibold">"version"</span>
                {`: `}
                <span className="text-secondary">"1.0.4-rc"</span>
                {`,
  `}
                <span className="text-secondary font-semibold">
                  "dependencies"
                </span>
                {`: {
    `}
                <span className="text-secondary font-semibold">
                  "cuda_toolkit"
                </span>
                {`: `}
                <span className="text-secondary">&quot;&gt;=11.8&quot;</span>
                {`,
    `}
                <span className="text-secondary font-semibold">"openmpi"</span>
                {`: `}
                <span className="text-secondary">"4.1.x"</span>
                {`
  },
  `}
                <span className="text-secondary font-semibold">"metrics"</span>
                {`: {
    `}
                <span className="text-secondary font-semibold">"precision"</span>
                {`: `}
                <span className="text-secondary">"double_fp64"</span>
                {`,
    `}
                <span className="text-secondary font-semibold">
                  "stability_index"
                </span>
                {`: `}
                <span className="text-primary font-semibold">0.99942</span>
                {`
  }
}`}
              </pre>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/terminal:opacity-100 transition-opacity pointer-events-none">
                <div className="font-code text-sm text-primary bg-surface-container px-3 py-1 border-r-4 border-primary animate-pulse">
                  &gt; tail -f simulation.log
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

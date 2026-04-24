const Projects = () => {
  return (
    <section className="py-xl" id="projects">
      <div className="flex justify-between items-end mb-xl">
        <div>
          <span className="font-label-caps text-label-caps text-outline uppercase">Active Deployments</span>
          <h2 className="font-h2 text-h2 text-primary mt-xs">Featured Projects</h2>
        </div>
        <div className="font-code text-code text-outline underline decoration-1 underline-offset-4 cursor-pointer">
          BROWSE_ARCHIVE_01
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
        {/* Project Card 1 */}
        <div className="bg-surface border border-outline-variant hover:border-secondary transition-all group">
          <div className="h-48 overflow-hidden bg-surface-container">
            <img 
              alt="Server clusters" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5Okw9L2NHF9Hc8PdXyrybiAhF4WNm2KTkpjDoYs1I4YpXkkRI0HLxKGUvbDCDoF0owkQY3wCw5kRksm8qkNw0n6LgKbNlqjPVrdlxiC3EuwjMFrJf5UcBV6SC-j8Jl56Shc7wQDanwG8Gy-72yJd1dQqcI1kOcdPxcMk0mjzBnl6T4T6A3YYSAbg3PVPYykdTbKv00TZ7KxSyQM-HjtJbhrrq5Hptuu4glNiVBrnYybKk5r7DAJE__WGWKVNwhEwOQ6Q8akybLPY" 
            />
          </div>
          <div className="p-md space-y-sm">
            <div className="flex justify-between items-center">
              <span className="font-code text-xs text-outline">001_DISTRIBUTED</span>
              <span className="material-symbols-outlined text-sm text-outline">north_east</span>
            </div>
            <h3 className="font-h3 text-h3 text-primary">Quantum-Resistant Ledger</h3>
            <p className="font-body-md text-on-surface-variant text-sm">
              A backend architecture implementing lattice-based cryptography for secure transaction scaling in financial sectors.
            </p>
            <div className="flex flex-wrap gap-xs pt-sm">
              <span className="px-2 py-0.5 bg-surface-container border border-outline-variant font-label-caps text-[10px] uppercase">Rust</span>
              <span className="px-2 py-0.5 bg-surface-container border border-outline-variant font-label-caps text-[10px] uppercase">gRPC</span>
              <span className="px-2 py-0.5 bg-surface-container border border-outline-variant font-label-caps text-[10px] uppercase">Cryptography</span>
            </div>
          </div>
        </div>
        
        {/* Project Card 2 */}
        <div className="bg-surface border border-outline-variant hover:border-secondary transition-all group">
          <div className="h-48 overflow-hidden bg-surface-container">
            <img 
              alt="Global network" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtHgQTJz-W48neXA7KIk_aaW9t1gBergh5DZ6WNlQUxEhfDVkxXm6ZQzdReA-EHNHzoRPNTCkEKAHDAFt-gmCOMpmIS3vhQ1JyYEo6VOe3ihJjhU1BGOKhu8Vd4JJzIxWbWK-yNMPEgIai24ds7-YU-w5Z1Xz6TjvufmfD4dKwrGlVnyhSFCfv8_z2Y-QcqfAqLrj4genBeNGARp8IwkYDYxWjEHqQF0SagHH5jsJNa4m5-QwViPsCWGEEU4T7_Uss2RonBFo8f_M" 
            />
          </div>
          <div className="p-md space-y-sm">
            <div className="flex justify-between items-center">
              <span className="font-code text-xs text-outline">002_PHYS_SIM</span>
              <span className="material-symbols-outlined text-sm text-outline">north_east</span>
            </div>
            <h3 className="font-h3 text-h3 text-primary">Newtonian Flow API</h3>
            <p className="font-body-md text-on-surface-variant text-sm">
              Real-time fluid dynamics simulation served via a high-throughput WebSocket API for low-latency visualizers.
            </p>
            <div className="flex flex-wrap gap-xs pt-sm">
              <span className="px-2 py-0.5 bg-surface-container border border-outline-variant font-label-caps text-[10px] uppercase">C++</span>
              <span className="px-2 py-0.5 bg-surface-container border border-outline-variant font-label-caps text-[10px] uppercase">Go</span>
              <span className="px-2 py-0.5 bg-surface-container border border-outline-variant font-label-caps text-[10px] uppercase">WebSockets</span>
            </div>
          </div>
        </div>
        
        {/* Project Card 3 */}
        <div className="bg-surface border border-outline-variant hover:border-secondary transition-all group">
          <div className="h-48 overflow-hidden bg-surface-container">
            <img 
              alt="Data analytics dashboard" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx-eOL4f4dGiQTmZFHCesgj3G_pl8Mn9ahcBrFDXr_oSsiC0Av_n-LITuhzhukq23jykdxWenxGdXH7HPMTacHTh61ntYZZ4z_3ncdQhFq2ganglWGeJR8QbNk76I8J_UVMpA3CPxzN7hI6UCkRpcJdu7eCamgXWproq6JCYs7gWalP2o1oshPZC1ojhcl6ZyN_CkIP-yc2BndV-QsI34ruwKkc6sXCuV8oln9u2Bm4D0i_2Pxtzgn_1wmdcJ6g7VxXL3paizGxmQ" 
            />
          </div>
          <div className="p-md space-y-sm">
            <div className="flex justify-between items-center">
              <span className="font-code text-xs text-outline">003_SCALABILITY</span>
              <span className="material-symbols-outlined text-sm text-outline">north_east</span>
            </div>
            <h3 className="font-h3 text-h3 text-primary">Orchestra Engine</h3>
            <p className="font-body-md text-on-surface-variant text-sm">
              Custom container orchestration logic designed to optimize energy consumption in large-scale data centers.
            </p>
            <div className="flex flex-wrap gap-xs pt-sm">
              <span className="px-2 py-0.5 bg-surface-container border border-outline-variant font-label-caps text-[10px] uppercase">Kubernetes</span>
              <span className="px-2 py-0.5 bg-surface-container border border-outline-variant font-label-caps text-[10px] uppercase">Python</span>
              <span className="px-2 py-0.5 bg-surface-container border border-outline-variant font-label-caps text-[10px] uppercase">ML</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

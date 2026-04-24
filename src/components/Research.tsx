import { Calendar, MapPin, Target } from 'lucide-react';

const Research = () => {
  return (
    <section id="research" className="py-24">
      <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
        <h2 className="text-4xl font-bold text-primary mb-12 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-2/5 after:h-1 after:bg-accent after:rounded-sm">
          Academic Research
        </h2>
        
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-white/70 backdrop-blur-md border-y border-r border-primary/10 p-10 rounded-2xl relative overflow-hidden border-l-4 border-l-accent">
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-primary opacity-5 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            
            <h3 className="text-2xl font-heading text-primary mb-4 font-semibold">
              Spatiotemporal PM2.5 Prediction using Advanced Deep Learning Architectures
            </h3>
            
            <div className="flex flex-wrap gap-6 mb-6 text-sm text-accent font-medium">
              <span className="flex items-center gap-2"><Calendar size={16} /> 2025 - 2026</span>
              <span className="flex items-center gap-2"><MapPin size={16} /> Telkom University (TULT, GKU, Deli)</span>
            </div>
            
            <p className="text-text-main mb-8 text-lg leading-relaxed opacity-90">
              A comprehensive study evaluating the performance of pure LSTM, CNN-LSTM, and Transformer models in forecasting PM2.5 concentration levels. The research addressed challenges in model overfitting by implementing L2 regularization, dropout mechanisms, and learning rate scheduling across three distinct sensor locations.
            </p>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-primary/5">
              <h4 className="text-lg font-semibold flex items-center gap-2 mb-4 text-primary">
                <Target size={18} className="text-accent" /> Key Contributions
              </h4>
              <ul className="space-y-3">
                <li className="relative pl-6 text-text-main before:content-['→'] before:absolute before:left-0 before:text-accent before:font-bold">
                  Developed a standardized 6-panel evaluation dashboard for consistent cross-site comparison.
                </li>
                <li className="relative pl-6 text-text-main before:content-['→'] before:absolute before:left-0 before:text-accent before:font-bold">
                  Automated CSV metric logging for real-time model evaluation and dataset generation.
                </li>
                <li className="relative pl-6 text-text-main before:content-['→'] before:absolute before:left-0 before:text-accent before:font-bold">
                  Optimized Transformer architecture for sequential sensor data, reducing MSE by 15% compared to baseline models.
                </li>
                <li className="relative pl-6 text-text-main before:content-['→'] before:absolute before:left-0 before:text-accent before:font-bold">
                  Bridged the gap between physical sensor networks and scalable data processing pipelines.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;

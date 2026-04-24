const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
        <h2 className="text-4xl font-bold text-primary mb-12 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-2/5 after:h-1 after:bg-accent after:rounded-sm">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-lg mb-6 leading-relaxed">
              My journey began in Physics Engineering, where I developed a deep appreciation for understanding complex systems from first principles. Today, I apply that same analytical mindset to software engineering, architecting scalable web applications and robust backend services.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              I believe that the best software is not just functional, but elegantly designed. It should perform optimally under pressure, just like physical systems. My expertise spans across the entire stack, allowing me to bridge the gap between complex algorithms and seamless user experiences.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="bg-white/70 backdrop-blur-md border border-primary/10 p-6 rounded-2xl text-center hover:-translate-y-1 transition-transform duration-200">
                <div className="font-heading text-4xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-text-main font-medium uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="bg-white/70 backdrop-blur-md border border-primary/10 p-6 rounded-2xl text-center hover:-translate-y-1 transition-transform duration-200">
                <div className="font-heading text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-text-main font-medium uppercase tracking-wider">Projects Delivered</div>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto w-full group">
            <div className="absolute inset-0 bg-primary/10 z-10 pointer-events-none"></div>
            <img 
              src="/about_portrait.png" 
              alt="Junaidi - Software Engineer" 
              className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { Download, ExternalLink } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="py-24">
      <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
        <h2 className="text-4xl font-bold text-primary mb-12 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-2/5 after:h-1 after:bg-accent after:rounded-sm text-center mx-auto w-max">
          Professional Experience
        </h2>

        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <p className="text-lg mb-10 text-text-main opacity-90 leading-relaxed">
            A comprehensive overview of my professional journey, bridging
            complex engineering principles with modern software development.
          </p>

          <div className="flex gap-6 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold bg-accent text-white shadow-sm hover:bg-primary hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
            >
              <Download size={18} /> Download CV
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              <ExternalLink size={18} /> LinkedIn Profile
            </a>
          </div>

          <div className="mt-16 w-full bg-white p-8 sm:p-12 rounded-2xl shadow-lg border border-primary/10 relative text-left">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-primary to-accent rounded-t-2xl"></div>

            <div className="relative max-w-2xl mx-auto before:content-[''] before:absolute before:left-[7px] before:top-2 before:bottom-0 before:w-0.5 before:bg-primary/10">
              <div className="relative pl-12 mb-10 last:mb-0">
                <div className="absolute left-[3px] top-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-white shadow-[0_0_0_2px_var(--color-accent)]"></div>
                <div className="text-sm text-accent font-bold mb-2">
                  2023 - Present
                </div>
                <h3 className="font-heading text-xl font-semibold text-primary mb-1">
                  Senior Software Engineer
                </h3>
                <div className="text-sm font-medium text-text-main mb-2 opacity-80">
                  Tech Innovations Inc.
                </div>
                <p className="text-sm text-text-main opacity-90 leading-relaxed">
                  Architecting scalable microservices, leading frontend
                  migration to Next.js, and implementing robust CI/CD pipelines.
                  Improved system performance by 40%.
                </p>
              </div>

              <div className="relative pl-12 mb-10 last:mb-0">
                <div className="absolute left-[3px] top-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-white shadow-[0_0_0_2px_var(--color-accent)]"></div>
                <div className="text-sm text-accent font-bold mb-2">
                  2021 - 2023
                </div>
                <h3 className="font-heading text-xl font-semibold text-primary mb-1">
                  Full Stack Developer
                </h3>
                <div className="text-sm font-medium text-text-main mb-2 opacity-80">
                  DataFlow Systems
                </div>
                <p className="text-sm text-text-main opacity-90 leading-relaxed">
                  Developed comprehensive dashboard interfaces for data
                  visualization. Integrated complex machine learning models into
                  production-ready REST APIs.
                </p>
              </div>

              <div className="relative pl-12 mb-10 last:mb-0">
                <div className="absolute left-[3px] top-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-white shadow-[0_0_0_2px_var(--color-accent)]"></div>
                <div className="text-sm text-accent font-bold mb-2">
                  2019 - 2021
                </div>
                <h3 className="font-heading text-xl font-semibold text-primary mb-1">
                  Research Assistant & Developer
                </h3>
                <div className="text-sm font-medium text-text-main mb-2 opacity-80">
                  Telkom University
                </div>
                <p className="text-sm text-text-main opacity-90 leading-relaxed">
                  Applied physics engineering principles to build automated data
                  collection and analysis pipelines for environmental monitoring
                  systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

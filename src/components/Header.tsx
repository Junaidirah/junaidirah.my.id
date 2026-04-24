import { useEffect, useState } from "react";
import logoJuna from "../assets/logo-juna.png";

const Header = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const isDarkMode = document.documentElement.classList.toggle("dark");
    setIsDark(isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");

    // Dispatch custom event to notify other components (like ThreeJS)
    window.dispatchEvent(new Event("themechange"));
  };

  return (
    <header className="bg-surface border-b border-outline-variant sticky top-0 z-50 transition-colors duration-300">
      <div className="flex justify-between items-center max-w-container-max mx-auto px-6 h-16 w-full">
        <div className="flex items-center">
          <img className="w-12 h-12" src={logoJuna} alt="Logo" />
        </div>
        {/* <nav className="hidden md:flex gap-8 items-center">
          <a
            className="font-code text-sm tracking-tight uppercase text-blue-900 border-b-2 border-blue-900 pb-1"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="font-code text-sm tracking-tight uppercase text-slate-500 hover:text-blue-700 transition-colors duration-150"
            href="#contact"
          >
            Contact
          </a>
        </nav> */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-primary hover:bg-surface-variant p-2 rounded-full transition-colors flex items-center justify-center"
            aria-label="Toggle dark mode"
          >
            <span className="material-symbols-outlined text-[20px]">
              {isDark ? "light_mode" : "dark_mode"}
            </span>
          </button>
          <button className="bg-primary text-on-primary font-code text-xs tracking-widest px-4 py-2 uppercase hover:opacity-80 transition-all">
            DOWNLOAD_CV
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

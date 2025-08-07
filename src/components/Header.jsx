import React from "react";


const Header = ({ activeSection }) => {
  const firstName = "Portfolio";
  const navItems = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-black/80 backdrop-blur-lg px-6 py-4 z-50 shadow-2xl border-b border-gray-800/50 transition-all duration-1000 transform ${
        activeSection === "home" ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Site Logo / Name */}
        <h1 className="text-xl font-bold text-white hover:text-primary transition-colors duration-300 cursor-pointer">
          {firstName}
        </h1>

        {/* Navigation Links */}
        <nav className="space-x-6">
          {navItems.map((item, idx) => {
            const isActive = activeSection === item.toLowerCase();
            return (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative font-bold transition-all duration-300 transform hover:scale-110 ${
                  isActive ? "text-primary" : "text-white"
                } hover:text-primary`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {item}
                {isActive && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary animate-pulse" />
                )}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;

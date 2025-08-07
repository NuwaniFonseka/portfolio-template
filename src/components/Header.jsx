import React from "react";
// Header component accepts activeSection as a prop to highlight current section
const Header = ({ activeSection }) => {
  const firstName = "Portfolio"; // Logo or title text
  const navItems = ["Home", "About", "Projects", "Skills", "Contact"]; // Navigation menu items

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-black/80 backdrop-blur-lg px-6 py-4 z-50 shadow-2xl border-b border-gray-800/50 
      transition-all duration-1000 transform ${
        activeSection === "home"
          ? "translate-y-0 opacity-100" // Show header on "home" section
          : "-translate-y-full opacity-0" // Hide header for other sections
      }`}
    >
      {/* Container to center and space content */}
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Site Name */}
        <h1 className="text-xl font-bold text-white hover:text-primary transition-colors duration-300 cursor-pointer">
          {firstName}
        </h1>

        {/* Navigation Links */}
        <nav className="space-x-6">
          {navItems.map((item, idx) => {
            const isActive = activeSection === item.toLowerCase(); // Check if the current item is active
            return (
              <a
                key={item}
                href={`#${item.toLowerCase()}`} // Anchor link to scroll to the section
                className={`relative font-bold transition-all duration-300 transform hover:scale-110 ${
                  isActive ? "text-primary" : "text-white"
                } hover:text-primary`}
                style={{ animationDelay: `${idx * 100}ms` }} // Optional staggered animation
              >
                {item}
                {/* Active underline indicator */}
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

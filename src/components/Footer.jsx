import React from "react";
import profile from "../data/profile.json";

const Footer = () => {
  const year = new Date().getFullYear();
  const name = profile?.footer?.name || "Your Name";
  const text = profile?.footer?.text || "All rights reserved.";

  return (
    <footer className="bg-black/90 backdrop-blur-md border-t border-gray-800 text-gray-400 text-center py-6 px-4 shadow-inner z-50">
      <p className="text-sm hover:text-primary transition-colors duration-300">
        © {year} {name}. {text}
      </p>
    </footer>
  );
};

export default Footer;

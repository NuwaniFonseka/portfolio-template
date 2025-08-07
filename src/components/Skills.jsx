import React from "react";
import profile from "../data/profile.json";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative bg-cover bg-center bg-no-repeat text-white px-6 py-24 scroll-mt-24"
      style={{ backgroundImage: "url('/galaxy-bg.png')" }} 
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Section Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center relative z-10">
        My{" "}
        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Skills
        </span>
      </h2>

      {/* Skill Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center relative z-10">
        {profile.skills.map((skill, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-md border border-white/10 text-gray-200 py-4 px-4 rounded-xl transition-all duration-300 shadow-lg transform hover:scale-105 hover:border-primary hover:shadow-primary/40 group"
            style={{ animationDelay: `${idx * 100}ms` }} // Optional staggered animation
          >
            {/* Skill name with hover effect */}
            <span className="group-hover:text-primary group-hover:font-semibold transition-all duration-300">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

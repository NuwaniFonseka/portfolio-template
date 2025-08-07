import React from "react";
import profile from "../data/profile.json";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-cover bg-center bg-no-repeat text-white px-6 py-24 scroll-mt-24"
      style={{ backgroundImage: "url('/galaxy-bg.png')" }}
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center z-10 relative">
        About{" "}
        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Me
        </span>
      </h2>

      <div className="max-w-5xl mx-auto space-y-12 text-gray-200 z-10 relative">
        {/* Headline */}
        <p className="text-xl md:text-2xl leading-relaxed text-center text-gray-300">
          {profile.about.headline}
        </p>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {profile.about.infoCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/10 hover:border-primary transform hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-primary font-bold mb-3 flex items-center gap-2 text-lg">
                <span className="text-2xl">{card.icon}</span> {card.title}
              </h3>
              <p className="whitespace-pre-line text-gray-100">
                {card.content}
              </p>
            </div>
          ))}

          {/* Soft Skills */}
          <div className="md:col-span-2 bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/10 hover:border-primary transform hover:scale-105 transition-all duration-300">
            <h3 className="text-primary font-bold mb-3 flex items-center gap-2 text-lg">
              <span className="text-2xl"></span> Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {profile.about.softSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-black transition-all duration-300 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* LinkedIn CTA */}
        <div className="text-center pt-10">
          <a
            href={profile.about.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-primary to-accent text-black px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-primary/40 transform hover:scale-110 transition-all duration-300"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

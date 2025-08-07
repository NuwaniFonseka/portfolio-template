import React from "react";
import profile from "../data/profile.json";

const Home = ({ isVisible }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat text-white px-6 py-32 scroll-mt-24 transition-all duration-1000"
      style={{ backgroundImage: "url('/galaxy-bg.png')" }} // Make sure this file is in public/
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Text Section */}
        <div
          className={`flex-1 space-y-6 text-center md:text-left transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight animate-fade-in">
            <span className="text-white">{profile.name.split(" ")[0]}</span>{" "}
            <span className="text-primary animate-pulse">{profile.name.split(" ")[1]}</span>
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto md:mx-0 text-lg leading-relaxed">
            {profile.bio}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-accent transition-all shadow-lg hover:shadow-purple-500/40 transform hover:-translate-y-1"
            >
              Let's Talk
            </a>

            <a
              href="#projects"
              className="border-2 border-primary text-primary px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30"
            >
              View Work
            </a>

            <a
              href={profile.resume}
              download
              className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-all shadow-lg flex items-center justify-center gap-2 transform hover:-translate-y-1 group"
            >
              <svg
                className="w-5 h-5 group-hover:animate-bounce"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 4v12"
                />
              </svg>
              Download CV
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div
          className={`z-10 flex-1 transform transition-all duration-1000 delay-600 ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          }`}
        >
          <div className="relative group max-w-sm mx-auto">
            <img
              src={profile.profileImage}
              alt={profile.name}
              className="w-full rounded-2xl shadow-2xl object-cover aspect-[4/5] border border-gray-700/30 hover:border-purple-500 bg-galaxySoft"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

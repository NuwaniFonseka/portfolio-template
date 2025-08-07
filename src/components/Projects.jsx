import React from "react";
import profile from "../data/profile.json";
import useInView from "../hooks/useInView";

const Projects = () => {
  const [ref, isVisible] = useInView();

  return (
    <section
      ref={ref}
      id="projects"
      className={`relative bg-cover bg-center bg-no-repeat text-white px-6 py-24 scroll-mt-24 transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ backgroundImage: "url('/galaxy-bg.png')" }}
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center relative z-10">
        My{" "}
        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Projects
        </span>
      </h2>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">
        {profile.projects.map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-md text-white p-6 rounded-xl shadow-lg border border-white/10 hover:border-primary/60 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group"
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            {/* Title */}
            <h3 className="text-2xl font-bold mb-4 text-center text-primary group-hover:text-accent transition-colors">
              {project.title}
            </h3>

            {/* Image */}
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[200px] object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Description */}
            <p
              className="text-sm text-gray-200 group-hover:text-white leading-relaxed transition-colors duration-300"
              dangerouslySetInnerHTML={{ __html: project.desc }}
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;

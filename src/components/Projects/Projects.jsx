import { useState } from "react";
import githubLogo from "../../assets/images/tech-logos/github-logo.png";

export default function Projects({ projects }) {
  const tabs = ["All", "Full-Stack", "Machine Learning"];
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = projects.filter((project) => {
    if (activeTab === "All") return true;
    return project.category === activeTab;
  });

  return (
    <div className="w-full max-w-7xl mx-auto py-12 px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
        My Projects
      </h1>
      <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
        A collection of projects showcasing my skills in full-stack development.
      </p>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2.5 rounded-full font-medium text-sm md:text-base transition-all duration-300 border ${
              activeTab === tab
                ? "bg-blue-500 text-white border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                : "bg-transparent text-gray-400 border-gray-600 hover:text-white hover:border-gray-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-[#1c1c1f] via-[#25252a] to-[#2a2a30] backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden transition-all duration-300 border border-white/10 hover:shadow-[0_25px_50px_-12px_rgba(59,130,246,0.2)] hover:translate-y-2"
          >
            <div className="p-6">
              <h3 className="text-xl md:text-2xl font-bold text-center text-white mb-2">
                {project.name}
              </h3>

              <p className="text-gray-300 mb-6 whitespace-pre-line leading-relaxed">
                {project.description}
              </p>

              {project.images && (
                <div className="flex justify-center flex-wrap gap-4 mb-6">
                  {project.images.map((image, imageIdx) => (
                    <div
                      key={imageIdx}
                      className="bg-white/95 p-2 rounded-lg transition-colors duration-200 hover:bg-white/70"
                    >
                      <img
                        src={image}
                        alt={`Technology ${imageIdx + 1}`}
                        className="h-12 w-12 object-contain"
                      />
                    </div>
                  ))}
                </div>
              )}
              <div className="flex justify-center mt-auto">
                <a
                  className="flex items-center justify-center gap-2 bg-[#4d4d4d] text-white font-semibold py-2 px-6 rounded-lg transition-transform duration-200 hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.link}
                >
                  <img src={githubLogo} alt="Github Logo" className="h-5 w-5" />
                  <span>View on Github</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

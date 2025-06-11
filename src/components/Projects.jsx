import githubLogo from "../assets/images/github-logo.png";

export default function Project({ projects }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
        My Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white/60 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <div className="p-6">
              <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                {project.name}
              </h3>

              <p className="text-black mb-6 whitespace-pre-line">
                {project.description}
              </p>

              {project.images && (
                <div className="flex justify-center flex-wrap gap-4 mb-6">
                  {project.images.map((image, imageIdx) => (
                    <img
                      key={imageIdx}
                      src={image}
                      alt={`Technology ${imageIdx + 1}`}
                      className="h-16 w-16 object-contain"
                    />
                  ))}
                </div>
              )}

              <div className="flex justify-center">
                <a
                  className="inline-flex items-center gap-2 text-black hover:underline transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.link}
                >
                  <img
                    src={githubLogo}
                    alt="Github Logo"
                    className="h-16 w-16 object-contain"
                  />
                  <p className="text-md font-medium">View on GitHub</p>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import githubLogo from "../../assets/images/github-logo.png";

export default function Project({ projects }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-xl mb-16">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {project.name}
              </h3>
              <p className="text-gray-600 mb-4 whitespace-pre-line">
                {project.description}
              </p>
              {project.images && (
                <div className="flex justify-center gap-4 mb-4 md:overflow-x-auto">
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
              <div className="flex justify-center gap-4">
                <a
                  className="inline-flex block items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.link}
                >
                  <img
                    src={githubLogo}
                    alt="Github Logo"
                    className="h-18 w-18 object-contain"
                  />
                  <p className="text-gray-600">View on Github</p>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

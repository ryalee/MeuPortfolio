import projectData from "../constants/projectsDatas";

const Projects = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 lg:grid-cols-2 md:grid-cols-2">
      {projectData.map((project) => (
        <div
          key={project.id}
          className="relative group w-full h-56 rounded-lg overflow-hidden shadow-lg"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform duration-300 group-hover:scale:110"
          />

          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-lg font-bold">{project.title}</h3>
            <p className="text-sm mt-2">{project.description}</p>
            <p className="text-xs mt-2 font-light">
              <strong>Tecnologias:</strong> {project.technologies}
            </p>

            <a
              href={project.link}
              target="_blank"
              className="text-blue-500 font-bold underline"
            >
              Ver
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;

export default function Projects() {

  return (
    <section className="py-10 sm:py-16 px-4 sm:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-navy-800 text-center mb-8 sm:mb-12">
        Proyectos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Imagen del proyecto */}
            <div className="h-40 sm:h-48 w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Contenido */}
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 sm:text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{project.description}</p>

              {/* Herramientas */}
              <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                {project.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-navy-100 text-navy-800 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Link a GitHub */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-3 sm:px-4 py-2 bg-navy-800 text-white rounded-lg hover:bg-navy-900 transition-colors text-xs sm:text-base"
              >
                Ver en GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
const projects = [
  {
    title: "Foro Peliculas",
    description:
      "Aplicación web tipo foro para discutir y compartir opiniones sobre películas.",
    image: "EcuaMovies.png", 
    tools: ["React", ".NET 8", "SQL Server", "Tailwind"],
    github: "https://github.com/arturoparra-20/Proyecto-React-.NET",
  },
  {
    title: "Generador de Archivos PDF con Python",
    description:
      "Plataforma para crear PDF con el formato de Cedula de Identidad y Certificado de Votacion ecuatoriano.",
    image: "/PDF_generator.png",
    tools: ["Angular 19", "TypeScript", "Flask", "Tailwind"],
    github: "https://github.com/arturoparra-20/PDF-Generator",
  },
  {
    title: "Fitness-Planner",
    description:
      "Aplicación web para planificar y seguir rutinas de ejercicio personalizadas propulsadoa por IA.",
    image: "/comming_soon.jpg",
    tools: ["OpenAPI", "Next.js", "Express", "MongoDB", "Tailwind"],
    github: "https://github.com/tuusuario/nlp-classifier",
  },
];

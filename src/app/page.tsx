"use client";
import { motion } from "framer-motion";
import { Link } from "lucide-react";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  return (
    <>
     <div className="relative h-[600px] w-auto mt-20 rounded-3xl overflow-hidden shadow-lg mb-20">
        {/* Imagen de fondo */}
        <img
          src="./background2.png" 
          alt="Arturo Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay con degradado */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-950/90 to-transparent "></div>

        {/* Contenido encima */}
        <div className="relative z-10 flex items-center h-full px-8 sm:px-16 ml-15">
          <motion.div
            className="text-gray-200 max-w-xl"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl font-bold mb-4">
              Hola, soy Arturo Parra
            </h1>
            <p className="text-lg text-white mb-6">
              | INGENIERO DE SOFTWARE - WEB DEVELOPER |
            </p>
            <p className="text-lg text-white mb-6">
              Ingeniero de software egresado de la Universidad de Guayaquil.
              Apasionado por la tecnología, el desarrollo web y la inteligencia
              artificial.
            </p>

            <motion.button
              onClick={() => router.push('/projects')}
              className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg shadow hover:bg-gray-800 transition mr-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver mis proyectos
            </motion.button>
            <motion.button
              onClick={() => router.push('/cv')}
              className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg shadow hover:bg-gray-800 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver mi CV
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Carrusel de tecnologías */}
      <div className=" bg-gradient-to-t from-black/60 via-gray-900/90 to-grayy-900 text-center py-10 px-4 bg ">
        <div className="relative overflow-hidden max-w-7xl mx-auto mt-16">
          <h2 className="text-3xl font-bold mb-28 text-white text-start">

            FRAMEWORKS - HERRAMIENTAS - LENGUAJES DE PROGRAMACION 
          </h2>
          <motion.div
            className="flex gap-8"
            initial={{ x: 0 }}
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            }}
            style={{ width: "calc(200% + 32px)" }}
          >
            {[...techs, ...techs].map((tech, idx) => (
              <div
                key={idx}
                className="bg-gray-900 p-4 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center min-w-[160px]"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-16 h-16 mb-3"
                />
                <p className="font-semibold text-white">{tech.name}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Llamado a contacto */}
        <motion.p
          className="mt-30 mb-30 text-gray-200 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          ¿Deseas contactarme o conocer más de mis proyectos?{" "}
          <a onClick={()=> router.push("/contact")} className="text-navy-800 font-semibold underline">
            Contáctame
          </a>
        </motion.p>
      </div>
    </>
  );  
}
const techs = [
  { name: "React", logo: "/react.png" },
  { name: "Next.js", logo: "/next-js.svg" },
   { name: "React Native", logo: "/react-native.png" },
  { name: "Tailwind CSS", logo: "/tailwind.png" },
  { name: ".NET 8 - EF 9", logo: "/dotnet.png" },
  { name: "Node.js", logo: "/node-new.png" },
  { name: "Express", logo: "/express.svg" },
  { name: "Postman", logo: "/postman.png" },
  { name: "MongoDB", logo: "/mongo.png" },
  { name: "PostgreSQL", logo: "/postgres.png" },
  { name: "Git", logo: "/git.png" },
  { name: "GitHub", logo: "/github.png" },
  { name: "Docker", logo: "/docker.png" },
  { name: "Python", logo: "/python.png" },
  { name: "JavaScript", logo: "/js.png" },
  { name: "TypeScript", logo: "/typescript.png" },      

 
];


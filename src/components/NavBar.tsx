"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/cv", label: "Hoja de Vida" },
  { href: "/projects", label: "Proyectos" },
  { href: "/contact", label: "Contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Botón de menú fijo arriba a la izquierda */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-md text-white hover:bg-gray-800 transition"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar animado */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            exit={{ x: -250 }}
            transition={{ type: "spring", stiffness: 80 }}
            className="fixed top-0 left-0 h-full w-56 text-white shadow-lg z-40 flex flex-col p-6 
            bg-gradient-to-b from-black via-gray-800 to-gray-900"
          >
            <h2 className="text-2xl font-bold mb-8 mt-12 text-teal-200">Portafolio</h2>
            <nav className="flex flex-col space-y-4">
              {links.map(({ href, label }) => {
                const active = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`px-3 py-2 rounded-md transition-colors font-medium
                      ${
                        active
                          ? "bg-teal-400 text-black"
                          : "hover:bg-blue-700 hover:text-teal-200 text-white"
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}

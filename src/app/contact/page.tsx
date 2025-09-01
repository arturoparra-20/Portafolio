export default function Contact() {
  return (
    <section className="max-w-xl mx-auto py-12 text-center w-screen h-screen">
      <h2 className="text-3xl font-bold text-navy-800 mb-10">Contacto</h2>
      <p className="text-gray-700 mb-8">
        ¡Conéctate conmigo en mis redes sociales!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/arturo-parra-62970b314/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center rounded-xl bg-[#0077B5] text-white py-14 shadow hover:scale-105 transition"
        >
          <svg
            width="64"
            height="64"
            fill="currentColor"
            className="mb-3"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.002 3.6 4.604v5.592z" />
          </svg>
          <span className="font-semibold text-lg">LinkedIn</span>
        </a>
        {/* GitHub */}
        <a
          href="https://github.com/arturoparra-20"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center rounded-xl bg-[#24292F] text-white py-14 shadow hover:scale-105 transition"
        >
          <svg
            width="64"
            height="64"
            fill="currentColor"
            className="mb-3"
            viewBox="0 0 24 24"
          >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
          <span className="font-semibold text-lg">GitHub</span>
        </a>
        {/* Twitter/X */}
        <a
          href="https://wa.me/593939813724"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center rounded-xl bg-green-700 text-white py-14 shadow hover:scale-105 transition"
        >
          {/* Logo WhatsApp */}
          <svg
            width="64"
            height="64"
            fill="currentColor"
            className="mb-3"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.15-.197.297-.767.967-.94 1.166-.173.199-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.298-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.373-.025-.522-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.373-.01-.572-.01-.198 0-.52.075-.792.373-.272.298-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.202 5.077 4.369.711.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.954.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.455 4.436-9.89 9.893-9.89 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.991c-.003 5.455-4.438 9.89-9.895 9.89zm8.413-18.303A11.815 11.815 0 0012.05 0C5.495 0 .06 5.435.057 12.086c0 2.13.557 4.213 1.616 6.033L.057 24l6.063-1.591a11.89 11.89 0 005.926 1.515h.005c6.554 0 11.989-5.435 11.992-12.086a11.86 11.86 0 00-3.488-8.382z"/>
          </svg>
          <span className="font-semibold text-lg">Whatsapp</span>
        </a>
        {/* Email */}
        <a
          href="mailto:arturoparra2431@gmail.com"
          className="flex flex-col items-center justify-center rounded-xl bg-gradient-to-r from-navy-800 to-gray-800 text-white py-14 shadow hover:scale-105 transition"
        >
          <svg
            width="64"
            height="64"
            fill="currentColor"
            className="mb-3"
            viewBox="0 0 24 24"
          >
            <path d="M12 13.065l-11.99-7.065v14c0 1.104.896 2 2 2h19.98c1.104 0 2-.896 2-2v-14l-11.99 7.065zm11.99-9.065c0-1.104-.896-2-2-2h-19.98c-1.104 0-2 .896-2 2v.217l12 7.083 11.99-7.083v-.217z" />
          </svg>
          <span className="font-semibold text-lg">Email</span>
        </a>
      </div>
    </section>
  );
}

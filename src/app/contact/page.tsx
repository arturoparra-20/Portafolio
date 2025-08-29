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
          href="https://twitter.com/arturoparra"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center rounded-xl bg-[#1DA1F2] text-white py-14 shadow hover:scale-105 transition"
        >
          <svg
            width="64"
            height="64"
            fill="currentColor"
            className="mb-3"
            viewBox="0 0 24 24"
          >
            <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.555-2.005.959-3.127 1.184a4.916 4.916 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161c-.543.938-.855 2.021-.855 3.17 0 2.188 1.115 4.116 2.823 5.247a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.418A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.212c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.025 10.025 0 0024 4.557z" />
          </svg>
          <span className="font-semibold text-lg">Twitter/X</span>
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

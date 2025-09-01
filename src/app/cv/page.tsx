export default function CV() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-2 sm:px-0">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-200 text-center mt-8 sm:mt-12">
        HOJA DE VIDA
      </h1>
      <div className="w-full max-w-5xl h-[70vh] sm:h-[100vh] bg-white rounded-xl shadow-lg overflow-hidden">
        <iframe
          src="/hv_arturo.pdf"
          className="w-full h-full"
          style={{ border: "none" }}
        />
      </div>
    </section>
  );
}

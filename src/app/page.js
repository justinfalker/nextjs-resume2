export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-10 bg-gray-50 min-h-screen">
      
      
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">
          Justin Falker
        </h1>
        <p className="text-sm text-gray-500">
          Business Analytics and Information Systems Student
        </p>
        <p className="text-sm text-gray-500">
          falkerj@usf.edu | Tampa, FL
        </p>
      </header>

    
      <section className="border-t border-gray-200 pt-6 mt-6">
        <h2 className="text-xl font-semibold uppercase tracking-wide text-gray-800 mb-2">
          Education
        </h2>
        <p className="font-medium text-gray-900">
          University of South Florida
        </p>
        <p className="text-gray-700">
          Business Analytics and Information Systems
        </p>
      </section>

      
      <section className="border-t border-gray-200 pt-6 mt-6">
        <h2 className="text-xl font-semibold uppercase tracking-wide text-gray-800 mb-2">
          Projects
        </h2>
        <p className="text-gray-700">
          Resume website built using Next.js and Tailwind CSS.
        </p>
      </section>

      
      <section className="border-t border-gray-200 pt-6 mt-6">
        <h2 className="text-xl font-semibold uppercase tracking-wide text-gray-800 mb-2">
          About Me
        </h2>
        <p className="text-gray-700">
          Business Analytics and Information Systems student with interest in
          data analysis and web development.
        </p>
      </section>

    </main>
  );
}
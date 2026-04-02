export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-10">
      
    
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">
          Justin Falker
        </h1>
        <p className="text-sm text-gray-500">
          Business Analytics and Information Systems Student
        </p>
        <p className="text-sm text-gray-500">
          email@example.com | Tampa, FL
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
          Skills
        </h2>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="bg-gray-100 px-3 py-1 rounded text-sm">JavaScript</span>
          <span className="bg-gray-100 px-3 py-1 rounded text-sm">Next.js</span>
          <span className="bg-gray-100 px-3 py-1 rounded text-sm">HTML/CSS</span>
          <span className="bg-gray-100 px-3 py-1 rounded text-sm">SQL</span>
        </div>
      </section>

      <section className="border-t border-gray-200 pt-6 mt-6">
        <h2 className="text-xl font-semibold uppercase tracking-wide text-gray-800 mb-2">
          Projects
        </h2>
        <p className="text-gray-700">
          Resume website built with Next.js and Tailwind CSS.
        </p>
      </section>

    </main>
  );
}
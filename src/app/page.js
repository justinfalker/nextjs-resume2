export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black p-10">
      <h1 className="text-4xl font-bold mb-4">Justin</h1>
      <p className="text-lg mb-6">Information Systems Student</p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <p>University of South Florida</p>
        <p>Major: Information Systems</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <ul className="list-disc ml-6">
          <li>JavaScript</li>
          <li>Next.js</li>
          <li>HTML/CSS</li>
          <li>SQL</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Experience</h2>
        <p>Add your work or project experience here.</p>
      </section>
    </main>
  );
}
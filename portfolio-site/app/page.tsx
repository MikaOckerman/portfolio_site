import Link from 'next/link';
//import Navbar from './components/navbar';

export default function Home() {
  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        <header className="bg-gray-100 py-12 text-center shadow-sm">
          <h1 className="text-5xl font-extrabold text-gray-900">Welcome to My Portfolio</h1>
          <p className="text-lg text-gray-600 mt-4">
            Explore my work, learn about my journey, and connect with me.
          </p>
        </header>

        <main className="max-w-7xl mx-auto p-6">
          <section className="py-10">
            <h2 className="text-3xl font-bold text-gray-800">Featured Projects</h2>
            <ul className="mt-6 space-y-6">
              <li className="p-4 bg-white shadow rounded-lg hover:shadow-lg transition-shadow">
                <Link href="/projects" className="text-blue-600 text-lg font-semibold hover:underline">
                  Flashcard App
                </Link>
                <p className="text-gray-600 mt-2">A Python-based app for efficient studying.</p>
              </li>
            </ul>
          </section>

          <section className="py-10">
            <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
            <p className="mt-4 text-gray-600">
              I’m a developer passionate about Python, JavaScript, and building efficient, scalable solutions.
            </p>
            <Link href="/about" className="text-blue-600 hover:underline block mt-4">
              Learn more about me &rarr;
            </Link>
          </section>
        </main>

        <footer className="bg-gray-800 text-white py-6 mt-10">
          <div className="max-w-7xl mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
            <p>
              Built with <Link href="https://nextjs.org/" className="text-blue-400 hover:underline">Next.js</Link> and <Link href="https://tailwindcss.com/" className="text-blue-400 hover:underline">Tailwind CSS</Link>.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default function Projects() {
    const projects = [
      {
        title: "Flashcard App",
        description: "A Python-based app for efficient studying.",
        link: "/projects",
      },
      {
        title: "Data Analytics",
        description: "A Python-based app for using machine learning techniques on data and then portraying it in meaningful ways.",
        link: "/projects",
      },
      {
        title: "Password Vault?",
        description: "An app to hold and share passwords.",
        link: "/projects",
      },
      {
        title: "Crypto Scrape and Recommend App",
        description: "A Python-based app to scrape Binance (others?) and recommend cryptos.",
        link: "/projects",
      },
    ];
  
    return (
      <div className="p-6">
        <header className="text-center mb-10">
          <h1 className="text-3xl font-bold">Projects</h1>
        </header>
        <ul className="space-y-6">
          {projects.map((project, index) => (
            <li key={index} className="p-4 border rounded shadow">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="mt-2">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-500 hover:underline mt-4 block"
              >
                View Project &rarr;
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
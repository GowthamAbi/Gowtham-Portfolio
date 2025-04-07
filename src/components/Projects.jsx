import Finance from '../assets/Finance.png';
import Store from '../assets/Store.png';
import QR from '../assets/QR.png';
import IEC from '../assets/IEC.png';
import Basic from '../assets/Basic.png';



export default function Projects() {
  const projectList = [
    {
      title: 'Finance App',
      image: Finance,
      link: 'https://your-project-one-link.com',
    },
    {
      title: 'Online Store',
      image: Store,
      link: 'https://your-project-two-link.com',
    },
    {
      title: 'QR Code Generator',
      image: QR,
      link: 'https://your-project-three-link.com',
    },
    {
        title: 'Landing Page',
        image: Basic,
        link: 'https://your-project-three-link.com',
      },
      {
        title: 'Income Expense',
        image: IEC,
        link: 'https://your-project-three-link.com',
      },
  ];

  return (
    <section id="projects" className="py-16  bg-white">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
        {projectList.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 bg-slate-100 text-center">
              <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

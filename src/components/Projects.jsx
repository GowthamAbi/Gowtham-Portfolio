import Finance from '../assets/Finance.png';
import Store from '../assets/Store.png';
import QR from '../assets/QR.png';
import IEC from '../assets/IEC.png';
import Basic from '../assets/Basic.png';
import Blogs from '../assets/Blogs.png';
import Inventory from '../assets/Inventory.png';


export default function Projects() {
const projectList = [
  {
    title: 'Finance App',
    image: Finance,
    purpose:"My Personal Project",
    link: 'https://finance-manager-web.netlify.app/',
    description: 'A web app to manage income, expenses, and savings with clear financial summaries.',
  },
  {
    title: 'Blogs',
    image: Blogs,
    purpose:"My Personal Project",
    link: 'https://gowthamblogs.netlify.app/',
    description: 'A blogging platform where users can read and share blogs on various topics.',
  },
  {
    title: 'Inventory Management',
    image: Inventory,
    purpose:"My Freelancing Project",
    link: 'https://cdinventory.netlify.app/',
    description: 'An app to track product stocks, manage inward and outward entries, and monitor balance.',
  },

  {
    title: 'QR Code Generator',
    image: QR,
    purpose:"My Freelancing Project",
    link: 'https://gowtham-qr.netlify.app/',
    description: 'A simple tool to generate QR codes instantly for any text or URL input.',
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
            className=" bg-slate-100 block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 bg-slate-100 text-center">
              <h3 className="text-xl font-semibold text-gray-400">Title : {project.title}</h3>
            </div>

          <div className="p-4 bg-slate-100 text-center">
              <h3 className="text-xl font-semibold text-gray-400">Goal : {project.purpose}</h3>
            </div>  

            <div className="p-4 bg-slate-100 text-center">
              <h3 className="text-xl font-semibold text-gray-400">Description : {project.description}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

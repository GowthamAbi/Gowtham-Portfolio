import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDatabase, FaJava } from 'react-icons/fa';

export default function Skills() {
  const skills = [
    { name: 'Java', icon: <FaJava className="text-orange-500 text-5xl" /> },
    { name: 'HTML', icon: <FaHtml5 className="text-red-600 text-5xl" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-600 text-5xl" /> },
    { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400 text-5xl" /> },
    { name: 'React', icon: <FaReact className="text-blue-400 text-5xl" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600 text-5xl" /> },
    { name: 'SQL', icon: <FaDatabase className="text-purple-500 text-5xl" /> },
  ];

  return (
    <section id="skills" className="bg-slate-100 py-16">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto px-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition transform hover:scale-105"
          >
            {skill.icon}
            <p className="mt-4 text-lg font-semibold text-gray-700">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

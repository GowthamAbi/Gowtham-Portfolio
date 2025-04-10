import { FaReact, FaNodeJs, FaDatabase, FaJsSquare } from 'react-icons/fa';
import {  FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

import Gowtham from '../assets/Profile.png';

export default function Home() {
  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-slate-100 to-slate-300 px-4">
      <div className="relative w-64 h-64 flex items-center justify-center">

        {/* Indigo Glow Ring */}
        <div className="absolute w-72 h-72 rounded-full border-4 border-indigo-500 shadow-[0_0_30px_rgba(99,102,241,0.5)]"></div>

        {/* Rotating Icons */}
        <div className="absolute w-72 h-72 rounded-full animate-spin-slow">
          <FaReact className="absolute text-blue-500 text-3xl left-1/2 top-0 transform -translate-x-1/2" />
          <FaNodeJs className="absolute text-green-500 text-3xl right-0 top-1/2 transform -translate-y-1/2" />
          <FaDatabase className="absolute text-purple-500 text-3xl bottom-0 left-1/2 transform -translate-x-1/2" />
          <FaJsSquare className="absolute text-yellow-400 text-3xl left-0 top-1/2 transform -translate-y-1/2" />
        </div>

        {/* Profile Pic */}
        <img
          src={Gowtham}
          alt="Gowtham A"
          className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-xl z-10"
        />
      </div>

      {/* Intro Text */}
      <div className="text-center mt-10 animate-fade-in-up">
        <h1 className="text-5xl font-extrabold text-gray-800">
          Hi, I’m <span className="text-indigo-600">Gowtham</span>
        </h1>
        <p className="text-2xl text-gray-700 mt-2">I’m a Full Stack Developer</p>
      </div>
      {/* Social Icons */}
<div className="flex justify-center mt-6 space-x-6 text-2xl">
  <a
    href="https://www.linkedin.com/in/gowthamabimanyu"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-700 hover:text-blue-900 transition-transform hover:scale-110"
  >
    <FaLinkedin />
  </a>
  <a
    href="mailto:gowthamabi1412@gmail.com"
    className="text-red-600 hover:text-red-800 transition-transform hover:scale-110"
  >
    <FaEnvelope />
  </a>
  <a
    href="https://github.com/GowthamAbi"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-800 hover:text-black transition-transform hover:scale-110"
  >
    <FaGithub />
  </a>
  <a
    href="https://twitter.com/GOWUMA2308"
    target="_blank"
    rel="noopener noreferrer"
    className="text-sky-500 hover:text-sky-700 transition-transform hover:scale-110"
  >
    <FaTwitter />
  </a>
</div>

    </section>
  );
}

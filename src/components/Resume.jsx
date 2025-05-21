export default function Resume() {
    return (
      <section id="resume" className="py-16 bg-slate-50 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Resume</h2>
        <p className="text-lg text-gray-600 mb-6">Download my resume below</p>
        <a
          href="public\resume\GOWTHAM A.pdf"
          download="Gowtham_Resume.pdf"
          className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
        >
          Download Resume
        </a>
      </section>
    );
  }
  
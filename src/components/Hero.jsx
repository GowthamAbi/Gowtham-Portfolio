export default function Hero(){
    return(
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-serif font-bold">
            <h1 className="text-4xl md:text-6xl">Hello, I'm Gowtham A</h1>
            <p className="text-lg md:text-2xl mt-4">I'm a Web Developer</p>
            <button className="mt-8 px-6 py-3 bg-white text-gray-800 rounded-full hover:bg-gray-200 transition duration-300">Contact Me</button>
        </div>
    )
}
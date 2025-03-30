export const Home = () => {

    return <section id="home" className="min-h-screen flex items-center justify-center relative">
            <div className="text-center z-10 px-4 ">
                <h1 className="text-5xl md:text-7xl font-bold font-mono bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent bg-clip-text text-transparent leading-tight">
                    Hi, I'm Bao
                </h1>
                <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
                    I'm a full-stack developer who loves crafting clean, scalable web applications.
                    My goal is to build solutions that offer both exceptional performance and a delightful user experience.
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="#projects" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:-translate-y-1 
                hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300">View Projects</a>
                    <a href="#contact" className="border border-blue-500 text-blue-500 px-6 py-2 rounded-md hover:-translate-y-1 
                hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500 hover:text-white transition-all duration-300">Contact Me</a>
                </div>
            </div>
    </section>
};
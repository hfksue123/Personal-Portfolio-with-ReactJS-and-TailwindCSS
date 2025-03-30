export const Projects = () => {
    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 
            to-cyan-400 bg-clip-text text-transparent text-center">Feature Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* project-1 */}
                <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 
                hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all">
                    {/* project-name */}
                    <h3 className="text-xl font-bold mb-2">Cloud Platform</h3>
                    {/* project-description */}
                    <p className="text-gray-300">Scalable cloud infrastructure management with real time monitoring and automated scaling.</p>
                    {/* tools */}
                    <div className="my-2 flex flex-wrap gap-2">
                        {["React", "Node.js", "MongoDB", "Tailwind CSS", "Next.js"].map((tech, key) => (
                            <span
                                key={key}
                                className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm 
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)] hover:bg-blue-600 transition-all">
                                {tech}
                            </span>
                        ))}
                    </div>
                    {/* project-link */}
                    <div className="flex justify-between items-center">
                        <a href="#" className="text-blue-500 hover:underline hover:text-blue-300 transition-colors mt-4">View Project 🠦</a>
                    </div>
                </div>

                {/* project-2 */}
                <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 
                hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all">
                    {/* project-name */}
                    <h3 className="text-xl font-bold mb-2">Cloud Platform</h3>
                    {/* project-description */}
                    <p className="text-gray-300">Scalable cloud infrastructure management with real time monitoring and automated scaling.</p>
                    {/* tools */}
                    <div className="my-2 flex flex-wrap gap-2">
                        {["React", "Node.js", "MongoDB", "Tailwind CSS", "Next.js"].map((tech, key) => (
                            <span
                                key={key}
                                className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm 
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)] hover:bg-blue-600 transition-all">
                                {tech}
                            </span>
                        ))}
                    </div>
                    {/* project-link */}
                    <div className="flex justify-between items-center">
                        <a href="#" className="text-blue-500 hover:underline hover:text-blue-300 transition-colors mt-4">View Project 🠦</a>
                    </div>
                </div>

                {/* project-3 */}
                <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 
                hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all">
                    {/* project-name */}
                    <h3 className="text-xl font-bold mb-2">Cloud Platform</h3>
                    {/* project-description */}
                    <p className="text-gray-300">Scalable cloud infrastructure management with real time monitoring and automated scaling.</p>
                    {/* tools */}
                    <div className="my-2 flex flex-wrap gap-2">
                        {["React", "Node.js", "MongoDB", "Tailwind CSS", "Next.js"].map((tech, key) => (
                            <span
                                key={key}
                                className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm 
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)] hover:bg-blue-600 transition-all">
                                {tech}
                            </span>
                        ))}
                    </div>
                    {/* project-link */}
                    <div className="flex justify-between items-center">
                        <a href="#" className="text-blue-500 hover:underline hover:text-blue-300 transition-colors mt-4">View Project 🠦</a>
                    </div>
                </div>
                
                {/* project-4 */}
                <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 
                hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all">
                    {/* project-name */}
                    <h3 className="text-xl font-bold mb-2">Cloud Platform</h3>
                    {/* project-description */}
                    <p className="text-gray-300">Scalable cloud infrastructure management with real time monitoring and automated scaling.</p>
                    {/* tools */}
                    <div className="my-2 flex flex-wrap gap-2">
                        {["React", "Node.js", "MongoDB", "Tailwind CSS", "Next.js"].map((tech, key) => (
                            <span
                                key={key}
                                className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm 
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)] hover:bg-blue-600 transition-all">
                                {tech}
                            </span>
                        ))}
                    </div>
                    {/* project-link */}
                    <div className="flex justify-between items-center">
                        <a href="#" className="text-blue-500 hover:underline hover:text-blue-300 transition-colors mt-4">View Project 🠦</a>
                    </div>
                </div>

            </div>
        </div>
    </section>
};
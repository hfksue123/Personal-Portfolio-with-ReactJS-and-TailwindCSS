import { RevealOnScroll } from "../RevealOnScroll";
export const About = () => {

    const frontendSkills = ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"];
    const backendSkills = ["Node.js", "Express.js", "MongoDB", "MySQL", "PHP", "Laravel"];

    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
    <RevealOnScroll animation="fade-left">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                About Me
            </h2>

            <div className="rounded-xl p-8 border border-white/10 hover:translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    Passionate developer with expertise in building scalable web applications and creating innovative solutions.
                </p>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    {/* front-end */}
                    <div className="rounded-xl md:p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {frontendSkills.map((tech, key) => (
                                <span key={key}
                                    className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm 
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)] hover:bg-blue-600 transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    {/* back-end */}
                    <div className="rounded-xl md:p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {backendSkills.map((tech, key) => (
                                <span key={key}
                                    className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm 
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)] hover:bg-blue-600 transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-8">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-4">
                        <li className="">
                            <strong>Bachelor of Information Technology</strong> <br /> University of Science (2020-2025)
                        </li>
                        <li>
                            <strong>Relevant coursework:</strong> <br /> Database Management, Web Development, Software Engineering
                        </li>
                    </ul>
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">🚀 Work Experience</h3>
                    <div className="space-y-4 text-gray-300">
                        <div>
                            <h4 className="font-semibold ">Software Engineer at XYZ Company</h4>
                            <p>Developer and maintainer of a cutting-edge web application.</p>
                        </div>
                        <div>
                            <h4>Intern at ABC Company (2022)</h4>
                            <p>Assisted in the development of a mobile application.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </RevealOnScroll>
    </section>
}
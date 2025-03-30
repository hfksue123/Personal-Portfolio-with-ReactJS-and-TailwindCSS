import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from 'emailjs-com';
export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_PUBLIC_KEY)
            .then((result) => {
                alert("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            }).catch((error) => {
                console.error("EmailJS error:", error);
                alert("Failed to send the message, please try again.");
            })
    }

    return <section id="contact" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll animation="fade-down">
            <div className="px-4 max-w-7xl mx-auto md:px-0 w-80 sm:w-150">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 
            to-cyan-400 bg-clip-text text-transparent text-center">Get In Touch</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="relative">
                        {/* Name */}
                        <input type="text" id="name" name="name" className="w-full bg-white/5 rounded-md border border-gray-300 
                    px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:gray-500 placeholder:uppercase
                    placeholder:text-xs transition-all duration-300" required value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Name or topic" />
                    </div>
                    {/* Email */}
                    <div className="relative">
                        <input type="email" id="email" name="email" className="w-full bg-white/5 rounded-md border border-gray-300 
                    px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:gray-500 placeholder:uppercase
                    placeholder:text-xs transition-all duration-300" required value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="example@gmail.com" />
                    </div>
                    {/* Message */}
                    <div className="relative">
                        <textarea id="message" name="message" className="w-full bg-white/5 rounded-md border border-gray-300 
                    px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:gray-500 placeholder:uppercase
                    placeholder:text-xs transition-all duration-300" required rows={6} value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="your message" />
                    </div>
                    {/* Button */}
                    <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-2 rounded-md
                cursor-pointer hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 transition-colors duration-300">
                        Send message
                    </button>

                </form>
            </div>
        </RevealOnScroll>
    </section>
};
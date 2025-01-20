import React from 'react'

const HeroSection = () => {
    return (
        <div>
            <section id="hero" className="min-h-screen p-4 bg-neutral-900 text-white flex items-center pt-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6 animate__animated animate__fadeInLeft">
                            <p className="text-blue-500 font-medium">Hello, I&apos;m</p>
                            <h1 className="text-4xl md:text-6xl font-bold">
                                Vishal Kasotiya
                                <span className="block mt-2">Full Stack Developer</span>
                            </h1>
                            <p className="text-neutral-300 text-lg font-sans">
                                Crafting robust web solutions with 2 years of hands-on experience in full-stack development.
                                Passionate about creating efficient, scalable, and user-friendly applications.
                            </p>
                            <div className="flex gap-4">
                                <a href="#contact"
                                    className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full font-medium transition-colors duration-300">
                                    Hire Me
                                </a>
                                <a href="#projects"
                                    className="border border-blue-500 hover:bg-blue-500/10 px-6 py-3 rounded-full font-medium transition-colors duration-300">
                                    View Projects
                                </a>
                            </div>
                            <div className="flex gap-6 pt-4">
                                <a href="#" className="text-2xl hover:text-blue-500 transition-colors duration-300">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="#" className="text-2xl hover:text-blue-500 transition-colors duration-300">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="#" className="text-2xl hover:text-blue-500 transition-colors duration-300">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </div>
                        </div>
                        <div className="relative animate__animated animate__fadeInRight">
                            <div
                                className="profile-card relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
                                <div className="w-full mb-8 lg:mb-0 animate-on-load slide-in-right">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-blue-500 rounded-full opacity-10 blur-xl"></div>
                                        <div className="bg-neutral-800 p-6 sm:p-8 md:p-10 rounded-lg border border-neutral-700 relative z-10 max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
                                            <pre className="text-blue-500 text-sm sm:text-base md:text-lg">
                                                <code>{`{
  "role": "Software Developer",
  "experience": "2 years",
  "skills": [
    "Frontend Development",
    "Backend Development",
    "Database Design",
    "API Integration"
  ],
  "status": "Available for projects"
}`}</code>
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full filter blur-3xl opacity-10 -mr-32 -mb-32">
                                </div>
                            </div>
                            <div
                                className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HeroSection
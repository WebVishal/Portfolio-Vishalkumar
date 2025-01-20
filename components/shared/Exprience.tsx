import React from 'react'

const Exprience = () => {
    return (
        <section id="experience" className="py-20 bg-white transition-opacity duration-1000" data-aos="fade-in">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-down" data-aos-delay="200">
                    <h2 className="text-4xl font-bold text-neutral-800 mb-4">Work Experience</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
                </div>

                <div className="relative">
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-neutral-200"></div>

                    <div className="space-y-12">
                        <div className="relative" data-aos="fade-right" data-aos-delay="400">
                            <div className="md:flex items-center">
                                <div className="md:w-1/2 pr-8 md:text-left">
                                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                        <h3 className="text-xl font-bold text-neutral-800 mb-2">Fullstack Software Engineer</h3>
                                        <p className="text-blue-500 mb-2">Kognics</p>
                                        <p className="text-neutral-600">2022 - 2024</p>
                                        <ul className="text-neutral-600 mt-4 list-disc list-inside">
                                            <li>Developed and maintained 3 major client projects using MERN stack</li>
                                            <li>Reduced API response time by 35% through optimization techniques</li>
                                            <li>Provided mentorship to junior developers, fostering their technical growth and improving team collaboration.</li>
                                            <li>Contributed to the development of iOS and Android mobile applications, focusing on Realtime Chat, Push Notification, Performance and Cross-platform compatibility</li>
                                        </ul>
                                    </div>
                                </div>
                                <div
                                    className="hidden md:block w-4 h-4 absolute left-1/2 transform -translate-x-1/2 bg-blue-500 rounded-full border-4 border-white">
                                </div>
                                <div className="md:w-1/2 pl-8 mt-8 md:mt-0"></div>
                            </div>
                        </div>

                        <div className="relative" data-aos="fade-left" data-aos-delay="600">
                            <div className="md:flex items-center">
                                <div className="md:w-1/2 pr-8"></div>
                                <div
                                    className="hidden md:block w-4 h-4 absolute left-1/2 transform -translate-x-1/2 bg-blue-500 rounded-full border-4 border-white">
                                </div>
                                <div className="md:w-1/2 pl-8">
                                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                        <h3 className="text-xl font-bold text-neutral-800 mb-2">Software Developer Inter</h3>
                                        <p className="text-blue-500 mb-2">bestdeskcove</p>
                                        <p className="text-neutral-600">2021 - 2022</p>
                                        <ul className="text-neutral-600 mt-4 list-disc list-inside">
                                            <li>Developed full-stack web applications</li>
                                            <li>Integrated third-party APIs</li>
                                            <li>Optimized application performance</li>
                                            <li>Implemented responsive design principles improving mobile user experience</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative" data-aos="fade-right" data-aos-delay="800">
                            <div className="md:flex items-center">
                                <div className="md:w-1/2 pr-8 md:text-left">
                                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                        <h3 className="text-xl font-bold text-neutral-800 mb-2">Frontend Developer</h3>
                                        <p className="text-blue-500 mb-2">Girlscript Summer Of Code </p>
                                        <p className="text-neutral-600">2020 - 2021</p>
                                        <ul className="text-neutral-600 mt-4 list-disc list-inside">
                                            <li>Built responsive web interfaces</li>
                                            <li>Collaborated in agile development team</li>
                                            <li>Participated in code reviews</li>
                                        </ul>
                                    </div>
                                </div>
                                <div
                                    className="hidden md:block w-4 h-4 absolute left-1/2 transform -translate-x-1/2 bg-blue-500 rounded-full border-4 border-white">
                                </div>
                                <div className="md:w-1/2 pl-8 mt-8 md:mt-0"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <script>
                window.addEventListener('load', function () {
                    // Initialize AOS
                    AOS.init({
                        duration: 1000,
                        once: true,
                        mirror: false
                    });
          }); 
            </script>*/}
        </section>
    )
}

export default Exprience
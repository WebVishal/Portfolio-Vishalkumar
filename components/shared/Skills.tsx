import { CircleCheck } from 'lucide-react';
import React from 'react'
import { FaAndroid, FaAws, FaDocker, FaGitAlt, FaGithub, FaGooglePlay, FaJenkins } from "react-icons/fa6";
import { IoLogoFirebase } from 'react-icons/io5';
import { SiClerk, SiXcode } from 'react-icons/si';

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-neutral-900 text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 animate__animated animate__fadeIn">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8 animate__animated animate__fadeInLeft">
                        <div className="bg-neutral-800 p-6 rounded-xl">
                            <div className="text-blue-500 mb-4">
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-6">Frontend Development</h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span>HTML5/CSS3</span>
                                        <span>90%</span>
                                    </div>
                                    <div className="w-full bg-neutral-700 rounded-full h-2">
                                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span>JavaScript/TypeScript</span>
                                        <span>85%</span>
                                    </div>
                                    <div className="w-full bg-neutral-700 rounded-full h-2">
                                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span>React.js & Next.js</span>
                                        <span>88%</span>
                                    </div>
                                    <div className="w-full bg-neutral-700 rounded-full h-2">
                                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: "88%" }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span>Tailwind CSS</span>
                                        <span>85%</span>
                                    </div>
                                    <div className="w-full bg-neutral-700 rounded-full h-2">
                                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-neutral-800 p-6 rounded-xl">
                            <div className="text-green-500 mb-4">
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 7v10c0 2 1.5 3 3 3h10c1.5 0 3-1 3-3V7c0-2-1.5-3-3-3H7c-1.5 0-3 1-3 3z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-6">Backend Development</h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span>Node.js</span>
                                        <span>85%</span>
                                    </div>
                                    <div className="w-full bg-neutral-700 rounded-full h-2">
                                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span>Express.js</span>
                                        <span>82%</span>
                                    </div>
                                    <div className="w-full bg-neutral-700 rounded-full h-2">
                                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "82%" }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span>MongoDB</span>
                                        <span>80%</span>
                                    </div>
                                    <div className="w-full bg-neutral-700 rounded-full h-2">
                                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "80%" }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span>MySQL</span>
                                        <span>78%</span>
                                    </div>
                                    <div className="w-full bg-neutral-700 rounded-full h-2">
                                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "78%" }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-neutral-800 p-6 rounded-xl">
                            <div className="text-purple-500 mb-4">
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z">
                                    </path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-6">Artificial intelligence Models</h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span>Claude</span>
                                        <span>85%</span>
                                    </div>
                                    <div className="w-full bg-neutral-700 rounded-full h-2">
                                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span>GPT(open ai)</span>
                                        <span>80%</span>
                                    </div>
                                    <div className="w-full bg-neutral-700 rounded-full h-2">
                                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: "82%" }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span>Gemini 2.0 Flash</span>
                                        <span>82%</span>
                                    </div>
                                    <div className="w-full bg-neutral-700 rounded-full h-2">
                                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: "80%" }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span>Llama</span>
                                        <span>78%</span>
                                    </div>
                                    <div className="w-full bg-neutral-700 rounded-full h-2">
                                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: "78%" }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="animate__animated animate__fadeInRight">

                        <div className="bg-neutral-800 p-6 rounded-xl mb-8">
                            <div className="text-purple-500 mb-4">
                                <FaGooglePlay size={40} className='text-indigo-700' />
                            </div>
                            <h3 className="text-xl font-semibold mb-6">App Development</h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span>React Native</span>
                                        <span>90%</span>
                                    </div>
                                    <div className="w-full bg-neutral-700 rounded-full h-2">
                                        <div className="bg-indigo-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span>Redux</span>
                                        <span>85%</span>
                                    </div>
                                    <div className="w-full bg-neutral-700 rounded-full h-2">
                                        <div className="bg-indigo-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span>Reanimated</span>
                                        <span>80%</span>
                                    </div>
                                    <div className="w-full bg-neutral-700 rounded-full h-2">
                                        <div className="bg-indigo-500 h-2 rounded-full" style={{ width: "80%" }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span>Flutter</span>
                                        <span>78%</span>
                                    </div>
                                    <div className="w-full bg-neutral-700 rounded-full h-2">
                                        <div className="bg-indigo-500 h-2 rounded-full" style={{ width: "78%" }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-neutral-800 p-6 rounded-xl mb-8">
                            <div className="text-white-500 mb-4">
                                <svg className="w-12 h-12 text-white-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-6">Tools & Technologies</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                <div
                                    className="bg-neutral-700 p-4 rounded-lg text-center flex justify-center space-x-3 hover:bg-neutral-600 transition-colors duration-300">
                                    <FaGithub className='text-white-500' size={35} />
                                    <p className="text-sm mt-2 ">Git</p>
                                </div>
                                <div
                                    className="bg-neutral-700 p-4 rounded-lg text-center flex justify-center space-x-3 hover:bg-neutral-600 transition-colors duration-300">
                                    <SiClerk className='text-white-500' size={35} />
                                    <p className="text-sm mt-2 ">Clerk</p>
                                </div>
                                <div
                                    className="bg-neutral-700 p-4 rounded-lg text-center flex justify-center space-x-3 hover:bg-neutral-600 transition-colors duration-300">
                                    <IoLogoFirebase className='text-yellow-500' size={35} />
                                    <p className="text-sm mt-2 ">Firebase</p>
                                </div>
                                <div
                                    className="bg-neutral-700 p-4 rounded-lg text-center flex justify-center space-x-3 hover:bg-neutral-600 transition-colors duration-300">
                                    <FaDocker className='text-blue-500' size={35} />
                                    <p className="text-sm mt-2">Docker</p>
                                </div>
                                <div
                                    className="bg-neutral-700 p-4 rounded-lg text-center flex justify-center space-x-3 hover:bg-neutral-600 transition-colors duration-300">
                                    <i className="fab fa-aws text-2xl mb-2 text-blue-500"></i>
                                    <FaAws className='text-yellow-500' size={35} />
                                    <p className="text-sm mt-2">AWS</p>
                                </div>
                                <div
                                    className="bg-neutral-700 p-4 rounded-lg text-center flex justify-center space-x-3 hover:bg-neutral-600 transition-colors duration-300">
                                    <FaAndroid className='text-green-500' size={35} />
                                    <p className="text-sm mt-2">Android studio</p>
                                </div>
                                <div
                                    className="bg-neutral-700 p-4 rounded-lg text-center flex justify-center space-x-3 hover:bg-neutral-600 transition-colors duration-300">
                                    <SiXcode className='text-blue-500' size={35} />
                                    <p className="text-sm mt-2">Xcode</p>
                                </div>
                                <div
                                    className="bg-neutral-700 p-4 rounded-lg text-center flex justify-center space-x-3 hover:bg-neutral-600 transition-colors duration-300">
                                    <FaJenkins className='text-white-500' size={35} />
                                    <p className="text-sm mt-2">Jenkins</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-neutral-800 p-6 rounded-xl">
                            <h3 className="text-xl font-semibold mb-6">Soft Skills</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center gap-3">
                                    <CircleCheck size={25} color='#3B82F6' />
                                    <span>Team Leadership</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CircleCheck size={25} color='#3B82F6' />
                                    <span>Communication</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CircleCheck size={25} color='#3B82F6' />
                                    <span>Problem Solving</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CircleCheck size={25} color='#3B82F6' />
                                    <span>Time Management</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate__animated animate__fadeIn">
                    <h2 className="text-4xl font-bold text-neutral-800 mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div
                        className="bg-neutral-800 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300 animate__animated animate__fadeInUp animate__delay-1s">
                        <div className="text-blue-500 mb-4">
                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-neutral-800 mb-3">Frontend Development</h3>
                        <div className="space-y-3">
                            <div className="relative pt-1">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-semibold text-neutral-700">React.js</span>
                                    <span className="text-sm font-semibold text-neutral-600">90%</span>
                                </div>
                                <div className="overflow-hidden h-2 bg-gray-200 rounded">
                                    <div
                                        className="w-[90%] h-full bg-blue-500 rounded animate__animated animate__slideInLeft animate__delay-1s">
                                    </div>
                                </div>
                            </div>
                            <div className="relative pt-1">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-semibold text-neutral-700">Vue.js</span>
                                    <span className="text-sm font-semibold text-neutral-600">85%</span>
                                </div>
                                <div className="overflow-hidden h-2 bg-gray-200 rounded">
                                    <div
                                        className="w-[85%] h-full bg-blue-500 rounded animate__animated animate__slideInLeft animate__delay-1s">
                                    </div>
                                </div>
                            </div>
                            <div className="relative pt-1">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-semibold text-neutral-700">Tailwind CSS</span>
                                    <span className="text-sm font-semibold text-neutral-600">95%</span>
                                </div>
                                <div className="overflow-hidden h-2 bg-gray-200 rounded">
                                    <div
                                        className="w-[95%] h-full bg-blue-500 rounded animate__animated animate__slideInLeft animate__delay-1s">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300 animate__animated animate__fadeInUp animate__delay-2s">
                        <div className="text-green-500 mb-4">
                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 7v10c0 2 1.5 3 3 3h10c1.5 0 3-1 3-3V7c0-2-1.5-3-3-3H7c-1.5 0-3 1-3 3z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-neutral-800 mb-3">Backend Development</h3>
                        <div className="space-y-3">
                            <div className="relative pt-1">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-semibold text-neutral-700">Node.js</span>
                                    <span className="text-sm font-semibold text-neutral-600">88%</span>
                                </div>
                                <div className="overflow-hidden h-2 bg-gray-200 rounded">
                                    <div
                                        className="w-[88%] h-full bg-green-500 rounded animate__animated animate__slideInLeft animate__delay-2s">
                                    </div>
                                </div>
                            </div>
                            <div className="relative pt-1">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-semibold text-neutral-700">Python</span>
                                    <span className="text-sm font-semibold text-neutral-600">82%</span>
                                </div>
                                <div className="overflow-hidden h-2 bg-gray-200 rounded">
                                    <div
                                        className="w-[82%] h-full bg-green-500 rounded animate__animated animate__slideInLeft animate__delay-2s">
                                    </div>
                                </div>
                            </div>
                            <div className="relative pt-1">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-semibold text-neutral-700">MongoDB</span>
                                    <span className="text-sm font-semibold text-neutral-600">85%</span>
                                </div>
                                <div className="overflow-hidden h-2 bg-gray-200 rounded">
                                    <div
                                        className="w-[85%] h-full bg-green-500 rounded animate__animated animate__slideInLeft animate__delay-2s">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300 animate__animated animate__fadeInUp animate__delay-3s">
                        <div className="text-purple-500 mb-4">
                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z">
                                </path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-neutral-800 mb-3">Tools &amp; Technologies</h3>
                        <div className="space-y-3">
                            <div className="relative pt-1">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-semibold text-neutral-700">Git &amp; GitHub</span>
                                    <span className="text-sm font-semibold text-neutral-600">92%</span>
                                </div>
                                <div className="overflow-hidden h-2 bg-gray-200 rounded">
                                    <div
                                        className="w-[92%] h-full bg-purple-500 rounded animate__animated animate__slideInLeft animate__delay-3s">
                                    </div>
                                </div>
                            </div>
                            <div className="relative pt-1">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-semibold text-neutral-700">Docker</span>
                                    <span className="text-sm font-semibold text-neutral-600">80%</span>
                                </div>
                                <div className="overflow-hidden h-2 bg-gray-200 rounded">
                                    <div
                                        className="w-[80%] h-full bg-purple-500 rounded animate__animated animate__slideInLeft animate__delay-3s">
                                    </div>
                                </div>
                            </div>
                            <div className="relative pt-1">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-semibold text-neutral-700">AWS</span>
                                    <span className="text-sm font-semibold text-neutral-600">78%</span>
                                </div>
                                <div className="overflow-hidden h-2 bg-gray-200 rounded">
                                    <div
                                        className="w-[78%] h-full bg-purple-500 rounded animate__animated animate__slideInLeft animate__delay-3s">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <script>
                    // Animate skill bars on scroll
                const skillBars = document.querySelectorAll('.bg-blue-500');

                    const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.style.width = entry.target.parentElement.previousElementSibling.children[1].textContent;
                            entry.target.style.transition = 'width 1s ease-in-out';
                        }
                    });
                    }, {threshold: 0.5 });

                    skillBars.forEach(bar => {
                    bar.style.width = '0%';
                observer.observe(bar);
                    });
            </script> */}
        </section>
    )
}

export default Skills
import React from 'react'
import { Boxes, BriefcaseBusiness, CircleCheck, CloudCog, GitBranch, GitMerge, GraduationCap, Users } from 'lucide-react'

const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-neutral-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 animate__animated animate__fadeIn">
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 animate__animated animate__fadeInLeft">
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <h3 className="text-2xl font-semibold text-neutral-800 mb-4">Who I Am</h3>
                            <p className="text-neutral-600 leading-relaxed">
                                With 2 years of hands-on experience in software development,
                                I&apos;ve developed a strong foundation in both frontend and backend technologies.
                                My journey began with a passion for creating efficient and user-friendly applications,
                                and I&apos;ve since worked on various projects that have enhanced my technical expertise.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <div className="flex items-center gap-3 mb-2">
                                    <i className="fas fa-check-circle text-blue-500"></i>
                                    <Boxes size={25} color='#3B82F6' />
                                    <h4 className="font-semibold text-neutral-800">Full Stack Development</h4>
                                </div>
                                <p className="text-neutral-600 text-sm">
                                    Analytical mindset with strong debugging skills
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <div className="flex items-center gap-3 mb-2">
                                    <CircleCheck size={25} color='#3B82F6' />
                                    <h4 className="font-semibold text-neutral-800">Problem Solver</h4>
                                </div>
                                <p className="text-neutral-600 text-sm">
                                    Analytical mindset with strong debugging skills
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <div className="flex items-center gap-3 mb-2">
                                    <Users size={25} color='#3B82F6' />
                                    <h4 className="font-semibold text-neutral-800">Team Collaboration</h4>
                                </div>
                                <p className="text-neutral-600 text-sm">
                                    Excellent collaboration and communication
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <div className="flex items-center gap-3 mb-2">
                                    <CloudCog size={25} color='#3B82F6' />
                                    <h4 className="font-semibold text-neutral-800">AI Enthusiast</h4>
                                </div>
                                <p className="text-neutral-600 text-sm">
                                    Excellent collaboration and communication
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="animate__animated animate__fadeInRight">
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <h3 className="text-2xl font-semibold text-neutral-800 mb-6">Quick Facts</h3>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="bg-blue-100 p-3 rounded-lg">
                                        <BriefcaseBusiness size={25} color='#3B82F6' />
                                    </div>
                                    <div>
                                        <p className="font-medium text-neutral-800">2+ Years Experience</p>
                                        <p className="text-neutral-600 text-sm">Professional Development</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="bg-blue-100 p-3 rounded-lg">
                                        <GitMerge size={25} color='#3B82F6' />
                                    </div>
                                    <div>
                                        <p className="font-medium text-neutral-800">5+ Projects</p>
                                        <p className="text-neutral-600 text-sm">Completed</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="bg-blue-100 p-3 rounded-lg">
                                        <GraduationCap size={25} color='#3B82F6' />
                                    </div>
                                    <div>
                                        <p className="font-medium text-neutral-800">B.Tech in Computer Science</p>
                                        <p className="text-neutral-600 text-sm">Education</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="bg-blue-100 p-3 rounded-lg">
                                        <GitBranch size={25} color='#3B82F6' />
                                        {/* <i className="fas fa-code-branch text-blue-500"></i> */}
                                    </div>
                                    <div>
                                        <p className="font-medium text-neutral-800">Contribute with 5+ Technologies</p>
                                        <p className="text-neutral-600 text-sm">In Open Source</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default AboutSection
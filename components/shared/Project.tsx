import { SocialLinks } from '@/lib/constrant'
import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'

const Project = () => {
    const project = [
        {
            name: 'E-Commerce Platform',
            des: 'Full-stack e-commerce solution with payment integration and real-time inventory management.',
            image: '',
            tech: ['React', 'Node', 'MongoDB'],
            repo: '',
            liveDemo: '',
            category: 'web'
        },
        {
            name: 'Real-time Chat Application',
            des: 'WebSocket-based chat platform with file sharing and user presence detection.',
            image: '',
            tech: ['Socket.io', 'express', 'redis'],
            repo: '',
            liveDemo: '',
            category: 'web'
        },
        {
            name: 'Project Management Tool',
            des: 'Collaborative project management system with Kanban boards and team analytics.',
            image: '',
            tech: ['vue.js', 'firebase', 'chart.js'],
            repo: '',
            liveDemo: '',
            category: 'mobile'
        }
    ]
    return (
        <section id="projects" className="py-20 bg-neutral-900 text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 animate__animated animate__fadeIn">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        project.map((project, index) => {
                            return <div key={index} className="group bg-neutral-800 rounded-xl overflow-hidden shadow-lg hover:transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp">
                                <div className="h-48 bg-neutral-700 flex items-center justify-center relative">
                                    <p className='absolute bottom-3 right-3  text-sm  bg-blue-100 px-3 py-1 rounded-full text-blue-400 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>{project.category}</p>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                                    <p className="text-neutral-400 mb-4">{project.des}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {
                                            project.tech.map((tech, index) => {
                                                return <span className="px-3 py-1 bg-blue-500/20 text-blue-500 rounded-full text-sm" key={index}>{tech}</span>
                                            })
                                        }
                                    </div>
                                    <div className="flex justify-between">
                                        <a href={project.repo} className="text-blue-500 flex items-center gap-2 hover:text-blue-400 transition-colors">
                                            <FaGithub className='text-blue-500' size={20} />
                                            Repository
                                        </a>
                                        <a href={project.liveDemo} className="text-blue-500 flex items-center gap-2 hover:text-blue-400 transition-colors">
                                            <FaExternalLinkAlt className='text-blue-500' size={20} />
                                            Live Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
                <div className="text-center mt-12">
                    <a href={SocialLinks.Github} className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors duration-300">
                        <FaGithub className='text-white-500' size={20} />
                        View More Projects
                    </a>
                </div>
            </div>
        </section>)
}

export default Project
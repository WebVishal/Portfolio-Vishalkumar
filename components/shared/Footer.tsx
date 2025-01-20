import React from 'react'
import ContactUs from './ContactUs'
import { SocialLinks } from '@/lib/constrant'

const Footer = () => {
    return (
        <section>
            <ContactUs />
            <footer id="footer" className="bg-neutral-900 text-white">
                <div className="container mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <div className="flex items-center justify-center">
                                    <span
                                        className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 bg-clip-text text-transparent hover:scale-105 transform transition-all duration-3000 cursor-pointer relative group animate-pulse"
                                        style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.1)" }}>
                                        Web<span
                                            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Vishal</span>
                                        <span
                                            className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                                        <span className="absolute -top-1 right-0 text-xs font-normal tracking-wider text-gray-600">Portfolio</span>
                                    </span>
                                </div>
                            </div>
                            <p className="text-gray-400">Building digital experiences with passion and precision. Let&apos;s create something amazing together.</p>
                            <div className="flex space-x-4">
                                <a href={SocialLinks.Facebook} className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                                <a href={SocialLinks.Twitter} className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                </a>
                                <a href={SocialLinks.Linkedin} className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a href={SocialLinks.Github} className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                                <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
                                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4">Services</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Web Development</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mobile Development</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">UI/UX Design</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cloud Solutions</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
                            <p className="text-gray-400 mb-4">Subscribe to stay updated with my latest projects and tech articles.</p>
                            <form className="space-y-4">
                                <input type="email" placeholder="Enter your email"
                                    className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="border-t border-neutral-800">
                    <div className="container mx-auto px-6 py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="text-gray-400 text-sm">© 2024 WebVishal. All rights reserved.</p>
                            <div className="flex items-center space-x-4 mt-4 md:mt-0">
                                <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
                                <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
                                <a href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default Footer
import { NavItems } from '@/lib/constrant'
import React from 'react'

export const Navbar = () => {
    return (
        <nav id="navbar" className="fixed w-full px-3 z-50 bg-neutral-900 text-white">
            <div className="container mx-auto px-4" id="el-zxir10jv">
                <div className="flex justify-between items-center h-16" id="el-6xknf95d">
                    <div className="flex items-center">
                        <div className="flex items-center justify-center py-8">
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
                    <div className="hidden md:flex space-x-8" id="el-8z7813a7">
                        {
                            NavItems.map((item, index) => {
                                return <a href={item.url} className="hover:text-blue-500 transition-colors duration-300"
                                    id={`${index}`}>{item.name}</a>
                            })
                        }
                    </div>
                    <button id="mobile-menu-button" className="md:hidden flex items-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-nlsmeswg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" id="el-ajy0f1uf"></path>
                        </svg>
                    </button>
                </div>
                <div id="mobile-menu" className="hidden md:hidden">
                    <div className="px-2 pt-2 pb-3  space-y-1 bg-neutral-800" id="el-mtmq9h9w">
                        {
                            NavItems.map((item, index) => {
                                return <a href={item.url} className="block px-3 py-2 rounded-md hover:bg-neutral-700"
                                    id={`${index}`}>{item.name}</a>
                            })
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}

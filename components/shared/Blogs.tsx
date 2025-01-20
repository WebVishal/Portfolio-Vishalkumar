import React from 'react'

const Blogs = () => {
    const blogs = [
        {
            title: 'Modern Web Development Practices in 2024',
            description: 'Explore the latest trends and best practices in modern web development, including new frameworks and tools....',
            image: '',
            category: {
                name: 'Web Development',
                color: 'text-blue-600'
            },
            link: '',
            readTime: '5 min'
        },
        {
            title: 'The Future of JavaScript Frameworks',
            description: `A deep dive into upcoming JavaScript frameworks and how they're shaping the future of web development.`,
            image: '',
            category: {
                name: 'Programming',
                color: 'text-purple-600'
            },
            link: '',
            readTime: '4 min'
        },
        {
            title: 'AI in Modern Web Applications',
            description: `Learn how artificial intelligence is revolutionizing web applications and user experiences.`,
            image: '',
            category: {
                name: 'Technology',
                color: 'text-indigo-600'
            },
            link: '',
            readTime: '7 min'
        },
        
    ]
    return (
        <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-white to-blue-50">
            <div className="text-center mb-16  animate-slideDown" style={{ animationDelay: "0.3s" }}>
                <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
                    Latest Blogs</h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    blogs.map((item, index) => {
                        return <div
                            key={index}
                            className="bg-white rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.1)] hover:shadow-[0_0_25px_rgba(0,0,0,0.15)] hover:transform hover:-translate-y-1 transition-all cursor-pointer duration-300 animate-slideUp"
                            style={{ animationDelay: "0.5s" }}>
                            <div className="h-48 overflow-hidden">
                                <img src="https://source.unsplash.com/random/800x600?web-development" alt="Blog Image"
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <span className={`text-sm ${item.category.color} bg-blue-100 px-3 py-1 rounded-full`}>{item.category.name}</span>
                                    <span className="text-gray-500 text-sm ml-4">5 min read</span>
                                </div>
                                <h3 className={`text-xl font-inter font-bold mb-2 hover:${item.category.color} transition-colors`}>{item.title}</h3>
                                <p className="text-gray-600 mb-4 line-clamp-2">{item.description}</p>
                                <a href={item.link} className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">Read More →</a>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Blogs
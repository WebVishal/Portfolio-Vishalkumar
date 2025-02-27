'use client'
import { SocialLinks } from '@/lib/constrant'
import React, { useState } from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { FaGithub, FaLinkedin, FaPhone, FaXTwitter } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'


interface FormState {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface FormEvent extends React.FormEvent<HTMLFormElement> {}

const ContactUs = () => {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const formHandler = async (e: FormEvent): Promise<void> => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');
        try {
            const response = await fetch('http://localhost:3000/api/email', {
                method: 'POST',
                body: JSON.stringify({
                    name: form.name,
                    subject: form.subject,
                    email: form.email,
                    message: form.message
                })
            });

            if (!response.ok) throw new Error(`Request failed: ${response.status}`);

            setSuccess('Message sent successfully!');
            setForm({ name: '', email: '', subject: '', message: '' });
        } catch (err) {
            console.error("Error sending:", err);
            setError('Failed to send message.');
        } finally {
            setLoading(false);
        }
    };
    return (
        <section id="contact" className="py-20 bg-neutral-900 text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 animate__animated animate__fadeIn">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <div className="space-y-8 animate__animated animate__fadeInLeft">
                        <div className="bg-neutral-800 p-6 rounded-xl">
                            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <div
                                        className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                        <MdEmail className="text-blue-500" size={20} />
                                        <i className="fas fa-envelope text-blue-500"></i>
                                    </div>
                                    <div>
                                        <p className="text-neutral-400">Email</p>
                                        <a href="mailto:contact@example.com"
                                            className="hover:text-blue-500 transition-colors">connectme@webvishal.in</a>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div
                                        className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                        <FaPhone className="text-blue-500" size={20} />
                                        <i className="fas fa-phone text-blue-500"></i>
                                    </div>
                                    <div>
                                        <p className="text-neutral-400">Phone</p>
                                        <a href="tel:+1234567890" className="hover:text-blue-500 transition-colors">+919351806819</a>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div
                                        className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                        <CiLocationOn className="text-blue-500" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-neutral-400">Location</p>
                                        <p>Jaipur,Rajasthan,302012</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
                                <div className="flex space-x-4">
                                    <a href={SocialLinks.Github}
                                        className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center hover:bg-blue-500/40 transition-colors">
                                        <FaGithub className="text-white-500" size={25} />
                                    </a>
                                    <a href={SocialLinks.Linkedin}
                                        className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center hover:bg-blue-500/40 transition-colors">
                                        <FaLinkedin className="text-blue-400" size={25} />
                                    </a>
                                    <a href={SocialLinks.Twitter}
                                        className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center hover:bg-blue-500/40 transition-colors">
                                        <FaXTwitter className="text-white-500" size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="animate__animated animate__fadeInRight">
                        <form id="contactForm" className="bg-neutral-800 p-6 rounded-xl" onSubmit={formHandler}>
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        className="w-full px-4 py-3 bg-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                        value={form.name}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Email</label>
                                    <input type="email" id="email" name="email" required
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        className="w-full px-4 py-3 bg-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Subject</label>
                                    <input type="text" id="subject" name="subject" required
                                        value={form.subject}
                                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                                        className="w-full px-4 py-3 bg-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                                        value={form.message}
                                        required
                                        className="w-full px-4 py-3 bg-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded-lg font-medium transition-colors duration-300">
                                    {loading ? "Sending..." : "Send Message"}
                                </button>
                                {error && <p className="text-red-500 mt-2">{error}</p>}
                                {success && <p className="text-green-500 mt-2">{success}</p>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* 
                <script>
                    const contactForm = document.getElementById('contactForm');

                    contactForm.addEventListener('submit', (e) => {
                        e.preventDefault();

                        // Form validation
                        const formData = new FormData(contactForm);
                        let isValid = true;
                        formData.forEach((value) => {
                            if (!value.trim()) {
                                isValid = false;
                            }
                        });

                        if (!isValid) {
                            alert('Please fill in all fields');
                            return;
                        }

                        // Here you would typically send the form data to a server
                        alert('Message sent successfully!');
                        contactForm.reset();
                    });

                    // Animation on scroll
                    const observer = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                entry.target.style.opacity = "1";
                                entry.target.style.transform = "translateY(0)";
                            }
                        });
                    }, { threshold: 0.1 });

                    document.querySelectorAll('.animate__animated').forEach(el => {
                        el.style.opacity = "0";
                        el.style.transform = "translateY(20px)";
                        observer.observe(el);
                    });
                </script> */}
        </section>
    )
}
export default ContactUs
'use client'
import AboutSection from "@/components/shared/AboutSection";
import Blogs from "@/components/shared/Blogs";
import Exprience from "@/components/shared/Exprience";
import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/shared/HeroSection";
import { Navbar } from "@/components/shared/Navbar";
import Project from "@/components/shared/Project";
import Skills from "@/components/shared/Skills";
import { Provider } from 'react-redux'
import store from '@/app/store'

export default function Home() {
    return (
        <Provider store={store} >
            <Navbar />
            <HeroSection />
            <AboutSection />
            <Skills />
            <Exprience />
            <Project />
            <Blogs />
            <Footer />
        </Provider >
    );
}

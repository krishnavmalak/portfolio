"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Terminal, Download, ArrowRight, Smartphone } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden pt-20">
      {/* Subtle radial gradients for background */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] opacity-70 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] opacity-70 -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container px-4 mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500 pb-2">
              Hi, I'm Krishna
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-700">
              Software Engineer | Full-Stack Developer
            </h2>
            <p className="text-lg text-slate-500 max-w-xl">
              I build intelligent systems and scalable mobile platforms using cutting-edge technologies. Specializing in cross-platform applications, GenAI integrations, and robust Laravel backends with 4+ years of experience.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a href="#contact">
              <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800 font-medium transition-all duration-300 rounded-full px-8">
                Let's Connect <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="#about">
              <Button size="lg" variant="outline" className="font-medium transition-all duration-300 rounded-full px-8 border-slate-200 hover:bg-slate-50 text-slate-700">
                Learn More
              </Button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative lg:h-[600px] hidden md:flex flex-col items-center justify-center gap-6"
        >
          {/* Floating cards representing skills */}
          <motion.div 
            animate={{ y: [0, -10, 0] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="bg-white p-6 rounded-2xl shadow-xl shadow-primary/5 border border-slate-100 w-72 transform -rotate-6 translate-x-12 z-20"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800">Mobile Apps</h3>
                <p className="text-xs text-slate-500">React Native & Expo</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 15, 0] }} 
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="bg-white p-6 rounded-2xl shadow-xl shadow-purple-500/5 border border-slate-100 w-72 transform rotate-3 -translate-x-12 z-10"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center">
                <Terminal className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800">Scalable Backends</h3>
                <p className="text-xs text-slate-500">Laravel, Node.js, MySQL</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, -8, 0] }} 
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="bg-white p-6 rounded-2xl shadow-xl shadow-emerald-500/5 border border-slate-100 w-72 transform -rotate-2 translate-x-8 z-30"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-800">AI Integrations</h3>
                <p className="text-xs text-slate-500">RAG, OCR & LLMs</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

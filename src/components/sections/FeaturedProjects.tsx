"use client";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Tharsha Wealth - Enterprise App",
    description: "Built for thousands of active users, deployed to both App Store and Play Store. Features robust Razorpay integration and configured live push notification workflows.",
    tech: ["React Native", "Laravel", "MySQL", "Razorpay"],
    image: "bg-gradient-to-br from-primary/20 to-blue-900/40",
    link: "#"
  },
  {
    title: "GenAI Automation Workflows",
    description: "Smart automation workflows featuring chatbot architectures and OCR-based handwriting-to-database conversions, processing complex forms automatically.",
    tech: ["Next.js", "OpenAI", "Claude", "OCR", "Node.js"],
    image: "bg-gradient-to-br from-accent/20 to-emerald-900/40",
    link: "#"
  },
  {
    title: "Hospital Management System",
    description: "Comprehensive system focusing on real-time communication between doctors and patients, powered by Vue.js and WebRTC for telemedicine.",
    tech: ["Vue.js", "Laravel", "WebRTC", "WebSockets"],
    image: "bg-gradient-to-br from-purple-500/20 to-purple-900/40",
    link: "#"
  }
];

export function FeaturedProjects() {
  return (
    <section className="py-24 bg-card/10">
      <div className="container px-4 mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl">
            Production-ready case studies demonstrating scalable architecture, complex integrations, and user-centric design.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}
            >
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`space-y-6 ${idx % 2 !== 0 ? 'lg:col-start-2' : ''}`}
              >
                <h3 className="text-2xl md:text-3xl font-bold font-mono">{project.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <Badge key={tech} variant="outline" className="border-primary/50 text-primary bg-primary/5">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="pt-4 flex gap-4">
                  <a href={project.link} className="inline-flex items-center text-sm font-semibold text-foreground hover:text-primary transition-colors">
                    View Live <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                  <a href="#" className="inline-flex items-center text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
                    Source <Code2 className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative aspect-video rounded-2xl overflow-hidden border border-border group ${project.image} ${idx % 2 !== 0 ? 'lg:col-start-1' : ''}`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-card/80 backdrop-blur-md rounded-lg shadow-2xl border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <span className="text-muted-foreground font-mono">Interactive Mockup Placeholder</span>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

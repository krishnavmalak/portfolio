import { motion } from "framer-motion";
import { Code, Server, Zap } from "lucide-react";

export function About() {
  const cards = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Mobile First",
      description: "Building seamless, native-feeling experiences using React Native and Expo."
    },
    {
      icon: <Server className="w-8 h-8 text-accent" />,
      title: "Scalable Backends",
      description: "Architecting high-performance APIs and databases using Laravel, MySQL, and NoSQL."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "AI Integration",
      description: "Enhancing applications with RAG workflows, OCR data extraction, and LLMs."
    }
  ];

  return (
    <section id="about" className="pt-12 pb-12 bg-card/30 relative">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground tracking-tight">Building Scalable Solutions</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 pb-10 border-b border-border">
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">4+</div>
              <div className="text-sm text-muted-foreground font-medium mt-1 uppercase tracking-wider">Years Exp</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">10k+</div>
              <div className="text-sm text-muted-foreground font-medium mt-1 uppercase tracking-wider">Users Reached</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">6x</div>
              <div className="text-sm text-muted-foreground font-medium mt-1 uppercase tracking-wider">Perf Boost</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">100%</div>
              <div className="text-sm text-muted-foreground font-medium mt-1 uppercase tracking-wider">Delivery</div>
            </div>
          </div>

          <div className="text-lg text-muted-foreground max-w-3xl leading-relaxed space-y-4">
            <p>
              I'm a React Native Engineer with 4+ years of production experience architecting scalable mobile platforms and backend systems. I specialize in shipping high-performance iOS and Android applications, with deep expertise in fintech, secure API design, and Firebase infrastructure.
            </p>
            <p>
              Currently leading mobile and backend development for the EldersIndia application, where I architect production React Native applications serving thousands of active users and design secure Laravel REST APIs with JWT and Sanctum authentication. I've delivered measurable impact: 6x search performance improvements (1200ms to 200ms via Meilisearch optimization), integrated Razorpay payment gateways, implemented Firebase Cloud Messaging for real-time features, and managed full release cycles across Google Play Console and App Store Connect.
            </p>
            <p>
              Beyond core engineering, I build AI-powered automation workflows—such as OCR record extraction pipelines using Gemini Vision and Qwen-VL—demonstrating full-stack capability from frontend UX to backend infrastructure and intelligent data processing.
            </p>

          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br hover:from-card hover:to-primary/5 transition-all duration-300"
            >
              <div className="mb-6 inline-flex p-3 rounded-xl bg-background/50 border border-border/50 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-muted-foreground">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold border-b border-border/50 pb-4">Key Achievements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                Search Performance Optimization
              </h3>
              <p className="text-muted-foreground ml-3.5">Optimized Meilisearch indexing architecture, dramatically reducing global search latency by 6× (from 1200ms down to a blazing 200ms).</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                Scalable Enterprise Platforms
              </h3>
              <p className="text-muted-foreground ml-3.5">Architected and maintained robust full-stack applications serving thousands of active users seamlessly across iOS, Android, and web.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                Intelligent Integrations
              </h3>
              <p className="text-muted-foreground ml-3.5">Successfully integrated secure payment gateways (Razorpay), real-time communications (WebSockets/WebRTC), and complex push notification systems.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                AI Workflows & Automation
              </h3>
              <p className="text-muted-foreground ml-3.5">Engineered prompt pipelines and OCR data extraction workflows, leveraging LLMs to automate internal business processes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

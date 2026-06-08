"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend & Mobile",
    items: ["React Native", "React.js", "TypeScript", "Redux Toolkit", "Zustand", "Context API", "Expo Router", "Deep Linking", "Tailwind CSS", "Async Storage"]
  },
  {
    id: "backend",
    title: "Backend & Database",
    items: ["Laravel", "PHP", "Node.js", "JWT & Sanctum Auth", "MySQL", "SQLite", "Meilisearch", "RESTful APIs", "WebSockets"]
  },
  {
    id: "firebase",
    title: "Firebase & Cloud",
    items: ["Firebase Auth", "Cloud Firestore", "Firebase Storage", "Cloud Messaging (FCM)", "Push Notifications"]
  },
  {
    id: "ai",
    title: "AI & Automation",
    items: ["GenAI Integration", "OpenAI API", "Claude AI", "Gemini Vision", "OCR Data Extraction", "RAG Workflows", "LLMs"]
  },
  {
    id: "integrations",
    title: "Payments & Integrations",
    items: ["Razorpay", "SMS Integration", "Email Integration", "Git & GitHub", "GitHub Actions"]
  },
  {
    id: "devops",
    title: "DevOps & Deployment",
    items: ["Google Play Console", "App Store Connect", "Cloudflare Pages", "Cloudflare DNS", "Release Cycle Management"]
  }
];

export function SkillsMatrix() {
  return (
    <section id="skills" className="pt-20 pb-12 relative">
      <div className="container px-4 mx-auto">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full bg-indigo-50 text-indigo-600 font-medium text-sm tracking-wide">
            SKILLS & TECHNOLOGIES
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 tracking-tight">Technical Arsenal</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            A comprehensive overview of the tools and technologies I use to build scalable, high-performance applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-center`}
            >
              <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {category.items.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className={`text-sm py-1.5 px-4 font-medium transition-colors bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-100`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 max-w-6xl mx-auto bg-gradient-to-br from-indigo-500/5 to-pink-500/5 rounded-3xl border-2 border-indigo-500/10 p-8 md:p-12">
          <div className="mb-12 flex flex-col items-center justify-center text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-3xl">🚀</span> AI-Assisted Development Tools
            </h3>
            <p className="text-slate-500 text-lg">Leveraging cutting-edge AI coding assistants for 10x productivity</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: "🤖", title: "Claude Code", description: "AI pair programming" },
              { icon: "✨", title: "Cursor AI", description: "Intelligent IDE" },
              { icon: "🔮", title: "GitHub Copilot", description: "Code completion" },
              { icon: "⚡", title: "OpenAI Codex", description: "Code generation" },
              { icon: "🎯", title: "AntiGravity", description: "AI debugging" },
              { icon: "💫", title: "Opencode", description: "Open-source AI tools" },
            ].map((tool, idx) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 + idx * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-indigo-500 transition-all duration-300 ease-out flex flex-col items-center text-center group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{tool.icon}</div>
                <h4 className="text-base font-bold text-slate-900 mb-2">{tool.title}</h4>
                <p className="text-sm text-slate-500 leading-tight">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

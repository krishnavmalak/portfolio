"use client";
import { motion } from "framer-motion";
import { Sparkles, Server, Smartphone, Brain, Database, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const achievements = [
  {
    id: "ai-ocr",
    title: "AI-Powered OCR Pipeline",
    description: "Engineered a high-performance AI extraction pipeline for Krisivikas using Gemini and Qwen-VL to accurately read handwritten dairy ledgers and convert them directly into structured relational databases.",
    icon: <Brain className="w-6 h-6" />,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    borderColor: "border-purple-200",
    tags: ["GenAI", "OCR", "LLMs", "Data Automation"]
  },
  {
    id: "scalable-platforms",
    title: "Enterprise Mobile Platforms",
    description: "Architected and deployed scalable React Native applications serving thousands of active users, featuring seamless Razorpay payment gateways and learning management systems (LMS).",
    icon: <Smartphone className="w-6 h-6" />,
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
    borderColor: "border-indigo-200",
    tags: ["React Native", "Expo", "Laravel", "REST APIs"]
  },
  {
    id: "performance",
    title: "High-Performance Backends",
    description: "Designed robust Laravel REST APIs and optimized complex database queries. Successfully improved Meilisearch indexing latency from 1200ms to 200ms—a massive 6× performance boost.",
    icon: <Zap className="w-6 h-6" />,
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
    borderColor: "border-emerald-200",
    tags: ["PHP", "MySQL", "Meilisearch", "Optimization"]
  }
];

export function KeyAchievements() {
  return (
    <section id="work" className="pt-12 pb-12 bg-slate-50">
      <div className="container px-4 mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full bg-indigo-50 text-indigo-600 font-medium text-sm tracking-wide">
            ACHIEVEMENTS
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 tracking-tight">Key Achievements</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Impact-driven engineering delivering intelligent automation, performance, and scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`p-8 bg-white rounded-2xl border ${index === 0 ? 'border-purple-200 shadow-purple-500/10 shadow-xl md:col-span-2' : 'border-slate-200 shadow-sm'} hover:shadow-lg transition-all duration-300 group flex flex-col`}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className={`w-12 h-12 rounded-full ${item.bgColor} ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-800">{item.title}</h3>
              </div>

              <p className="text-slate-600 leading-relaxed mb-6 flex-grow text-lg">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-100">
                {item.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-slate-50 text-slate-600 border border-slate-100 font-medium px-3 py-1">
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

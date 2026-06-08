"use client";
import { motion } from "framer-motion";
import { Sparkles, Server, Smartphone, Brain, Database, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const achievements = [
  {
    id: "ai-ocr",
    title: "AI-Powered OCR Pipeline",
    description: "Engineered a high-performance AI extraction pipeline for Krisivikas using Gemini Vision and Qwen-VL to accurately read handwritten dairy ledgers and convert them into structured relational databases. Delivered intelligent automation reducing manual data entry workload.",
    icon: <Brain className="w-6 h-6" />,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    borderColor: "border-purple-200",
    tags: ["GenAI", "OCR", "Gemini Vision", "Qwen-VL", "LLMs", "Data Automation"]
  },
  {
    id: "scalable-platforms",
    title: "Production React Native Apps (10k+ Users)",
    description: "Architected and deployed scalable React Native applications serving thousands of active users in the fintech domain. Integrated Razorpay payment gateways, Firebase Authentication, Cloud Firestore, FCM push notifications, and learning management systems (LMS).",
    icon: <Smartphone className="w-6 h-6" />,
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
    borderColor: "border-indigo-200",
    tags: ["React Native", "Expo", "Firebase", "Razorpay", "Sanctum Auth", "App Store Connect"]
  },
  {
    id: "performance",
    title: "Performance & Backend Optimization",
    description: "Designed robust Laravel REST APIs with Sanctum authentication and optimized complex database queries. Improved Meilisearch indexing latency from 1200ms to 200ms—a 6× performance boost. Managed full release cycles via Google Play Console and App Store Connect.",
    icon: <Zap className="w-6 h-6" />,
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
    borderColor: "border-emerald-200",
    tags: ["PHP", "Laravel", "MySQL", "Meilisearch", "Optimization", "DevOps", "Google Play Console"]
  },
  {
    id: "firebase",
    title: "Firebase & Real-Time Infrastructure",
    description: "Built comprehensive Firebase infrastructure including Cloud Firestore NoSQL databases, real-time synchronization, Firebase Storage for media management, and Cloud Messaging (FCM) for push notifications and in-app messaging.",
    icon: <Database className="w-6 h-6" />,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    borderColor: "border-orange-200",
    tags: ["Firebase Auth", "Firestore", "Cloud Messaging", "FCM", "Storage", "Real-time Sync"]
  },
  {
    id: "integrations",
    title: "Payment & Service Integrations",
    description: "Seamlessly integrated Razorpay payment gateway, SMS notification services, and email integration for transactional communications. Ensured PCI compliance and secure handling of sensitive payment data.",
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-pink-600",
    bgColor: "bg-pink-100",
    borderColor: "border-pink-200",
    tags: ["Razorpay", "SMS Integration", "Email Integration", "PCI Compliance", "Webhooks"]
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

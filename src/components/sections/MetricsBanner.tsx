import { motion } from "framer-motion";
import { Zap, Code2, Cpu } from "lucide-react";

const metrics = [
  {
    icon: <Code2 className="w-6 h-6 text-primary" />,
    value: "4+ Years",
    label: "Mobile & Backend Experience",
  },
  {
    icon: <Zap className="w-6 h-6 text-accent" />,
    value: "6× Faster",
    label: "Search Latency (1200ms → 200ms)",
  },
  {
    icon: <Cpu className="w-6 h-6 text-primary" />,
    value: "GenAI Ready",
    label: "OpenAI, Claude & OpenRouter architectures",
  },
];

export function MetricsBanner() {
  return (
    <section className="py-12 border-y border-border bg-card/30 backdrop-blur-sm">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-border">
          {metrics.map((metric, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col items-center text-center space-y-3 ${idx !== 0 ? 'pt-8 md:pt-0' : ''}`}
            >
              <div className="p-3 bg-secondary rounded-full">
                {metric.icon}
              </div>
              <h3 className="text-3xl font-bold font-mono text-foreground">{metric.value}</h3>
              <p className="text-muted-foreground font-medium">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

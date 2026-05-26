import { MapPin, Mail, Phone } from "lucide-react";

export function ContactFooter() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer id="contact" className="pt-12 bg-[#f8fafc]">
      <div className="container px-4 mx-auto max-w-3xl flex flex-col items-center justify-center text-center gap-12 mb-20">

        <div className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Amazing</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            I'm passionate about solving complex problems at the intersection of scalable engineering and mobile ecosystems. Open to collaborations, technical discussions, and new opportunities.
          </p>
        </div>

        <div className="flex flex-col w-full gap-4">
          <a href="mailto:krishnamalak123@gmail.com" className="flex items-center p-6 bg-white rounded-2xl border border-slate-200 hover:border-indigo-200 hover:shadow-md transition-all duration-300 w-full text-left">
            <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center mr-6 shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm text-slate-400 font-medium mb-1">Email</div>
              <div className="font-semibold text-slate-800 text-lg">krishnamalak123@gmail.com</div>
            </div>
          </a>

          <a href="tel:+916363960861" className="flex items-center p-6 bg-white rounded-2xl border border-slate-200 hover:border-indigo-200 hover:shadow-md transition-all duration-300 w-full text-left">
            <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center mr-6 shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm text-slate-400 font-medium mb-1">Phone</div>
              <div className="font-semibold text-slate-800 text-lg">+91 6363960861</div>
            </div>
          </a>

          <div className="flex items-center p-6 bg-white rounded-2xl border border-slate-200 hover:border-indigo-200 hover:shadow-md transition-all duration-300 w-full text-left">
            <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center mr-6 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm text-slate-400 font-medium mb-1">Location</div>
              <div className="font-semibold text-slate-800 text-lg">Bengaluru, India</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-4">
          <a href="https://github.com/krishnavmalak" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-slate-600 flex items-center justify-center hover:text-indigo-600 hover:border-indigo-200 transition-colors shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
          </a>
          <a href="https://www.linkedin.com/in/krishna-malik-84bb31211/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-slate-600 flex items-center justify-center hover:text-indigo-600 hover:border-indigo-200 transition-colors shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
          </a>
        </div>
      </div>

      <div className="bg-[#0f172a] py-16 text-slate-400">
        <div className="container px-4 mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

          <div className="flex flex-col gap-2">
            <div className="text-2xl font-bold text-white tracking-tighter">krishna</div>
            <div className="text-sm text-slate-400">Building the future with mobile & AI-powered development</div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="flex flex-wrap gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="text-sm text-slate-500">
              © {new Date().getFullYear()} Krishna. All rights reserved.
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

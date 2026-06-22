import { HeroSection } from "@/components/hero-section";
import Image from "next/image";
import { Mail, FileText, Database, Cloud, Terminal, Code2, Server, Braces } from "lucide-react";
import { Icons } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { SkillsSection } from "@/components/skills-section";
import { CommitsDashboard } from "@/components/commits-dashboard";
import { LeetCodeDashboard } from "@/components/leetcode-dashboard";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";


export default function Home() {
  return (
    <main className="flex-1 bg-black min-h-screen relative scroll-smooth">
      {/* Ambient Background Blobs for Glassmorphism Effect */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-96 h-96 bg-blue-600/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-purple-600/30 rounded-full blur-[120px]" />
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[10%] left-[20%] w-80 h-80 bg-red-600/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10">
        <HeroSection />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:auto-rows-[220px] auto-rows-auto max-w-5xl mx-auto px-4 py-20">
          
          {/* Row 1 */}
          {/* Projects (Row 1-2, Col 1) - Glass Dark Green */}
          <a href="#projects" className="lg:col-start-1 lg:col-span-1 lg:row-start-1 lg:row-span-2 min-h-[220px] md:min-h-0 bg-emerald-900/30 backdrop-blur-xl border border-emerald-500/20 rounded-3xl p-6 flex flex-col items-center justify-center relative shadow-2xl hover:bg-emerald-900/50 transition-all cursor-pointer group">
            <h3 className="text-3xl font-bold text-white tracking-wide group-hover:scale-110 transition-transform">Projects</h3>
          </a>

          {/* Name (Row 1, Col 2) - Glass Blue */}
          <div className="lg:col-start-2 lg:col-span-1 lg:row-start-1 lg:row-span-1 min-h-[220px] md:min-h-0 bg-blue-600/20 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-6 flex flex-col justify-center shadow-xl">
            <p className="text-white/80 font-medium mb-1">Software Developer</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-white leading-tight">Suhail Aslam</h2>
          </div>

          {/* About Me (Row 1, Col 3) - Glass Purple Link */}
          <a href="#about-me" className="lg:col-start-3 lg:col-span-1 lg:row-start-1 lg:row-span-1 min-h-[220px] md:min-h-0 bg-purple-600/20 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-6 flex flex-col justify-center shadow-xl cursor-pointer hover:bg-purple-600/30 transition-all group">
            <p className="text-white/80 font-medium mb-1">About Me</p>
            <h2 className="text-xl lg:text-2xl font-bold text-white leading-tight group-hover:text-purple-200 transition-colors">A self-taught Full Stack Developer</h2>
          </a>

          {/* Resume (Row 1-2, Col 4) - Glass Dark */}
          <div className="lg:col-start-4 lg:col-span-1 lg:row-start-1 lg:row-span-2 min-h-[220px] md:min-h-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-8">Resume</h3>
            <div className="w-24 h-24 bg-red-500/20 rounded-3xl flex items-center justify-center mb-8 relative border border-red-500/20">
              <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full"></div>
              <FileText className="w-12 h-12 text-red-400 relative z-10" />
            </div>
            <a href="/suhail_aslam_k_resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-colors px-6 py-3 rounded-full font-bold w-full text-center">
              Download PDF
            </a>
          </div>

          {/* Row 2 & 3: PHOTO in center - Glass Inset Size */}
          <div className="lg:col-start-2 lg:col-span-2 lg:row-start-2 lg:row-span-2 min-h-[300px] md:min-h-0 bg-black rounded-3xl flex items-center justify-center p-3 sm:p-5">
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-neutral-800 border border-white/10">
              <Image 
                src="/suhail-profile-new.jpg"
                alt="Suhail Aslam"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top opacity-90"
              />
            </div>
          </div>

          {/* Row 3: Skills & Commits Wrapper (Col 1) */}
          <div className="lg:col-start-1 lg:col-span-1 lg:row-start-3 lg:row-span-2 flex flex-col gap-4 h-full min-h-[350px] md:min-h-0">
            {/* Skills (Top 65%) - Glass Red */}
            <a href="#skills" className="h-[65%] bg-red-600/20 backdrop-blur-xl border border-red-500/20 rounded-3xl p-6 relative overflow-hidden flex flex-col items-center justify-center shadow-2xl group cursor-pointer hover:bg-red-600/30 transition-all">
              <div className="absolute inset-0 opacity-30 flex flex-wrap gap-6 items-center justify-center p-4 blur-md mix-blend-overlay pointer-events-none">
                 <Database className="w-10 h-10 text-white" />
                 <Cloud className="w-10 h-10 text-white" />
                 <Terminal className="w-10 h-10 text-white" />
                 <Code2 className="w-10 h-10 text-white" />
                 <Server className="w-10 h-10 text-white" />
                 <Braces className="w-10 h-10 text-white" />
              </div>
              <div className="z-10 text-center flex flex-col items-center justify-center">
                <h3 className="text-3xl font-bold text-white tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform">Skills</h3>
              </div>
            </a>

            {/* Commits & Leetcode (Bottom 35%) - Glass Orange */}
            <a href="#github" className="h-[35%] bg-orange-600/20 backdrop-blur-xl border border-orange-500/20 rounded-3xl p-4 flex flex-col items-center justify-center shadow-2xl hover:bg-orange-600/30 transition-colors cursor-pointer block min-h-[120px] md:min-h-0">
              <h3 className="text-lg font-bold text-white mb-2 text-center">Commits & Leetcode</h3>
              <div className="flex gap-4 justify-center">
                <Icons.gitHub className="w-8 h-8 text-white/80 hover:text-white transition-colors" />
                <Code2 className="w-8 h-8 text-white/80 hover:text-white transition-colors" />
              </div>
            </a>
          </div>

          {/* Row 3 & 4: Theme & Get In Touch Wrapper (Col 4) */}
          <div className="lg:col-start-4 lg:col-span-1 lg:row-start-3 lg:row-span-2 flex flex-col gap-4 h-full min-h-[350px] md:min-h-0">
            {/* Theme Toggle (Top 30%) - Glass Cyan */}
            <div className="h-[30%] bg-cyan-600/20 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-4 flex items-center justify-center shadow-2xl min-h-[100px] md:min-h-0">
              <ThemeToggle />
            </div>
            
            {/* Get In Touch (Bottom 70%) - Glass Dark */}
            <div className="h-[70%] bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center shadow-2xl min-h-[220px] md:min-h-0">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <a href="#contact" className="bg-blue-600/40 backdrop-blur-md border border-blue-500/30 rounded-[2rem] flex flex-col items-center justify-center hover:scale-105 hover:bg-blue-600/60 transition-all shadow-lg w-full h-32 group">
                <Mail className="w-12 h-12 text-white mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-white font-medium">Message Me</span>
              </a>
            </div>
          </div>

          {/* Row 4 */}
          {/* GitHub (Row 4, Col 2) - Glass Dark */}
          <a href="https://github.com/Suhailaslamk" target="_blank" rel="noopener noreferrer" className="lg:col-start-2 lg:col-span-1 lg:row-start-4 lg:row-span-1 min-h-[160px] md:min-h-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl flex flex-col items-center justify-center p-6 group cursor-pointer hover:bg-white/10 transition-all shadow-xl">
            <Icons.gitHub className="w-12 h-12 text-white mb-3 group-hover:scale-110 transition-transform" />
            <span className="text-white font-bold text-xl">GitHub</span>
          </a>

          {/* LinkedIn (Row 4, Col 3) - Glass Blue */}
          <a href="https://www.linkedin.com/in/suhailaslamk" target="_blank" rel="noopener noreferrer" className="lg:col-start-3 lg:col-span-1 lg:row-start-4 lg:row-span-1 min-h-[160px] md:min-h-0 bg-blue-600/20 backdrop-blur-xl border border-blue-500/20 rounded-3xl flex flex-col items-center justify-center p-6 cursor-pointer hover:bg-blue-600/30 transition-all shadow-xl group">
            <Icons.linkedIn className="w-12 h-12 text-white mb-3 group-hover:scale-110 transition-transform" />
            <span className="text-white font-bold text-xl">LinkedIn</span>
          </a>

        </div>

        {/* Full-Screen About Me Section */}
        <section id="about-me" className="min-h-screen w-full max-w-5xl mx-auto px-4 py-24 flex flex-col justify-center">
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">
            {/* Subtle inner glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px]" />
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10 tracking-tight">About Me</h2>
            
            <div className="space-y-8 text-lg md:text-xl lg:text-2xl text-neutral-300 leading-relaxed font-light relative z-10">
              <p>
                I'm a self-taught Full Stack Developer with a strong focus on backend engineering and distributed systems. I enjoy building scalable, production-ready applications using .NET and ASP.NET Core, while also creating modern user interfaces with React and TypeScript.
              </p>
              <p>
                Currently, I'm gaining hands-on industry experience as a Software Developer Intern, working on cloud-native and microservices-based solutions. I have experience with technologies such as Docker, Kubernetes, Redis, Kafka, and Azure, and I'm passionate about software architecture, clean code, and building systems that are reliable, maintainable, and performant.
              </p>
              <p>
                I continuously learn and explore new technologies, driven by a passion for solving complex problems and creating impactful software.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section - Premium Animated Component */}
        <SkillsSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Dashboards */}
        <CommitsDashboard />
        <LeetCodeDashboard />

        {/* Contact Section */}
        <ContactSection />
      </div>
    </main>
  );
}

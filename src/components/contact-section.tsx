"use client";

import { motion } from "framer-motion";
import { Mail, Send, User, MessageSquare } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="w-full max-w-4xl mx-auto px-4 py-24 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
      >
        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-purple-600/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="text-center mb-10 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Get In Touch
          </h2>
          <p className="text-neutral-400 text-base md:text-lg max-w-xl mx-auto">
            Have a question, an opportunity, or just want to say hi? Drop me a message and I'll get back to you as soon as possible.
          </p>
        </div>

        <form 
          action="https://formsubmit.co/suhailaslam81@gmail.com" 
          method="POST" 
          className="relative z-10 flex flex-col gap-6 max-w-2xl mx-auto"
        >
          {/* Honeypot anti-spam field */}
          <input type="text" name="_honey" style={{ display: "none" }} />
          {/* Disable captcha */}
          <input type="hidden" name="_captcha" value="false" />
          {/* Success page routing (optional, keeping it default for now) */}
          <input type="hidden" name="_next" value={typeof window !== "undefined" ? window.location.href : ""} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-500 group-focus-within:text-blue-400 transition-colors">
                <User className="w-5 h-5" />
              </div>
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                required 
                className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all shadow-inner"
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-500 group-focus-within:text-purple-400 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                required 
                className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all shadow-inner"
              />
            </div>
          </div>

          <div className="relative group">
            <div className="absolute top-4 left-0 pl-4 pointer-events-none text-neutral-500 group-focus-within:text-emerald-400 transition-colors">
              <MessageSquare className="w-5 h-5" />
            </div>
            <textarea 
              name="message" 
              placeholder="Your Message" 
              required 
              rows={5}
              className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all shadow-inner resize-none"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="group flex items-center justify-center gap-2 bg-white text-black font-bold text-lg rounded-full py-4 px-8 mt-2 hover:bg-neutral-200 transition-colors shadow-xl shadow-white/10 w-full sm:w-auto sm:self-center"
          >
            Send Message
            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </form>
      </motion.div>
    </section>
  );
}

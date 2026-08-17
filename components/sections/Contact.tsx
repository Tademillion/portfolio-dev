"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { SectionWrapper } from "../shared/SectionWrapper";
import { Mail, MapPin, Send, MessageSquare, CheckCircle2, Linkedin, Github } from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.message) {
      const mailtoLink = `mailto:tedlamillionyou@gmail.com?subject=Message from ${encodeURIComponent(
        formData.name
      )}&body=${encodeURIComponent(formData.message)}`;

      window.location.href = mailtoLink;

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => setIsSubmitted(false), 4000);
    }
  };

  return (
    <SectionWrapper id="contact">
      <div className="max-w-6xl mx-auto space-y-14">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase bg-primary/10 text-primary border border-primary/25 mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight text-foreground">
            Let's Build Something <span className="gradient-text">Exceptional</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
            Have a project in mind, an opportunity to discuss, or looking for a skilled developer? Let's connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4">
            <a
              href="mailto:tedlamillionyou@gmail.com"
              className="flex items-start gap-4 p-5 rounded-2xl border border-border/80 bg-card hover:border-primary/50 shadow-sm hover:shadow-lg hover:shadow-primary/5 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20 shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono text-muted uppercase tracking-wider">
                  Direct Email
                </p>
                <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  tedlamillionyou@gmail.com
                </p>
              </div>
            </a>

            <div className="flex items-start gap-4 p-5 rounded-2xl border border-border/80 bg-card shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono text-muted uppercase tracking-wider">
                  Location
                </p>
                <p className="text-sm font-semibold text-foreground">
                  Addis Ababa, Ethiopia
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-border/80 bg-card shadow-sm space-y-3">
              <p className="text-xs font-mono text-muted uppercase tracking-wider">
                Professional Channels
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://www.linkedin.com/in/tade-million/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-muted/10 text-foreground border border-border/80 hover:border-primary/50 hover:text-primary transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-primary" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com/Tademillion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-muted/10 text-foreground border border-border/80 hover:border-primary/50 hover:text-primary transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-primary" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://t.me/AsresuM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-muted/10 text-foreground border border-border/80 hover:border-primary/50 hover:text-primary transition-colors"
                >
                  <FaTelegramPlane className="w-3.5 h-3.5 text-primary" />
                  <span>Telegram</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-3xl border border-border/80 bg-card shadow-sm space-y-5"
            >
              {isSubmitted && (
                <motion.div
                  className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-sm font-medium flex items-center gap-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Thank you! Your mail client has been opened.</span>
                </motion.div>
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-xs font-mono font-medium text-foreground uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border/80 bg-background/50 text-foreground placeholder:text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono font-medium text-foreground uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border/80 bg-background/50 text-foreground placeholder:text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-mono font-medium text-foreground uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Describe your project, timeline, or inquiry..."
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border/80 bg-background/50 text-foreground placeholder:text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm bg-primary text-primary-foreground hover:opacity-90 shadow-lg shadow-primary/20 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

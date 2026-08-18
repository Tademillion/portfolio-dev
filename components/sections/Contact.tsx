"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { SectionWrapper } from "../shared/SectionWrapper";
import { Mail, MapPin, Send, CheckCircle2, Linkedin, Github, Copy, Check, Sparkles } from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("tedlamillionyou@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.message) {
      const mailtoLink = `mailto:tedlamillionyou@gmail.com?subject=Project Inquiry from ${encodeURIComponent(
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
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground uppercase">
            Get in <span className="font-serif italic font-normal text-primary lowercase">Touch</span>
          </h2>
          <p className="text-sm sm:text-base text-muted max-w-lg font-light">
            Have a project in mind or interested in collaboration? Feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="p-7 rounded-3xl border border-border/80 bg-card shadow-sm space-y-6">
              <div className="space-y-2">
                <p className="text-xs uppercase font-medium text-muted">
                  Email Address
                </p>
                <div className="flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-muted/10 border border-border/60">
                  <span className="text-sm text-foreground font-medium truncate">
                    tedlamillionyou@gmail.com
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-card border border-border/80 hover:border-primary text-muted hover:text-primary transition-colors shrink-0 cursor-pointer"
                    aria-label="Copy email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs uppercase font-medium text-muted">
                  Location
                </p>
                <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-muted/10 border border-border/60 text-sm text-foreground">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <span>Addis Ababa, Ethiopia</span>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-border/60">
                <p className="text-xs uppercase font-medium text-muted">
                  Direct Channels
                </p>
                <div className="grid grid-cols-3 gap-2">
                  <a
                    href="https://www.linkedin.com/in/tade-million/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-3.5 rounded-2xl border border-border/80 bg-card hover:border-primary/50 hover:text-primary transition-colors text-muted text-xs font-medium gap-1.5"
                  >
                    <Linkedin className="w-4 h-4 text-primary" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href="https://github.com/Tademillion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-3.5 rounded-2xl border border-border/80 bg-card hover:border-primary/50 hover:text-primary transition-colors text-muted text-xs font-medium gap-1.5"
                  >
                    <Github className="w-4 h-4 text-primary" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href="https://t.me/AsresuM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-3.5 rounded-2xl border border-border/80 bg-card hover:border-primary/50 hover:text-primary transition-colors text-muted text-xs font-medium gap-1.5"
                  >
                    <FaTelegramPlane className="w-4 h-4 text-primary" />
                    <span>Telegram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-7 sm:p-8 rounded-3xl border border-border/80 bg-card shadow-sm space-y-4"
            >
              {isSubmitted && (
                <motion.div
                  className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs flex items-center gap-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Your email client has been opened with your message.</span>
                </motion.div>
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs uppercase font-medium text-muted">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-border/80 bg-background/50 text-foreground placeholder:text-muted focus:outline-none focus:border-primary text-sm transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs uppercase font-medium text-muted">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-border/80 bg-background/50 text-foreground placeholder:text-muted focus:outline-none focus:border-primary text-sm transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs uppercase font-medium text-muted">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Outline your project or inquiry..."
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-border/80 bg-background/50 text-foreground placeholder:text-muted focus:outline-none focus:border-primary text-sm transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-medium text-sm bg-foreground text-background dark:bg-primary dark:text-primary-foreground hover:opacity-90 shadow-lg shadow-black/5 dark:shadow-primary/20 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
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

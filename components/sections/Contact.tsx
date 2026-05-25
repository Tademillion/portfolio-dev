"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatedText } from "../shared/AnimatedText";
import { SectionWrapper } from "../shared/SectionWrapper";

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
      const mailtoLink = `mailto:tedlamillionyou@gmail.com?subject=Message from ${formData.name}&body=${formData.message}`;

      window.location.href = mailtoLink;

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <SectionWrapper id="contact">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={itemVariants as any}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            <AnimatedText text="Let's Work Together" />
          </h2>

          <motion.div
            className="h-1 w-16 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.div variants={itemVariants as any} className="space-y-8">
            <p className="text-foreground leading-relaxed">
              Whether you have a project in mind or just want to say hello, I'd
              love to hear from you.
            </p>

            <div className="space-y-5">
              <motion.a
                href="mailto:tedlamillionyou@gmail.com"
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 transition-all duration-300 hover:border-primary"
              >
                <div className="text-2xl">📧</div>

                <div>
                  <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                    Email
                  </p>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    tedlamillionyou@gmail.com
                  </p>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900"
              >
                <div className="text-2xl">📍</div>

                <div>
                  <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                    Location
                  </p>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900"
              >
                <div className="text-2xl">⏰</div>

                <div>
                  <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                    Availability
                  </p>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Open for freelance projects
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            variants={itemVariants as any}
            className="space-y-6"
          >
            {isSubmitted && (
              <motion.div
                className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-500 text-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Thank you for your message!
              </motion.div>
            )}

            <div>
              <label className="block mb-2 font-medium text-zinc-900 dark:text-zinc-100">
                Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-primary transition-colors duration-300"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-zinc-900 dark:text-zinc-100">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-primary transition-colors duration-300"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-zinc-900 dark:text-zinc-100">
                Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Your message..."
                required
                className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all duration-300"
            >
              Send Message
            </button>
          </motion.form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

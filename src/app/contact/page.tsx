"use client";

import { useState } from "react";
import { Send, Mail, MapPin, Phone, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Send to Next.js API route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Check if response is JSON
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        console.error("Non-JSON response:", text.substring(0, 100));
        throw new Error("Server returned non-JSON response");
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `HTTP error! status: ${response.status}`);
      }

      console.log("✅ Success:", data);

      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 3000);
    } catch (error) {
      console.error("❌ Form submission error:", error);
      setError(
        error instanceof Error
          ? error.message
          : "An error occurred. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-24 px-4 pb-12 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif font-light text-emerald-900 mb-4">
          Let&apos;s Connect
        </h1>
        <p className="text-xl text-emerald-800/70 max-w-2xl mx-auto">
          Interested in collaborating, have questions, or looking for a team
          leader? I&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Information */}
        <div className="lg:col-span-1">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl border border-emerald-200/50 p-8 shadow-lg">
            <h2 className="text-2xl font-medium text-emerald-900 mb-8">
              Get in Touch
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-100 rounded-xl">
                  <Mail className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <h3 className="font-medium text-emerald-900 mb-1">Email</h3>
                  <a
                    href="mailto:rami_samhouri@hotmail.com"
                    className="text-emerald-700 hover:text-emerald-900 transition-colors"
                  >
                    rami_samhouri@hotmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-100 rounded-xl">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-emerald-900 mb-1">Phone</h3>
                  <a
                    href="https://wa.me/60104250831"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-emerald-700 hover:text-emerald-900 transition-colors"
                  >
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-100 rounded-xl">
                  <MapPin className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <h3 className="font-medium text-emerald-900 mb-1">
                    Location
                  </h3>
                  <p className="text-emerald-700">
                    Open to Remote Work Worldwide or On-site Opportunities.
                  </p>
                  <p className="text-emerald-600 text-sm mt-1">
                    Based in Damascus
                  </p>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="mt-12 pt-8 border-t border-emerald-200/50">
              <h3 className="font-medium text-emerald-900 mb-4">
                Current Availability
              </h3>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="text-emerald-700">
                  Open to new opportunities
                </span>
              </div>
              <p className="text-emerald-600 text-sm mt-2">
                Typically respond within 24 hours
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl border border-emerald-200/50 p-8 shadow-lg">
            <h2 className="text-2xl font-medium text-emerald-900 mb-8">
              Send a Message
            </h2>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-100 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-medium text-emerald-900 mb-3">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-emerald-700">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-emerald-800 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-emerald-200/50 rounded-xl text-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                        placeholder="Name"
                      />
                    </div>

                    <div>
                      <label className="block text-emerald-800 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-emerald-200/50 rounded-xl text-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-emerald-800 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-emerald-200/50 rounded-xl text-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                      placeholder="Your Enquirey"
                    />
                  </div>

                  <div>
                    <label className="block text-emerald-800 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white border border-emerald-200/50 rounded-xl text-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-300 resize-none"
                      placeholder="Your message to me..."
                    />
                  </div>

                  {/* Error message */}
                  {error && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-xl">
                      <p className="text-red-600 text-sm">{error}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-emerald-600 text-sm text-center">
                    I respect your privacy and will never share your
                    information.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import {
  Award,
  Calendar,
  ExternalLink,
  Download,
  Search,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const certificates = [
  {
    id: 1,
    title: "Metasploit",
    issuer: "LinkedIn Learning",
    date: "2025",
    image: "/certificates/LinkedIn-cert (2).png",
    category: "Cybersecurity",
    skills: ["metsploit", "kali linux"],
  },
  {
    id: 2,
    title: "Burp Suite",
    issuer: "LinkedIn Learning",
    date: "2025",
    image: "/certificates/LinkedIn-cert (1).png",
    category: "Cybersecurity",
    skills: ["Kali linux", "Burp suite"],
  },
  {
    id: 3,
    title: "Laravel Essentials",
    issuer: "LinkedIn Learning",
    date: "2025",
    image: "/certificates/LinkedIn-cert (8).png",
    category: "Full Stack",
    skills: ["Laravel", "API", "Blade"],
  },
  {
    id: 4,
    title: "Laravel & React ",
    issuer: "LinkedIn Learning",
    date: "2025",
    image: "/certificates/LinkedIn-cert (22).png",
    category: "Full Stack",
    skills: ["Laravel", "React", "APIs"],
  },
  {
    id: 5,
    title: "Advanced Laravel",
    issuer: "LinkedIn Learning",
    date: "2025",
    image: "/certificates/LinkedIn-cert (25).png",
    category: "Full Stack",
    skills: ["REST APIs", "Authentication", "Eloquent ORM", "Laravel", "React"],
  },
  {
    id: 6,
    title: "Pentration Testing",
    issuer: "LinkedIn Learning",
    date: "2025",
    image: "/certificates/LinkedIn-cert (21).png",
    category: "Cybersecurity",
    skills: ["Kali linux", "Pen testing tools"],
  },
  {
    id: 7,
    title: "Cybersecurity Fundamentals",
    issuer: "LinkedIn Learning",
    date: "2025",
    image: "/certificates/LinkedIn-cert (17).png",
    category: "Cybersecurity",
    skills: ["Linux", "Pentration testing", "linux"],
  },
  {
    id: 8,
    title: "Cybersecurity Foundations",
    issuer: "LinkedIn Learning",
    date: "2025",
    image: "/certificates/LinkedIn-cert (20).png",
    category: "Cybersecurity",
    skills: ["Linux", "cybersecurity"],
  },
  {
    id: 9,
    title: "Kali Linux",
    issuer: "LinkedIn Learning",
    date: "2024",
    image: "/certificates/LinkedIn-cert (27).png",
    category: "Cybersecurity",
    skills: ["Linux", "Kali linux"],
  },
  {
    id: 10,
    title: "Azure administration",
    issuer: "LinkedIn Learning",
    date: "2025",
    image: "/certificates/LinkedIn-cert (24).png",
    category: "Cloud",
    skills: ["Azure administration"],
  },
  {
    id: 11,
    title: "Azure developer",
    issuer: "LinkedIn Learning",
    date: "2025",
    image: "/certificates/LinkedIn-cert (3).png",
    category: "Cloud",
    skills: ["Azure", "Azure developer"],
  },
  {
    id: 12,
    title: "Azure infrastructure",
    issuer: "LinkedIn Learning",
    date: "2025",
    image: "/certificates/LinkedIn-cert (13).png",
    category: "Cloud",
    skills: ["Azure", "infrastructure managment"],
  },
];

const categories = ["all", "Cloud", "Full Stack", "Cybersecurity"];

export default function CertificatesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCertificate, setSelectedCertificate] = useState<
    (typeof certificates)[0] | null
  >(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCertificate(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const filteredCertificates = certificates.filter((cert) => {
    const matchesCategory =
      selectedCategory === "all" || cert.category === selectedCategory;
    const matchesSearch =
      cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <div className="min-h-screen pt-32 px-4 pb-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif font-light text-emerald-900 mb-4">
            Certifications
          </h1>
          <p className="text-xl text-emerald-800/70 max-w-2xl mx-auto">
            skills and knowledge cultivated through dedicated learning
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-emerald-400" />
            <input
              type="text"
              placeholder="Search certificates by title, issuer, or skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/70 backdrop-blur-sm border border-emerald-200/50 rounded-2xl text-emerald-800 placeholder-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-xl border transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-emerald-500 text-white border-emerald-500 shadow-lg"
                    : "bg-white/70 border-emerald-200/50 text-emerald-800 hover:bg-emerald-50"
                }`}
              >
                <span className="font-medium capitalize">{category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-white/70 backdrop-blur-sm rounded-3xl border border-emerald-200/50 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Certificate Header */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-xl">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm rounded-full">
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-medium text-emerald-900 mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-emerald-700 mb-4">{cert.issuer}</p>

                  {/* Skills */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full border border-emerald-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Certificate Preview - CLICK TO OPEN MODAL */}
                <div
                  className="relative h-48 bg-gradient-to-br from-emerald-100 to-teal-100 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedCertificate(cert)}
                >
                  <img
                    src={cert.image}
                    alt={`${cert.title} certificate preview`}
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center p-4 bg-white/90 rounded-xl backdrop-blur-sm">
                      <Award className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                      <p className="text-emerald-800 text-sm font-medium">
                        View Full Certificate
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCertificates.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-emerald-100 flex items-center justify-center">
              <Award className="w-12 h-12 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-medium text-emerald-900 mb-3">
              No certificates found
            </h3>
            <p className="text-emerald-800/70 max-w-md mx-auto">
              {searchTerm
                ? `No certificates match "${searchTerm}". Try a different search term.`
                : `No certificates found in the ${selectedCategory} category.`}
            </p>
          </div>
        )}

        {/* Stats */}
        <div className="mt-16 pt-8 border-t border-emerald-200/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-medium text-emerald-900 mb-2">
                {certificates.length}
              </div>
              <div className="text-emerald-700">Total Certificates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-medium text-emerald-900 mb-2">
                {new Set(certificates.map((c) => c.issuer)).size}
              </div>
              <div className="text-emerald-700">Different Issuers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-medium text-emerald-900 mb-2">
                {new Set(certificates.flatMap((c) => c.skills)).size}
              </div>
              <div className="text-emerald-700">Unique Skills</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-medium text-emerald-900 mb-2">
                {new Date().getFullYear() -
                  Math.min(...certificates.map((c) => parseInt(c.date)))}
              </div>
              <div className="text-emerald-700">Years of Learning</div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center pt-20 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0, y: 20 }}
              animate={{ scale: 0.85, opacity: 1, y: 0 }}
              exit={{ scale: 0.7, opacity: 0, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl "
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header with Close Button */}
              <div className="sticky top-0 z-10 bg-white border-b border-emerald-200/50 px-6 py-4 flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-medium text-emerald-900">
                    {selectedCertificate.title}
                  </h3>
                  <p className="text-emerald-600 text-sm">
                    {selectedCertificate.issuer} • {selectedCertificate.date}
                  </p>
                </div>

                {/* Close Button (X) */}
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="p-2 hover:bg-emerald-100 rounded-xl text-emerald-700 transition-colors"
                  aria-label="Close certificate viewer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Full Certificate Image */}
              <div className="p-6 max-h-[70vh] overflow-auto">
                <img
                  src={selectedCertificate.image}
                  alt={`Full ${selectedCertificate.title} certificate`}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>

              {/* Modal Footer */}
              <div className="border-t border-emerald-200/50 px-6 py-4 bg-emerald-50/50">
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                  <div className="text-emerald-700">
                    <span className="text-sm">Category: </span>
                    <span className="font-medium">
                      {selectedCertificate.category}
                    </span>
                  </div>
                </div>

                {/* Skills in Modal */}
                <div className="mt-4">
                  <p className="text-emerald-700 mb-2">Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedCertificate.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-white text-emerald-700 text-sm rounded-full border border-emerald-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Close hint */}
                <p className="text-center text-emerald-600 text-sm mt-4">
                  Click outside or press ESC to close
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

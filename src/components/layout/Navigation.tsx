"use client";

import Link from "next/link";
import { useState } from "react";
import { Home, Mail, FileText, FolderGit2, Award, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "/", icon: <Home className="w-4 h-4" /> },
  {
    name: "Projects",
    href: "/projects",
    icon: <FolderGit2 className="w-4 h-4" />,
  },
  {
    name: "Certificates",
    href: "/certificates",
    icon: <Award className="w-4 h-4" />,
  },
  { name: "Contact", href: "/contact", icon: <Mail className="w-4 h-4" /> },
  { name: "Resume", href: "/resume", icon: <FileText className="w-4 h-4" /> },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:block mb-4">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-2xl border border-emerald-200/50 shadow-lg"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group flex items-center gap-2 px-4 py-2 text-emerald-800 hover:text-emerald-600 transition-colors"
            >
              <span className="group-hover:scale-110 transition-transform">
                {item.icon}
              </span>
              <span className="font-medium">{item.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </motion.div>
      </nav>

      {/* Mobile Navigation Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 md:hidden p-3 bg-white/70 backdrop-blur-sm rounded-xl border border-emerald-200/50 shadow-lg"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-emerald-800" />
        ) : (
          <Menu className="w-6 h-6 text-emerald-800" />
        )}
      </button>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 right-6 z-40 md:hidden"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-emerald-200/50 shadow-xl p-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-emerald-800 hover:bg-emerald-50 rounded-xl transition-colors"
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

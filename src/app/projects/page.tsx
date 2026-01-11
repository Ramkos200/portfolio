"use client";

import { useState, useRef } from "react";
import {
  ExternalLink,
  Github,
  Video,
  Image,
  Filter,
  Play,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Multi Vendor E-Commerce Platform",
    description:
      "Sustainable e-commerce platform with multivendor with payment gateway (stripe) integration",
    category: "fullstack",
    tags: ["React", "filament", "laravel", "TypeScript", "Stripe", "MySQL"],
    image: "/projects/multivendor-ecom.jpg",
    video: "/projects/multivendor-ecom.mp4",
    github: "https://github.com/Ramkos200",
    featured: true,
  },
  // {
  //   id: 2,
  //   title: "Health & Wellness SPA Dashboard",
  //   description:
  //     "Interactive dashboard for health tracking with AI recommendations",
  //   category: "fullstack",
  //   tags: ["React", "laravel", "TypeScript", "MySQL"],
  //   image: "/projects/spa.jpg",
  //   video: "/projects/spa.mp4",
  //   github: "https://github.com/Ramkos200",
  //   featured: true,
  // },
  {
    id: 3,
    title: "Simple Notes tracking website",
    description: "Virtual reality property tours with 3D visualization",
    category: "fullstack",
    tags: ["Blade", "laravel", "Tailwind", "MySQL"],
    image: "/projects/mynotes.jpg",
    video: "/projects/mynotes.mp4",
    github: "https://github.com/Ramkos200",
  },
  {
    id: 4,
    title: "My Gym website",
    description:
      "Educational platform with video courses and progress tracking",
    category: "fullstack",
    tags: ["Blade", "laravel", "Tailwind", "MySQL"],
    image: "/projects/mygym.jpg",
    video: "/projects/mygym.mp4",
    github: "https://github.com/Ramkos200",
  },
  {
    id: 5,
    title: "E-commerce website",
    description: "Dashboard & user interface, no payment gateway",
    category: "fullstack",
    tags: ["React", "Blade", "laravel", "Tailwind", "MySQL", "API"],
    image: "/projects/e-commerce-website.jpg",
    video: "/projects/e-commerce-website.mp4",
    github: "https://github.com/Ramkos200",
  },
  {
    id: 6,
    title: "Task Manager website",
    description: "Create to do list and organize tasks",
    category: "fullstack",
    tags: ["Blade", "laravel", "Tailwind", "MySQL"],
    image: "/projects/smart-task-manager.jpg",
    video: "/projects/smart-task-manager.mp4",
    github: "https://github.com/Ramkos200",
  },
];

const categories = ["all", "frontend", "fullstack", "mobile"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [videoModalOpen, setVideoModalOpen] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  // Handle video hover
  const handleVideoPlay = (projectId: number) => {
    const video = videoRefs.current[projectId];
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Auto-play prevented:", error);
        });
      }
    }
  };

  const handleVideoPause = (projectId: number) => {
    const video = videoRefs.current[projectId];
    if (video) {
      video.pause();
    }
  };

  const setVideoRef = (projectId: number) => (el: HTMLVideoElement | null) => {
    videoRefs.current[projectId] = el;
  };

  // Handle video modal
  const openVideoModal = (projectId: number) => {
    setVideoModalOpen(projectId);
  };

  const closeVideoModal = () => {
    setVideoModalOpen(null);
  };

  // Get current video project
  const getCurrentVideoProject = () => {
    return projects.find((p) => p.id === videoModalOpen);
  };

  return (
    <div className="min-h-screen pt-24 px-4 pb-12 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif font-light text-emerald-900 mb-4">
          My Digital Gardens
        </h1>
        <p className="text-xl text-emerald-800/70 max-w-2xl mx-auto">
          Projects I&apos;ve cultivated with care and attention to detail
        </p>
        <p className="text-md text-emerald-800/70 max-w-xl mx-auto">
          These are my personal projects, other projects aren't listed here for
          NDA.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border transition-all duration-300 ${
              selectedCategory === category
                ? "bg-emerald-500 text-white border-emerald-500 shadow-lg"
                : "bg-white/70 border-emerald-200/50 text-emerald-800 hover:bg-emerald-50"
            }`}
          >
            <Filter className="w-4 h-4" />
            <span className="font-medium capitalize">{category}</span>
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl border border-emerald-200/50 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-gradient-to-r from-amber-400 to-orange-400 text-white text-xs font-semibold rounded-full">
                    Featured
                  </div>
                )}

                {/* Image with Play Button Overlay */}
                <div className="relative h-56 bg-gradient-to-br from-emerald-100 to-teal-100 overflow-hidden cursor-pointer">
                  {project.video ? (
                    <>
                      {/* Project Image */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />

                      {/* Play Button Overlay appears on hover */}
                      <div
                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                        onClick={() => openVideoModal(project.id)}
                      >
                        <motion.button
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-4 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-300"
                          aria-label="Play video demo"
                        >
                          <Play className="w-8 h-8 text-emerald-700 fill-emerald-700" />
                        </motion.button>
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Image className="w-16 h-16 text-emerald-300" />
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-medium text-emerald-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-emerald-800/70 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full border border-emerald-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-emerald-700 hover:text-emerald-900 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm">Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Video Modal  */}
      <AnimatePresence>
        {videoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={closeVideoModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-3xl bg-white rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-emerald-50 to-teal-50 border-b">
                <div className="max-w-[90%]">
                  <h2 className="text-lg font-bold text-emerald-900 truncate">
                    {getCurrentVideoProject()?.title}
                  </h2>
                  <p className="text-emerald-700/70 text-xs truncate">
                    {getCurrentVideoProject()?.description}
                  </p>
                </div>
                <button
                  onClick={closeVideoModal}
                  className="p-1.5 hover:bg-white/80 rounded-full transition-colors shrink-0"
                  aria-label="Close video modal"
                >
                  <X className="w-5 h-5 text-emerald-700" />
                </button>
              </div>

              {/* Video Player */}
              <div className="relative bg-black">
                <video
                  className="w-full h-auto max-h-[80vh]"
                  controls
                  autoPlay
                  poster={getCurrentVideoProject()?.image}
                >
                  <source
                    src={getCurrentVideoProject()?.video}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Modal Footer  */}
              <div className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 border-t">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {getCurrentVideoProject()?.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-white text-emerald-700 text-xs rounded-full border border-emerald-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-end">
                  <a
                    href={getCurrentVideoProject()?.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 text-white text-sm rounded-lg hover:bg-emerald-700 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <h2 className="text-3xl font-medium text-emerald-900 mb-4">
                  {projects.find((p) => p.id === selectedProject)?.title}
                </h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 text-emerald-700 hover:bg-emerald-100 rounded-xl"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-emerald-100 flex items-center justify-center">
            <Filter className="w-12 h-12 text-emerald-400" />
          </div>
          <h3 className="text-2xl font-medium text-emerald-900 mb-3">
            No projects found
          </h3>
          <p className="text-emerald-800/70 max-w-md mx-auto">
            No projects match the selected category. Try choosing a different
            filter or check back soon for new additions!
          </p>
        </div>
      )}
    </div>
  );
}

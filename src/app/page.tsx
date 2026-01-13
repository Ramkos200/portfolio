import { AnimatedText } from "@/components/ui/AnimatedText";
import { Users, Code, Rocket } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 text-emerald-900 pt-8">
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
            {/* Profile Photo */}
            <div className="lg:w-1/3 flex flex-col items-center">
              <div className="relative w-48 h-48 lg:w-64 lg:h-64 mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 animate-pulse opacity-20"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  {
                    <Image
                      src="/profile-photo.jpg"
                      alt="Profile Photo"
                      fill
                      className="object-cover object-top"
                      priority
                      sizes="(max-width: 768px) 192px, 256px"
                    />
                  }
                </div>

                {/* Decoration */}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 animate-bounce"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 animate-ping"></div>
              </div>

              <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
                {[
                  { label: "Experience", value: "15+ Years" },
                  { label: "Teams Led", value: "3+" },
                  { label: "Projects", value: "10+" },
                  { label: "Efficiency", value: "99.9%" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-emerald-200/50"
                  >
                    <div className="text-lg font-bold text-emerald-700">
                      {stat.value}
                    </div>
                    <div className="text-xs text-emerald-600 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <span className="m-2 inline-block px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full text-sm font-medium">
                  Team Leader, Customer delivery & more
                </span>
              </div>

              {/* Action Btn */}
              <div className="mt-8 flex flex-col gap-3 w-full">
                <a
                  href="/contact"
                  className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 text-center"
                >
                  Get In Touch
                </a>
                <a
                  href="/resume"
                  className="px-6 py-3 bg-white/80 border border-emerald-300 text-emerald-700 rounded-xl font-medium hover:bg-white transition-all duration-300 text-center"
                >
                  View Resume
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="lg:w-2/3">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-light mb-8 leading-tight">
                <div className="text-emerald-700/80">
                  <AnimatedText text="Engineering Leader" delay={0.1} />
                </div>
                <div className="text-emerald-900">
                  <AnimatedText text="MHD.Rami Samhouri" delay={0.3} />
                </div>
              </h1>

              <p className="text-xl text-emerald-800/70 leading-relaxed mb-12 font-serif">
                Leading high-performing engineering teams to build{" "}
                <span className="font-medium text-emerald-900">scalable</span>{" "}
                and <span className="font-medium text-emerald-900">robust</span>{" "}
                software solutions—transforming complex challenges into{" "}
                <span className="font-medium text-emerald-900">
                  elegant code
                </span>
                .
              </p>

              {/* Actionbtn */}
              <div className="flex flex-wrap gap-4 mb-12 lg:hidden">
                <a
                  href="/contact"
                  className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Get In Touch
                </a>
                <a
                  href="/resume"
                  className="px-6 py-3 bg-white/80 border border-emerald-300 text-emerald-700 rounded-xl font-medium hover:bg-white transition-all duration-300"
                >
                  View Resume
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Users />,
                    title: "Team Leadership",
                    desc: "Mentoring Engineers, fostering collaboration, and driving excellence",
                    color: "from-emerald-400 to-emerald-600",
                    metrics: "15+ team memebers led",
                  },
                  {
                    icon: <Code />,
                    title: "E2E testing",
                    desc: "Agile methodologies, CI/CD pipelines, Ensuring robust systems, Test reviews, and ensuring best practices",
                    color: "from-teal-400 to-teal-600",
                    metrics: "10+ projects architected",
                  },
                  {
                    icon: <Rocket />,
                    title: "Demos Delivery",
                    desc: "Pre-sales costumer meetings, Exhebitions demos",
                    color: "from-cyan-400 to-cyan-600",
                    metrics: "99.9% uptime delivered",
                  },
                ].map((principle) => (
                  <div
                    key={principle.title}
                    className="group relative p-6 bg-white/40 backdrop-blur-sm rounded-3xl border border-white/60 hover:shadow-xl transition-all duration-500 hover:scale-105 text-center"
                  >
                    {/* effect */}
                    <div
                      className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${principle.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />

                    <div
                      className={`p-3 rounded-2xl bg-gradient-to-r ${principle.color} w-fit mb-6 text-white mx-auto`}
                    >
                      {principle.icon}
                    </div>
                    <h3 className="text-xl font-serif font-medium mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-emerald-800/70 mb-4 text-sm">
                      {principle.desc}
                    </p>

                    {/* Metrics badge */}
                    <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-sm rounded-full border border-emerald-200">
                      {principle.metrics}
                    </div>

                    {/* divider */}
                    <div className="mt-6">
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-300/50 to-transparent" />
                      <div className="w-1/2 h-1 mx-auto bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Stack - Full width section underneath */}
          <div className="mt-20 pt-10 border-t border-emerald-200/50">
            <h3 className="text-3xl font-medium text-emerald-900 mb-8 text-center">
              Technical Stack & Methodologies
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Agile/Scrum",
                "React",
                "TypeScript",
                "CI/CD",
                "Team Mentoring",
                "Code Reviews",
                "Technical Debt Management",
                "Performance Optimization",
                "Testing Strategies",
                "System Design",
                "Cloud",
                "API Design",
                "Web Development",
                "Project Management",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-5 py-3 bg-white/70 border border-emerald-200/70 text-emerald-800 rounded-xl hover:bg-white hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Button - Centered and full width */}
          <div className="mt-16 text-center pb-4">
            <a
              href="/projects"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl font-medium hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg"
            >
              <span>Explore My Own Projects</span>
              <span className="group-hover:translate-x-2 transition-transform duration-300">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-r from-emerald-200/30 to-teal-200/20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-r from-cyan-200/30 to-emerald-200/20 blur-3xl"></div>
        </div>
      </section>
    </main>
  );
}

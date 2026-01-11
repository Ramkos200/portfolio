import { AnimatedText } from "@/components/ui/AnimatedText";
import { Users, Code, Rocket, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 text-emerald-900">
      {/* hero */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="relative z-10 max-full mx-auto text-center mt-8">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-light mb-8 leading-tight">
            <div className="text-emerald-700/80">
              <AnimatedText text="Engineering Leader" delay={0.1} />
            </div>
            <div className="text-emerald-900">
              <AnimatedText text="Rami Samhouri" delay={0.3} />
            </div>
          </h1>

          <p className="text-xl text-emerald-800/70 max-w-2xl leading-relaxed mb-16 font-serif mx-auto">
            Leading high-performing engineering teams to build{" "}
            <span className="font-medium text-emerald-900">scalable</span> and{" "}
            <span className="font-medium text-emerald-900">robust</span>{" "}
            software solutions—transforming complex challenges into{" "}
            <span className="font-medium text-emerald-900">elegant code</span>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Users />,
                title: "Team Leadership",
                desc: "Mentoring developers, fostering collaboration, and driving technical excellence",
                color: "from-emerald-400 to-emerald-600",
                metrics: "5+ teams led",
              },
              {
                icon: <Code />,
                title: "Technical Architecture",
                desc: "Designing robust systems, code reviews, and ensuring best practices",
                color: "from-teal-400 to-teal-600",
                metrics: "10+ projects architected",
              },
              {
                icon: <Rocket />,
                title: "Delivery & Scalability",
                desc: "Agile methodologies, CI/CD pipelines, and scalable system design",
                color: "from-cyan-400 to-cyan-600",
                metrics: "99.9% uptime maintained",
              },
            ].map((principle) => (
              <div
                key={principle.title}
                className="group relative p-8 bg-white/40 backdrop-blur-sm rounded-3xl border border-white/60 hover:shadow-xl transition-all duration-500 hover:scale-105 text-center"
              >
                {/* effect */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${principle.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <div
                  className={`p-4 rounded-2xl bg-gradient-to-r ${principle.color} w-fit mb-6 text-white mx-auto`}
                >
                  {principle.icon}
                </div>
                <h3 className="text-2xl font-serif font-medium mb-3">
                  {principle.title}
                </h3>
                <p className="text-emerald-800/70 mb-4">{principle.desc}</p>

                {/* Metrics badge */}
                <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-sm rounded-full border border-emerald-200">
                  {principle.metrics}
                </div>

                {/*  divider */}
                <div className="mt-6">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-300/50 to-transparent" />
                  <div className="w-1/2 h-1 mx-auto bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <h3 className="text-2xl font-medium text-emerald-900 mb-6">
              Technical Stack & Methodologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
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
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/60 border border-emerald-200/50 text-emerald-800 rounded-xl hover:bg-white transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center mb-4">
            <a
              href="/projects"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl font-medium hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span>Explore My Own Projects</span>
              <span className="group-hover:translate-x-2 transition-transform duration-300">
                →
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

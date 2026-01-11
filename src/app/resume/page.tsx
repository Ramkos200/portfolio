"use client";

import {
  Download,
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  Code,
  Server,
  Users,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ResumePage() {
  const experiences = [
    {
      year: "2024 – 2025",
      role: "Senior Network Infrastructure & IT Manager",
      company: "NOKIA",
      location: "India/Malaysia (Remote)",
      description:
        "Led cross-functional teams in deploying scalable IT infrastructure solutions across APAC region. Spearheaded Proof of Concept (PoC) initiatives and optical network demonstrations for enterprise clients in India, Taiwan, Indonesia, and Malaysia. Managed customer project delivery from requirements to implementation.",
      highlights: [
        "Directed network engineering teams in deploying Nokia hardware/software solutions",
        "Orchestrated optical network demos (1830 PSS, PSI-M) for pre-sales engagements",
        "Bridged R&D innovations with market needs through customer-centric PoC support",
      ],
    },
    {
      year: "2020 – 2024",
      role: "New Product Introduction (NPI) Engineer",
      company: "NOKIA",
      location: "China",
      description:
        "Managed high-performance optical network demonstrations (200G–800G) that consistently outperformed competitors in lab evaluations. Maintained continuous customer engagement and delivered comprehensive technical analysis for product lifecycle optimization.",
      highlights: [
        "Led 200G-800G optical demos achieving superior performance metrics",
        "Drove customer requirements from conception to implementation",
        "Delivered post-demo technical analysis and strategic recommendations",
      ],
    },
    {
      year: "2015 – 2020",
      role: "Test Automation Team Lead",
      company: "NOKIA",
      location: "China",
      description:
        "Pioneered test automation initiatives by collaborating with development teams to design Python-based testing frameworks. Automated 95% of regression tests and implemented CI/CD pipelines that improved QA efficiency by 60%.",
      highlights: [
        "Developed Python/Robot Framework scripts for automated testing",
        "Implemented Continuous Regression Testing (CRT) via CI/CD pipelines",
        "Managed resource allocation and risk mitigation for automation projects",
      ],
    },
    {
      year: "2013 – 2015",
      role: "Manual Test Engineer",
      company: "NOKIA",
      location: "China",
      description:
        "Designed and executed 200+ comprehensive test cases aligned with technical specifications and release timelines. Ensured product quality through rigorous feature validation and system testing.",
      highlights: [
        "Created extensive test case libraries covering diverse scenarios",
        "Aligned testing strategies with technical specifications",
        "Maintained rigorous quality standards for product releases",
      ],
    },
    {
      year: "2011 – 2013",
      role: "Customer Support Engineer",
      company: "NOKIA",
      location: "Syria",
      description:
        "Administered NetManager for fixed networks infrastructure and trained 50+ users on system operations. Provided technical support and system optimization for telecommunications networks.",
      highlights: [
        "Managed NetManager administration for fixed networks",
        "Trained 10+ users on system operations and best practices",
        "Provided expert technical support and troubleshooting",
      ],
    },
    {
      year: "2010 – 2011",
      role: "Production Manager",
      company: "TRIVIEW",
      location: "Syria",
      description:
        "Optimized LCD television production workflows, reducing manufacturing defects by 15% through process improvements and quality control enhancements.",
      highlights: [
        "Streamlined production workflows for LCD television manufacturing",
        "Reduced defect rates by 15% through quality control initiatives",
        "Improved operational efficiency in electronics production",
      ],
    },
  ];

  const education = [
    {
      degree: "BSc, Information & Telecommunication Engineering",
      school: "Higher Institute of Applied Science and Technology (HIAST)",
      year: "2009",
    },
    {
      degree: "Azure Administrator & Cloud",
      school: "LinkedIn Learning Certifications",
      year: "2025 - Present",
    },
    {
      degree: "Cybersecurity Foundations",
      school: "LinkedIn Learning Certifications",
      year: "2025 - Present",
    },
    {
      degree: "Full Stack Development",
      school: "Advanced Web Technologies",
      year: "2025 - Present",
    },
  ];

  const certifications = [
    {
      name: "PMP Fundamentals",
      issuer: "LinkedIn",
    },
    {
      name: "Digital Marketing & SEO",
      issuer: "LinkedIn",
    },
    {
      name: "Web Design Specialist",
      issuer: "LinkedIn",
    },
    {
      name: "Photography & Video Editing",
      issuer: "LinkedIn",
    },
  ];

  const technicalSkills = [
    {
      category: "Cloud & Infrastructure",
      items: [
        "Azure Administration",
        "VMware ESXi",
        "Proxmox",
        "Windows Server",
        "Active Directory",
      ],
      icon: <Server className="w-5 h-5" />,
    },
    {
      category: "Full Stack Development",
      items: ["Laravel 12", "PHP", "React", "Next.js", "TypeScript", "MySQL"],
      icon: <Code className="w-5 h-5" />,
    },
    {
      category: "Networking & Automation",
      items: [
        "Nokia 1830 PSS",
        "Python",
        "Robot Framework",
        "CI/CD",
        "Test Automation",
      ],
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      category: "Security & Virtualization",
      items: [
        "Kali Linux",
        "Ubuntu",
        "Ethical Hacking",
        "Penetration Testing",
        "Virtualization",
      ],
      icon: <Server className="w-5 h-5" />,
    },
    {
      category: "Project Management",
      items: [
        "Agile Methodologies",
        "Stakeholder Management",
        "Resource Allocation",
        "Risk Mitigation",
      ],
      icon: <Users className="w-5 h-5" />,
    },
  ];

  const languages = [
    { language: "English", level: "Fluent", proficiency: "Professional" },
    { language: "Arabic", level: "Native", proficiency: "Native Speaker" },
    { language: "Chinese", level: "Basic", proficiency: "Conversational" },
  ];

  const achievements = [
    {
      title: "Q2 Network Infrastructure Star Award",
      description: "Recognized for excellence in Fiber Sensing Demo execution",
    },
    {
      title: "Multi-Time Software Bug Hunting Excellence",
      description:
        "Awarded multiple times for identifying critical software issues",
    },
    {
      title: "Process Optimization Excellence",
      description: "Reduced manufacturing defects by 15% at TRIVIEW",
    },
  ];

  return (
    <div className="min-h-screen pt-24 px-4 pb-12 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif font-light text-emerald-900 mb-4">
          Professional Profile
        </h1>
        <p className="text-xl text-emerald-800/70 max-w-2xl mx-auto">
          Global expertise in IT infrastructure, telecommunications,Team
          Leading, Web development
        </p>
      </div>

      {/* Resume Container */}
      <div className="bg-white/70 backdrop-blur-sm rounded-3xl border border-emerald-200/50 shadow-xl p-8 md:p-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-medium text-emerald-900">
              MHD.Rami Samhouri
            </h2>
            <p className="text-emerald-700 mt-2">
              Senior IT & Network Infrastructure Manager
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex items-center gap-2 text-emerald-700">
                <Briefcase className="w-4 h-4" />
                <span>15+ Years Global Experience</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-700">
                <MapPin className="w-4 h-4" />
                <span>APAC Region </span>
              </div>
              <div className="flex items-center gap-2 text-emerald-700">
                <Users className="w-4 h-4" />
                <span>Cross-functional Team Leadership</span>
              </div>
            </div>
          </div>

          <a
            href="/resume.pdf"
            download
            className="mt-6 md:mt-0 group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Download className="w-5 h-5" />
            <span className="font-medium">Download PDF Resume</span>
          </a>
        </div>

        {/* Professional Summary */}
        <div className="mb-12 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200/30">
          <h3 className="text-xl font-medium text-emerald-900 mb-4">
            Professional Summary
          </h3>
          <p className="text-emerald-800/70 leading-relaxed">
            Results-driven Senior IT & Network Infrastructure Manager with 15+
            years of global expertise in telecommunications, optical networks,
            and project delivery. Experienced in leading cross-functional teams,
            managing PoC initiatives, and delivering scalable IT solutions in
            multi-vendor environments. Adept at bridging R&D with market needs,
            optimizing product lifecycles, and driving customer requirements
            toward implementation. Strong background in test automation, project
            management, and service delivery across APAC region.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-12">
          <h3 className="text-2xl font-medium text-emerald-900 mb-8 flex items-center gap-3">
            <Briefcase className="w-6 h-6" />
            Professional Experience
          </h3>

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-emerald-300/50"
              >
                <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-emerald-400 border-4 border-white" />
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-3">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                    {exp.year}
                  </span>
                  <h4 className="text-xl font-medium text-emerald-900">
                    {exp.role}
                  </h4>
                </div>
                <div className="flex items-center gap-2 text-emerald-700 mb-4">
                  <span className="font-medium">{exp.company}</span>
                  <span>•</span>
                  <span className="text-emerald-600">{exp.location}</span>
                </div>
                <p className="text-emerald-800/70 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                {exp.highlights && (
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-emerald-800"
                      >
                        <span className="text-emerald-500 mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-medium text-emerald-900 mb-8">
            Core Competencies & Technical Skills
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="p-6 bg-white/50 border border-emerald-200/30 rounded-2xl hover:border-emerald-300/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-emerald-100 rounded-lg">
                    {skillGroup.icon}
                  </div>
                  <h4 className="text-lg font-medium text-emerald-900">
                    {skillGroup.category}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-2 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 hover:bg-emerald-100 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-medium text-emerald-900 mb-6 flex items-center gap-3">
                <GraduationCap className="w-6 h-6" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="p-5 bg-emerald-50/50 rounded-2xl border border-emerald-200/30"
                  >
                    <h4 className="text-lg font-medium text-emerald-900 mb-2">
                      {edu.degree}
                    </h4>
                    <div className="flex items-center justify-between text-emerald-700">
                      <span className="font-medium">{edu.school}</span>
                      <span className="text-sm bg-emerald-100 px-2 py-1 rounded">
                        {edu.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-medium text-emerald-900 mb-6 flex items-center gap-3">
                <Award className="w-6 h-6" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="p-5 bg-emerald-50/50 rounded-2xl border border-emerald-200/30"
                  >
                    <h4 className="text-lg font-medium text-emerald-900 mb-2">
                      {cert.name}
                    </h4>
                    <div className="flex items-center justify-between text-emerald-700">
                      <span className="font-medium">{cert.issuer}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Languages & Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Languages */}
          <div>
            <h3 className="text-2xl font-medium text-emerald-900 mb-6">
              Languages
            </h3>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className="p-5 bg-white/50 border border-emerald-200/30 rounded-2xl"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-emerald-900">
                      {lang.language}
                    </h4>
                    <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-sm rounded">
                      {lang.level}
                    </span>
                  </div>
                  <p className="text-emerald-700 text-sm">{lang.proficiency}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-medium text-emerald-900 mb-6 flex items-center gap-3">
              <Award className="w-6 h-6" />
              Key Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="p-5 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/30 rounded-2xl"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-emerald-900">
                      {achievement.title}
                    </h4>
                  </div>
                  <p className="text-emerald-700">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mb-12 p-6 bg-white/50 border border-emerald-200/30 rounded-2xl">
          <h3 className="text-2xl font-medium text-emerald-900 mb-6">
            Professional Soft Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Stakeholder Communication",
              "Emotional Intelligence",
              "Strategic Decision-Making",
              "Cross-functional Team Leadership",
              "Customer-Centric Mindset",
              "Problem-Solving Orientation",
              "Agile Project Management",
              "Risk Assessment & Mitigation",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 hover:bg-emerald-100 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 pt-8 border-t border-emerald-200/50 text-center">
          <p className="text-emerald-800/70 mb-6 text-lg">
            Ready to leverage 15+ years of IT infrastructure expertise and
            full-stack development skills for your organization?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Schedule a Consultation
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
            <a
              href="mailto:rami_samhouri@hotmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white border border-emerald-300 text-emerald-700 rounded-xl hover:bg-emerald-50 transition-colors"
            >
              Email Directly
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

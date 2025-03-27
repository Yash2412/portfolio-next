"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Code, Package, Server, Workflow } from "lucide-react";

// Experience data with more details and icons
const experiences = [
  {
    title: "Project Lead",
    company: "314e Corporation",
    location: "Bangalore",
    period: "January 2025 - Present",
    description:
      "Leading a new project, overseeing frontend, backend (Rust), database architecture, and Kubernetes deployments.",
    responsibilities: [
      "Designing scalable database schemas for multi-tenant architecture",
      "Implementing CI/CD pipelines for seamless deployment",
      "Coordinating cross-functional teams across frontend, backend, and infrastructure",
      "Making architectural decisions for long-term scalability and performance",
    ],
    skills: ["Rust", "Kubernetes", "CI/CD", "Architecture", "Team Leadership"],
    icon: <Workflow className="h-6 w-6" />,
  },
  {
    title: "Frontend Lead",
    company: "314e Corporation",
    location: "Bangalore",
    period: "Dec 2023 - Dec 2024",
    description:
      "Led the frontend team in developing and optimizing web and mobile app journeys across 2 SaaS products.",
    responsibilities: [
      "Built a cross-platform mobile app with React Native, Expo, and Material UI",
      "Architected Micro Frontend Architecture for modular builds and independent deployments",
      "Improved UI performance, reducing First Contentful Paint by 65%",
      "Managed a TurboRepo monorepo with Storybook and Atomic Design pattern",
      "Configured Webpack, Vite, PNPM, GitHub Actions for optimized builds",
      "Contributed to open-source tools including Apache Superset and OHIF DICOM Viewer",
      "Conducted peer code reviews and mentored engineers",
    ],
    skills: [
      "React.js",
      "React Native",
      "TypeScript",
      "Micro Frontends",
      "TurboRepo",
      "Performance Optimization",
    ],
    icon: <Code className="h-6 w-6" />,
  },
  {
    title: "Software Engineer",
    company: "314e Corporation",
    location: "Bangalore",
    period: "June 2022 - December 2023",
    description:
      "Developed frontend features using React.js and TypeScript, managed application state using React Query, Redux, and Zustand.",
    responsibilities: [
      "Integrated REST APIs and collaborated with backend teams for seamless data flow",
      "Leveraged Ant Design, TailwindCSS, and Styled Components for UI development",
      "Wrote over 200 end-to-end test cases using Playwright and unit tests with Vitest/Jest",
      "Participated in agile ceremonies and contributed to product roadmap discussions",
    ],
    skills: [
      "React.js",
      "TypeScript",
      "Redux",
      "Zustand",
      "React Query",
      "Testing",
    ],
    icon: <Package className="h-6 w-6" />,
  },
];

export default function ExperienceSection() {
  const [activeExperience, setActiveExperience] = useState(0);

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Work Experience</h2>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Timeline navigation */}
          <div className="lg:col-span-4">
            <div className="space-y-1 sticky top-20">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveExperience(index)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center gap-3 ${
                    activeExperience === index
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-secondary"
                  }`}
                >
                  <div
                    className={`p-2 rounded-full ${
                      activeExperience === index
                        ? "bg-primary-foreground/20"
                        : "bg-primary/10"
                    }`}
                  >
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="font-medium">{exp.title}</h3>
                    <p
                      className={`text-sm ${
                        activeExperience === index
                          ? "text-primary-foreground/80"
                          : "text-muted-foreground"
                      }`}
                    >
                      {exp.company} • {exp.period}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Experience details */}
          <div className="lg:col-span-8">
            <Card className="border-2 border-primary/10 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-primary/80 to-primary/20"></div>
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold">
                      {experiences[activeExperience].title}
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      {experiences[activeExperience].period}
                    </Badge>
                  </div>
                  <p className="text-primary font-medium">
                    {experiences[activeExperience].company},{" "}
                    {experiences[activeExperience].location}
                  </p>
                </div>

                <p className="mb-6 text-lg">
                  {experiences[activeExperience].description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-lg flex items-center gap-2">
                    <Briefcase className="h-4 w-4" /> Key Responsibilities
                  </h4>
                  <ul className="space-y-2 pl-6 list-disc">
                    {experiences[activeExperience].responsibilities.map(
                      (resp, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          className="text-muted-foreground"
                        >
                          {resp}
                        </motion.li>
                      )
                    )}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-lg flex items-center gap-2">
                    <Server className="h-4 w-4" /> Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experiences[activeExperience].skills.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                      >
                        <Badge variant="secondary" className="text-sm py-1">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

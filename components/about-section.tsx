"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Lightbulb, Zap, Rocket, MapPin } from "lucide-react"

const highlights = [
  {
    title: "Frontend Specialist",
    description:
      "Expert in React.js, Next.js, and React Native with a focus on performance optimization and responsive design.",
    icon: <Code className="h-5 w-5" />,
  },
  {
    title: "Problem Solver",
    description:
      "Analytical thinker with strong debugging skills and a passion for finding elegant solutions to complex problems.",
    icon: <Lightbulb className="h-5 w-5" />,
  },
  {
    title: "Performance Optimizer",
    description: "Reduced First Contentful Paint by 65% using advanced techniques like NDJSON streaming and IndexedDB.",
    icon: <Zap className="h-5 w-5" />,
  },
  {
    title: "Open Source Contributor",
    description: "Active contributor to projects like Apache Superset, Kestra, and OHIF DICOM Viewer.",
    icon: <Rocket className="h-5 w-5" />,
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About Me</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary mb-2">
                <MapPin className="h-5 w-5" />
                <span className="font-medium">Indore, Madhya Pradesh</span>
              </div>
              <p className="text-lg">
                I'm a Software Engineer with over 3 years of experience developing high-performance, SEO-optimized web
                and mobile applications using modern JavaScript frameworks.
              </p>
              <p className="text-lg">
                Originally from Indore, my journey took me to NIT Patna for my education, and now I'm based in Bangalore
                where I work at 314e Corporation leading frontend development initiatives.
              </p>
              <p className="text-lg">
                My expertise lies in creating responsive, user-friendly interfaces that deliver exceptional user
                experiences while maintaining clean, efficient code.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center"
          >
            <div className="bg-secondary/50 p-6 rounded-lg border border-border relative">
              <div className="absolute -top-3 -left-3">
                <Badge className="text-xs px-3 py-1 bg-background dark:bg-secondary dark:text-foreground">
                  Professional Summary
                </Badge>
              </div>
              <p className="text-lg italic">
                "Results-driven Software Engineer with 3+ years of experience developing high-performance, SEO-optimized
                web and mobile applications. Adept at API integration, UI/UX optimization, and collaborative product
                development across the SDLC. Committed to writing clean, efficient code while constantly exploring new
                libraries and technologies."
              </p>
            </div>
          </motion.div>
        </div>

        <h3 className="text-2xl font-bold mb-6">Key Highlights</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-md transition-shadow border-2 hover:border-primary/20">
                <CardContent className="p-6">
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">{highlight.icon}</div>
                  <h4 className="text-lg font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


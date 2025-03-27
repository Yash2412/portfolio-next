"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Code, Layers, Database } from "lucide-react"
import Image from "next/image"

// Project data with more details and actual images
const projects = [
  {
    title: "SQLLite-React",
    description:
      "A React application using SQLite with WebAssembly (WASM) and Origin Private File System (OPFS) to enable direct SQL queries in the browser, showcasing advanced web technology integration.",
    longDescription:
      "This project demonstrates how to use SQLite in the browser through WebAssembly, allowing for powerful database operations without a backend. It leverages the Origin Private File System API for persistent storage.",
    tags: ["React", "SQLite", "WebAssembly", "OPFS", "IndexedDB"],
    github: "https://github.com/Yash2412/SQLLite-React",
    image: "/images/project-sql.png",
    icon: <Database className="h-10 w-10 text-primary" />,
  },
  {
    title: "NDJSON Viewer",
    description:
      "A Chrome extension for the DevTools network tab, converting binary NDJSON data into readable JSON, improving developer productivity with a built-in JSON editor.",
    longDescription:
      "This Chrome extension enhances the developer experience by providing a specialized viewer for NDJSON (Newline Delimited JSON) data in the network tab. It includes features like syntax highlighting, search, and a JSON editor.",
    tags: ["Chrome Extension", "JavaScript", "NDJSON", "JSON Editor", "DevTools"],
    github: "https://github.com/Yash2412/NDJSON-Viewer",
    image: "/images/project-json.jpeg",
    icon: <Code className="h-10 w-10 text-primary" />,
  },
  {
    title: "Social Media Mobile App",
    description:
      "A cross-platform mobile app built with Flutter and Dart for chat and media sharing, leveraging Firebase for authentication, real-time sync, and push notifications.",
    longDescription:
      "This mobile application provides a complete social media experience with features like user profiles, real-time chat, media sharing, and notifications. It uses Firebase for backend services and Flutter for the cross-platform UI.",
    tags: ["Flutter", "Dart", "Firebase", "GCM", "Mobile App", "Real-time"],
    github: "https://github.com/Yash2412/Social-Media-App",
    image: "/images/project-social.png",
    icon: <Layers className="h-10 w-10 text-primary" />,
  },
]

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null // Prevent hydration errors
  }

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="flex flex-col h-full overflow-hidden group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20"
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm p-2 rounded-full z-20">
                  {project.icon}
                </div>
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground line-clamp-3">{project.longDescription}</p>
              </CardContent>

              <CardFooter className="pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


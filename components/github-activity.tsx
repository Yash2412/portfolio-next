"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, GitCommit, GitBranch, Star } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function GitHubActivity() {
  return (
    <section id="github" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">GitHub Activity</h2>

        <Card className="overflow-hidden">
          <CardHeader className="bg-secondary/30 pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="flex items-center gap-2">
                <Github className="h-5 w-5" />
                <span>Contribution Graph</span>
              </CardTitle>
              <span className="text-sm text-muted-foreground">570 contributions in the last year</span>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative w-full h-[180px] overflow-hidden bg-[#0d1117]">
              <Image
                src="/images/github-contributions-new.png"
                alt="GitHub contribution graph showing activity throughout the year"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0d1117]/80 via-transparent to-[#0d1117]/80"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-secondary/10">
              <motion.div
                className="flex flex-col items-center justify-center p-4 rounded-lg bg-background"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <GitCommit className="h-8 w-8 text-primary mb-2" />
                <span className="text-2xl font-bold">570+</span>
                <span className="text-sm text-muted-foreground text-center">Contributions</span>
              </motion.div>

              <motion.div
                className="flex flex-col items-center justify-center p-4 rounded-lg bg-background"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <GitBranch className="h-8 w-8 text-primary mb-2" />
                <span className="text-2xl font-bold">15+</span>
                <span className="text-sm text-muted-foreground text-center">Repositories</span>
              </motion.div>

              <motion.div
                className="flex flex-col items-center justify-center p-4 rounded-lg bg-background"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Star className="h-8 w-8 text-primary mb-2" />
                <span className="text-2xl font-bold">10+</span>
                <span className="text-sm text-muted-foreground text-center">Stars Received</span>
              </motion.div>

              <motion.div
                className="flex flex-col items-center justify-center p-4 rounded-lg bg-background"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Github className="h-8 w-8 text-primary mb-2" />
                <span className="text-2xl font-bold">3+</span>
                <span className="text-sm text-muted-foreground text-center">Years Active</span>
              </motion.div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center mt-6">
          <a
            href="https://github.com/Yash2412"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <Github className="h-4 w-4" />
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  )
}


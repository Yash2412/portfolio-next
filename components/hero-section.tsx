"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown, ChevronRight, Code } from "lucide-react"
import { motion } from "framer-motion"

export default function HeroSection() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null // Prevent hydration errors
  }

  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          className="order-2 md:order-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block mb-2 bg-primary/10 px-3 py-1 rounded-full text-sm font-medium text-primary">
            Software Engineer
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-primary">Yash Janoria</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
            Building high-performance web & mobile applications
          </h2>
          <motion.p
            className="text-lg mb-8 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Results-driven Software Engineer with 3+ years of experience developing SEO-optimized applications using
            React.js, Next.js and React Native.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button asChild size="lg" className="group">
              <a href="#contact" className="flex items-center gap-2">
                Get In Touch
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="outline" asChild size="lg">
              <a href="#about">Learn More</a>
            </Button>
            <Button variant="outline" asChild size="lg">
              <a href="#about">Learn More</a>
            </Button>
            <div className="flex items-center gap-4 ml-2">
              <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-primary/10">
                <a href="https://github.com/Yash2412" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-primary/10">
                <a
                  href="https://linkedin.com/yash-janoria"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-primary/10">
                <a href="mailto:yashjanoria999@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="order-1 md:order-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-primary/5 blur-xl"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/10 shadow-xl">
              <Image src="/images/headshot.png" alt="Yash Janoria" fill className="object-cover" priority />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-background rounded-full p-3 shadow-lg border border-border">
              <div className="bg-primary/10 p-2 rounded-full">
                <Code className="h-6 w-6 text-primary" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="flex justify-center mt-16 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <a
          href="#about"
          aria-label="Scroll down"
          className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
        >
          <ArrowDown className="h-5 w-5 text-primary" />
        </a>
      </motion.div>
    </section>
  )
}


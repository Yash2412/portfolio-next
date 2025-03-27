"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, MapPin } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function EducationSection() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Education</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="bg-primary/10 p-3 rounded-full">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>National Institute of Technology Patna</CardTitle>
                  <div className="flex items-center text-muted-foreground text-sm mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Patna, Bihar</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">Bachelor of Technology (B.Tech) in Computer Science And Engineering</p>
                    <p className="text-muted-foreground">2018 - 2022</p>
                    <p className="text-muted-foreground">CGPA: 8.61</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-64 md:h-auto overflow-hidden rounded-lg border-2 border-border"
          >
            <a href="https://www.nitp.ac.in/" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
              <Image
                src="/images/nit-patna.jpeg"
                alt="National Institute of Technology Patna Campus"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


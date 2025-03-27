"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Code, ExternalLink, ChevronLeft, ChevronRight, FileText } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export default function AchievementsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 2

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval) // Cleanup on unmount
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  return (
    <section id="achievements" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Achievements</h2>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col space-y-4">
                <div className="flex items-start gap-4">
                  <Trophy className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div className="w-full">
                    <h3 className="font-semibold text-lg">Speaker at React Bangalore Meetup</h3>
                    <p className="text-muted-foreground mb-2">
                      Presented on "Next-Gen File Storage with OPFS & React", covering web storage evolution, OPFS
                      integration, and in-browser SQL with SQLite.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 my-4">
                      {/* Carousel - smaller size with auto-scroll */}
                      <div className="relative w-full max-w-md mx-auto h-[200px] rounded-lg overflow-hidden border border-border">
                        <div
                          className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
                          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                          <div className="min-w-full h-full relative">
                            <Image
                              src="/images/presentation-1.jpeg"
                              alt="Yash presenting at React Bangalore Meetup"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="min-w-full h-full relative">
                            <Image
                              src="/images/presentation-2.jpeg"
                              alt="Yash speaking about Next-Gen File Storage with OPFS & React"
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>

                        {/* Navigation buttons */}
                        <button
                          onClick={prevSlide}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-1.5 rounded-full hover:bg-background/90 transition-colors"
                          aria-label="Previous slide"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button
                          onClick={nextSlide}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-1.5 rounded-full hover:bg-background/90 transition-colors"
                          aria-label="Next slide"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>

                        {/* Indicators */}
                        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
                          {[...Array(totalSlides)].map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentSlide(index)}
                              className={`h-1.5 rounded-full transition-all ${
                                currentSlide === index ? "w-5 bg-primary" : "w-1.5 bg-primary/40"
                              }`}
                              aria-label={`Go to slide ${index + 1}`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Talk description */}
                      <div className="space-y-3">
                        <p className="font-medium mb-1">Key topics covered:</p>
                        <ul className="space-y-1 text-muted-foreground">
                          <li className="flex items-start gap-1.5">
                            <span className="text-primary flex-shrink-0">✅</span>
                            <span>Evolution of browser storage technologies from Web 1.0 to Web 3.0</span>
                          </li>
                          <li className="flex items-start gap-1.5">
                            <span className="text-primary flex-shrink-0">✅</span>
                            <span>Comparing traditional storage methods with modern alternatives</span>
                          </li>
                          <li className="flex items-start gap-1.5">
                            <span className="text-primary flex-shrink-0">✅</span>
                            <span>Leveraging OPFS API for enhanced file system capabilities in web applications</span>
                          </li>
                          <li className="flex items-start gap-1.5">
                            <span className="text-primary flex-shrink-0">✅</span>
                            <span>Practical implementation patterns for OPFS with React components</span>
                          </li>
                          <li className="flex items-start gap-1.5">
                            <span className="text-primary flex-shrink-0">✅</span>
                            <span>Client-side database operations using SQLite and WebAssembly</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="outline">React</Badge>
                      <Badge variant="outline">OPFS</Badge>
                      <Badge variant="outline">WebAssembly</Badge>
                      <Badge variant="outline">SQLite</Badge>
                    </div>
                    <Button variant="outline" size="sm" className="flex items-center gap-2" asChild>
                      <a
                        href="https://docs.google.com/presentation/d/18LJGl6O_PbFzdo4dZAlg6dFK4iDGfzY_9GfICJo7LB4/edit?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        View Presentation
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* New Research Paper Publication Card */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col space-y-4">
                <div className="flex items-start gap-4">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div className="w-full">
                    <h3 className="font-semibold text-lg">Research Paper Publication</h3>
                    <p className="text-muted-foreground mb-4">
                      Paper titled "Medical Image Protection using Blockchain for E-healthcare System" selected for
                      publication in the FICTA-2021 conference proceedings by Springer.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 my-4">
                      <div className="relative w-full max-w-md mx-auto h-[200px] rounded-lg overflow-hidden border border-border">
                        <Image
                          src="/images/ficta-certificate.png"
                          alt="FICTA 2021 Conference Certificate"
                          fill
                          className="object-contain"
                        />
                        <div className="absolute inset-0 hover:bg-primary/5 transition-colors duration-300"></div>
                      </div>

                      <div className="space-y-3">
                        <p className="font-medium mb-1">Research highlights:</p>
                        <ul className="space-y-1 text-muted-foreground">
                          <li className="flex items-start gap-1.5">
                            <span className="text-primary flex-shrink-0">✅</span>
                            <span>Developed a blockchain-based system for medical image protection</span>
                          </li>
                          <li className="flex items-start gap-1.5">
                            <span className="text-primary flex-shrink-0">✅</span>
                            <span>Enhanced security for sensitive healthcare data</span>
                          </li>
                          <li className="flex items-start gap-1.5">
                            <span className="text-primary flex-shrink-0">✅</span>
                            <span>Implemented cryptographic techniques for image encryption</span>
                          </li>
                          <li className="flex items-start gap-1.5">
                            <span className="text-primary flex-shrink-0">✅</span>
                            <span>Published in Springer's Smart Innovation, Systems and Technologies series</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="outline">Blockchain</Badge>
                      <Badge variant="outline">Healthcare</Badge>
                      <Badge variant="outline">Image Processing</Badge>
                      <Badge variant="outline">Security</Badge>
                      <Badge variant="outline">Springer</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex items-start gap-4">
              <Code className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Competitive Programming</h3>
                <p className="text-muted-foreground">
                  Solved over 400+ data structure and algorithm problems on leetcode, geeks for geeks, and
                  binarysearch.com.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


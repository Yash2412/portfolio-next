import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Braces, Palette, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Frameworks & Languages",
    icon: <Braces className="h-5 w-5" />,
    skills: [
      "React.js",
      "Next.js",
      "React Native",
      "Flutter",
      "Redux",
      "Zustand",
      "TypeScript",
      "JavaScript (ES6+)",
      "Rust",
    ],
  },
  {
    title: "Web & UI",
    icon: <Palette className="h-5 w-5" />,
    skills: ["HTML5", "CSS3", "LESS", "SCSS", "TailwindCSS", "Styled Components", "Bootstrap", "Ant Design"],
  },
  {
    title: "Tools & Processes",
    icon: <Wrench className="h-5 w-5" />,
    skills: [
      "Git",
      "Webpack",
      "Vite",
      "CI/CD",
      "GitHub Actions",
      "Docker",
      "Kubernetes",
      "Cloudflare CDN",
      "REST APIs",
      "GraphQL",
    ],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Technical Skills</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow border-2 hover:border-primary/20">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  {category.icon}
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-sm py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


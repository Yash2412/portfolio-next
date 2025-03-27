"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Sun, Moon, Laptop } from "lucide-react"

export default function Footer() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // After mounting, we can safely show the theme indicator
  useEffect(() => {
    setMounted(true)
  }, [])

  const getThemeIcon = () => {
    if (!mounted) return null

    switch (theme) {
      case "light":
        return <Sun className="h-4 w-4 inline-block ml-1" />
      case "dark":
        return <Moon className="h-4 w-4 inline-block ml-1" />
      default:
        return <Laptop className="h-4 w-4 inline-block ml-1" />
    }
  }

  return (
    <footer className="py-8 bg-secondary/50">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground">&copy; {new Date().getFullYear()} Yash Janoria. All rights reserved.</p>
        {mounted && (
          <p className="text-xs text-muted-foreground mt-2">
            Theme: {theme?.charAt(0).toUpperCase() + theme?.slice(1) || "System"} {getThemeIcon()}
          </p>
        )}
      </div>
    </footer>
  )
}


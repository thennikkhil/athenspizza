"use client"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface Project {
  id: number
  title: string
  category: string
  year: string
  thumbnail: string
  video: string
}

interface VideoCardProps {
  project: Project
  isHovered: boolean
  onHoverChange: (hovered: boolean) => void
}

export function VideoCard({ project, isHovered, onHoverChange }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    if (isHovered && videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play().catch(() => {})
    } else if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }, [isHovered])

  return (
    <div
      className={cn(
        "group relative rounded-[2rem] overflow-hidden",
        "transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
        "w-full md:w-auto md:min-w-[100px] lg:min-w-[140px]",
        // Makes the hovered card significantly wider than the others
        isHovered ? "flex-[3] shadow-2xl shadow-brand-navy/20" : "flex-[1] shadow-md",
      )}
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
    >
      {/* Thumbnail Image - NO FILTERS, 100% Original Color! */}
      <div className={cn("absolute inset-0 transition-opacity duration-700", isHovered ? "opacity-0" : "opacity-100")}>
        <img
          src={project.thumbnail || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-700"
        />
      </div>

      {/* Video */}
      <div className={cn("absolute inset-0 transition-opacity duration-700", isHovered ? "opacity-100" : "opacity-0")}>
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source src={project.video} type="video/mp4" />
        </video>
      </div>

      {/* Permanent Dark Gradient at bottom for text readability only */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

      {/* Title when closed (Rotated on desktop, straight on mobile) */}
      <div className={cn(
        "absolute inset-0 flex items-center justify-center transition-opacity duration-500",
        isHovered ? "opacity-0 pointer-events-none" : "opacity-100"
      )}>
        <h3 className="text-white font-serif text-xl tracking-widest drop-shadow-md md:-rotate-90 whitespace-nowrap">
          {project.title}
        </h3>
      </div>

      {/* Glassmorphic Info Card (Shows on Hover) */}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 p-4 md:p-6",
          "transition-all duration-700",
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none",
        )}
      >
        <div className="relative backdrop-blur-md bg-white/20 rounded-xl p-4 md:p-5 border border-white/30 shadow-xl">
          <div className="space-y-1 text-left">
            <h3 className="text-white font-serif text-lg md:text-xl font-medium tracking-wide drop-shadow-sm">
              {project.title}
            </h3>
            <p className="text-white/90 font-sans text-xs font-bold tracking-widest uppercase drop-shadow-sm">
              {project.category}
            </p>
            <div className="pt-2 mt-2 border-t border-white/30">
              <p className="text-brand-sauce font-sans font-bold text-xs tracking-widest uppercase cursor-pointer hover:text-white transition-colors w-fit drop-shadow-sm">
                {project.year} &rarr;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import gameml from "@/assets/ml.jpg"
import gameff from "@/assets/ff.webp"
import gamevalorant from "@/assets/valorant.webp"

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      image: gameml,
      alt: "Mobile Legends",
      title: "Mobile Legends",
      description: "Diamond ML murah dan proses instan",
    },
    {
      id: 2,
      image: gameff,
      alt: "Free Fire",
      title: "Free Fire",
      description: "Top up cepat, aman, dan terpercaya",
    },
    {
      id: 3,
      image: gamevalorant,
      alt: "Valorant",
      title: "Valorant",
      description: "VP dengan harga bersaing dan promo spesial",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <div className="relative w-full h-[260px] sm:h-[320px] md:h-[480px] lg:h-[520px] overflow-hidden rounded-xl group border border-border">
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="relative min-w-full h-full flex-shrink-0">
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
            {/* Overlay gradient using theme tokens */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent flex items-end">
              <div className="w-full p-4 sm:p-6 md:p-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 text-pretty">{slide.title}</h2>
                <p className="text-sm md:text-lg text-muted-foreground">{slide.description}</p>
                <Button
                  className="mt-4 mb-4 rounded-xs bg-[color:var(--chart-2)] text-[color:var(--background)] hover:opacity-90"
                  size="lg"
                >
                  Top Up Sekarang
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 left-3 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm bg-background/20 hover:bg-background/40 text-foreground h-9 w-9 md:h-10 md:w-10"
        onClick={prevSlide}
        aria-label="Sebelumnya"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 right-3 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm bg-background/20 hover:bg-background/40 text-foreground h-9 w-9 md:h-10 md:w-10"
        onClick={nextSlide}
        aria-label="Berikutnya"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-primary w-8" : "bg-foreground/50 hover:bg-foreground/80 w-2"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Lompat ke slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-foreground/20">
        <div
          className="h-full bg-primary transition-all duration-500 ease-linear"
          style={{
            width: `${100 / slides.length}%`,
            transform: `translateX(${currentSlide * 100}%)`,
          }}
        />
      </div>
    </div>
  )
}

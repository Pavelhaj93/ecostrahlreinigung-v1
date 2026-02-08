'use client'

import React from 'react'

type VideoSectionProps = {
  block: {
    _type: string
    _key: string
    videoUrl?: string
    videoFile?: {
      asset?: {
        url?: string
      }
    }
    title?: string
    subtitle?: string
    description?: string
    buttonText?: string
    buttonLink?: string
    autoplay?: boolean
    muted?: boolean
    loop?: boolean
    controls?: boolean
    overlayContent?: boolean
  }
}

export default function VideoSection({block}: VideoSectionProps) {
  const {
    videoUrl,
    videoFile,
    title,
    subtitle,
    description,
    buttonText,
    buttonLink,
    autoplay = true,
    muted = true,
    loop = true,
    controls = false,
    overlayContent = true,
  } = block

  // Use either external URL or uploaded file
  const videoSrc = videoUrl || videoFile?.asset?.url

  if (!videoSrc) {
    return (
      <section className="relative w-full h-[calc(100dvh-80px)] bg-gray-900 flex items-center justify-center">
        <div className="text-white text-center">
          <p className="text-xl">No video source provided</p>
          <p className="text-sm text-gray-400 mt-2">
            Please add a video URL or upload a video file in Sanity
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="relative w-full h-[calc(100dvh-80px)] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay={autoplay}
          muted={muted}
          loop={loop}
          controls={controls}
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay for better text readability */}
        {overlayContent && <div className="absolute inset-0 bg-black/40" />}
      </div>

      {/* Content Overlay */}
      {overlayContent && (title || subtitle || description || buttonText) && (
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-6 text-center text-white">
            {subtitle && (
              <p className="text-xl md:text-2xl mb-4 font-medium tracking-wide">{subtitle}</p>
            )}
            {title && (
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                {title}
              </h1>
            )}
            {description && (
              <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                {description}
              </p>
            )}
            {buttonText && buttonLink && (
              <a
                href={buttonLink}
                className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {buttonText}
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

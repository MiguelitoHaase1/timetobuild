import { Opening, Hero, Shift, Approach, Examples } from './components/sections'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

function App() {
  const heroRef = useRef<HTMLDivElement>(null)

  // Track scroll progress for Hero slide-up animation
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'start start']
  })

  // Slide up from 20vh below to 0
  const heroY = useTransform(scrollYProgress, [0, 1], [100, 0])

  return (
    <div className="min-h-screen">
      <Opening />
      {/* Hero section slides up as you scroll */}
      <motion.div
        ref={heroRef}
        style={{
          y: heroY,
          marginTop: '-30vh' // Position to overlap with scroll sequence
        }}
      >
        <Hero />
      </motion.div>
      <Approach />
      <Examples />
      <Shift />
    </div>
  )
}

export default App

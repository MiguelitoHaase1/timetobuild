import { Opening, Hero, Shift, Approach, Examples, Contact } from './components/sections'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

function App() {
  const heroRef = useRef<HTMLDivElement>(null)

  // Track scroll progress for Hero slide-up animation
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'start start']
  })

  // Gentle slide up - stops before getting too close to video
  const heroY = useTransform(scrollYProgress, [0, 0.8], [80, 0])

  return (
    <div className="min-h-screen">
      <Opening />
      {/* Hero section slides up with breathing room below video */}
      <motion.div
        ref={heroRef}
        style={{
          y: heroY,
          marginTop: '-15vh' // Reduced overlap for more space
        }}
      >
        <Hero />
      </motion.div>
      <Approach />
      <Examples />
      <Shift />
      <Contact />
    </div>
  )
}

export default App

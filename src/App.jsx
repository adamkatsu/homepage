import { ReactLenis, useLenis } from 'lenis/react';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import Hero from './sections/Hero';
import Navbar from './sections/Navbar';
import WhatIDo from './sections/WhatIDo';
import Works from './sections/Works';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import ParticleBackground from './sections/ParticleBackground';

function App() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })
  return (
    <ReactLenis root>
      <Analytics />
      <SpeedInsights />
      <ParticleBackground />
      <Hero />
      <Navbar />
      <WhatIDo />
      <Works />
      <Testimonials />
      <Contact />
    </ReactLenis>
  )
}

export default App

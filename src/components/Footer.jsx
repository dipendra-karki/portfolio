import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { KeyboardArrowUp } from '@mui/icons-material'
import { useState, useEffect } from 'react'

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button when page is scrolled down 500px
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="bg-primary relative py-6 border-t border-accent/10 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-primary"></div>

      {/* Scroll to top button with AnimatePresence */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 bg-accent text-primary p-3 
              rounded-full shadow-lg hover:bg-accent/90 transition-colors z-50"
            aria-label="Scroll to top"
          >
            <KeyboardArrowUp />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Copyright */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6 text-center relative z-10"
      >
        <p className="text-light/50">
          © {new Date().getFullYear()} Dipendra Karki. All rights reserved.
          <span className="block sm:inline sm:ml-2">
            Built with React & Tailwind CSS
          </span>
        </p>
      </motion.div>
    </footer>
  )
}

export default Footer
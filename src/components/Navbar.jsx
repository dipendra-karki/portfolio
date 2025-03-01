import { useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    return scrollY.onChange(() => {
      if (scrollY?.current < scrollY?.prev) {
        setHidden(false)
      } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
        setHidden(true)
      }
    })
  }, [scrollY])

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact']

  return (
    <motion.header
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed w-full top-0 z-50 bg-secondary/95 backdrop-blur-sm shadow-lg shadow-black/10"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-accent"
          >
            Portfolio
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-light hover:text-accent transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all 
                group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-accent"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ 
            opacity: mobileOpen ? 1 : 0,
            y: mobileOpen ? 0 : -20,
            display: mobileOpen ? 'block' : 'none'
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden mt-4"
        >
          <div className="flex flex-col gap-4 py-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className="text-light hover:text-accent transition-colors px-4 py-2"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  )
}

export default Navbar
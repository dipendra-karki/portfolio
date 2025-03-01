import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const handleDownloadCV = () => {
    // The PDF file should be in the public/assets directory
    const link = document.createElement('a')
    link.href = '/assets/Recent_CV_Dipendra.pdf'
    link.download = 'Dipendra-Karki-CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleSkillsClick = () => {
    const skillsSection = document.getElementById('skills')
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Tech stack data
  const techStack = [
    'Python', 'JavaScript (ES6+)', 'Odoo, Django, Flask, Fast API', 'React, Next.js', 'TypeScript', 'PostgreSQL'
  ]

  return (
    <section ref={ref} id="about" className="relative py-32 bg-secondary overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-light">About Me</h2>
          <div className="mt-4 h-1 w-24 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-accent/20 rounded-lg transform -rotate-6 
                transition-transform group-hover:rotate-0 duration-300"></div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <img
                  src="https://picsum.photos/600/400"
                  alt="About"
                  className="w-full rounded-lg shadow-xl"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-accent/10 rounded-lg opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Container */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="space-y-6 text-light/80 text-lg">
              <p>
                Hello! My name is Dipendra and I enjoy creating things that live on the internet.
                I work as a Fullstack Developer with over 5 years of experience building robust, 
                scalable, and user-focused applications. My core expertise lies in backend development 
                with Python, crafting efficient APIs and data-driven systems, while delivering intuitive 
                frontend experiences using React.
              </p>
              <p>
                Whether it’s designing clean architectures, optimizing performance, or 
                solving complex technical challenges, I take pride in writing clean, 
                maintainable code that drives real value for businesses.
              </p>
              {/* <p>
              Passionate about continuous learning, I stay up-to-date with modern 
              technologies to ensure the solutions I build are both innovative and 
              future-proof.
              </p> */}
              
              {/* Tech Stack Section */}
              <div className="pt-3">
                <p className="text-light mb-4">Here are a few technologies I've been working with recently:</p>
                <div className="grid grid-cols-2 gap-2">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <span className="text-accent">▹</span>
                      <span className="text-light/70">{tech}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Buttons Container */}
            <div className="flex flex-wrap gap-4 pt-6">
              <motion.button
                onClick={handleDownloadCV}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-accent text-primary font-medium rounded-lg 
                  flex items-center gap-2 hover:bg-accent/90 transition-colors"
              >
                <span>Download CV</span>
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </motion.button>
              <motion.button
                onClick={handleSkillsClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-accent text-accent font-medium 
                  rounded-lg flex items-center gap-2 hover:bg-accent/10 transition-colors"
              >
                <span>My Skills</span>
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
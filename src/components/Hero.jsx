import { motion } from 'framer-motion'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      const offset = 80 // Adjust this value based on your navbar height
      const targetPosition = aboutSection.offsetTop - offset
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-primary relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
      
      {/* Animated circles in background */}
      <motion.div 
        className="absolute -top-1/2 -right-1/2 w-[800px] h-[800px] rounded-full bg-accent/5"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.p 
            variants={itemVariants}
            className="text-accent font-mono mb-4 text-lg"
          >
            Hi, my name is
          </motion.p>

          {/* Name */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-light mb-4"
          >
            Dipendra Karki.
          </motion.h1>

          {/* Title */}
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-textPrimary mb-6"
          >
            I build things for the web.
            {/* Crafting Scalable Solutions with 5+ Years of Fullstack Expertise */}
          </motion.h2>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-textPrimary text-lg md:text-xl max-w-2xl mb-12"
          >
            {/* I'm a fullstack software engineer specializing in backend with python (and occasionally nodejs) 
            exceptional digital experiences. Currently, I'm focused on building accessible, 
            human-centered products. */}

            {/* Fullstack developer with 5+ years of experience building dynamic, user-friendly 
            applications. Specializing in backend development with Python and modern 
            frontend interfaces using React, with hands-on experience in Node.js for 
            versatile project needs. Passionate about clean code, performance, and solving 
            complex problems — turning ideas into seamless digital experiences. */}

              Fullstack developer with 5+ years of experience specializing in backend development 
              with Python and modern frontend solutions with React, I build scalable applications 
              tailored to business needs — delivering exceptional digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Check out my work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline"
            >
              Get in touch
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: {
                delay: 2,
                duration: 1
              }
            }}
            onClick={scrollToAbout}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.p
              className="text-accent/80 text-sm font-mono"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              scroll down
            </motion.p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-6 h-10 border-2 border-accent rounded-full p-1"
            >
              <div className="w-1.5 h-1.5 bg-accent rounded-full mx-auto" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
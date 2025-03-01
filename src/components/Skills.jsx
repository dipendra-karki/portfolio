import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { LinearProgress } from '@mui/material'

const skills = [
  {
    category: "Frontend Development",
    items: [
      { name: 'JavaScript', level: 85, icon: '🟨' },
      { name: 'React.js', level: 90, icon: '⚛️' },
      { name: 'TypeScript', level: 75, icon: '🔷' },
      { name: 'HTML/CSS', level: 90, icon: '🎨' },
    ]
  },
  {
    category: "Backend Development",
    items: [
      { name: 'Python', level: 90, icon: '🐍' },
      { name: 'SQL/Postgres', level: 85, icon: '📊' },
      { name: 'MongoDB/Redis', level: 75, icon: '🍃' },
      { name: 'Node.js/Express', level: 50, icon: '🟩' },
    ]
  },
  {
    category: "Tools & Others",
    items: [
      { name: 'Git/Gitlab/Github', level: 85, icon: '📚' },
      { name: 'Docker', level: 80, icon: '🐳' },
      { name: 'Linux/Nginx', level: 70, icon: '🐧' },
      { name: 'AWS/DO', level: 30, icon: '☁️' },
    ]
  }
]

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  }

  return (
    <section id="skills" className="py-32 bg-primary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-light">Skills & Expertise</h2>
          <div className="mt-4 h-1 w-24 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, categoryIndex) => (
            <motion.div
              key={skillCategory.category}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover="hover"
              whileTap="tap"
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              className="bg-secondary rounded-xl p-6 shadow-lg hover:shadow-xl hover:shadow-accent/10 
                transition-shadow relative group cursor-pointer"
            >
              {/* Animated border effect */}
              <motion.div
                className="absolute inset-0 rounded-xl border-2 border-accent/0 group-hover:border-accent/50"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-accent/5 rounded-xl blur-xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              <motion.h3 
                className="text-xl font-semibold text-light mb-6 text-center relative"
                initial={{ y: 10, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: categoryIndex * 0.3 }}
              >
                {skillCategory.category}
              </motion.h3>
              
              <div className="space-y-6 relative">
                {skillCategory.items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: (categoryIndex * 0.2) + (index * 0.1),
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    <motion.div 
                      className="flex items-center gap-2 mb-2"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <motion.span 
                        className="text-2xl"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        {skill.icon}
                      </motion.span>
                      <span className="text-light font-medium">{skill.name}</span>
                      <span className="text-accent ml-auto">{skill.level}%</span>
                    </motion.div>
                    
                    <div className="relative h-2 bg-primary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1, 
                          delay: (categoryIndex * 0.2) + (index * 0.1),
                          ease: "easeOut"
                        }}
                        className="absolute top-0 left-0 h-full bg-accent rounded-full"
                      />
                    </div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 text-sm text-light/60"
                    >
                      {getSkillLevel(skill.level)}
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Category completion indicator with animation */}
              <motion.div 
                className="mt-6 pt-4 border-t border-light/10"
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: categoryIndex * 0.3 + 0.5 }}
              >
                <div className="flex justify-between items-center text-sm">
                  <span className="text-light/60">Overall Proficiency</span>
                  <motion.span 
                    className="text-accent"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ 
                      type: "spring",
                      stiffness: 400,
                      delay: categoryIndex * 0.3 + 0.6 
                    }}
                  >
                    {Math.round(
                      skillCategory.items.reduce((acc, curr) => acc + curr.level, 0) / 
                      skillCategory.items.length
                    )}%
                  </motion.span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center text-light/60"
        >
          <p className="max-w-2xl mx-auto">
            I'm always learning and expanding my skill set. Currently exploring{' '}
            <span className="text-accent">AI</span> and{' '}
            <span className="text-accent">Machine Learning</span>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// Helper function to get skill level description
const getSkillLevel = (level) => {
  if (level >= 90) return "Expert Level";
  if (level >= 80) return "Advanced Level";
  if (level >= 70) return "Intermediate Level";
  return "Foundational Level";
}

export default Skills
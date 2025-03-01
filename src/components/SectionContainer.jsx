import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const SectionContainer = ({ children, title, id, className = '' }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id={id}
      ref={ref}
      className={`relative py-32 ${className}`}
    >
      <div className="container mx-auto max-w-6xl px-6">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-light">{title}</h2>
            <div className="mt-4 h-1 w-24 bg-accent mx-auto"></div>
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}

export default SectionContainer
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GitHub, Launch, Code } from '@mui/icons-material'

const projects = [
  {
    title: 'Enterprise Billing System',
    description: 'A complete CRM, Sales and Recurring Billing management platform for enterprise telecommunication company.',
    image: 'https://picsum.photos/800/600',
    github: 'https://github.com/dipendra-karki',
    live: 'https://github.com/dipendra-karki',
    tech: ['Python', 'Javascript', 'Postgresql', 'Odoo', 'XML', 'OWL', 'FTP', 'SSO', 'JSON RPC', 'Docker'],
    features: [
      'CRM with Feasiblity Analysis',
      'Sales, Workorder and Post Sales Services',
      'Recurring Billing Management',
      'Admin dashboard with analytics and reporting',
      'External Services Integration'
    ]
  },
  {
    title: 'CRM and Contract Management',
    description: 'A platform to manage leads, opportunities and contracts for a software development company.',
    image: 'https://picsum.photos/800/600',
    github: 'https://github.com/dipendra-karki',
    live: 'https://github.com/dipendra-karki',
    tech: ['Python', 'Javascript', 'Postgresql', 'Odoo', 'XML', 'OWL', 'JSON RPC', 'Docker'],
    features: [
      'Lead and Opportunity management with complex workflow',
      'Multilevel distributor and partner management',
      'Contract Management with separate workflow for sales and technical operations',
      'Admin dashboard with analytics and reporting',
      'External Services Integration'
    ]
  },
  {
    title: 'HRIS Systems',
    description: 'A complete solution for managing a new employee onboarding, contract, profiles, assets, access and  exit process',
    image: 'https://picsum.photos/801/600',
    github: 'https://github.com/dipendra-karki',
    live: 'https://github.com/dipendra-karki',
    tech: ['Python', 'Javascript', 'Postgresql', 'Odoo', 'XML', 'Docker'],
    features: [
      'Customized Recruitment Process',
      'Complete custom solution for employee onboarding, exit and asset management',
      'Multi level approval for every process',
      'Document Management System',
      'Employee profiles management and approvals',
    ]
  },
  {
    title: 'Sofoio - a Social Media Application',
    description: 'A social media application that integrates with multiple social media platforms on behalf of the user and presents his/her latest posts from all those social media applications into one single platform.',
    image: 'https://picsum.photos/802/600',
    github: 'https://github.com/dipendra-karki',
    live: 'https://github.com/dipendra-karki',
    tech: ['Python', 'Javscript', 'Postgres', 'Django', 'DRF', 'Django Channels', 'React', 'Redis', 'Celery', 'Docker'],
    features: [
      'Complete user profile management with timeline',
      'Integration with Facebook, Twitter, Instagram, LinkedIn and Youtube',
      'Profile management with drag and drop sections and items',
      'Authorze the different social media accounts for users',
      'Pull latest 10 posts from each authorized social media for user accounts and present them on sofoio with real time update.'
    ]
  },
  {
    title: 'Media Archive Manager',
    description: 'Application to upload, store and manage digital assets for example images and their metadata, contributing to add more metadata informations etc.',
    image: 'https://picsum.photos/802/600',
    github: 'https://github.com/dipendra-karki',
    live: 'https://github.com/dipendra-karki',
    tech: ['Python', 'Javscript', 'Postgres', 'Django', 'DRF', 'React', 'Redis', 'Celery', 'Elasticsearch', 'Docker'],
    features: [
      'Complete user management with different roles and permissions',
      'Bulk image upload and metadata extraction (on background process) and saving into database',
      'Images are uploaded into AWS S3 Bucket and URL is saved into database',
      'Elasticsearch for fast and efficient search across all different entities'
    ]
  },
  {
    title: 'Pocket Pandit Application',
    description: 'Application that predicts the past, present and future of the person based on astronomy and birth details.',
    image: 'https://picsum.photos/802/600',
    github: 'https://github.com/dipendra-karki',
    live: 'https://pocketpandit.com',
    tech: ['Python', 'Javscript', 'Postgres', 'Flask', 'React', 'Redis', 'Celery', 'Websocket',  'NLP', 'Docker'],
    features: [
      'Complete user management system, settings and perferences management',
      'Ecommerce like feature where questions can be bought and get answered based on your birth profile',
      'Real time chat with astrologers',
      'Prediction based on NLP and AI',
      'Blog, Forums and much more'
    ]
  }
]

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  return (
    <section id="projects" className="py-32 bg-primary relative overflow-hidden">
      {/* Background Elements */}
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
          <h2 className="text-4xl font-bold text-light">Featured Projects</h2>
          <div className="mt-4 h-1 w-24 bg-accent mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={projectVariants}
              className="group bg-secondary rounded-xl overflow-hidden shadow-xl hover:shadow-accent/20 
                transition-all duration-300 relative flex flex-col h-full transform hover:-translate-y-2"
            >
              {/* Project Image with Overlay */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 
                    group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Quick Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-secondary/80 rounded-full text-light hover:text-accent 
                      hover:bg-secondary transition-colors"
                  >
                    <GitHub className="text-xl" />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-secondary/80 rounded-full text-light hover:text-accent 
                      hover:bg-secondary transition-colors"
                  >
                    <Launch className="text-xl" />
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-light group-hover:text-accent 
                  transition-colors duration-300 mb-2">
                  {project.title}
                </h3>

                <p className="text-light/70 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Key Features - Compact Version */}
                <div className="mb-4 flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.features.slice(0, 5).map((feature, featureIndex) => (
                      <motion.span
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.1 + featureIndex * 0.1 }}
                        className="text-xs text-light/60 flex items-center gap-1"
                      >
                        <span className="text-accent">▹</span>
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="pt-4 border-t border-light/10">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: index * 0.1 + techIndex * 0.1 }}
                        className="px-2 py-1 bg-accent/10 rounded-full text-accent text-xs"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/dipendra-karki"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-primary 
              rounded-lg font-medium hover:bg-accent/90 transition-colors"
          >
            <GitHub />
            View More Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
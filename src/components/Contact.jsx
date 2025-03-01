import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { 
  Email, 
  LinkedIn, 
  GitHub, 
  Twitter, 
  LocationOn, 
  Phone 
} from '@mui/icons-material'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const scriptURL = "https://script.google.com/macros/s/AKfycbxvYb_pnlZ5gDnSUoq6Detm8HT2TzOBLYLFxx7oZwC0tQ5d3VdywbunkGNi5tY2HmC1/exec";

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      if (result.result === "success") {
        setSubmitStatus('success')
        setFormData({ name: "", email: "", message: "" });  // clear form
      } else {
        alert("Form submission failed!");
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false);
    }
    
    // Simulate form submission
    // await new Promise(resolve => setTimeout(resolve, 1500))
    // setSubmitStatus('success')
    // setIsSubmitting(false)
    
    // // Reset form
    // setFormData({ name: '', email: '', subject: '', message: '' })
    // // Reset status after 3 seconds
    // setTimeout(() => setSubmitStatus(null), 3000)
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      icon: <Email className="text-accent" />,
      text: 'tech.enthusiast23@gmail.com',
      link: 'mailto:tech.enthusiast23@gmail.com'
    },
    {
      icon: <Phone className="text-accent" />,
      text: '+977 9821232689',
      link: 'tel:+9779821232689'
    },
    {
      icon: <LocationOn className="text-accent" />,
      text: 'Hetauda, Nepal',
      link: 'https://maps.app.goo.gl/z1jsdDgLhnB4nTrC7'
    }
  ]

  const socialLinks = [
    {
      icon: <GitHub />,
      link: 'https://github.com/dipendra-karki',
      label: 'GitHub'
    },
    {
      icon: <LinkedIn />,
      link: 'https://www.linkedin.com/in/dipendra-karki/',
      label: 'LinkedIn'
    },
    {
      icon: <Twitter />,
      link: 'https://x.com/dipendra_real',
      label: 'Twitter'
    }
  ]

  return (
    <section id="contact" className="py-32 bg-secondary relative overflow-hidden">
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
          <h2 className="text-4xl font-bold text-light">Get In Touch</h2>
          <div className="mt-4 h-1 w-24 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-primary rounded-xl p-6 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="name" className="text-light block mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-secondary rounded-lg border border-light/10 
                      text-light focus:border-accent focus:outline-none transition-colors"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="email" className="text-light block mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-secondary rounded-lg border border-light/10 
                      text-light focus:border-accent focus:outline-none transition-colors"
                  />
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <label htmlFor="subject" className="text-light block mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-secondary rounded-lg border border-light/10 
                    text-light focus:border-accent focus:outline-none transition-colors"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                <label htmlFor="message" className="text-light block mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 bg-secondary rounded-lg border border-light/10 
                    text-light focus:border-accent focus:outline-none transition-colors resize-none"
                ></textarea>
              </motion.div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-accent text-primary rounded-lg font-medium 
                  hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-400 text-center"
                >
                  Message sent successfully!
                </motion.p>
              )}

              {submitStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-400 text-center"
                >
                  Error sending message!
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-primary rounded-xl p-6 shadow-xl">
              <h3 className="text-2xl font-bold text-light mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 text-light/80 hover:text-accent transition-colors"
                  >
                    {info.icon}
                    <span>{info.text}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-primary rounded-xl p-6 shadow-xl">
              <h3 className="text-2xl font-bold text-light mb-6">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-secondary rounded-full text-light hover:text-accent 
                      transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="bg-primary rounded-xl p-6 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-light mb-4">Let's Work Together</h3>
              <p className="text-light/80">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
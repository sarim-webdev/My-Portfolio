import React, { useState, useEffect, useRef } from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, 
  FaGitAlt, FaBootstrap, FaGithub, FaUser,
  FaCalendar, FaMapMarkerAlt, FaGraduationCap,
  FaEnvelope, FaPhone, FaLinkedin, FaExternalLinkAlt,
  FaPhoneAlt, FaBars, FaTimes, FaChevronLeft, FaChevronRight,
  FaBook, FaLaptopCode, FaUniversity, FaDatabase, FaFire,
  FaSun, FaMoon, FaBriefcase, FaStar, FaQuoteLeft, FaQuoteRight,
  FaCircle
} from 'react-icons/fa';
import { SiSupabase, SiFirebase } from 'react-icons/si';
import heroImage from "../assets/Muhammad Sarim pic.png";

// Import project images
import javedNihariImage from "../assets/javed-nihari.jpg";
import fishHubImage from "../assets/fishhub.jpg";
import todoListImage from "../assets/todo-list.jpg";
import moviesWebsiteImage from "../assets/movies-website.jpg";

function Portfolio() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const projectScrollRef = useRef(null);
  const testimonialIntervalRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Apply dark/light mode to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  // Auto-sliding testimonials
  useEffect(() => {
    startAutoSlide();
    
    return () => {
      if (testimonialIntervalRef.current) {
        clearInterval(testimonialIntervalRef.current);
      }
    };
  }, []);

  // Reset interval when currentTestimonial changes manually
  useEffect(() => {
    resetAutoSlide();
  }, [currentTestimonial]);

  const startAutoSlide = () => {
    if (testimonialIntervalRef.current) {
      clearInterval(testimonialIntervalRef.current);
    }
    
    testimonialIntervalRef.current = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  const resetAutoSlide = () => {
    if (testimonialIntervalRef.current) {
      clearInterval(testimonialIntervalRef.current);
    }
    startAutoSlide();
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const scrollLeft = () => {
    if (projectScrollRef.current) {
      projectScrollRef.current.scrollBy({
        left: -400,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (projectScrollRef.current) {
      projectScrollRef.current.scrollBy({
        left: 400,
        behavior: 'smooth'
      });
    }
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const testimonials = [
    {
      name: "John Smith",
      position: "CEO, Tech Solutions Inc.",
      rating: 5,
      text: "Working with Muhammad on our Sports Club website was exceptional. He delivered a responsive, modern design that perfectly captured our vision. His attention to detail and communication throughout the project was outstanding.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Sarah Johnson",
      position: "Founder, Fashion Hub",
      rating: 5,
      text: "Muhammad developed an amazing e-commerce platform for our business. The website is fast, user-friendly, and exactly what we needed. Highly recommended! His expertise in React and modern web technologies is impressive.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Michael Chen",
      position: "CTO, Digital Agency",
      rating: 4,
      text: "Great experience working with Muhammad. He understood our requirements perfectly and delivered beyond expectations. Will definitely work with him again. His problem-solving skills are top-notch.",
      image: "https://randomuser.me/api/portraits/men/46.jpg"
    },
    {
      name: "Emily Davis",
      position: "Marketing Director, Brandify",
      rating: 5,
      text: "Muhammad is a talented developer who goes above and beyond. He created a stunning website for our campaign that exceeded all our expectations. Highly professional and creative.",
      image: "https://randomuser.me/api/portraits/women/63.jpg"
    },
    {
      name: "Robert Wilson",
      position: "Owner, Wilson Enterprises",
      rating: 5,
      text: "Exceptional work! Muhammad delivered a high-quality website on time and within budget. His communication throughout the project was excellent. Will definitely hire again.",
      image: "https://randomuser.me/api/portraits/men/75.jpg"
    }
  ];

  const projects = [
    {
      image: javedNihariImage,
      title: "Javed Nihari Website",
      description: "A complete business website for a famous restaurant with online ordering system.",
      tags: ["HTML5", "CSS3", "JavaScript"]
    },
    {
      image: fishHubImage,
      title: "FishHub Website",
      description: "An informational platform for fishing enthusiasts with guides and community features.",
      tags: ["React", "Bootstrap", "API"]
    },
    {
      image: todoListImage,
      title: "Todo List Application",
      description: "A feature-rich task management app with local storage and dark mode.",
      tags: ["JavaScript", "LocalStorage", "CSS"]
    },
    {
      image: moviesWebsiteImage,
      title: "Movies Website",
      description: "A dynamic movie database website with search functionality (In Progress).",
      tags: ["React", "API", "Tailwind"]
    }
  ];

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-content">
          <h1 className="loading-title">Portfolio</h1>
          <div className="loading-spinner"></div>
          <p className="loading-text">LOADING...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <nav className={`${scrolled ? 'scrolled' : ''} ${darkMode ? 'dark-nav' : 'light-nav'}`} id="navbar">
        <div className="logo">Portfolio.</div>
        
        {/* Desktop Navigation */}
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>

        {/* Theme Toggle Button */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* Mobile Menu Toggle Button */}
        <div className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <h1>
                Hi, I'm <span className="gradient-text">Muhammad Sarim</span><br />
                <span className="gradient-text">Front-End Developer</span>
              </h1>
              <p className="hero-description">
                I craft modern, responsive, and user-friendly websites using HTML, CSS, JavaScript, Bootstrap, and
                React to bring ideas to life on the web.
              </p>
              <div>
                <a href="#contact" className="btn btn-primary">Hire Me</a>
                <a href="#" className="btn btn-outline">Download CV</a>
              </div>
            </div>
            
            <div className="hero-image">
              <div className="image-wrapper">
                <img src={heroImage} alt="Muhammad Sarim" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="container">
          <h2 className="section-title">About <span>Me</span></h2>
          <div className="about-content-full">
            <p>
              I am a passionate Full Stack Developer student currently completing my Intermediate education
              and pursuing a professional diploma in Full Stack Development. I specialize in building
              responsive, user-friendly web applications using HTML, CSS, JavaScript, React, Bootstrap, Git,
              and GitHub.
            </p>
            <p>
              I have developed multiple practical projects including a Business Website (Javed Nihari),
              FishHub Website, Todo List Application, and a Movies Website (in progress). Through these
              projects, I have gained hands-on experience in component-based architecture, state management,
              and clean UI development.
            </p>
            <p>
              I am a fast learner, highly motivated, and focused on building scalable web applications that
              solve real-world problems.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <h3>2+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h3>20+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h3>10+</h3>
                <p>Happy Clients</p>
              </div>
            </div>

            <a href="#contact" className="btn btn-primary">Let's Talk</a>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education">
        <div className="container">
          <h2 className="section-title">My <span>Education</span></h2>
          
          <div className="education-grid">
            <div className="education-card">
              <div className="education-icon">
                <FaBook />
              </div>
              <div className="education-content">
                <h3>Matriculation (Science)</h3>
                <h4>Certification by Al-Suffah Academy</h4>
                <div className="education-date">
                  <FaCalendar /> 2023 - 2025
                </div>
                <p>
                  Completed Matriculation with Science subjects. Focused on Physics, Chemistry, Mathematics, and Computer Science.
                </p>
              </div>
            </div>

            <div className="education-card">
              <div className="education-icon">
                <FaUniversity />
              </div>
              <div className="education-content">
                <h3>Intermediate (Pre-Engineering)</h3>
                <h4>Certification by D.J Sindh Goverment College</h4>
                <div className="education-date">
                  <FaCalendar /> 2025 - Present
                </div>
                <p>
                  Currently pursuing Intermediate in Pre-Engineering with focus on Mathematics, Physics, and Chemistry.
                </p>
              </div>
            </div>

            <div className="education-card">
              <div className="education-icon">
                <FaLaptopCode />
              </div>
              <div className="education-content">
                <h3>Diploma in Web Development</h3>
                <h4>Certification by Saylani Mass IT Training</h4>
                <div className="education-date">
                  <FaCalendar /> 2025 - Present
                </div>
                <p>
                  Currently pursuing Professional Diploma in Web Development. Learning HTML5, CSS3, JavaScript, React, Bootstrap, Tailwind CSS, and Supabase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <div className="container">
          <h2 className="section-title">Work <span>Experience</span></h2>
          
          <div className="experience-grid">
            <div className="experience-card">
              <div className="experience-icon">
                <FaBriefcase />
              </div>
              <div className="experience-content">
                <h3>Web Developer</h3>
                <h4>at Saylani Mass IT Training</h4>
                <div className="experience-date">
                  <FaCalendar /> 2025 - Present
                </div>
                <p>
                  Working as Web Developer at Saylani Mass IT Training. Gaining hands-on experience in modern web technologies working on real-world projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="container">
          <h2 className="section-title">My <span>Skills</span></h2>
          <div className="skills-grid">
            <div className="skill-card">
              <FaHtml5 className="skill-icon html" />
              <h3>HTML5</h3>
            </div>
            <div className="skill-card">
              <FaCss3Alt className="skill-icon css" />
              <h3>CSS3</h3>
            </div>
            <div className="skill-card">
              <FaJs className="skill-icon js" />
              <h3>JavaScript</h3>
            </div>
            <div className="skill-card">
              <FaReact className="skill-icon react" />
              <h3>React</h3>
            </div>
            <div className="skill-card">
              <FaGitAlt className="skill-icon git" />
              <h3>Git</h3>
            </div>
            <div className="skill-card">
              <FaBootstrap className="skill-icon bootstrap" />
              <h3>Bootstrap</h3>
            </div>
            <div className="skill-card">
              <FaGithub className="skill-icon github" />
              <h3>GitHub</h3>
            </div>
            <div className="skill-card">
              <SiSupabase className="skill-icon supabase" />
              <h3>Supabase</h3>
            </div>
            <div className="skill-card">
              <SiFirebase className="skill-icon firebase" />
              <h3>Firebase</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="container">
          <h2 className="section-title">My <span>Projects</span></h2>
          
          <div className="projects-wrapper">
            <button className="scroll-btn left" onClick={scrollLeft}>
              <FaChevronLeft />
            </button>

            <div className="projects-scroll" ref={projectScrollRef}>
              {projects.map((project, index) => (
                <div key={index} className="project-card">
                  <div className="project-image-wrapper">
                    <img src={project.image} alt={project.title} className="project-img" />
                  </div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="scroll-btn right" onClick={scrollRight}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <div className="container">
          <h2 className="section-title">Clients <span>say about me</span></h2>
          
          <div className="testimonials-slider-container">
            <button className="testimonial-nav prev" onClick={prevTestimonial}>
              <FaChevronLeft />
            </button>

            <div className="testimonials-slider">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className={`testimonial-slide ${index === currentTestimonial ? 'active' : ''}`}
                  style={{ display: index === currentTestimonial ? 'block' : 'none' }}
                >
                  <div className="testimonial-card">
                    <div className="testimonial-header">
                      <img src={testimonial.image} alt={testimonial.name} className="client-image" />
                      <div className="client-info">
                        <h4>{testimonial.name}</h4>
                        <p>{testimonial.position}</p>
                      </div>
                    </div>
                    
                    <div className="testimonial-rating">
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          className={i < testimonial.rating ? 'star-filled' : 'star-empty'} 
                        />
                      ))}
                    </div>
                    
                    <div className="quote-icon">
                      <FaQuoteLeft />
                    </div>
                    
                    <p className="testimonial-text">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="quote-icon-right">
                      <FaQuoteRight />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="testimonial-nav next" onClick={nextTestimonial}>
              <FaChevronRight />
            </button>
          </div>

          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => goToTestimonial(index)}
              >
                <FaCircle />
              </button>
            ))}
          </div>

          <div className="auto-slide-indicator">
            <div className="auto-slide-progress"></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="container">
          <h2 className="section-title">Get In <span>Touch</span></h2>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+92 3170508010</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>muhammadsarim1861@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Karachi, Pakistan</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <FaLinkedin />
                </div>
                <div>
                  <h4>LinkedIn</h4>
                  <p>/in/muhammad-sarim-991b67368/</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <FaGithub />
                </div>
                <div>
                  <h4>GitHub</h4>
                  <p>/sarim-webdev</p>
                </div>
              </div>
            </div>

            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>&copy; 2024 Muhammad Sarim. All rights reserved. | Built with ❤️ by Muhammad Sarim</p>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;
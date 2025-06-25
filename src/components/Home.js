import React, { useState, useEffect } from 'react';
import './Home.css';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaCode, FaUsers, FaBriefcase, FaRocket } from 'react-icons/fa';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [stats, setStats] = useState({ projects: 0, clients: 0, years: 0 });

  const slides = [
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
  ];

  const servicesData = [
    { icon: <FaCode size={40} />, title: 'Power Platform Solutions', desc: 'Custom Microsoft Power Apps, Power Automate, and Power BI solutions to streamline business processes.' },
    { icon: <FaRocket size={40} />, title: 'Web & Mobile Development', desc: 'Responsive websites and high-performance mobile apps for iOS and Android.' },
    { icon: <FaUsers size={40} />, title: 'IT & Non-IT Recruitment', desc: 'Connecting businesses with top technical and non-technical talent.' },
    { icon: <FaBriefcase size={40} />, title: 'Digital Transformation', desc: 'End-to-end digital solutions including UI/UX design and IT consultancy.' },
    // Additional services
    { icon: <FaCode size={40} />, title: 'Cloud Integration', desc: 'Seamless integration with Azure, AWS, and Google Cloud.' },
    { icon: <FaRocket size={40} />, title: 'Automation & RPA', desc: 'Automate repetitive tasks with Robotic Process Automation.' },
    { icon: <FaUsers size={40} />, title: 'Data Analytics', desc: 'Advanced analytics and reporting for business insights.' },
    { icon: <FaBriefcase size={40} />, title: 'Support & Maintenance', desc: 'Ongoing support and maintenance for your IT systems.' },
    { icon: <FaCode size={40} />, title: 'API Development', desc: 'Robust and secure API design and implementation.' },
    { icon: <FaRocket size={40} />, title: 'E-Commerce Solutions', desc: 'Custom e-commerce platforms and integrations.' },
  ];

  const portfolioData = [
    { img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3', title: 'Power App for Retail', desc: 'A custom Power App for inventory management.' },
    { img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d', title: 'Web Portal', desc: 'A responsive corporate web portal.' },
    { img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c', title: 'HR Dashboard', desc: 'A Power BI dashboard for HR analytics.' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);

    const animateStats = () => {
      const target = { projects: 500, clients: 200, years: 10 };
      const duration = 2000;
      const stepTime = 50;
      const steps = duration / stepTime;

      Object.keys(target).forEach((key) => {
        let current = 0;
        const increment = target[key] / steps;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target[key]) {
            current = target[key];
            clearInterval(timer);
          }
          setStats((prev) => ({ ...prev, [key]: Math.floor(current) }));
        }, stepTime);
      });
    };

    animateStats();

    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [slides.length]);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      alert('Form submitted successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill all fields.');
    }
  };

  return (
    <div className="bg-light text-dark font-poppins">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
      <header className="navbar sticky-top">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="logo">
            <svg className="logo-svg" viewBox="0 0 100 100">
              <path d="M50 10 L90 90 H10 Z" fill="#61dafb" />
              <circle cx="50" cy="50" r="20" fill="#282c34">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 50 50"
                  to="360 50 50"
                  dur="10s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </div>
          <nav className="nav-links">
            <ul>
              <li><a href="#home" className="active">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="animated-bg">
        <svg>
          {[...Array(20)].map((_, i) => (
            <path
              key={`line-${i}`}
              d={`M${Math.random() * 1000} 0 L${Math.random() * 1000} 1000`}
              stroke="#00D1FF"
              strokeWidth="2"
              opacity="0.3"
            >
              <animate
                attributeName="y2"
                values="0;1000"
                dur={`${5 + Math.random() * 10}s`}
                repeatCount="indefinite"
              />
            </path>
          ))}
        </svg>
      </div>

      <main>
        {/* Home Section */}
        <section id="home" className="hero-section" style={{ scrollMarginTop: '80px' }}>
          <div className="hero-banner">
            {slides.map((slide, index) => (
              <img
                key={`img_${index}`}
                src={slide}
                className={`carousel-image ${index === currentSlide ? 'active' : ''}`}
                alt={`Slide ${index + 1}`}
              />
            ))}
          </div>
          <div
            className="hero-content text-center"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '640px',
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              pointerEvents: 'none'
            }}
          >
            <div style={{ pointerEvents: 'auto' }}>
              <h1 className="display-4 fw-bold" style={{ color: '#fff', textShadow: '0 2px 16px rgba(0,0,0,0.5)' }}>
                Welcome to Symmetree Data Processing
              </h1>
              <p className="lead" style={{ color: '#fff', textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}>
                Empowering businesses with innovative Power Platform solutions and comprehensive IT services.
              </p>
              <a href="#contact" className="btn btn-primary btn-lg mt-3" style={{ pointerEvents: 'auto' }}>Get Started</a>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section
          id="about"
          className="about-section section py-5"
          style={{
            scrollMarginTop: '80px',
            background: '#fff',
            position: 'relative',
            zIndex: 1
          }}
        >
          <div className="container">
            <h2
              className="text-center mb-5"
              style={{
                fontWeight: 700,
                color: 'var(--primary)', // Use the same color as other section titles
                letterSpacing: '1px',
                fontSize: '2.5rem'
              }}
            >
              About Us
            </h2>
            <div className="row align-items-center">
              <div className="col-md-6">
                <p>
                  Symmetree Data Processing is a leading IT company specializing in Microsoft Power Platform solutions, web and mobile development, and recruitment services. With over 10 years of experience, we deliver innovative and scalable solutions to drive business success.
                </p>
                <div className="row text-center mt-4">
                  <div className="col-4"><span className="display-6">{stats.projects}+</span><br />Projects</div>
                  <div className="col-4"><span className="display-6">{stats.clients}+</span><br />Clients</div>
                  <div className="col-4"><span className="display-6">{stats.years}+</span><br />Years</div>
                </div>
              </div>
              <div className="col-md-6 text-center">
                <svg className="about-svg" viewBox="0 0 220 220" width="220" height="220">
                  <g>
                    <ellipse cx="110" cy="110" rx="100" ry="40" fill="#61dafb" opacity="0.15"/>
                    <ellipse cx="110" cy="110" rx="40" ry="100" fill="#61dafb" opacity="0.15"/>
                    <ellipse cx="110" cy="110" rx="100" ry="40" fill="#61dafb" opacity="0.25" transform="rotate(60 110 110)"/>
                    <ellipse cx="110" cy="110" rx="100" ry="40" fill="#61dafb" opacity="0.25" transform="rotate(120 110 110)"/>
                    <circle cx="110" cy="110" r="30" fill="#282c34" stroke="#61dafb" strokeWidth="6"/>
                    <text x="110" y="118" textAnchor="middle" fontSize="22" fill="#61dafb" fontWeight="bold" fontFamily="Poppins">SDP</text>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services-section animate-on-scroll" style={{ scrollMarginTop: '80px' }}>
          <div className="container">
            <h2>Our Services</h2>
            <div className="services-grid">
              {servicesData.map((service, index) => (
                <div key={index} className="service-item service-hover">
                  <div className="service-icon">{service.icon}</div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.desc}</p>
                  <div className="service-overlay">
                    <span>Learn More</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="section py-5 animate-on-scroll" style={{ scrollMarginTop: '80px' }}>
          <div className="container">
            <h2 className="text-center mb-5">Our Portfolio</h2>
            <div className="row">
              {portfolioData.map((item, index) => (
                <div key={index} className="col-lg-4 col-md-6 mb-4">
                  <div className="portfolio-item position-relative overflow-hidden rounded shadow">
                    <img src={item.img} className="img-fluid" alt={item.title} />
                    {/* Remove inline style so CSS hover works */}
                    <div className="portfolio-overlay">
                      <h3 className="h5">{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Careers Section */}
        <section id="careers" className="section py-5 bg-secondary animate-on-scroll" style={{ scrollMarginTop: '80px' }}>
          <div className="container">
            <h2 className="text-center mb-5">Join Our Team</h2>
            <div className="row align-items-center">
              <div className="col-md-6 mb-4">
                <p className="text-center mb-4">We are always looking for talented individuals to join our innovative team. Explore open positions and grow with us!</p>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="job-card p-4 bg-light rounded shadow text-center">
                      <h3 className="h5">Power Platform Developer</h3>
                      <p>Develop custom solutions using Power Apps and Power Automate.</p>
                      <a href="#contact" className="btn btn-primary mt-3">Apply Now</a>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="job-card p-4 bg-light rounded shadow text-center">
                      <h3 className="h5">Full Stack Developer</h3>
                      <p>Build scalable web applications with modern frameworks.</p>
                      <a href="#contact" className="btn btn-primary mt-3">Apply Now</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 text-center">
                <svg className="careers-svg" viewBox="0 0 220 220" width="220" height="220">
                  <g>
                    <circle cx="110" cy="70" r="40" fill="#61dafb" opacity="0.18"/>
                    <ellipse cx="110" cy="170" rx="70" ry="30" fill="#61dafb" opacity="0.12"/>
                    <circle cx="80" cy="80" r="18" fill="#282c34" stroke="#61dafb" strokeWidth="4"/>
                    <circle cx="140" cy="80" r="18" fill="#282c34" stroke="#61dafb" strokeWidth="4"/>
                    <rect x="70" y="110" width="80" height="40" rx="20" fill="#282c34" stroke="#61dafb" strokeWidth="4"/>
                    <text x="110" y="135" textAnchor="middle" fontSize="20" fill="#61dafb" fontWeight="bold" fontFamily="Poppins">TEAM</text>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section py-5 animate-on-scroll" style={{ scrollMarginTop: '80px' }}>
          <div className="container">
            <h2 className="text-center mb-5">Contact Us</h2>
            <div className="row align-items-center">
              <div className="col-md-6 mb-4">
                <div className="contact-info">
                  <p><strong>Email:</strong> support@symmetree.in</p>
                  <p><strong>Phone:</strong> +91 8886777064</p>
                  <p><strong>Address:</strong> Jubilee Hills, Hyderabad - 500033</p>
                  <div className="social-icons mt-3">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebook size={24} /></a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><FaTwitter size={24} /></a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram size={24} /></a>
                    <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube"><FaYoutube size={24} /></a>
                  </div>
                </div>
                <svg className="contact-svg" viewBox="0 0 200 200">
                  <g>
                    <rect x="30" y="50" width="140" height="100" rx="10" fill="#00D1FF" opacity="0.2" />
                    <path
                      d="M30 50 L100 100 L170 50"
                      fill="none"
                      stroke="#FF4500"
                      strokeWidth="8"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        from="100"
                        to="0"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </path>
                  </g>
                </svg>
              </div>
              <div className="col-md-6">
                <div className="contact-form">
                  <form onSubmit={handleFormSubmit}>
                    <div className="mb-3">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <textarea
                        name="message"
                        className="form-control"
                        placeholder="Your Message"
                        rows="5"
                        value={formData.message}
                        onChange={handleFormChange}
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-logo">
              <img src="/logo.png" alt="Symmetree Data Processing Logo" className="footer-logo-img" />
            </div>
            <div className="footer-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebook size={24} /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><FaTwitter size={24} /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram size={24} /></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube"><FaYoutube size={24} /></a>
            </div>
          </div>
          <div className="footer-row">
            <div className="footer-column">
              <h3>About Us</h3>
              <p>Symmetree Data Processing is a leading IT company specializing in Microsoft Power Platform solutions.</p>
            </div>
            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#careers">Careers</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Newsletter</h3>
              <form className="newsletter-form">
                <input type="email" placeholder="Your Email" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 Symmetree Data Processing. All rights reserved.</p>
            <div>
              <a href="#privacy">Privacy Policy</a> | <a href="#terms">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
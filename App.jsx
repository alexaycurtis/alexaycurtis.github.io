import { useEffect } from "react";
import "./App.css";   
import Gallery from "./Gallery";
import { useState } from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);
  const [expandedImage, setExpandedImage] = useState(null);

  useEffect(() =>{
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.3;
      const background = document.querySelector(".app::before");
      if (background) {
        document.documentElement.style.setProperty(
          "--scroll-offset",
          `${rate}px`,
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return ()=> window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects =[
    {
      id: 1,
      title: "Multipage Portfolio",
      category: "Portfolio",
      description:
        "Check out this dark-themed modern portfolio, complete with magical undertones and fluid animations.",
      thumbnail: "portfolio",
      images: [
        {
          id: 1,
          src: "/Project Pictures/portfolio1.png",
          alt: "Portfolio Home Page",
        },
        {
          id: 2,
          src: "/Project Pictures/portfolio2.png",
          alt: "Portfolio About Page",
        },
        {
          id: 3,
          src: "/Project Pictures/portfolio3.png",
          alt: "Portfolio Projects Page",
        },
      ],
    },
    {
      id: 2,
      title: "Educational Website",
      category: "Education",
      description:
        "Take a look at this site I've created for a technology literacy initiative, in partnership with 6+ youth-led nonprofits.",
      thumbnail: "education",
      images: [
        { id: 1, src: "/Project Pictures/edutitle.png" },
        { id: 2, src: "/Project Pictures/edugame3.png" },
        { id: 3, src: "/Project Pictures/edugame4.png" },
      ],
    },
    {
      id: 3,
      title: "Interactive Data Tracker",
      category: "Data",
      description:
        "Created recycling tracker for student volunteers. Easy to use progress dashboard that lets users customize their experience.",
      thumbnail: "presentation",
      images: [
        { id: 1, src: "/Project Pictures/tracker1.png" },
        { id: 2, src: "/Project Pictures/tracker2.png" },
      ],
    },
  ];
  const openGallery = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };
  const closeGallery = () => {
    setSelectedProject(null);
    setExpandedImage(null);
    document.body.style.overflow = "unset";
  };
  const expandImage = (image) => {
    setExpandedImage(image);
  };
  const closeExpandedImage = () => {
    setExpandedImage(null);
  };
  if(currentPage === "gallery"){
    return <Gallery />;
  }

  return(
    <div className="app">
      {/*header*/}
      <header className="header">
        <div className="nav-left"></div>
        <div className="logo">
          <span className="logo-text">Portfolio</span>
        </div>
        <div className="nav-right">
          <button
            className="subscribe-btn"
            onClick={() => setCurrentPage("gallery")}
          >
            See my Work
          </button>
        </div>
      </header>

      {/*Main Content*/}
      <main className="main-content">
        {/*Hero Section*/}
        <section className="hero">
          <div className="hero-left">
            <h1 className="hero-title">
              Graphic Designer & Web Developer{" "}
              <span className="highlight">
                <br></br>Alexa
              </span>{" "}
              ✨
            </h1>
            <p className="hero-description" style={{fontWeight: "400"}}>
              Personal portfolios, sites for small business, brand logos ~
              discover stunning designs in my professional portfolio.
            </p>
            <div className="connect-section">
              <p className="connect-text">
                Contact Me Here:{" "}
                <span className="highlight"> example@gmail.com </span>
              </p>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-templates-grid">
              <div className="template-preview large">
                <div className="template-content">
                  <div className="template-header">Beautiful Websites</div>
                  <div className="template-body">
                    <img
                      src="/Project Pictures/zzz.png"
                      style={{
                        objectFit: "cover",
                        borderRadius: "8px",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="template-preview small">
                <div className="template-content">
                  <div className="template-header">Interactive Apps</div>
                  <div className="template-body">
                    {/* <img src="/Project Pictures/game2.png" style={{width:"100%", height:"100%", objectFit:"cover"}}/> */}
                  </div>
                </div>
              </div>
              <div className="template-preview medium">
                <div className="template-content">
                  <div className="template-header">Graphic Design</div>
                  <div className="template-body">
                    <img
                      src="/logo.svg"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*Trending section*/}
        <section className="trending">
          <h2 className="section-title">🎨 Discover What I Do </h2>
          <div className="topics-grid">
            <div className="topic-item">
              <div className="topic-icon lifestyle">💻</div>
              <span>Beautiful Websites</span>
            </div>
            <div className="topic-item">
              <div className="topic-icon inspiration">📱</div>
              <span>Responsive Layouts</span>
            </div>
            <div className="topic-item">
              <div className="topic-icon technology">📊</div>
              <span>Graphic Design</span>
            </div>
            <div className="topic-item">
              <div className="topic-icon music">🔨</div>
              <span>Maintenance</span>
            </div>
          </div>
        </section>

        {/*Content Grid*/}
        <div className="content-grid">
          {/*left Column*/}
          <div className="left-column">
            {/* Features */}
            <section className="about-section">
              <h2 className="section-title">✨ My Skills</h2>
              <div className="features-list">
                <div className="feature-item">
                  <div className="feature-icon">🚀</div>
                  <div className="feature-content">
                    <h3>Frontend Development</h3>
                    <p>Creating virbant frameworks for all kinds of websites</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🎨</div>
                  <div className="feature-content">
                    <h3>Graphic Design</h3>
                    <p>Beautiful aesthetics and creative artwork</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">💻</div>
                  <div className="feature-content">
                    <h3>User-Interface and Experience</h3>
                    <p>Fluid interactions and displays </p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">📱</div>
                  <div className="feature-content">
                    <h3>Mobile Responsiveness</h3>
                    <p>Perfect sizing for every platform</p>
                  </div>
                </div>
              </div>
            </section>

            {/*statistcs information*/}
            <section className="tag-cloud">
              <h2 className="section-title">📊 By the Numbers</h2>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Websites</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">3K+</div>
                  <div className="stat-label">Happy Visitors</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">5</div>
                  <div className="stat-label">Previews</div>
                </div>
              </div>
            </section>

            {/*popular work*/}
            <section className="recent-posts">
              <h2 className="section-title">⚙️ Most Popular Work</h2>
              <div className="recent-post-item">
                <div className="template-thumb social-media"></div>
                <div>
                  <h4>Multipage Portfolio</h4>
                  <span className="post-date">Created 2025</span>
                </div>
              </div>
              <div className="recent-post-item">
                <div className="template-thumb business"></div>
                <div>
                  <h4>Modern Educational Website</h4>
                  <span className="post-date">Created 2024</span>
                </div>
              </div>
              <div className="recent-post-item">
                <div className="template-thumb presentation"></div>
                <div>
                  <h4>Interactive Data Tracker</h4>
                  <span className="post-date">Created 2024</span>
                </div>
              </div>
            </section>
          </div>

          {/*templates*/}
          <div className="right-column">
            <div className="template-showcase">
              <div className="template-card featured">
                <div className="template-image">
                  <img
                    src="/Project Pictures/portfolio1.png"
                    alt="Multipage Portfolio Preview"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="template-overlay">
                    <button
                      className="use-template-btn"
                      onClick={()=> openGallery(projects[0])}
                    >
                      See More
                    </button>
                  </div>
                </div>
                <div className="template-info">
                  <h3>Multipage Portfolio</h3>
                  <p>Modern template for professionals</p>
                  <div className="template-meta">
                    <span className="template-category">Portfolio</span>
                    <span className="template-count">5 Pages</span>
                  </div>
                </div>
              </div>

              <div className="template-card">
                <div className="template-image">
                  <img
                    src="/Project Pictures/edutitle.png"
                    alt="Educational Site"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="template-preview-medium business">
                    <div className="preview-content">
                      <div className="preview-header">Educational Website</div>
                      <div className="preview-grid">
                        <div className="grid-item"></div>
                        <div className="grid-item"></div>
                        <div className="grid-item"></div>
                        <div className="grid-item"></div>
                      </div>
                    </div>
                  </div>
                  <div className="template-overlay">
                    <button
                      className="use-template-btn"
                      onClick={()=> openGallery(projects[1])}
                    >
                      See More
                    </button>
                  </div>
                </div>
                <div className="template-info">
                  <h3>Educational Website</h3>
                  <p>Designed for activism and knowledge</p>
                  <div className="template-meta">
                    <span className="template-category">Education</span>
                    <span className="template-count">8 Pages</span>
                  </div>
                </div>
              </div>

              <div className="template-card">
                <div className="template-image">
                  <img
                    src="/Project Pictures/tracker1.png"
                    alt="Educational Site"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="template-preview-medium presentation">
                    <div className="preview-content">
                      <div className="preview-header">Web Apps</div>
                      <div className="preview-slides">
                        <div className="slide"></div>
                        <div className="slide"></div>
                        <div className="slide"></div>
                      </div>
                    </div>
                  </div>
                  <div className="template-overlay">
                    <button
                      className="use-template-btn"
                      onClick={()=> openGallery(projects[2])}
                    >
                      See More
                    </button>
                  </div>
                </div>
                <div className="template-info">
                  <h3>Interactive Data Tracker</h3>
                  <p>Scheduling, Productivity, Volunteering</p>
                  <div className="template-meta">
                    <span className="template-category">Web Apps</span>
                    <span className="template-count">2 Pages</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*About Me Section*/}
        <section className="about-me-section">
          <div className="about-me-grid">
            <div className="about-me-content">
              <h2>About Me</h2>
              <p>
                I'm a web developer and graphic designer with over 2 years of
                experience creating beautiful, functional websites and digital
                experiences. My journey started with a love for combining
                creativity with technology to solve real-world problems.
              </p>
              <p>
                I specialize in modern web design, user experience optimization,
                and creating clean illustrations. In every project, I want to
                help inspire others.
              </p>
              <div className="skills-list">
                <span className="skill-tag">Web Development</span>
                <span className="skill-tag">UI/UX</span>
                <span className="skill-tag">Graphic Design</span>
                <span className="skill-tag">SEO Optimization</span>
              </div>
            </div>
            <div className="about-me-images">
              <div className="about-image main-image">
                <img
                  src="/designer.png"
                  alt="Photo of the developer"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                    borderRadius: "15px",
                    opacity: 1,
                  }}
                />
              </div>
              <div className="about-images-grid">
                <div className="about-image small-image"></div>
                <div className="about-image small-image"></div>
              </div>
            </div>
          </div>
        </section>

        {/*Services Section*/}
        <section className="services-section">
          <h2 className="bubble-title"> What I Create </h2>
          <div className="services-grid">
            <div className="service-category">
              <h3>Personal</h3>
              <div className="service-items">
                <div className="service-item">
                  <span>Website Maintenance</span>
                  <span className="service-price">From $50/mo</span>
                </div>
                <div className="service-item">
                  <span>Simple Landing Page</span>
                  <span className="service-price">From $99</span>
                </div>
                <div className="service-item">
                  <span>Single Page Portfolios</span>
                  <span className="service-price">From $199</span>
                </div>
                <div className="service-item">
                  <span>Multipage Websites</span>
                  <span className="service-price">From $399</span>
                </div>
              </div>
            </div>
            <div className="service-category">
              <h3>Businesses / Organizations</h3>
              <div className="service-items">
                <div className="service-item">
                  <span>Website Maintenance</span>
                  <span className="service-price">From $100/mo</span>
                </div>
                <div className="service-item">
                  <span>One-Page Business Site</span>
                  <span className="service-price">From $399</span>
                </div>
                <div className="service-item">
                  <span>Multipage Business Site</span>
                  <span className="service-price">From $499</span>
                </div>
              </div>
            </div>
          </div>
          <div className="gallery-cta" style={{ margin: "5rem" }}>
            <button
              className="view-all-btn"
              onClick={() => setCurrentPage("gallery")}
            >
              View More Projects →
            </button>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Contact Me</h2>
              <p>
                Ready to level up your website? I'd love to hear from you. I
                respond via email in 1-2 business days.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <span>example@gmail.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>United States</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-left">
              <div className="logo-text">Alexa</div>
              <p>Building websites, designing flyers since 2024. Coding in five different languages. Stay tuned for more in the future.</p>
            </div>
            <div className="footer-links">
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2025 Alexa. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>

      {/* Image Gallery Popup */}
      {selectedProject && (
        <div className="gallery-popup" onClick={closeGallery}>
          <div
            className="gallery-popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={closeGallery}>
              ×
            </button>
            <div className="popup-header">
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
            </div>
            <div className="gallery-images">
              {selectedProject.images.map((image, index) => (
                <div
                  key={image.id}
                  className="gallery-image"
                  onClick={() => image.src && expandImage(image)}
                >
                  {image.src ? (
                    <img
                      src={image.src}
                      alt={
                        image.alt ||
                        `${selectedProject.title} - Image ${index + 1}`
                      }
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />
                  ) : (
                    <div
                      className={`image-placeholder ${selectedProject.thumbnail}-${index + 1}`}
                    >
                      <div className="image-content">
                        <div className="image-label">{image.alt}</div>
                        <div className="mock-content">
                          <div className="mock-element"></div>
                          <div className="mock-element"></div>
                          <div className="mock-element large"></div>
                        </div>
                      </div>
                    </div>
                  )}
                  {image.src && (
                    <div className="expand-hint">
                      <span>🔍 Click to expand</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/*expand images */}
      {expandedImage && (
        <div className="expanded-image-modal" onClick={closeExpandedImage}>
          <div
            className="expanded-image-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-expanded-btn" onClick={closeExpandedImage}>
              ×
            </button>
            <img
              src={expandedImage.src}
              alt={expandedImage.alt}
              className="expanded-image"
            />
            <div className="expanded-image-info">
              <h3>{expandedImage.alt}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

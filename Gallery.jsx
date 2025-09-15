import './Gallery.css'
import { useState } from 'react'

export default function Gallery(){
  const [selectedProject, setSelectedProject] = useState(null)
  const [expandedImage, setExpandedImage] = useState(null)

//organizing info for each gallery entry
  const projects =[    
    {
      id: 1,   
      title: "Modern Portfolio Website",
      category: "Portfolio",
      description: "A sleek, responsive portfolio showcasing creative work with smooth animations.",
      thumbnail: "portfolio",
      images:[
        {id: 1, src: "/reactivefolio/Project Pictures/portfolio1.png", alt: "Portfolio Home Page"},
        {id: 2, src: "/reactivefolio/Project Pictures/portfolio2.png", alt: "Portfolio About Page"},
        {id: 3, src: "/reactivefolio/Project Pictures/portfolio3.png", alt: "Portfolio Projects Page"},
        {id: 4, src: "/reactivefolio/Project Pictures/portfolio5.png", alt: "Portfolio Contact Page"},
        {id: 5, src: "/reactivefolio/Project Pictures/portfolio6.png", alt: "Portfolio Contact Page"},
         {id: 6, src: "/reactivefolio/Project Pictures/portfolio7.png", alt: "Portfolio Contact Page"}
      ]                            
    },  
    {         
      id: 2,
      title: "Educational Platform",
      category: "Education",
      description: "Interactive learning platform with course management and student tracking.",
      thumbnail: "",
      images:[
        {id: 1, src: "/reactivefolio/Project Pictures/edutitle.png", alt: "Educational Platform Home"},
        {id: 2, src: "/reactivefolio/Project Pictures/edugame3.png", alt: "Interactive Learning Game"},
        {id: 3, src: "/reactivefolio/Project Pictures/edugame4.png", alt: "Course Progress Tracker"}
      ]
    },
    {
      id: 3,
      title: "Interactive Data Tracker",
      category: "Data",
      description: "Created recycling tracker for student volunteers. Easy to use progress dashboard that lets users customize their experience.",
      thumbnail: "data",
      images:[
        {id: 1, src: "/reactivefolio/Project Pictures/tracker1.png", alt: "Tracker Dashboard"},
        {id: 2, src: "/reactivefolio/Project Pictures/tracker2.png", alt: "Progress Analytics"}
      ]
    },
    {
      id: 4,
      title: "Web Games",
      category: "Game Design",
      description: "Fun, interactive browser games that combine strategy and stunning visuals",
      thumbnail: "games",
      images: [
        {id: 1, src: "/reactivefolio/Project Pictures/site1.png"},
        {id: 2, src: "/reactivefolio/Project Pictures/site2.png"},
        {id: 3, src: "/reactivefolio/Project Pictures/site3.png"},
        {id: 4, src: "/reactivefolio/Project Pictures/site4.png"}
      ]
    },
    {
      id: 5,
      title: "Posters and Flyers",
      category: "Digital Design",
      description: "Beautiful posters and illustrations created digitally.",
      thumbnail: "agency",
      images: [
        {id: 1, src:"/reactivefolio/posters/poster2.png"},
        {id: 2, src:"/reactivefolio/posters/poster3.png"},
        {id: 3, src:"/reactivefolio/posters/poster1.png"},
        {id: 4, src:"/reactivefolio/posters/poster4.png"}
      ]
    }
  ]

  const openGallery = (project)=>{
    setSelectedProject(project)
    document.body.style.overflow = 'hidden'
  }

  const closeGallery = ()=>{
    setSelectedProject(null)
    setExpandedImage(null)
    document.body.style.overflow = 'unset'
  }

  const expandImage = (image)=>{
    setExpandedImage(image)
  }

  const closeExpandedImage = ()=>{
    setExpandedImage(null)
  }

  return (
    <div className="gallery-page">
      {/*jheader*/}
      <header className="gallery-header">
        <div className="nav-left">
          <button 
            className="back-btn"
            onClick={()=> window.location.href = '/reactivefolio/'}
          >
            ← Back to Home
          </button>
        </div>
        <div className="logo">
          <span className="logo-text">Portfolio</span>
        </div>
        <div className="nav-right">
        </div>
      </header>

      {/*main gallery*/}
      <main className="gallery-main">
        {/*top section*/}
        <section className="gallery-hero">
          <h1 className="gallery-title">
            My <span className="highlight">Work</span> ✨
          </h1>
          <p className="gallery-description">
            Explore a collection of websites I've designed and developed. 
            Click on any project to see more details.
          </p>
        </section>

        {/*grid*/}
        <section className="projects-section">
          <div className="projects-grid">
            {projects.map((project) =>(
              <div 
                key={project.id} 
                className="project-card"
                onClick={()=> openGallery(project)}
              >
                <div className="project-image">
                  <img 
                    src={project.images.length > 0 ? project.images[0].src : ''} 
                    alt={project.images.length > 0 ? project.images[0].alt : `${project.title} preview`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <div className="project-overlay">
                    <span className="view-gallery-text">View Gallery</span>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-meta">
                    <span className="project-category">{project.category}</span>
                    <span className="image-count">{project.images.length} Images</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/*popup */}
      {selectedProject && (
        <div className="gallery-popup" onClick={closeGallery}>
          <div className="gallery-popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeGallery}>×</button>
            <div className="popup-header">
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
            </div>
            <div className="gallery-images">
              {selectedProject.images.map((image, index)=>(
                <div 
                  key={image.id} 
                  className="gallery-image"
                  onClick={() => image.src && expandImage(image)}
                >
                  {image.src ? (
                    <img 
                      src={image.src} 
                      alt={image.alt || `${selectedProject.title} - Image ${index + 1}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '10px'
                      }}
                    />
                  ) : (
                    <div className={`image-placeholder ${selectedProject.thumbnail}-${index + 1}`}>
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

      {/*pop out (same as home)*/}
      {expandedImage && (
        <div className="expanded-image-modal" onClick={closeExpandedImage}>
          <div className="expanded-image-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-expanded-btn" onClick={closeExpandedImage}>×</button>
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
  )
}

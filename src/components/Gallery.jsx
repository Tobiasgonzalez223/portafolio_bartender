import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';
import img4 from '../assets/images/4.jpg';
import vid1 from '../assets/videos/1.mp4';
import vid2 from '../assets/videos/2.mp4';

import { useRef } from 'react';

const galleryItems = [
    { type: 'image', src: img1, alt: 'Image 1' },
    { type: 'image', src: img2, alt: 'Image 2' },
    { type: 'image', src: img3, alt: 'Image 3' },
    { type: 'image', src: img4, alt: 'Image 4' },
    { type: 'video', src: vid1, alt: 'Video 1' },
    { type: 'video', src: vid2, alt: 'Video 2' }
]

function Gallery() {
  const videoRefs = useRef([])

  const handlePlay = (currentIndex) => {
    videoRefs.current.forEach((video, index) => {
      if (video && index !== currentIndex) {
        video.pause()
      }
    })
  }

  return (
    <section className="gallery" id="gallery">
      <h2 className="section-title">Galería</h2>
      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div className="gallery-item" key={index}>
            {item.type === 'image' ? (
              <img src={item.src} alt={item.alt} />
            ) : (
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={item.src}
                controls
                loop
                onPlay={() => handlePlay(index)}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery
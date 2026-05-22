import { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/gallery.css';

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Dummy data gambar dengan orientasi campuran (Portrait, Landscape, Square)
  // Ganti src ini dengan path gambar asli Anda nantinya (misal: import img1 from '../assets/img1.jpg')
  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80',
      alt: 'Makeup 1',
    }, // Portrait tall
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80',
      alt: 'Makeup 2',
    }, // Landscape
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80',
      alt: 'Makeup 3',
    }, // Landscape
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=600&q=80',
      alt: 'Makeup 4',
    }, // Portrait
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80',
      alt: 'Makeup 5',
    }, // Landscape
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80',
      alt: 'Makeup 6',
    }, // Landscape
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
      alt: 'Makeup 7',
    }, // Square
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80',
      alt: 'Makeup 8',
    }, // Portrait tall
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=600&q=80',
      alt: 'Makeup 9',
    }, // Landscape
  ];

  return (
    <div className='gallery-page'>
      <div className='gallery-content'>
        <motion.h1
          className='page-title'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Galeri
        </motion.h1>

        {/* Masonry Grid Container */}
        <div className='masonry-grid'>
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              className='masonry-item'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.6,
                delay: (index % 3) * 0.15,
                ease: 'easeOut',
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className='gallery-img'
                loading='lazy'
              />
              {/* Overlay hover effect optional (sesuai nuansa premium) */}
              <div className='img-overlay'></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className='gallery-action'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a
            href='https://www.instagram.com/aurelweddingallery'
            className='btn-primary'
            target='_blank'
          >
            Kunjungi Instagram
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;

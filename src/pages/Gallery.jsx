import { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/gallery.css';

import pict1 from '../assets/gal1.jpeg'
import pict2 from '../assets/gal2.jpeg'
import pict3 from '../assets/gal3.jpeg'
import pict4 from '../assets/gal4.jpg'
import pict5 from '../assets/gal5.jpeg'
import pict6 from '../assets/gal6.jpeg'
import pict7 from '../assets/gal7.jpg'
import pict8 from '../assets/gal8.jpeg'
import pict9 from '../assets/gal9.jpeg'
import pict10 from '../assets/gal10.jpeg'
import pict11 from '../assets/gal11.jpeg'
import pict12 from '../assets/gal12.jpeg'

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryImages = [
    {
      id: 1,
      src: pict1,
      alt: 'Makeup 1',
    }, 
    {
      id: 2,
      src: pict2,
      alt: 'Makeup 2',
    }, 
    {
      id: 3,
      src: pict3,
      alt: 'Makeup 3',
    }, 
    {
      id: 4,
      src: pict4,
      alt: 'Makeup 4',
    }, 
    {
      id: 5,
      src: pict5,
      alt: 'Makeup 5',
    }, 
    {
      id: 6,
      src: pict6,
      alt: 'Makeup 6',
    }, 
    {
      id: 7,
      src: pict7,
      alt: 'Makeup 7',
    }, 
    {
      id: 8,
      src: pict8,
      alt: 'Makeup 8',
    }, 
    {
      id: 9,
      src: pict9,
      alt: 'Makeup 9',
    }, 
    {
      id: 10,
      src: pict10,
      alt: 'Makeup 10',
    }, 
    {
      id: 11,
      src: pict11,
      alt: 'Makeup 11',
    }, 
    {
      id: 12,
      src: pict12,
      alt: 'Makeup 12',
    }, 
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
            href='https://www.instagram.com/rellmakeup'
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

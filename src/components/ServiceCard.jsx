import { motion } from 'framer-motion';
import '../styles/components/service-card.css';

const ServiceCard = ({ image, title, price, index }) => {
  return (
    <motion.div
      className='service-card'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
    >
      <div className='card-image-wrapper'>
        <img src={image} alt={title} className='card-image' />
      </div>
      <div className='card-content'>
        <div className='card-text'>
          <span className='card-label'>Makeup</span>
          <h3 className='card-title'>{title}</h3>
        </div>
        <div className='card-price-box'>
          <span className='card-label price-label'>Mulai</span>
          <span className='card-price'>{price}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;

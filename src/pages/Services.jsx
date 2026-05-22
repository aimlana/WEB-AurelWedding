import { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/services.css';

import pricelistFile from '../assets/pricelist.jpeg';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mainServices = [
    {
      title: 'Makeup Wedding',
      price: '400k',
      addons: [
        { symbol: '+', text: 'Attire', price: '500k' },
        { symbol: '+', text: 'Hijab/Hair DO', price: '350k' },
      ],
    },
    { title: 'Makeup Mapettuada/Lamaran', price: '250k' },
    { title: 'Makeup Party', price: '100k' },
    { title: 'Makeup Wisuda', price: '180k' },
    { title: 'Makeup Ramah Tamah', price: '120k' },
    {
      title: 'Makeup Penari',
      price: '',
      addons: [
        { symbol: '•', text: 'Kreasi', price: '120k' },
        { symbol: '•', text: 'Biasa', price: '100k' },
      ],
    },
    { title: 'Makeup Promnight', price: '150k' },
    { title: 'Makeup Natural (No Eyelash)', price: '150k' },
    {
      title: 'Makeup Anak-Anak',
      price: '',
      addons: [
        { symbol: '•', text: 'Biasa', price: '75k' },
        { symbol: '•', text: 'Karnaval', price: '50k' },
      ],
    },
  ];

  const moreItems = [
    { symbol: '+', text: 'Hair DO', price: '100k' },
    { symbol: '+', text: 'Hijab DO', price: '50k' },
    { symbol: '+', text: 'Softlens', price: '35k' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }, 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className='services-page'>
      <div className='services-content'>
        <motion.h1
          className='page-title'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Layanan
        </motion.h1>

        <motion.div
          className='pricelist-container'
          variants={containerVariants}
          initial='hidden'
          animate='show'
        >
          {/* Main Services List */}
          {mainServices.map((item, index) => (
            <motion.div
              key={index}
              className='pricelist-item-group'
              variants={itemVariants}
            >
              <div className='pricelist-main'>
                <h3 className='item-title'>{item.title}</h3>
                <span className='item-price'>{item.price}</span>
              </div>

              {item.addons && (
                <div className='pricelist-addons'>
                  {item.addons.map((addon, idx) => (
                    <div key={idx} className='addon-row'>
                      <span className='addon-text'>
                        <span className='addon-symbol'>{addon.symbol}</span>{' '}
                        {addon.text}
                      </span>
                      <span className='addon-price'>{addon.price}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}

          <motion.div
            className='pricelist-item-group no-border'
            variants={itemVariants}
          >
            <div className='pricelist-main mt-4'>
              <h3 className='item-title'>More Items</h3>
            </div>
            <div className='pricelist-addons'>
              {moreItems.map((item, idx) => (
                <div key={idx} className='addon-row'>
                  <span className='addon-text'>
                    <span className='addon-symbol'>{item.symbol}</span>{' '}
                    {item.text}
                  </span>
                  <span className='addon-price'>{item.price}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Button Section */}
        <motion.div
          className='services-action'
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <a
            href={pricelistFile}
            download='Pricelist_Aurel_Wedding_Gallery.jpeg'
            className='btn-primary btn-download'
          >
            Download Pricelist
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;

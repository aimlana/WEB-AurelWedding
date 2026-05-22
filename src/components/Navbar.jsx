import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import '../styles/navbar.css';

// Import aset logo
import logoPink from '../assets/logo-pink.png';
import logoLight from '../assets/logo-light.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Layanan', path: '/layanan' },
    { name: 'Galeri', path: '/galeri' }, 
    { name: 'Tentang Saya', path: '/tentang-saya' }, 
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className='nav-container'>
          <Link to='/' className='nav-logo-link'>
            <div className='nav-logo'>
              <img
                src={logoPink}
                alt='Aurel Wedding Gallery'
                className='logo-img'
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className='nav-links desktop-only'>
            {navLinks.map((link, i) => (
              <Link
                to={link.path}
                key={i}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className='mobile-toggle mobile-only'
            onClick={() => setIsOpen(true)}
          >
            <Menu color='var(--color-pink)' size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='mobile-menu-overlay'
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <button className='close-menu' onClick={() => setIsOpen(false)}>
              <X color='var(--color-white)' size={32} />
            </button>
            <div className='mobile-menu-logo'>
              <img
                src={logoLight}
                alt='Aurel Wedding Gallery'
                className='logo-img-mobile'
              />
            </div>
            <div className='mobile-menu-links'>
              {navLinks.map((link, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <Link to={link.path} onClick={() => setIsOpen(false)}>
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

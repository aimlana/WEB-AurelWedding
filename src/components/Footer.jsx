import { MessageCircle, Mail } from 'lucide-react';
import '../styles/footer.css';

// Import aset logo 
import logoLight from '../assets/logo-light.png';

const InstagramIcon = ({ size = 20 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <rect width='20' height='20' x='2' y='2' rx='5' ry='5' />
    <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
    <line x1='17.5' x2='17.51' y1='6.5' y2='6.5' />
  </svg>
);

const TiktokIcon = ({ size = 20 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M14 3v10.5a3.5 3.5 0 1 1-3.5-3.5' />
    <path d='M14 7c1.5 2 3.5 3 6 3' />
  </svg>
);

  // --- TEMPLATE WHATSAPP ---
  const WA_PHONE = '6289602160739';
  const WA_MESSAGE = `Halo Aurel Wedding Gallery
Saya ingin konsultasi terkait jasanya.

Terima kasih :) `;

  const waLink = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(WA_MESSAGE)}`;

const Footer = () => {
  return (
    <footer className='footer-section'>
      <div className='footer-container'>
        <div className='footer-left'>
          <div className='footer-logo'>
            <img
              src={logoLight}
              alt='Aurel Wedding Gallery'
              className='footer-logo-img'
            />
          </div>

          <div className='footer-socials desktop-socials'>
            <a
              href='https://www.instagram.com/rellmakeup'
              className='social-icon'
              target='_blank'
            >
              <InstagramIcon size={20} />
            </a>
            <a
              href='https://www.tiktok.com/@aurelmakeupgallery'
              className='social-icon'
              target='_blank'
            >
              <TiktokIcon size={20} />
            </a>
            <a
              href={waLink}
              target='_blank'
              rel='noopener noreferrer'
              className='social-icon'
              target='_blank'
            >
              <MessageCircle size={20} />
            </a>
            <a
              href='mailto:aurelbridal@gmail.com'
              className='social-icon'
              target='_blank'
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className='footer-right'>
          <p className='footer-address'>
            BTN Graha Kalegowa Blok D6 No. 1, Paccinongang,
            <br />
            Kec. Pallangga, Kabupaten Gowa
          </p>
          <div className='footer-map'>
            {/* Implementasi Google Maps iframe yang sudah dikonversi ke format JSX */}
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.2532532872883!2d119.4466575!3d-5.222855900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee1001c0d5f7b%3A0x41e9442929244b4c!2sSalon%20Aurel!5e0!3m2!1sid!2sid!4v1779346793617!5m2!1sid!2sid'
              width='100%'
              height='100%'
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              title='Lokasi Aurel Wedding Gallery'
            ></iframe>
          </div>
        </div>
      </div>

      <div className='footer-bottom'>
        <div className='footer-socials mobile-socials'>
          <a
            href='https://www.instagram.com/rellmakeup'
            className='social-icon'
          >
            <InstagramIcon size={20} />
          </a>
          <a
            href='https://www.tiktok.com/@aurelmakeupgallery'
            className='social-icon'
          >
            <TiktokIcon size={20} />
          </a>
          <a
            href={waLink}
            target='_blank'
            rel='noopener noreferrer'
            className='social-icon'
          >
            <MessageCircle size={20} />
          </a>
          <a href='mailto:aurelbridal@gmail.com' className='social-icon'>
            <Mail size={20} />
          </a>
        </div>
        <p className='copyright'>© 2026. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

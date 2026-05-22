import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import '../styles/home.css';

// Placeholder untuk assets, ganti dengan import gambar Anda
const HERO_IMG =
  'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80';
const ABOUT_IMG =
  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80';
const SRV_1 =
  'https://images.unsplash.com/photo-1595956553066-ae24a3c896f6?auto=format&fit=crop&w=600&q=80';
const SRV_2 =
  'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=600&q=80';
const SRV_3 =
  'https://images.unsplash.com/photo-1620052328249-1667b36f60ce?auto=format&fit=crop&w=600&q=80';

const Home = () => {
  const fadeUpConfig = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  };

  const servicesData = [
    { title: 'Pengantin', price: '400K', image: SRV_1 },
    { title: 'Wisuda', price: '180K', image: SRV_2 },
    { title: 'Mapettuada', price: '250K', image: SRV_3 },
  ];

  // --- TEMPLATE WHATSAPP ---
  const WA_PHONE = '6289602160739';
  const WA_MESSAGE = `Halo Aurel Wedding Gallery
Saya ingin melakukan reservasi jasa Make Up Artist.

Berikut detail saya:
-Nama:
-Tanggal Acara:
-Lokasi:
-Jenis Acara:
-Jam Acara:
-Jumlah Orang:
-Paket yang Dipilih:
-Request Makeup/Hijab:
-No. HP:

Mohon info ketersediaan jadwal dan detail harganya ya Kak. 
Terima kasih :) `;

  const waLink = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(WA_MESSAGE)}`;

  return (
    <div className='home-page'>
      {/* HERO SECTION */}
      <section className='hero-section' id='beranda'>
        <motion.div className='hero-content' {...fadeUpConfig}>
          <h1 className='hero-title'>
            Tampil Elegan <br /> di Momen{' '}
            <span className='text-highlight'>Spesialmu</span>
          </h1>
          <p className='hero-subtitle'>
            Tampil lebih percaya diri dengan makeup yang menyesuaikan karakter
            dan kecantikan alamimu
          </p>
          <a
            href={waLink}
            target='_blank'
            rel='noopener noreferrer'
            className='btn-primary'
          >
            Reservasi Sekarang
          </a>
        </motion.div>
        <motion.div
          className='hero-image-wrapper'
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        >
          <img src={HERO_IMG} alt='Wedding Couple' className='hero-image' />
        </motion.div>
      </section>

      {/* LAYANAN SECTION */}
      <section className='services-section' id='layanan'>
        <motion.h2 className='section-title text-white' {...fadeUpConfig}>
          Layanan Kami
        </motion.h2>
        <div className='services-grid'>
          {servicesData.map((srv, idx) => (
            <ServiceCard
              key={idx}
              index={idx}
              image={srv.image}
              title={srv.title}
              price={srv.price}
            />
          ))}
        </div>
        <motion.div className='services-cta' {...fadeUpConfig}>
          <a href='/layanan' className='btn-outline'>Selengkapnya</a>
        </motion.div>
      </section>

      {/* TENTANG SAYA SECTION */}
      <section className='about-section' id='tentang-saya'>
        <motion.h2
          className='section-title mobile-only-title'
          {...fadeUpConfig}
        >
          Tentang Saya
        </motion.h2>
        <div className='about-container'>
          <motion.div
            className='about-image-wrapper'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src={ABOUT_IMG} alt='Makeup Artist' className='about-image' />
          </motion.div>
          <motion.div className='about-content' {...fadeUpConfig}>
            <h2 className='section-title desktop-only-title'>Tentang Saya</h2>
            <p className='about-desc'>
              Saya percaya <span className='text-highlight'>makeup</span> bukan
              tentang mengubah seseorang menjadi orang lain, tapi membantu
              mereka tampil lebih{' '}
              <span className='text-highlight'>percaya diri</span> dengan{' '}
              <span className='text-highlight'>versi terbaik</span> dirinya
              sendiri.
            </p>
            <a href='/tentang-saya' className='btn-primary'>Selengkapnya</a>
          </motion.div>
        </div>
      </section>

      {/* BOTTOM CTA SECTION */}
      <section className='bottom-cta-section'>
        <motion.div className='cta-content' {...fadeUpConfig}>
          <h2 className='cta-title'>
            Siap tampil <span className='text-highlight'>percaya diri</span>
            <br />
            <span>di </span>
            <span className='text-highlight'>momen</span> spesialmu?
          </h2>
          <a
            href={waLink}
            target='_blank'
            rel='noopener noreferrer'
            className='btn-primary'
          >
            Reservasi Sekarang
          </a>
        </motion.div>
      </section>
    </div>
  );
};;

export default Home;

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/about-me.css';

// Gambar model portrait
const ABOUT_ME_IMG =
  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80';

const AboutMe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  };

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
    <div className='about-me-page'>
      <div className='about-me-container'>
        <motion.h1 className='page-title' {...fadeUp}>
          Tentang Saya
        </motion.h1>

        <div className='about-me-main'>
          <div className='about-left-col'>
            <motion.div className='about-me-img-wrapper' {...fadeUp}>
              <img src={ABOUT_ME_IMG} alt='Aurel' />
            </motion.div>

            {/* Statistik Section REVISI */}
            <motion.div
              className='stats-row'
              {...fadeUp}
              transition={{ delay: 0.1 }}
            >
              <div className='stat-item'>
                <h3 className='stat-value'>250+</h3>
                <p className='stat-label'>Klien</p>
              </div>
              <div className='stat-item'>
                <h3 className='stat-value'>5+ Thn</h3>
                <p className='stat-label'>Pengalaman</p>
              </div>
              <div className='stat-item'>
                <h3 className='stat-value'>98%</h3>
                <p className='stat-label'>Repeat Order</p>
              </div>
            </motion.div>

            <motion.a
              href={waLink}
              target='_blank'
              rel='noopener noreferrer'
              className='btn-primary btn-reservasi desktop-only-btn'
              {...fadeUp}
            >
              Reservasi Sekarang
            </motion.a>
          </div>

          {/* SISI KANAN: Narasi / Teks */}
          <motion.div className='about-right-col' {...fadeUp}>
            <p className='about-p'>
              Berawal dari kecintaan terhadap dunia kecantikan yang tumbuh di
              lingkungan keluarga, saya mengenal seni tata rias sejak kecil
              melalui ibu saya, Rahmi S. Palanna, yang telah lebih dahulu
              berkarier di bidang beauty dan wedding.
            </p>
            <p className='about-p'>
              Perjalanan tersebut dimulai dari Salon Aurel yang berdiri sejak
              tahun 2006, kemudian berkembang menjadi Aurel Wedding Gallery.
              Sebuah layanan yang berfokus pada wedding dan professional makeup
              untuk berbagai acara spesial.
            </p>
            <p className='about-p'>
              Terinspirasi dari perjalanan itu, saya membangun ReliMakeup
              sebagai layanan makeup professional yang menghadirkan sentuhan
              riasan yang elegan, personal, dan menyesuaikan karakter wajah
              setiap klien. Layanan tersedia untuk home service maupun makeup di
              studio, dengan mengutamakan kenyamanan selama proses makeup.
            </p>
            <p className='about-p'>
              Bagi saya, makeup bukan sekadar merias wajah, tetapi membantu
              setiap perempuan tampil lebih percaya diri tanpa kehilangan versi
              terbaik dirinya sendiri.
            </p>

            {/* Button Mobile: Muncul di paling bawah narasi pada mobile */}
            <a
              href={waLink}
              target='_blank'
              rel='noopener noreferrer'
              className='btn-primary btn-reservasi mobile-only-btn'
            >
              Reservasi Sekarang
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};;

export default AboutMe;

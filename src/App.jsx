import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
// import Home from './pages/Home';
// import Services from './pages/Services';
// import Gallery from './pages/Gallery';
// import AboutMe from './pages/AboutMe';
import './styles/global.css';

import Maintenance from './components/Maintenance';

const ScrollManagement = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <MainLayout>
      <ScrollManagement />
        <Maintenance />
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/layanan' element={<Services />} />
        <Route path='/galeri' element={<Gallery />} />
        <Route path='/tentang-saya' element={<AboutMe />} />
      </Routes> */}
    </MainLayout>
  );
}

export default App;

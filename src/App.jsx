import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import SolarSystems from './pages/SolarSystems';
import NetMetering from './pages/NetMetering';
import SecuritySolutions from './pages/SecuritySolutions';
import NetworkingSolutions from './pages/NetworkingSolutions';
import CivilConstruction from './pages/CivilConstruction';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="solar-systems" element={<SolarSystems />} />
          <Route path="net-metering" element={<NetMetering />} />
          <Route path="security-solutions" element={<SecuritySolutions />} />
          <Route path="networking-solutions" element={<NetworkingSolutions />} />
          <Route path="civil-construction" element={<CivilConstruction />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          {/* Catch-all redirect to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

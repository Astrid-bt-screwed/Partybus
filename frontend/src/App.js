import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Partybusse from './pages/Partybusse';
import BusDetail from './pages/BusDetail';
import Preise from './pages/Preise';
import Ablauf from './pages/Ablauf';
import Kontakt from './pages/Kontakt';
import UeberUns from './pages/UeberUns';
import JGA from './pages/events/JGA';
import Geburtstag from './pages/events/Geburtstag';
import Firmenfeier from './pages/events/Firmenfeier';
import Maturaball from './pages/events/Maturaball';
import Hochzeit from './pages/events/Hochzeit';
import Striptease from './pages/events/Striptease';
import Wien from './pages/cities/Wien';
import Linz from './pages/cities/Linz';
import Wels from './pages/cities/Wels';
import Steyr from './pages/cities/Steyr';
import Salzburg from './pages/cities/Salzburg';
import Graz from './pages/cities/Graz';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        {/* Background radial spots */}
        <div className="radial-spot top-0 left-0 opacity-50"></div>
        <div className="radial-spot bottom-0 right-0 opacity-30"></div>
        
        <Navbar />
        
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/partybusse" element={<Partybusse />} />
            <Route path="/partybus/:busId" element={<BusDetail />} />
            <Route path="/preise" element={<Preise />} />
            <Route path="/ablauf" element={<Ablauf />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/ueber-uns" element={<UeberUns />} />
            <Route path="/junggesellenabschied" element={<JGA />} />
            <Route path="/geburtstag" element={<Geburtstag />} />
            <Route path="/firmenfeier" element={<Firmenfeier />} />
            <Route path="/maturaball" element={<Maturaball />} />
            <Route path="/hochzeit" element={<Hochzeit />} />
            <Route path="/striptease" element={<Striptease />} />
            <Route path="/partybus-wien" element={<Wien />} />
            <Route path="/partybus-linz" element={<Linz />} />
            <Route path="/partybus-wels" element={<Wels />} />
            <Route path="/partybus-steyr" element={<Steyr />} />
            <Route path="/partybus-salzburg" element={<Salzburg />} />
            <Route path="/partybus-graz" element={<Graz />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Connexion from './pages/Connexion';
import Annonce from './pages/Annonce';
import Inscription from './pages/Inscription';
import Publier from './pages/Publier';
import Notification from './pages/Notification';
import Profil from './pages/Profil';
import PrivateComponents from './components/PrivateComponents/index.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />

<<<<<<< HEAD
        {/* <Route element={<PrivateComponents />}> */}
        <Route path="/annonce" element={<Annonce />} />
        <Route path="/publier" element={<Publier />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/profil" element={<Profil />} />
        {/* </Route> */}

        <Route path="/inscription" element={<Inscription />} />
        <Route path="/connexion" element={<Connexion />} />
=======
        <Route element={<PrivateComponents />}>
          <Route path="/annonce" element={<Annonce/>} />
          <Route path="/publier" element={<Publier/>} />
          <Route path="/notifications" element={<Notification/>} />
          <Route path="/profil" element={<Profil/>} />
        </Route>
        
        <Route path="/inscription" element={<Inscription/>} />
        <Route path="/connexion" element={<Connexion/>} />
>>>>>>> 8358bc41e5b4fc492c1a0d6e8f488ce1be8c6e42
        <Route path="/*" element={<p> 404 </p>} />
      </Routes>

    </Router>

  </React.StrictMode>
);



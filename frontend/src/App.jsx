import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Body from "./Pages/body/body";
import Footer from "./Pages/footer/footer";
import Navigation from "./Pages/Navbar/Navigation";
import Filemanager from "./Pages/File-Manager/file";
import Application from "./Pages/Apps/Application";
import CustomSlider from "./Pages/Slider/Slider";
import QR from "./Pages/QR-Reader/QR"
import Remote from "./Pages/Remote-Control/Remote";
import SMS from "./Pages/SMS-backup/SMS";
import PrivacyPolicy from "./Pages/Privacy Policy/Privacypolicy";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/apps/file-manager" element={<Filemanager />} />
        <Route path="/apps/app" element={<Application />} />
        <Route path="/slider" element={<CustomSlider />} />
        <Route path="/apps/qr-reader" element={<QR />} />
        <Route path="/apps/remote" element={<Remote />} />
        <Route path="/apps/sms-backup" element={<SMS />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
       <Footer /> 
    </Router>
  );
}

export default App;



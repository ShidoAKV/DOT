import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import Category from "./Components/Category.jsx";
import Carousel from "./Components/Carousel.jsx";
import Footersection from "./Components/Footer.jsx";
import { Routes, Route } from 'react-router-dom';
import Contact from "./Components/Contact.jsx";
import About from "./Components/About.jsx";
import Blogs from "./Components/Blogs.jsx";
import Team from "./Components/Team.jsx";
import Booking from "./Components/Booking.jsx";
import Appointment from "./Components/Appointment.jsx";
import AuthForm from "./Components/AuthForm.jsx";
import Profile from "./Components/Profile.jsx";
import Loader from "./assets/Loader.jsx";
import { useState,useEffect } from "react";

function App() {

 const [loading, setLoading] = useState(() => {
    return localStorage.getItem("hasVisitedApp") ? false : true;
  });

  useEffect(() => {
    if (!localStorage.getItem("hasVisitedApp")) {
      const timer = setTimeout(() => {
        setLoading(false);
        localStorage.setItem("hasVisitedApp", "true");
      },1200);

      return () => clearTimeout(timer);
    }
  }, [loading]);

  
  if (loading) {
    return (
      <div className="[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] h-screen w-screen">
        <Loader />
    </div>
    )
  }

  return (
    <>
      <div className="fixed overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 h-screen w-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        {/* Fixed Navbar */}
        <Navbar />
        <Routes> 
          <Route path='/' element={
            <> 
              <Hero />
              <Category />
              <Carousel />
            </>
          } />
          <Route path='/team' element={<Team/>}/>
          <Route path='/contact' element={<Contact />} />
          <Route path='/Blogs' element={<Blogs/>} />
          <Route path='/booking' element={<Booking/>} />
          <Route path='/Appointment' element={<Appointment/>} />
          <Route path='/login' element={<AuthForm/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
        <Footersection />
      </div>
    </>
  );
}

export default App;

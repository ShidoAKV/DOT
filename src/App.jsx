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

function App() {
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
          <Route  path='/team' element={<Team/>}/>
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About/>} />
          <Route path='/Blogs' element={<Blogs/>} />
          <Route path='/booking' element={<Booking/>} />
          <Route path='/Appointment' element={<Appointment/>} />
        </Routes>
        <Footersection/>
      </div>
    </>
  );
}

export default App;

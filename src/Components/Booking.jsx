import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Booking = () => {

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    date: "",
    time: "",
    packageDetails: "",
  });
  const navigate=useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🚁 Drone Delivery Booked Successfully!");
    navigate('/Appointment')
   
  };

  return (
    <div className="flex justify-center items-center min-h-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] px-4">
      <div className="w-full max-w-lg  p-6 rounded-xl shadow-xl" style={{ background: "linear-gradient(to right,black,rgb(48 35 101))"}}>
        <h2 className="text-2xl font-bold text-center text-gray-200 mb-4">Book Your Drone Delivery</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div >
            <label className="block text-gray-200 font-medium mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border placeholder-black text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Address Input */}
          <div>
            <label className="block text-gray-200 font-medium mb-1">Delivery Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter delivery address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 placeholder-black text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Date & Time Inputs */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-gray-200 font-medium mb-1">Select Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 placeholder-black text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-200 font-medium mb-1">Select Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 placeholder-black text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Package Details */}
          <div>
            <label className="block text-gray-200 font-medium mb-1">Package Details (Optional)</label>
            <textarea
              name="packageDetails"
              placeholder="Describe your package (optional)"
              value={formData.packageDetails}
              onChange={handleChange}
              className="w-full px-4 py-2 placeholder-black text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500  text-white py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;

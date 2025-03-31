import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../../api";

const BookParking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // Retrieve parking details from router state
  const { parkingId, parkingName ,pricing } = location.state || {};

  const [vehicleType, setVehicleType] = useState("2-wheeler");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [totalHours, setTotalHours] = useState(0);
  const [amountPayable, setAmountPayable] = useState(0);
  const [error, setError] = useState("");
  
  const token = localStorage.getItem("token");

  // Pricing rates (default values; adjust if needed)
  const pricingRates = pricing || {"2-wheeler": 5, "4-wheeler": 10};

  // Calculate total hours and amount payable when start or end time changes
  useEffect(() => {
    if (startTime && endTime) {
      const start = new Date(startTime);
      const end = new Date(endTime);
      const diffInMs = end - start;
      const diffInHours = diffInMs / (1000 * 60 * 60);
      if (diffInHours > 0) {
        setTotalHours(Math.ceil(diffInHours));
        const hourlyRate = pricingRates[vehicleType];
        setAmountPayable(Math.ceil(diffInHours) * hourlyRate);
      } else {
        setTotalHours(0);
        setAmountPayable(0);
      }
    }
  }, [startTime, endTime, vehicleType]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!parkingId || !vehicleNumber || !startTime || !endTime) {
      setError("Please fill in all required fields.");
      return;
    }
    
    try {
      const response = await api.post(
        "/bookings/book-parking",
        { parkingId, vehicleType, vehicleNumber, startTime, endTime },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.status === 201) {
        alert("Booking created successfully!");
        navigate("/user"); // redirect to bookings page after success
      }
    } catch (err) {
      console.error("Error creating booking:", err);
      setError(err.response?.data?.message || "Error creating booking.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md border border-gray-200 p-6 mb-8 rounded-lg mt-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Book Parking</h2>
      
      {/* Pre-filled Parking Info */}
      <div className="mb-4">
        <label className="block text-sm text-gray-600 mb-1">Parking Location</label>
        <div className="p-3 border border-gray-300 rounded-lg bg-gray-100">
          <p className="text-sm font-medium">{parkingName || "No parking selected"}</p>
        </div>
      </div>
      
      {/* Booking Form */}
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Vehicle Type */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">Vehicle Type</label>
          <select
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="2-wheeler">2-Wheeler</option>
            <option value="4-wheeler">4-Wheeler</option>
          </select>
        </div>

        {/* Vehicle Number */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">Vehicle Number</label>
          <input
            type="text"
            placeholder="Enter your vehicle number"
            value={vehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Start Time & End Time in one row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Start Time</label>
            <input
              type="datetime-local"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">End Time</label>
            <input
              type="datetime-local"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        {/* Display Total Hours and Amount Payable */}
        {totalHours > 0 && (
          <div className="mt-4">
            <p className="text-sm text-gray-700">
              Total Hours: <span className="font-semibold">{totalHours}</span>
            </p>
            <p className="text-sm text-gray-700">
              Amount Payable: <span className="font-semibold">₹{amountPayable}</span>
            </p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-5 w-full bg-blue-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-500 transition-all"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookParking;

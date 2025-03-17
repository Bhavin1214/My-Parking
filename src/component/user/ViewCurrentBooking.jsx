import React, { useEffect, useState } from 'react';

export const ViewCurrentBooking = () => {
  const [bookingData, setBookingData] = useState(null);

  useEffect(() => {
    const storedBooking = localStorage.getItem('parkingBooking');
    if (storedBooking) {
      setBookingData(JSON.parse(storedBooking));
    }
  }, []);

  // Function to cancel the booking
  const handleCancelBooking = () => {
    if (window.confirm("Are you sure you want to cancel this booking?")) {
      localStorage.removeItem('parkingBooking'); // Remove from localStorage
      setBookingData(null); // Clear the state
      alert("Booking has been canceled.");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-dark">Your Current Booking</h2>

      {bookingData ? (
        <div className="card">
          <div className="card-header bg-primary text-white">
            <h5 className="card-title m-0">Booking Details</h5>
          </div>
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item"><strong>Vehicle No:</strong> {bookingData.vehicleNumber}</li>
              <li className="list-group-item"><strong>Date:</strong> {bookingData.date}</li>
              <li className="list-group-item"><strong>Check-In:</strong> {bookingData.checkInTime}</li>
              <li className="list-group-item"><strong>Check-Out:</strong> {bookingData.checkOutTime}</li>
              <li className="list-group-item"><strong>Duration:</strong> {bookingData.duration} Hours</li>
              <li className="list-group-item"><strong>Slot:</strong> {bookingData.slot}</li>
              <li className="list-group-item"><strong>Location:</strong> {bookingData.location}</li>
              <li className="list-group-item"><strong>Payment:</strong> {bookingData.paymentMethod}</li>
            </ul>

            {/* Cancel Booking Button */}
            <button className="btn btn-danger mt-3" onClick={handleCancelBooking}>
              Cancel Booking
            </button>
          </div>
        </div>
      ) : (
        <div className="alert alert-warning">No active booking found.</div>
      )}
    </div>
  );
};

import React, { useState } from 'react';

export const CancelBooking = () => {
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [bookingData, setBookingData] = useState(null);
  const [message, setMessage] = useState('');

  const handleSearch = () => {
    const storedBooking = localStorage.getItem('parkingBooking');

    if (!storedBooking) {
      setMessage('No booking found.');
      setBookingData(null);
      return;
    }

    const parsedBooking = JSON.parse(storedBooking);

    if (parsedBooking.vehicleNumber === vehicleNumber) {
      setBookingData(parsedBooking);
      setMessage('');
    } else {
      setMessage('No booking found for this vehicle number.');
      setBookingData(null);
    }
  };

  const handleCancel = () => {
    if (window.confirm("Are you sure you want to cancel this booking?")) {
      localStorage.removeItem('parkingBooking');
      setMessage('Your booking has been successfully canceled.');
      setBookingData(null);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-dark">Cancel Your Booking</h2>

      <div className="card">
        <div className="card-header bg-warning text-white">
          <h5 className="card-title m-0">Find Your Booking</h5>
        </div>
        <div className="card-body">
          <div className="form-group">
            <label>Enter Vehicle Number:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your vehicle number"
              value={vehicleNumber}
              onChange={(e) => setVehicleNumber(e.target.value)}
              required
            />
          </div>

          <button className="btn btn-primary mt-3" onClick={handleSearch}>
            Search Booking
          </button>

          {message && <div className="alert alert-info mt-3">{message}</div>}
        </div>
      </div>

      {bookingData && (
        <div className="card mt-4">
          <div className="card-header bg-success text-white">
            <h5 className="card-title m-0">Booking Details</h5>
          </div>
          <div className="card-body">
            <p><strong>Vehicle Number:</strong> {bookingData.vehicleNumber}</p>
            <p><strong>Location:</strong> {bookingData.location}</p>
            <p><strong>Check-in Date:</strong> {bookingData.date}</p>
            <p><strong>Check-in Time:</strong> {bookingData.checkInTime}</p>
            <p><strong>Check-out Time:</strong> {bookingData.checkOutTime}</p>
            <p><strong>Slot:</strong> {bookingData.slot}</p>

            <button className="btn btn-danger mt-3" onClick={handleCancel}>
              Cancel Booking
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

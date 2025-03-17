import React, { useState } from 'react';

export const UserBookSlot = () => {
  const [bookingData, setBookingData] = useState({
    vehicleNumber: '',
    date: '',
    checkInTime: '',
    checkOutTime: '',
    slot: '',
    location: '',
    duration: '',
    paymentMethod: '',
  });

  const handleChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });

    // Auto-calculate duration if both times are selected
    if (e.target.name === "checkInTime" || e.target.name === "checkOutTime") {
      calculateDuration(bookingData.checkInTime, bookingData.checkOutTime);
    }
  };

  const calculateDuration = (checkIn, checkOut) => {
    if (checkIn && checkOut) {
      const checkInDate = new Date(`1970-01-01T${checkIn}`);
      const checkOutDate = new Date(`1970-01-01T${checkOut}`);

      if (checkOutDate > checkInDate) {
        const diffHours = (checkOutDate - checkInDate) / (1000 * 60 * 60);
        setBookingData(prevState => ({ ...prevState, duration: diffHours.toFixed(1) }));
      } else {
        alert("Check-Out time must be after Check-In time.");
        setBookingData(prevState => ({ ...prevState, checkOutTime: '', duration: '' }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(bookingData).every(field => field !== '')) {
      localStorage.setItem('parkingBooking', JSON.stringify(bookingData));
      alert('Parking Slot Booked Successfully!');
      setBookingData({ vehicleNumber: '', date: '', checkInTime: '', checkOutTime: '', slot: '', location: '', duration: '', paymentMethod: '' });
    } else {
      alert('Please fill all fields before booking.');
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-dark">Book Parking</h2>

      <div className="card">
        <div className="card-header bg-primary text-white">
          <h5 className="card-title m-0">Reserve Your Spot</h5>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              {/* Vehicle Number */}
              <div className="col-md-6">
                <label className="small">Vehicle No.</label>
                <input type="text" className="form-control form-control-sm" name="vehicleNumber" placeholder="ABC-1234" value={bookingData.vehicleNumber} onChange={handleChange} required />
              </div>

              {/* Select Date */}
              <div className="col-md-6">
                <label className="small">Date</label>
                <input type="date" className="form-control form-control-sm" name="date" value={bookingData.date} onChange={handleChange} required />
              </div>

              {/* Check-In Time */}
              <div className="col-md-6 mt-2">
                <label className="small">Check-In Time</label>
                <input type="time" className="form-control form-control-sm" name="checkInTime" value={bookingData.checkInTime} onChange={handleChange} required />
              </div>

              {/* Check-Out Time */}
              <div className="col-md-6 mt-2">
                <label className="small">Check-Out Time</label>
                <input type="time" className="form-control form-control-sm" name="checkOutTime" value={bookingData.checkOutTime} onChange={handleChange} required />
              </div>

              {/* Slot Selection */}
              <div className="col-md-6 mt-2">
                <label className="small">Slot</label>
                <select className="form-control form-control-sm" name="slot" value={bookingData.slot} onChange={handleChange} required>
                  <option value="">Select</option>
                  <option value="A1">A1</option>
                  <option value="A2">A2</option>
                  <option value="B1">B1</option>
                  <option value="B2">B2</option>
                </select>
              </div>

              {/* Location */}
              <div className="col-md-6 mt-2">
                <label className="small">Location</label>
                <select className="form-control form-control-sm" name="location" value={bookingData.location} onChange={handleChange} required>
                  <option value="">Select</option>
                  <option value="Downtown">Downtown</option>
                  <option value="Mall">Mall</option>
                  <option value="Airport">Airport</option>
                  <option value="Station">Station</option>
                </select>
              </div>

              {/* Duration (Auto Calculated) */}
              <div className="col-md-6 mt-2">
                <label className="small">Duration (Hrs)</label>
                <input type="text" className="form-control form-control-sm" name="duration" value={bookingData.duration} readOnly />
              </div>

              {/* Payment Method */}
              <div className="col-md-6 mt-2">
                <label className="small">Payment</label>
                <select className="form-control form-control-sm" name="paymentMethod" value={bookingData.paymentMethod} onChange={handleChange} required>
                  <option value="">Select</option>
                  <option value="Cash">Cash</option>
                  <option value="Credit Card">Credit Card</option>
                  <option value="UPI">UPI</option>
                </select>
              </div>
            </div>

            <button type="submit" className="btn btn-success btn-sm mt-3 w-100">Book Slot</button>
          </form>
        </div>
      </div>
    </div>
  );
};

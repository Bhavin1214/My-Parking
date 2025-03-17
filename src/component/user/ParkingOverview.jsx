import React from 'react';

export const ParkingOverview = () => {
  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-dark">Dashboard</h1>

      <div className="row">
        {/* Total Bookings Card */}
        <div className="col-lg-4 col-md-6">
          <div className="small-box bg-info">
            <div className="inner">
              <h3>12</h3>
              <p>Total Bookings</p>
            </div>
            <div className="icon">
              <i className="fas fa-calendar-check"></i>
            </div>
          </div>
        </div>

        {/* Active Slots Card */}
        <div className="col-lg-4 col-md-6">
          <div className="small-box bg-success">
            <div className="inner">
              <h3>3</h3>
              <p>Active Slots</p>
            </div>
            <div className="icon">
              <i className="fas fa-parking"></i>
            </div>
          </div>
        </div>

        {/* Money Spent Card */}
        <div className="col-lg-4 col-md-6">
          <div className="small-box bg-warning">
            <div className="inner">
              <h3>$150</h3>
              <p>Money Spent</p>
            </div>
            <div className="icon">
              <i className="fas fa-dollar-sign"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

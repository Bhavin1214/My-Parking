import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

const ProviderDashboard = () => {
  const [locationCount, setLocationCount] = useState(0);
  const [bookingCount, setBookingCount] = useState(0);
  const [earnings, setEarnings] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    const fetchProviderStats = async () => {
      try {
        const locres = await api.get("/parkinglocations/getlocations",{
          headers:{Authorization:`bearer ${token}`}
        })
        // const [locRes, bookRes, earnRes] = await Promise.all([
        //   api.get('/parkinglocations/getlocations', {
        //     headers: { Authorization: `Bearer ${token}` },
        //   }),
        //   api.get('/provider/getbookings', {
        //     headers: { Authorization: `Bearer ${token}` },
        //   }),
        //   api.get('/provider/total-earnings', {
        //     headers: { Authorization: `Bearer ${token}` },
        //   }),
        // ]);
        

        setLocationCount(locres.data.length);
        // setBookingCount(bookRes.data.length);
        // setEarnings(earnRes.data.total || 0);
      } catch (error) {
        console.error('Error fetching provider dashboard stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProviderStats();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 pt-6 flex items-center justify-center">
        <p className="text-gray-600 text-xl">Loading Provider Dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-6">
      {/* Header */}
      <header className="bg-white shadow-md mx-[100px] rounded-lg">
        <div className="max-w-7xl mx-auto px-[50px] py-5 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">Provider Dashboard</h1>
          <Link to="/provider/add-parking">
            <button className="bg-blue-600 text-white px-5 py-2.5 rounded-lg shadow-md hover:bg-blue-500 transition-all">
              + Add Parking
            </button>
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-[100px] py-8">
        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard label="Parking Locations" value={locationCount} color="bg-blue-100" icon="📍" />
          <StatCard label="Total Bookings" value={bookingCount} color="bg-green-100" icon="📄" />
          <StatCard label="Earnings" value={`₹${earnings}`} color="bg-yellow-100" icon="💰" />
        </div>

        {/* Recent Bookings Section */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Recent Bookings</h2>
          <p className="text-gray-500">This section can display recent bookings across your listed parking spots.</p>
          <Link to="/provider/bookings">
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-500 transition-all">
              View All Bookings
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

const StatCard = ({ label, value, color, icon }) => (
  <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-transform transform hover:scale-[1.02]">
    <div className="flex items-center space-x-3 text-gray-700 mb-3">
      <div className={`${color} p-3 rounded-full text-xl`}>{icon}</div>
      <span className="font-semibold text-lg">{label}</span>
    </div>
    <p className="text-3xl font-extrabold text-gray-900">{value}</p>
  </div>
);

export default ProviderDashboard;

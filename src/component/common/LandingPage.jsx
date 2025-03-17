import React from "react";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <div className="wrapper">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="#">My Parking</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><Link className="nav-link" to="">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="#/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="#/features">Features</Link></li>
              <li className="nav-item"><Link className="nav-link" to="#/contact">Contact</Link></li>
              <div style={{display:"flex",flexDirection:"row",marginLeft:"550px"}}>
              <li className="nav-item"><Link className="btn btn-light mx-2" to="/login">Login</Link></li>
              <li className="nav-item"><Link className="btn btn-primary" to="/signup">Register</Link></li>
              </div>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section d-flex align-items-center text-center text-white" style={{ height: "100vh", background: "linear-gradient(135deg, #667eea, #764ba2)" }}>
        <div className="container">
          <h1 className="display-3 font-weight-bold">Welcome to My Parking</h1>
          <p className="lead">Find, book, and manage parking spaces effortlessly.</p>
          <Link to="/features" className="btn btn-lg btn-light mt-3">Explore Features</Link>
        </div>
      </header>

      {/* My Parking Features Section */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Why Choose My Parking?</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <h3 className="">Easy Booking</h3>
                <br />
                <p className="card-text">Reserve your parking spot in advance with just a few clicks.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <h3 className="">Real-Time Availability</h3>
                <br />
                <p className="card-text">Check live parking spot availability anytime, anywhere.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <h3 className="">Secure Payments</h3>
                <br />
                <p className="card-text">Safe and hassle-free online payment options for convenience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <p>&copy; 2025 My Parking. All rights reserved.</p>
        <div>
          <Link to="#" className="text-light mx-2">Facebook</Link>
          <Link to="#" className="text-light mx-2">Twitter</Link>
          <Link to="#" className="text-light mx-2">Instagram</Link>
        </div>
      </footer>
    </div>
  );
};
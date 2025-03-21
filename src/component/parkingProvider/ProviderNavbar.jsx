import React from "react";
import { Link } from "react-router-dom";
import { Bell, MessageSquare, Search, Menu, User, LogOut } from "lucide-react";
// import userImage from "../../dist/assets/img/user2-160x160.jpg";  // Ensure correct path

export const ProviderNavbar = ({sidebarSetter2} ) => {

  const logOut =()=>{
    localStorage.removeItem("id");
    localStorage.removeItem("role")
  }

  return (
    <nav className="app-header navbar navbar-expand bg-body">
      <div className="container-fluid">
        
        {/* Left Side (Logo + Home/Contact Links) */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link onClick={sidebarSetter2} className="nav-link" data-lte-toggle="sidebar"  role="button">
              <Menu size={24} />
            </Link>
          </li>

          <li className="nav-item d-none d-md-block">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item d-none d-md-block">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>

        {/* Right Side (Search, Messages, Notifications, Profile) */}
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="#" role="button">
              <Search size={20} />
            </Link>
          </li>

          {/* Messages Dropdown */}
          <li className="nav-item dropdown">
            <Link className="nav-link" data-bs-toggle="dropdown" to="#">
              <MessageSquare size={20} />
              <span className="navbar-badge badge text-bg-danger">3</span>
            </Link>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
              <span className="dropdown-item dropdown-header">Messages</span>
              <div className="dropdown-divider" />
              <Link to="#" className="dropdown-item">
                <User className="me-2" size={16} />
                <span>New Message</span>
              </Link>
              <div className="dropdown-divider" />
              <Link to="#" className="dropdown-item dropdown-footer">
                See All Messages
              </Link>
            </div>
          </li>

          {/* Notifications Dropdown */}
          <li className="nav-item dropdown">
            <Link className="nav-link" data-bs-toggle="dropdown" to="#">
              <Bell size={20} />
              <span className="navbar-badge badge text-bg-warning">15</span>
            </Link>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
              <span className="dropdown-item dropdown-header">15 Notifications</span>
              <div className="dropdown-divider" />
              <Link to="#" className="dropdown-item">
                <i className="bi bi-envelope me-2"></i> 4 new messages
              </Link>
              <div className="dropdown-divider" />
              <Link to="#" className="dropdown-item dropdown-footer">
                See All Notifications
              </Link>
            </div>
          </li>

          {/* User Profile Dropdown */}
          <li className="nav-item dropdown user-menu">
            <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
              <img src={`${import.meta.env.BASE_URL}../../../img/avatar5.png`}  className="user-image rounded-circle shadow" alt="User" />
              <span className="d-none d-md-inline">Alexander Pierce</span>
            </Link>
            <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
              <li className="user-header text-bg-primary">
                <img src={`${import.meta.env.BASE_URL}../../../img/avatar5.png`}  className="rounded-circle shadow" alt="User" />
                <p>
                  Alexander Pierce - Web Developer
                  <small>Member since Nov. 2023</small>
                </p>
              </li>
              <li className="user-footer">
                <Link to="/profile" className="btn btn-default btn-flat">
                  <User size={16} className="me-2" /> Profile
                </Link>
                <Link to="/login" onClick={logOut} className="btn btn-default btn-flat float-end">
                  <LogOut size={16} className="me-2" /> Sign out
                </Link>
              </li>
            </ul>
          </li>

        </ul>
      </div>
    </nav>
  );
};

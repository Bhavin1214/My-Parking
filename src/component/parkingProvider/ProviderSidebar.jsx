import React, { useState } from 'react'
import { Link, Outlet } from "react-router-dom";
import { ProviderNavbar } from './ProviderNavbar';



export const ProviderSidebar = ({clicked2}) => {

  const [sidebarToggle2, setsidebarToggle2] = useState(true)
  const ClickSidebar2 = () => {
    setsidebarToggle2(!sidebarToggle2)
    clicked2();
  }

  const [isDashboardOpen, setisDashboardOpen] = useState(true)
  const [isInsightsOpen, setisInsightsOpen] = useState(false)
  const [isUserProfileOpen, setisUserProfileOpen] = useState(false)
  const [isSupportOpen, setisSupportOpen] = useState(false)

  const logOut = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("role")
  }
  


  return (
    <>
      <ProviderNavbar sidebarSetter2={ClickSidebar2} />
      
          <>
            <aside  className="app-sidebar bg-body-secondary shadow " data-bs-theme="dark">
              <div className="sidebar-brand">
                <Link to="#" className="brand-link">
                  <img src={`${import.meta.env.BASE_URL}img/logo.png`} className="brand-image opacity-75 shadow" alt="logo" />
                  <span className="brand-text fw-light">My-Parking</span>
                </Link>
              </div>

              <div
                className=""
                data-overlayscrollbars-viewport="scrollbarHidden overflowXHidden overflowYScroll"
                tabIndex={-1}
                style={{
                  marginRight: "-16px",
                  marginBottom: "-16px",
                  marginLeft: 0,
                  top: "-8px",
                  right: "auto",
                  left: "-8px",
                  width: "calc(100% + 16px)",
                  padding: 8,
                }}
              >
                <nav className="mt-2">
                  <ul className="nav sidebar-menu flex-column " role="menu" data-accordion="false">
                    <li className="nav-item menu-open">
                      <Link to="#" className="nav-link active">
                        <i className="bi bi-speedometer2 nav-icon" />
                        <p>Dashboard <i onClick={() => { setisDashboardOpen(!isDashboardOpen), setisInsightsOpen(false), setisUserProfileOpen(false), setisSupportOpen(false) }} className={`bi nav-arrow ${isDashboardOpen ? "bi-chevron-right" : "bi-chevron-up"} `} /></p>
                      </Link>


                      {
                        isDashboardOpen && (

                          <ul className="nav nav-treeview">
                            <li className="nav-item">
                              <Link to="" className="nav-link active">
                                <i className="bi bi-car-front nav-icon" />
                                <p>Parking Overview</p>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link to="book-slot" className="nav-link">
                                <i className="bi bi-calendar-check nav-icon" />
                                <p>Book Parking Slot</p>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link to="View-booking" className="nav-link">
                                <i className="bi bi-list-check nav-icon" />
                                <p>View Your Booking</p>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link to="cancel-booking" className="nav-link">
                                <i className="bi bi-x-circle nav-icon" />
                                <p>Cancel Booking</p>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link to="#" className="nav-link">
                                <i className="bi bi-wallet2 nav-icon" />
                                <p>Payment History</p>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link to="#" className="nav-link">
                                <i className="bi bi-graph-up nav-icon" />
                                <p>Parking Statistics</p>
                              </Link>
                            </li>
                          </ul>
                        )}
                    </li>

                    <li className="nav-item menu-open">
                      <Link to="#" className="nav-link active">
                        <i className="bi bi-lightbulb" />
                        <p>Parking Insights <i onClick={() => { setisInsightsOpen(!isInsightsOpen), setisDashboardOpen(false), setisUserProfileOpen(false), setisSupportOpen(false) }} className={`bi nav-arrow ${isInsightsOpen ? "bi-chevron-right" : "bi-chevron-up  "} `} /></p>
                      </Link>

                      {
                        isInsightsOpen && (
                          <ul className="nav nav-treeview">
                            <li className="nav-item">
                              <Link to="#" className="nav-link">
                                <i className="bi bi-clock-history"></i>
                                <p>Recent Activities</p>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link to="#" className="nav-link">
                                <i className="bi bi-map"></i>
                                <p>Parking Availability</p>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link to="#" className="nav-link">
                                <i className="bi bi-geo-alt nav-icon" />
                                <p>Parking Locations</p>
                              </Link>
                            </li>
                          </ul>
                        )}
                    </li>

                    <li className="nav-item menu-open">
                      <Link to="#" className="nav-link">
                        <i className="bi bi-person-circle" />
                        <p>User Profile<i onClick={() => { setisUserProfileOpen(!isUserProfileOpen), setisDashboardOpen(false), setisInsightsOpen(false), setisSupportOpen(false) }} className={`bi nav-arrow ${isUserProfileOpen ? "bi-chevron-right" : "bi-chevron-up  "} `} /></p>
                      </Link>
                      {
                        isUserProfileOpen && (
                          <ul className="nav nav-treeview">
                            <li className="nav-item">
                              <Link to="#" className="nav-link">
                                <i className="bi bi-person"></i>
                                <p>View Profile</p>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link to="#" className="nav-link">
                                <i className="bi bi-pencil-square"></i>
                                <p>Edit Profile</p>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link to="#" className="nav-link">
                                <i className="bi bi-key"></i>
                                <p>Change Password</p>
                              </Link>
                            </li>
                          </ul>
                        )}
                    </li>

                    <li className="nav-item menu-open">
                      <Link to="#" className="nav-link">
                        <i className="bi bi-question-circle nav-icon" />
                        <p>Support & FAQs</p><i onClick={() => { setisSupportOpen(!isSupportOpen), setisDashboardOpen(false), setisInsightsOpen(false), setisUserProfileOpen(false) }} className={`bi nav-arrow ${isSupportOpen ? "bi-chevron-right" : "bi-chevron-up  "} `} />
                      </Link>
                      {
                        isSupportOpen && (
                          <ul className="nav nav-treeview">
                            <li className="nav-item">
                              <Link to="#" className="nav-link">
                                <i className="bi bi-question-circle"></i>
                                <p>Help & FAQs</p>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link to="#" className="nav-link">
                                <i className="bi bi-headset"></i>
                                <p>Contact Support</p>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link onClick={logOut} to="/login" className="nav-link">
                                <i className="bi bi-box-arrow-right"></i>
                                <p>LogOut</p>
                              </Link>
                            </li>
                          </ul>
                        )}
                    </li>
                  </ul>
                </nav>
              </div>
            </aside>
          </>
        

      <main className="app-main">
        <Outlet />


      </main>

    </>
  )
}


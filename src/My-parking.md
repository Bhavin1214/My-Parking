# Sidebar Menu Structure for user

## 1. Dashboard
- ✅ **Book Slot** (Already present)
- ✅ **View Your Booking** (Already present)
- ✅ **Cancel Booking** (Already present)
- ➕ **Payment History** (For viewing past transactions)
- ➕ **Parking Statistics** (Show total time parked, money spent, etc.)

## 2. Theme Generate
- ✅ **Already present**
- ➕ **Dark/Light Mode Toggle**
- ➕ **Custom Color Scheme**

## 3. Widgets
- ✅ **Already present**
- ✅ **Small Box**
- ✅ **Info Box**
- ✅ **Cards**
- ➕ **Live Parking Slot Availability**
- ➕ **Notifications** (Upcoming bookings, expired slots)

## 4. User Profile (New Section to Add)
- ➕ **View Profile**
- ➕ **Edit Profile**
- ➕ **Change Password**

## 5. Parking Locations (New Section to Add)
- ➕ **Nearby Parking Lots** (List of available slots in real-time)
- ➕ **Favorite Locations** (Saved parking spots for quick access)

## 6. Support & Settings (New Section to Add)
- ➕ **Help & FAQs**
- ➕ **Contact Support**
- ➕ **Logout**



# 🚀 Feature Development Prioritization

## 🔹 High Priority (Core Functionalities – Phase 1)

### 1. User Dashboard UI
- Quick Stats (Total Bookings, Active Slots, Money Spent)
- Live Parking Availability Widget
- Recent Activities (Last booked slots, payments)

### 2. Booking System
- **Book a Parking Slot** (Slot selection, time, payment)
- **View Current Bookings** (Active slots, locations)
- **Cancel Booking** (Allow users to cancel an upcoming booking)

### 3. Notifications System
- Upcoming Bookings Alerts
- Expired Slot Notifications

---

## 🔹 Medium Priority (Enhancing User Experience – Phase 2)

### ✅ User Profile Management
- View Profile
- Edit Profile
- Change Password

### ✅ Theme Customization
- Dark/Light Mode Toggle
- Custom Color Scheme

### ✅ Parking Location Features
- Nearby Parking Lots (List of available slots in real-time)
- Favorite Locations (Saved parking spots for quick access)

---

## 🔹 Low Priority (Additional Features – Phase 3)

### 📦 Widgets Section
- Small Box, Info Box, Cards
- Live Parking Slot Availability

### ⚙️ Support & Settings
- Help & FAQs
- Contact Support
- Logout


# Sidebar Menu Structure

## Dashboard
- **Parking Overview**
- **Book Parking Slot**
- **See Current Booking**
- **Cancel Booking**
- **Payment History**
- **Parking Statistics**

## Parking Insights (New Parent List ✅)
- Recent Activities (Last booked slots, payments, etc.)
- Parking Availability Widget (Show nearby parking slots)

## User Profile
- view profile
- edit profile
- change password 

## Theme Customization

## Support & Settings



 )}  {
        sidebarToggle == false && (
          <>
            <aside style={{ overflowY: 'scroll', scrollbarWidth: 'none', msOverflowStyle: 'none' ,}} className="app-sidebar bg-body-secondary shadow " data-bs-theme="dark">
              <div className="sidebar-brand">
                <Link to="#" className="brand-link">
                  <img src={`${import.meta.env.BASE_URL}img/logo.png`} className="brand-image opacity-75 shadow" alt="logo" />
                </Link>
              </div>

              <div
                className=""
                data-overlayscrollbars-viewport="scrollbarHidden overflowXHidden overflowYScroll"
                tabIndex={-1}
              >
                <nav className="mt-2">
                  <ul className="nav sidebar-menu flex-column" role="menu" data-accordion="false">
                    <li className="nav-item menu-open">
                      <Link to="#" className="nav-link active">
                        <i className="bi bi-speedometer2 nav-icon" />
                      </Link>
                      {isDashboardOpen && (
                        <ul className="nav nav-treeview">
                          <li className="nav-item">
                            <Link to="" className="nav-link active">
                              <i className="bi bi-car-front nav-icon" />
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link to="book-slot" className="nav-link">
                              <i className="bi bi-calendar-check nav-icon" />
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link to="View-booking" className="nav-link">
                              <i className="bi bi-list-check nav-icon" />
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link to="cancel-booking" className="nav-link">
                              <i className="bi bi-x-circle nav-icon" />
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link to="#" className="nav-link">
                              <i className="bi bi-wallet2 nav-icon" />
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link to="#" className="nav-link">
                              <i className="bi bi-graph-up nav-icon" />
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>

                    <li className="nav-item menu-open">
                      <Link to="#" className="nav-link active">
                        <i className="bi bi-lightbulb" />
                      </Link>
                      {isInsightsOpen && (
                        <ul className="nav nav-treeview">
                          <li className="nav-item">
                            <Link to="#" className="nav-link">
                              <i className="bi bi-clock-history"></i>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link to="#" className="nav-link">
                              <i className="bi bi-map"></i>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link to="#" className="nav-link">
                              <i className="bi bi-geo-alt nav-icon" />
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>

                    <li className="nav-item menu-open">
                      <Link to="#" className="nav-link">
                        <i className="bi bi-person-circle" />
                      </Link>
                      {isUserProfileOpen && (
                        <ul className="nav nav-treeview">
                          <li className="nav-item">
                            <Link to="#" className="nav-link">
                              <i className="bi bi-person"></i>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link to="#" className="nav-link">
                              <i className="bi bi-pencil-square"></i>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link to="#" className="nav-link">
                              <i className="bi bi-key"></i>
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>

                    <li className="nav-item menu-open">
                      <Link to="#" className="nav-link">
                        <i className="bi bi-question-circle nav-icon" />
                      </Link>
                      {isSupportOpen && (
                        <ul className="nav nav-treeview">
                          <li className="nav-item">
                            <Link to="#" className="nav-link">
                              <i className="bi bi-question-circle"></i>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link to="#" className="nav-link">
                              <i className="bi bi-headset"></i>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link onClick={logOut} to="/login" className="nav-link">
                              <i className="bi bi-box-arrow-right"></i>
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

        )
      }

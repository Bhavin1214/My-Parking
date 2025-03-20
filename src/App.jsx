import { useState } from 'react'

import viteLogo from '/vite.svg'
import { Routes, Route, useLocation } from "react-router-dom"
import { Login } from './component/common/Login'
import { UserProfile } from './component/user/UserProfile'
import { UserSidebar } from './component/layout/UserSidebar'
import "../src/assets/adminlte.css"
import "../src/assets/adminlte.min.css"
import axios from 'axios'
import { Signup } from './component/common/Signup'
import { UserBookSlot } from './component/user/UserBookSlot'
import "bootstrap-icons/font/bootstrap-icons.css";
import { ParkingOverview } from './component/user/ParkingOverview'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import PrivateRoute from './hooks/PrivateRoute'
import { LandingPage } from './component/common/LandingPage'
import { ViewCurrentBooking } from './component/user/ViewCurrentBooking'
import { CancelBooking } from './component/user/CancelBooking'




function App() {

  const location = useLocation();
  if (location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/") {
    document.body.className = ""

  } else {
    document.body.className = "layout-fixed sidebar-expand-lg bg-body-tertiary"
  }

  axios.defaults.baseURL = "http://localhost:3000"

  const [isopen, setisopen] = useState(true)
  const clicked = ()=>{
    setisopen(!isopen)
  }

  return (
    <>
      <body className={`${isopen ?"":"sidebar-collapse sidebar-mini"}`}>
        <div className={location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/" ? "" : "app-wrapper"}>
          <Routes>
            <Route path='/' element={<LandingPage></LandingPage>}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup></Signup>}></Route>

            <Route to="" element={<PrivateRoute/>} >
              <Route path="/user" element={<UserSidebar clicked={clicked} />}>
                <Route path='' element={<ParkingOverview />}></Route>
                <Route path='book-slot' element={<UserBookSlot></UserBookSlot>}></Route>
                <Route path='View-booking' element={<ViewCurrentBooking/>}></Route>
                <Route path='cancel-booking' element={<CancelBooking/>}></Route>
                <Route path="profile" element={<UserProfile />}></Route>
              </Route>
            </Route>

          </Routes>
        </div>
      </body>
    </>
  )
}

export default App

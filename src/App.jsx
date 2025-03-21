import { useState } from 'react'
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
import { ProviderLogin } from './component/parkingProvider/ProviderLogin'
import { ProviderSignUp } from './component/parkingProvider/ProviderSignUp'
import { ProviderSidebar } from './component/parkingProvider/ProviderSidebar'




function App() {

  const location = useLocation();
  if (location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/" || location.pathname==='/provider-login'|| location.pathname==='/provider-signup') {
    document.body.className = ""

  } else {
    document.body.className = "layout-fixed sidebar-expand-lg bg-body-tertiary"
  }

  axios.defaults.baseURL = "http://localhost:3000"

  const [isopen, setisopen] = useState(true)
  const clicked = ()=>{
    setisopen(!isopen)
  }

  const [providerIsOpen, setproviderIsOpen] = useState(true)

  const clicked2 = ()=>{
    setproviderIsOpen(!providerIsOpen)
  }


  return (
    <>
      <body className={`${isopen &&      providerIsOpen ?"":"sidebar-collapse sidebar-mini"}`}>
        <div className={location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/" || location.pathname==='/provider-login'|| location.pathname==='/provider-signup' ? "" : "app-wrapper"}>
          <Routes>
            <Route path='/' element={<LandingPage></LandingPage>}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup></Signup>}></Route>
            <Route path='/provider-login' element={<ProviderLogin/>}></Route>
            <Route path='/provider-signup' element={<ProviderSignUp/>}></Route>

            <Route to="" element={<PrivateRoute/>} >
              <Route path="/user" element={<UserSidebar clicked={clicked} />}>
                <Route path='' element={<ParkingOverview />}></Route>
                <Route path='book-slot' element={<UserBookSlot></UserBookSlot>}></Route>
                <Route path='View-booking' element={<ViewCurrentBooking/>}></Route>
                <Route path='cancel-booking' element={<CancelBooking/>}></Route>
                <Route path="profile" element={<UserProfile />}></Route>
              </Route>
            </Route>

            {/* <Route to="" element={<PrivateRoute/>}> */}
              <Route path="/provider" element={<ProviderSidebar clicked2 = {clicked2}/>}></Route>
            {/* </Route> */}

          </Routes>
        </div>
      </body>
    </>
  )
}

export default App

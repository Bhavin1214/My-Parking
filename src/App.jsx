import LandingPage from './common/LandingPage'
import { Route, Routes } from 'react-router-dom'
import { Signup } from './common/Signup'
import { Login } from './common/Login'
import { Usernavbar } from './user/Usernavbar'
import Dashboard from './user/dashboard/Dashboard'
import { Findparking } from './user/dashboard/Findparking'
import Parkinghistory from './user/dashboard/Parkinghistory'
import Paymenthistory from './user/dashboard/Paymenthistory'
import Nearbylocations from './user/dashboard/Nearbylocations'
import Savedlocation from './user/dashboard/Savedlocation'
import Userprofile from './user/userprofile/Userprofile'
import EditProfile from './user/userprofile/EditProfile'
import ChangePassword from './user/userprofile/ChangePassword'
import { PrivateRoute } from './components/Privateroute'
import ResetPassword from './user/userprofile/ResetPassword'
import ForgotPassword from './common/ForgotPassword'
import BookParking from './user/dashboard/BookParking'
import AboutUs from './common/AboutUs'
import { Features } from './common/Features'
import { ContactUs } from './common/ContactUs'
import { ProviderLogin } from './common/ProviderLogin'
import { ProviderSignup } from './common/ProviderSignup'


function App() {

  return (
    <>
      <Routes>
        <Route path='' element={<LandingPage />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/aboutus' element={<AboutUs/>}></Route>
        <Route path='/feature' element={<Features/>}></Route>
        <Route path='/contact' element={<ContactUs/>}></Route>
        <Route path='reset-password/:token' element={<ResetPassword/>} ></Route>
        <Route path='forgot-password' element={<ForgotPassword/>}></Route>
        <Route path='/provider-login' element={<ProviderLogin/>}></Route>
        <Route path='/provider-signup' element={<ProviderSignup/>} ></Route>

        <Route element={<PrivateRoute />}>
          <Route path='/user' element={<Usernavbar />}>
            <Route path='' element={<Dashboard />}></Route>
            <Route path='find-parking' element={<Findparking />}></Route>
            <Route path='parking-history' element={<Parkinghistory />}></Route>
            <Route path='payment-history' element={<Paymenthistory />}></Route>
            <Route path='nearby-location' element={<Nearbylocations />}></Route>
            <Route path='saved-location' element={<Savedlocation />}></Route>
            <Route path='book-parking' element={<BookParking/>}></Route>

            <Route path='user-profile' element={<Userprofile />}></Route>
            <Route path='edit-profile' element={<EditProfile />}></Route>
            <Route path='change-password' element={<ChangePassword />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App

import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const ProviderSignUp = () => {
  const navigate = useNavigate();

  const showToast = (message) => {
    toast(`${message}`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  const { register, handleSubmit, formState: { errors } } = useForm();

  const validationSchema = {
    nameValidator: {
      required: "Full name is required"
    },
    genderValidator: {
      required: "Gender is required"
    },
    contactValidator: {
      required: "Contact number is required"
    },
    emailValidator: {
      required: "Email is required",
      pattern: {
        value: /^\S+@\S+$/,
        message: "Invalid email"
      }
    },
    passwordValidator: {
      required: "Password is required"
    }
  };

  const submitHandler = async (data) => {
    try {
      console.log(data);
      const res = await axios.post('/user/signup', data);

      if (res.status === 200) {
        showToast(`Signup Success`);
        setTimeout(() => navigate("/login"), 2000);
      } else {
        showToast(`Signup failed`);
      }
    } catch (error) {
      console.log('Error in signup', error);
    }
  };

  return (
    <div className="wrapper d-flex flex-column min-vh-100">
      {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
              <div className="container">
                <Link to="/" className="navbar-brand text-white font-weight-bold">My Parking</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item"><Link to="/" className="nav-link text-white">Home</Link></li>
                    <li className="nav-item"><Link to="/about" className="nav-link text-white">About</Link></li>
                    <li className="nav-item"><Link to="/features" className="nav-link text-white">Features</Link></li>
                    <li className="nav-item"><Link to="/contact" className="nav-link text-white">Contact</Link></li>
                    <div style={{display:"flex", flexDirection:"row", marginLeft:"550px"}}>
                      <li className="nav-item"><Link to="/provider-login" className="btn btn-light mx-2">Login</Link></li>
                      <li className="nav-item"><Link to="/provider-signup" className="btn btn-primary">Register</Link></li>
                    </div>
                  </ul>
                </div>
              </div>
            </nav>

      {/* Signup Form */}
      <div className="d-flex justify-content-center align-items-center flex-grow-1" style={{ height: "85vh" ,background: "linear-gradient(135deg, #667eea, #764ba2)",
        minHeight: "100vh" ,
        paddingTop:"50px"}}>
        <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} pauseOnHover theme="dark" transition={Bounce} />
        <div className="card p-3 shadow-sm" style={{ width: "90%", maxWidth: "320px", borderRadius: "10px" }}>
          <div className="card-header text-center bg-primary text-white p-2" style={{ borderRadius: "10px 10px 0 0" }}>
            <h5>Parking Provider</h5>
          </div>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" className="form-control form-control-sm" placeholder="Enter full name" {...register('name', validationSchema.nameValidator)} />
              <span className="text-danger"> {errors.name?.message}</span>
            </div>
            <div className="form-group">
              <label>Gender</label>
              <select className="form-control form-control-sm" {...register('gender', validationSchema.genderValidator)}>
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <span className="text-danger"> {errors.gender?.message}</span>
            </div>
            <div className="form-group">
              <label>Contact</label>
              <input type="text" className="form-control form-control-sm" placeholder="Enter number" {...register('contactNum', validationSchema.contactValidator)} />
              <span className="text-danger"> {errors.contactNum?.message}</span>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control form-control-sm" placeholder="Enter email" {...register('email', validationSchema.emailValidator)} />
              <span className="text-danger"> {errors.email?.message}</span>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control form-control-sm" placeholder="Enter password" {...register('password', validationSchema.passwordValidator)} />
              <span className="text-danger"> {errors.password?.message}</span>
            </div>
            <button type="submit" className="btn btn-primary btn-block btn-sm mt-2">Sign Up</button>
            <p className="text-center mt-1 small">Already have an account? <Link to="/provider-login">Login</Link></p>
          </form>
        </div>
      </div>

    {/* Footer */}
          <footer className="bg-dark text-white text-center py-4 mt-auto">
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

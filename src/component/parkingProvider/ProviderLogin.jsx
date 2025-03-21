import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const ProviderLogin = () => {

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
  }

  const { register, handleSubmit, formState: { errors } } = useForm();

  const validationSchma = {
    emailValidator: {
      required: {
        value: true,
        message: "email is required"
      },
      pattern: {
        value: /^\S+@\S+$/,
        message: "Invalid email"
      }
    },
    passwordValidator: {
      required: {
        value: true,
        message: "password is required"
      }
    },
  }

  const submitHandler = async (data) => {
    try {
      console.log(data);
      const res = await axios.post('/user/userLogin', data);

      if (res.status === 200) {
        console.log('Login success');
        showToast(`Login Success`);
        localStorage.setItem("id", res.data.data._id)
        localStorage.setItem("role", res.data.data.roleId.role)
       setTimeout(()=>{
        if (res.data.data.roleId.role === "user") {
          navigate("/user")
        }
       },2000)
      } else {
        console.log('Invalid credentials');
        showToast(`Invalid credentials`);
      }
    } catch (error) {
      console.log('Error in login', error);
    }
  };

  return (
    <div className="wrapper bg-light min-vh-100 d-flex flex-column">
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

      {/* Login Form */}
      <div className="d-flex justify-content-center align-items-center flex-grow-1" style={{ background: "linear-gradient(135deg, #667eea, #764ba2)",paddingTop:'50px' }}>
        <div className="col-md-4">
          <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} theme="light" transition={Bounce} />
          <div className="card shadow-lg rounded-lg">
            <div className="card-header text-center bg-primary text-white">
              <h3 className="card-title"> Parking Provider Login</h3>
            </div>
            <form onSubmit={handleSubmit(submitHandler)} className="p-4">
              <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" {...register('email', validationSchma.emailValidator)} />
                <span className="text-danger"> {errors.email?.message}</span>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" {...register('password', validationSchma.passwordValidator)} />
                <span className="text-danger"> {errors.password?.message}</span>
              </div>
              <div className="text-center mt-3">
                <button type="submit" className="btn btn-primary btn-block">Login</button>
              </div>
            </form>
          </div>
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
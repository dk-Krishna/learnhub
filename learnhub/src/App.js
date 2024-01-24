import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// importing components
import Header from './components/Layout/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import Courses from './components/Courses/Courses.jsx';
import Login from './components/Auth/Login.jsx';
import Signup from './components/Auth/Signup.jsx';
import ForgetPassword from './components/Auth/ForgetPassword.jsx';
import ResetPassword from './components/Auth/ResetPassword.jsx';
import Contact from './components/Contact/Contact.jsx';
import Request from './components/Request/Request.jsx';
import About from './components/About/About.jsx';
import Footer from './components/Layout/Footer/Footer.jsx';

function App() {
  return (
    <Fragment>  

      <Router>
        <Header />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/forgetpassword' element={<ForgetPassword />} />
          <Route path='/resetpassword/:token' element={<ResetPassword />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/request' element={<Request />} />
          <Route path='/about' element={<About />} />

        </Routes>
        <Footer />
      </Router>

    </Fragment>
  );
}

export default App;

// Video-9 [timeStamp: 00:00]
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// importing components
import Header from './components/Layout/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import Courses from './components/Courses/Courses.jsx';
import Login from './components/Auth/Login.jsx';
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

        </Routes>
        <Footer />
      </Router>

    </Fragment>
  );
}

export default App;

// Video-6 [timeStamp: 00:00]
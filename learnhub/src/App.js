import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

// importing user components
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
import PaymentSuccess from './components/Payments/PaymentSuccess.jsx';
import PaymentFail from './components/Payments/PaymentFail.jsx';
import Subscribe from './components/Payments/Subscribe.jsx';
import CoursePage from './components/CoursePage/CoursePage.jsx';
import Profile from './components/Profile/Profile.jsx';
import ChangePassword from './components/Profile/ChangePassword.jsx';
import UpdateProfile from './components/Profile/UpdateProfile.jsx';
import NotFound from './components/Layout/NotFound/NotFound.jsx';
import Footer from './components/Layout/Footer/Footer.jsx';

// importing admin components
import Dashboard from './components/Admin/Dashboard/Dashboard.jsx';
import CreateCourse from './components/Admin/CreateCourse/CreateCourse.jsx';
import AdminCourses from './components/Admin/AdminCourses/AdminCourses.jsx';
import Users from './components/Admin/Users/Users.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { clearError, clearMessage } from './redux/reducers/userReducer.js';
import { loadUser } from './redux/actions/user.js';

function App() {
  // To prevent to save using right click
  window.addEventListener('contextmenu', e => {
    e.preventDefault();
  });

  const { isAuthenticated, user, error, message } = useSelector(
    state => state.user
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }

    if (message) {
      toast.success(message);
      dispatch(clearMessage());
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Fragment>
      <Router>
        <Header isAuthenticated={isAuthenticated} user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:id" element={<CoursePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/resetpassword/:token" element={<ResetPassword />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/request" element={<Request />} />
          <Route path="/about" element={<About />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/paymentsuccess" element={<PaymentSuccess />} />
          <Route path="/paymentfail" element={<PaymentFail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/updateprofile" element={<UpdateProfile />} />
          <Route path="*" element={<NotFound />} />

          {/* ADMIN ROUTES */}
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/createcourse" element={<CreateCourse />} />
          <Route path="/admin/courses" element={<AdminCourses />} />
          <Route path="/admin/users" element={<Users />} />
        </Routes>
        <Footer />
        <Toaster />
      </Router>
    </Fragment>
  );
}

export default App;

// Video-20 [timeStamp: 00:00]

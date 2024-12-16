import React from 'react';
import { Routes, Route } from 'react-router';
import NotFound from './pages/NotFound/NotFound';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Profile from './pages/Profile/Profile';
import Jobs from './pages/Jobs/Jobs';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Company from './pages/Company/Company';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Jobs />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/company" element={<Company />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

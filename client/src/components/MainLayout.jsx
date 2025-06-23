import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      
      <main className="min-h-screen ">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
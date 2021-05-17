import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Router from 'next/router';
import nprogress from 'nprogress';

const Layout = ({ children }) => {
  Router.onRouteChangeStart = () => nprogress.start();
  Router.onRouteChangeComplete = () => nprogress.done();
  Router.onRouteChangeError = () => nprogress.done();
  return (
    <div className="content">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

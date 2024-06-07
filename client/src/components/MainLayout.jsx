// import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import PropTypes from 'prop-types';

const MainLayout = ({ children }) => {
  return (
    <div className="">
      <Header />
      <div className="h-24">

      </div>
      {children}
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default MainLayout;

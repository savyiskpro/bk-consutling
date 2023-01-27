import React, { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children, hideCarrerForm }) => {
  return (
    <>
      <Header />
      {children}
      <Footer hideCarrerForm={hideCarrerForm} />
    </>
  );
};

export default Layout;

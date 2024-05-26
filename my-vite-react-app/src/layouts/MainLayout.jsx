import React from "react";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
};

export default MainLayout;

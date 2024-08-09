import React, { useState } from "react";
import Header from "../header";
import Footer from "../footer";

const Layout = ({ children }) => {
  const [search, setSearch] = useState("24_lp");

  return (
    <>
      <Header search={search} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

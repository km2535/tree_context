import React, { useState } from "react";
import Content from "../components/content";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import { MenuToggle, ThemeContext } from "../context/ThemeContext";

const Page = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [dayNight, setdayNight] = useState(false);

  return (
    <ThemeContext.Provider value={{ dayNight, setdayNight }}>
      <MenuToggle.Provider value={{ menuToggle, setMenuToggle }}>
        <Header />
        <Content />
        <Sidebar />
      </MenuToggle.Provider>
    </ThemeContext.Provider>
  );
};

export default Page;

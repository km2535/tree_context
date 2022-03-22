/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { MenuToggle } from "../context/ThemeContext";
import styled from "styled-components";
const ListA = styled.a``;

const Sidebar = () => {
  const { menuToggle } = useContext(MenuToggle);
  return (
    <>
      <ul className={menuToggle ? "navigation active" : "navigation "}>
        <li>
          <ListA href="#">Home</ListA>
        </li>
        <li>
          <ListA href="#">About</ListA>
        </li>
        <li>
          <ListA href="#">Contact</ListA>
        </li>
        <li>
          <ListA href="#">ComeToUs</ListA>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;

import React, { useContext } from "react";
import { MenuToggle, ThemeContext } from "../context/ThemeContext";
import { IonIcon } from "react-ion-icon";
const Header = () => {
  const { dayNight, setdayNight } = useContext(ThemeContext);
  const { menuToggle, setMenuToggle } = useContext(MenuToggle);
  console.log(menuToggle);
  const dayCont = () => {
    setdayNight((prev) => !prev);
  };
  const menu = () => {
    setMenuToggle((prev) => !prev);
  };
  return (
    <>
      <header className={dayNight ? "active" : ""}>
        <span className="logo">Logo</span>
        <div className="rightSide">
          <div
            className={dayNight ? "btns dayNight active" : "btns dayNight "}
            onClick={dayCont}
          >
            <IonIcon name="sunny-outline" className="ionicon"></IonIcon>
            <IonIcon name="moon-outline" className="ionicon"></IonIcon>
          </div>
          <div
            className={menuToggle ? "menuToggle active" : "menuToggle"}
            onClick={menu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

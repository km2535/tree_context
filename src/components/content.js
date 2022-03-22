import React, { useContext } from "react";
import mask from "../content/mask.jpg";
import video from "../content/video.mp4";
import { ThemeContext } from "../context/ThemeContext";

const Content = () => {
  // 디스트럭쳐링 할당으로 아래와 같이 사용.
  const { dayNight } = useContext(ThemeContext);

  return (
    <>
      <section className={dayNight ? "main active" : "main "}>
        <video className="video" autoPlay loop muted type="mp4">
          <source src={video} type="video/mp4"></source>
        </video>
        <img src={mask} className="mask" alt="mask"></img>
        <h2 className="h2">ReactTree</h2>
      </section>
    </>
  );
};

export default Content;

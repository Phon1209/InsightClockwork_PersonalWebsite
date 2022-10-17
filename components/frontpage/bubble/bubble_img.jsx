import React from "react";
import bubbleSrc from "../../../public/imgs/bubbleImg.png";

function BubbleImg({ x, y, size, onPage }) {
  return (
    <div
      className={onPage && "absolute"}
      style={{ top: y, left: x, transform: `scale(${size / 145})` }}
    >
      <img src={bubbleSrc.src} alt="Bubble" />
    </div>
  );
}

export default BubbleImg;

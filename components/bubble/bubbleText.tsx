import React from "react";
import bubbleSrc1 from "../../public/imgs/bubble1.png";
import bubbleSrc2 from "../../public/imgs/bubble2.png";
import bubbleSrc3 from "../../public/imgs/bubble3.png";
import { position } from "../frontpage/bubble";
import { StaticImageData } from "next/image";

const BubbleText = ({
  text,
  size,
  x,
  y,
  rotate,
}: {
  text: string;
  size: number;
  x: number;
  y: number;
  rotate?: number;
}) => {
  const bubbleImgSrcs: Array<StaticImageData> = [
    bubbleSrc1,
    bubbleSrc2,
    bubbleSrc3,
  ];

  const rotateAngle = rotate || 0;

  return (
    <div
      style={{
        backgroundImage: `url(${bubbleSrc1.src})`,
        aspectRatio: "1/1",
        transitionProperty: "top left",
        transitionDuration: "1000ms",
        transitionTimingFunction: "ease",
        top: y,
        left: x,
        translate: "-50% -50%",
        scale: `${size}`,
        rotate: `${rotateAngle}deg`,
      }}
      className="text-title-lg absolute bg-contain p-6 lg:p-8 inline-flex justify-center items-center"
    >
      <h3
        style={{
          rotate: `${-rotateAngle}deg`,
        }}
      >
        {text}
      </h3>
    </div>
  );
};

export default BubbleText;

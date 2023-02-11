import React from "react";
import bubbleSrc from "../../public/imgs/bubbleImg.png";

const BubbleText = ({ text }: { text: string }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bubbleSrc.src})`,
        aspectRatio: "1/1",
      }}
      className="text-title-lg bg-contain p-6 inline-flex justify-center items-center"
    >
      {text}
    </div>
  );
};

export default BubbleText;

import React, { useState } from "react";
import bubbleSrc1 from "../../public/imgs/bubble1.png";
import bubbleModule from "../../styles/bubble.module.scss";

interface IText {
  title: string;
  size: number;
  x: number;
  y: number;
  rotate?: number;
}

interface ITextLink extends IText {
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const BubbleText = React.forwardRef(
  ({ title, size, x, y, rotate }: IText, ref: React.Ref<HTMLDivElement>) => {
    const rotateAngle = rotate || 0;

    const [delay] = useState(Math.floor(Math.random() * 10));

    return (
      <div
        ref={ref}
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
          animationDelay: `-${delay}s`,
        }}
        className={`${bubbleModule.bubble} text-title-lg text-code absolute bg-contain p-6 lg:p-8 inline-flex justify-center items-center`}
      >
        <h3
          style={{
            rotate: `${-rotateAngle}deg`,
          }}
        >
          {title}
        </h3>
      </div>
    );
  }
);

const BubbleTextLink = React.forwardRef(
  (props: ITextLink, ref: React.Ref<HTMLDivElement>) => {
    return (
      <a href={props.href} onClick={props.onClick}>
        <BubbleText
          ref={ref}
          size={props.size}
          title={props.title}
          x={props.x}
          y={props.y}
          rotate={props.rotate}
        />
      </a>
    );
  }
);

export default BubbleTextLink;

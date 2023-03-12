import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { LinkIcon } from "../../types/links";
import { BsAwardFill, BsFillPersonFill } from "react-icons/bs";
import { IoIosPaper } from "react-icons/io";
import BubbleTextLink from "../bubble/bubbleText";

const bubbles: Array<LinkIcon & { size: number }> = [
  {
    icon: IoIosPaper,
    title: "Résumé",
    link: "/resume",
    size: 1.1,
  },
  {
    icon: null,
    title: "Projects",
    link: "/projects",
    size: 1.3,
  },
  {
    icon: BsAwardFill,
    title: "Awards",
    link: "/awards",
    size: 1.1,
  },
  {
    icon: BsFillPersonFill,
    title: "About",
    link: "/about",
    size: 1,
  },
];

export interface position {
  x: number;
  y: number;
  rotate?: number;
}

const rng = (size: number): number => {
  return Math.floor(Math.random() * size);
};

const distanceR2 = (o1: position, o2: position): number => {
  const dx = o1.x - o2.x;
  const dy = o1.y - o2.y;
  // console.log(dx, dy);
  const res = dx * dx + dy * dy;
  if (res === 0) return 0.9;
  return res;
};

const addForce = (o: position, f: position): void => {
  o.x += f.x;
  o.y += f.y;
};

const BubbleSection = () => {
  const [positions, setPositions] = useState<position[]>([]);

  const bubbleRefs = useRef([]);
  bubbleRefs.current = bubbles.map(
    (ref, idx) => (bubbleRefs.current[idx] = React.createRef())
  );

  useEffect(() => {
    const area = document.querySelector<HTMLElement>("#bubbleArea");
    const rearrangeBubble = () => {
      let pos: Array<position> = [];
      for (let i = 0; i < bubbles.length; i++) {
        pos.push({
          x: Math.floor(Math.random() * area.offsetLeft),
          y:
            Math.floor(Math.random() * 100) +
            50 +
            area.offsetTop +
            area.offsetHeight,
          rotate: rng(350),
        });
      }

      setPositions(pos);
    };
    rearrangeBubble();
  }, []);

  useEffect(() => {
    const calculatePosition = setInterval(() => {
      const area = document.querySelector<HTMLElement>("#bubbleArea");

      // console.log(area.offsetHeight / 2 + area.offsetTop);
      const centerY = area.offsetHeight / 2;
      const centerX = area.offsetWidth / 2;
      // Calculate bubble here

      const currentPostion: Array<position> = bubbleRefs.current.map(
        (bubbleRef) => {
          const elem = bubbleRef.current;
          return {
            x: parseInt(elem?.style.left.slice(0, -2)) || 0,
            y: parseInt(elem?.style.top.slice(0, -2)) || 0,
            rotate: parseInt(elem?.style.left.slice(0, -2)) || 0,
          };
        }
      );

      const newPositions: position[] = currentPostion.map((elem, i) => {
        const nextPosition: position = { ...elem };
        const forces: position = { x: 0, y: 0 };
        // * Gravity to center
        const centerGravity = 0.3;

        addForce(forces, {
          x: centerGravity * (centerX - elem.x),
          y: centerGravity * (centerY - elem.y),
        });

        // * Repel force from border

        // * Repel force from others

        currentPostion.forEach((other, j) => {
          if (j == i) return;
          const repelConstant =
            (5500 / Math.sqrt(distanceR2(elem, other))) * bubbles[j].size;
          const positionAngle = Math.atan2(other.y - elem.y, other.x - elem.x);
          addForce(forces, {
            x: -repelConstant * Math.cos(positionAngle),
            y: -repelConstant * Math.sin(positionAngle),
          });
        });

        // * drag
        const dragConstant = 0.5;
        const fDrag =
          dragConstant * Math.sqrt(forces.x * forces.x + forces.y * forces.y);
        const dragAngle = Math.atan2(forces.y, forces.x);
        // console.log(forces.x, forces.y);
        // console.log(fDrag);
        addForce(forces, {
          x: -fDrag * Math.cos(dragAngle),
          y: -fDrag * Math.sin(dragAngle),
        });
        // console.log(forces.x, forces.y);
        // console.log(centerX, centerY);
        // console.log(nextPosition);
        // console.log(nextPosition);

        addForce(nextPosition, forces);

        return nextPosition;
      });

      // console.log(newPositions);

      bubbleRefs.current.forEach((bubbleRef, i) => {
        bubbleRef.current.style.top = `${newPositions[i].y}px`;
        bubbleRef.current.style.left = `${newPositions[i].x}px`;
      });
      // setPositions(newPositions);
    }, 200);

    return () => clearInterval(calculatePosition);
  }, [positions]);

  return (
    <section
      id="bubbleArea"
      className="hidden md:block md:col-end-13 md:col-span-7 md2:col-span-8 relative"
    >
      {positions.length !== 0 &&
        bubbles.map((elem, i) => {
          return (
            <Link href={elem.link} key={elem.link} passHref>
              <BubbleTextLink
                ref={bubbleRefs.current[i]}
                size={elem.size}
                title={elem.title}
                x={positions[i].x}
                y={positions[i].y}
                rotate={positions[i].rotate}
              />
            </Link>
          );
        })}
    </section>
  );
};

export default BubbleSection;

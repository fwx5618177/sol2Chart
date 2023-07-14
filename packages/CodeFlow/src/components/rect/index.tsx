import React, { FC, useEffect, useRef, useState } from "react";
import * as d3 from "d3";

interface RectProps {
  width: number;
  height: number;
}

const Rect: FC<RectProps> = ({ width, height }) => {
  const rectRef = useRef(null);
  const { select, drag } = d3;
  const [isSelected, setIsSelected] = useState(false);

  const handleMouseOver = () => {
    if (!isSelected) {
      select(rectRef.current).attr("fill", "lightgrey");
    }
  };

  const handleMouseOut = () => {
    if (!isSelected) {
      select(rectRef.current).attr("fill", "white");
    }
  };

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  const handleSet = (
    selection: d3.Selection<null, unknown, null, undefined>
  ) => {
    selection
      .attr("x", width)
      .attr("y", height)
      .attr("cx", width / 2)
      .attr("cy", height / 2)
      .attr("rx", 10)
      .attr("ry", 10)
      .attr("width", width)
      .attr("height", height)
      .attr("fill", "white")
      .attr("stroke", isSelected ? "red" : "#d3d3d3")
      .attr("stroke-width", 2)
      .style("cursor", "move")
      .on("click", handleClick)
      .on("mouseover", handleMouseOver)
      .on("mouseout", handleMouseOut);
  };

  useEffect(() => {
    const rect = select(rectRef?.current);

    const dragHandler = drag()
      .on("start", () => {
        rect.raise().attr("stroke", "black").attr("stroke-width", 2);
      })
      .on("drag", (event) => {
        rect.attr("x", event?.x).attr("y", event?.y);
      })
      .on("end", () => {});
    handleSet(rect);

    rect.call(dragHandler);
  }, [height, isSelected, width]);

  return (
    <svg
      width={800}
      height={800}
      style={{
        background: "white",
      }}
    >
      <rect
        ref={rectRef}
        // width={width * 2}
        // height={height * 2}
        // fill="white"
        // stroke={isSelected ? "black" : "none"}
        // strokeWidth={isSelected ? 2 : 0}
        // onMouseOver={handleMouseOver}
        // onMouseOut={handleMouseOut}
        // onClick={handleClick}
      />
      {/* {isSelected && <Arrow />} */}
    </svg>
  );
};

export default Rect;

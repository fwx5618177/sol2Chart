import React, { useCallback, useEffect, useRef } from "react";
import * as d3 from "d3";
import { useSvgProps } from "../useSvg";

const Circle = () => {
  const svgRef = useRef(null);
  const options = {
    width: 300,
    height: 300,
    cx: 150,
    cy: 150,
    r: 50,
  };

  const initial = useCallback(() => {
    const svg = d3.select(svgRef?.current);

    svg.selectAll("*").remove();

    svg
      .append("circle")
      .attr("cx", options.cx)
      .attr("cy", options.cy)
      .attr("r", options.r)
      .attr("fill", "blue");
  }, [options.cx, options.cy, options.r, svgRef]);

  useEffect(() => {
    initial();
  }, [initial]);

  return <svg ref={svgRef} width={options.width} height={options.height}></svg>;
};

export default Circle;

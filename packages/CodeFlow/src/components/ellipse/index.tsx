import React, { useEffect, useRef } from 'react';
// import { useSvg } from './useSvg';
import * as d3 from 'd3'
import { useSvgProps } from './useSvg';

const Ellipse = () => {
    const svgRef = useRef(null);
    const options: useSvgProps['options'] = {
      width: 300,
      height: 200,
      cx: 150, cy: 100, rx: 100, ry: 80
    }
    // const { svg, cx, cy, rx, ry } = useSvg(svgRef, { width: 300, height: 200, cx: 150, cy: 100, rx: 100, ry: 80 });

    const initial = () => {
      const svg = d3.select(svgRef?.current);

      svg
          .append('ellipse')
          .attr('cx', options.cx)
          .attr('cy', options.cy)
          .attr('rx', options.rx)
          .attr('ry', options.ry)
          .attr('fill', 'blue');
      
    }


    useEffect(() => {
      initial()
    }, []);
  

    return (
        <svg ref={svgRef} width={options.width} height={options.height}>
      </svg>
    )
}

export default Ellipse
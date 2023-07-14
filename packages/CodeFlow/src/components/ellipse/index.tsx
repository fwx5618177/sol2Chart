import React, { useCallback, useEffect, useRef } from 'react';
import * as d3 from 'd3'
import { useSvgProps } from '../useSvg';

const Ellipse = () => {
    const svgRef = useRef(null);
    const options: useSvgProps['options'] = {
      width: 300,
      height: 200,
      cx: 150, cy: 100, rx: 100, ry: 80
    }
    // const { svg, cx, cy, rx, ry } = useSvg(svgRef, { width: 300, height: 200, cx: 150, cy: 100, rx: 100, ry: 80 });

    const initial = useCallback(() => {
      const svg = d3.select(svgRef?.current);

      svg
          .append('ellipse')
          .attr('cx', options.cx)
          .attr('cy', options.cy)
          .attr('rx', options.rx)
          .attr('ry', options.ry)
          .attr('fill', 'blue');
      
    }, [options.cx, options.cy, options.rx, options.ry])


    useEffect(() => {
      initial()
    }, [initial]);
  

    return (
        <svg ref={svgRef} width={options.width} height={options.height}>
      </svg>
    )
}

export default Ellipse
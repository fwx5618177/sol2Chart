import React, { useEffect, useRef } from 'react';
import { useSvg } from './useSvg';

const Ellipse = () => {
    const svgRef = useRef(null);
    const { svg, cx, cy, rx, ry } = useSvg(svgRef, { width: 300, height: 200, cx: 150, cy: 100, rx: 100, ry: 80 });

    const initial = () => {
        svg
          .append('ellipse')
          .attr('cx', cx)
          .attr('cy', cy)
          .attr('rx', rx)
          .attr('ry', ry)
          .attr('fill', 'blue');
    }

    useEffect(() => {
        initial();
    }, [])

    return (
        <svg ref={svgRef} width={300} height={200}>
      </svg>
    )
}

export default Ellipse
import * as d3 from 'd3';

export interface useSvgProps {
  svgRef: React.MutableRefObject<null>;
  options: {
    width: number;
    height: number;
    cx: number;
    cy: number;
    rx: number;
    ry: number;
    fill?: string;
  };
}

export const useSvg = (svgRef: useSvgProps['svgRef'], options: useSvgProps['options']) => {
  const svg: d3.Selection<null, unknown, null, undefined> = d3.select(svgRef.current);

  return { ...options, svg };
};

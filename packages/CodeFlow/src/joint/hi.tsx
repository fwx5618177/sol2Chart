import React, { useEffect } from "react"
import { useRef } from "react"
import * as joint from 'jointjs'

const JointHi = () => {
    const divRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const namespace = joint.shapes;

        const graph = new joint.dia.Graph({}, { cellNamespace: namespace });

        const paper = new joint.dia.Paper({
            el: divRef?.current,
            model: graph,
            width: 600,
            height: 500,
            gridSize: 1,
            cellViewNamespace: namespace
        });

        const rect = new joint.shapes.standard.Rectangle();
        rect.position(100, 30);
        rect.resize(100, 40);
        rect.attr({
            body: {
                fill: 'blue'
            },
            label: {
                text: 'Hello',
                fill: 'white'
            }
        });
        rect.addTo(graph);

        const rect2 = rect.clone();
        rect2.translate(300, 0);
        rect2.attr('label/text', 'World!');
        rect2.addTo(graph);

        const link = new joint.shapes.standard.Link();
        link.source(rect);
        link.target(rect2);
        link.addTo(graph);
    }, [])

    return (
        <div ref={divRef}></div>
    )
}

export default JointHi
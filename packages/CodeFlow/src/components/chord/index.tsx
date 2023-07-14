import React from "react";
import { useRef } from "react";

const Chord = () => {
  const chordRef = useRef(null);

  return <div ref={chordRef}></div>;
};

export default Chord;

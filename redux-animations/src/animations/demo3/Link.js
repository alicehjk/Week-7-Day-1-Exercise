import React from "react";
import { LinePath } from "@vx/shape";

const Link = ({ link, state }) => (
  <LinePath
    className="link"
    x={(d) => d.x}
    y={(d) => d.y}
    data={[
      { x: state.source.x, y: state.source.y },
      { x: state.target.x, y: state.target.y }
    ]}
    stroke="rgba(255,255,255,0.2)"
    strokeWidth={1.5}
  />
);

export default Link;
import React from "react";
import PropTypes from "prop-types";
import { useBasicSolid } from "@react-vertex/material-hooks";
import { useSphereElements } from "@react-vertex/geometry-hooks";
import { useWebGLContext } from "@react-vertex/core";

/**
 * Safe LightOrb Component
 */
const LightOrb = ({
  color = [1, 1, 1],
  radius = 1,
  position = [0, 0, 0],
}) => {
  const gl = useWebGLContext();
  const program = useBasicSolid(color);
  const { vertices, normals, indices } = useSphereElements(radius, 32, 32);

  // prevent crash if context missing
  if (!gl) {
    console.warn("LightOrb: WebGL context not found. Skipping render.");
    return null;
  }

  return (
    <geometry
      program={program}
      position={position}
      vertices={vertices}
      normals={normals}
      indices={indices}
    />
  );
};

LightOrb.propTypes = {
  color: PropTypes.arrayOf(PropTypes.number),
  radius: PropTypes.number,
  position: PropTypes.arrayOf(PropTypes.number),
};

export default LightOrb;
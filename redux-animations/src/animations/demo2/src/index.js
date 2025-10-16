import React from "react";
import * as ReactVertex from "@react-vertex/core";
import * as Orbit from "@react-vertex/orbit-camera";
import LightOrb from "./LightOrb";
import "./abstract.jpg";

const { Scene } = ReactVertex;
const { OrbitCamera } = Orbit;

const Demo2App = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Scene backgroundColor={[0, 0, 0, 1]}>
        <OrbitCamera
          position={[0, 0, 8]}
          target={[0, 0, 0]}
          near={0.1}
          far={100}
          fov={75}
        >
          <LightOrb
            color={[1.0, 0.7, 0.5]}
            radius={1.5}
            position={[0, 0, 0]}
          />
        </OrbitCamera>
      </Scene>
    </div>
  );
};

export default Demo2App;
import React from "react";
import { Group } from "@vx/group";
import Node from "./Node";
import { NodeGroup } from "react-move";
import LinksMove from "./LinksMove";

// Removed unused Fragment, width, height
const NodesMove = ({ nodes, links, duration }) => {
  return (
    <Group>
      <LinksMove links={links} duration={duration} />
      <NodeGroup
        data={nodes}
        keyAccessor={(d) => d.id}
        start={(node) => ({
          x: node.x,
          y: node.y,
          opacity: 0
        })}
        enter={(node) => ({
          x: [node.x],
          y: [node.y],
          opacity: [1]
        })}
        update={(node) => ({
          x: [node.x],
          y: [node.y],
          opacity: [1]
        })}
        leave={() => ({
          opacity: [0]
        })}
      >
        {(nodes) => (
          <Group>
            {nodes.map(({ key, data, state }) => (
              <Node key={key} node={data} state={state} />
            ))}
          </Group>
        )}
      </NodeGroup>
    </Group>
  );
};

export default NodesMove;
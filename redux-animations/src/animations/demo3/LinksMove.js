import React from "react";
import Link from "./Link";
import { NodeGroup } from "react-move";

const LinksMove = ({ links, duration }) => (
  <NodeGroup
    data={links}
    keyAccessor={(d) => d.id}
    start={(link) => ({
      source: link.source,
      target: link.target,
      opacity: 0
    })}
    enter={(link) => ({
      source: [link.source],
      target: [link.target],
      opacity: [1]
    })}
    update={(link) => ({
      source: [link.source],
      target: [link.target],
      opacity: [1]
    })}
    leave={() => ({
      opacity: [0]
    })}
    duration={duration}
  >
    {(links) => (
      <g>
        {links.map(({ key, data, state }) => (
          <Link key={key} link={data} state={state} />
        ))}
      </g>
    )}
  </NodeGroup>
);

export default LinksMove;
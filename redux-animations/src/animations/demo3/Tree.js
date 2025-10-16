import React, { useState, useEffect } from "react";
import { hierarchy, tree } from "d3-hierarchy";
import { Group } from "@vx/group";
import NodesMove from "./NodesMove";

const Tree = ({ data, width, height }) => {
  const [layout, setLayout] = useState({ nodes: [], links: [] });

  useEffect(() => {
    if (!data) return;
    const root = hierarchy(data);
    const layoutTree = tree().size([width, height]);
    layoutTree(root);

    const nodes = root.descendants();
    const links = root.links();
    setLayout({ nodes, links });
  }, [data, width, height]);

  // changed == → ===
  const nodes = layout.nodes || [];
  const links = layout.links || [];

  return (
    <svg width={width} height={height}>
      <Group top={20} left={20}>
        <NodesMove nodes={nodes} links={links} duration={600} />
      </Group>
    </svg>
  );
};

export default Tree;
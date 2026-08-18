"use client";

import { useMemo, useState } from "react";
import { literaryLinks, literaryNodes } from "../data/literary-nodes";

export function LiteraryNebula() {
  const [selectedId, setSelectedId] = useState("moon");
  const selected = literaryNodes.find((node) => node.id === selectedId) ?? literaryNodes[0];
  const nodeMap = useMemo(() => new Map(literaryNodes.map((node) => [node.id, node])), []);

  return (
    <div className="nebula-layout">
      <div className="nebula-map" aria-label="文学关系网络">
        <svg className="nebula-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {literaryLinks.map(([sourceId, targetId]) => {
            const source = nodeMap.get(sourceId)!;
            const target = nodeMap.get(targetId)!;
            const active = sourceId === selectedId || targetId === selectedId;
            return (
              <line
                key={`${sourceId}-${targetId}`}
                x1={source.x}
                y1={source.y}
                x2={target.x}
                y2={target.y}
                className={active ? "is-active" : ""}
              />
            );
          })}
        </svg>

        {literaryNodes.map((node) => (
          <button
            key={node.id}
            type="button"
            className={`literary-node literary-node--${node.kind} ${selectedId === node.id ? "is-selected" : ""}`}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            onClick={() => setSelectedId(node.id)}
            aria-pressed={selectedId === node.id}
          >
            <span>{node.name}</span>
            <small>{node.kind}</small>
          </button>
        ))}
      </div>

      <aside className="node-note" aria-live="polite">
        <p>{selected.kind}</p>
        <h2>{selected.name}</h2>
        <div className="node-note__rule" />
        <p className="node-note__description">{selected.description}</p>
        <span>点击其他节点，沿着关系继续漫游</span>
      </aside>
    </div>
  );
}

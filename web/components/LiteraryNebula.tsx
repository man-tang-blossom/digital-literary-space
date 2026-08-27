"use client";

import Link from "next/link";
import { useRef, useState, type PointerEvent, type WheelEvent } from "react";

type StarNode = {
  id: string;
  title: string;
  type: string;
  x: number;
  y: number;
  level: 1 | 2 | 3;
  parent?: string;
};

const nodes: StarNode[] = [
  { id: "summer", title: "夏天", type: "季节", x: 600, y: 635, level: 1 },
  { id: "moon", title: "月", type: "意象", x: 600, y: 145, level: 1, parent: "summer" },
  { id: "flowers", title: "花", type: "意象", x: 395, y: 430, level: 1, parent: "summer" },
  { id: "festival", title: "节日", type: "节令", x: 805, y: 430, level: 1, parent: "summer" },
  { id: "rain", title: "雨", type: "意象", x: 320, y: 610, level: 1, parent: "summer" },
  { id: "wind", title: "风", type: "意象", x: 880, y: 610, level: 1, parent: "summer" },
  { id: "water", title: "水", type: "意象", x: 715, y: 705, level: 1, parent: "summer" },
  { id: "travel", title: "游记", type: "古文", x: 485, y: 705, level: 1, parent: "summer" },

  { id: "lotus", title: "荷花", type: "夏花", x: 125, y: 105, level: 2, parent: "flowers" },
  { id: "hehuan", title: "合欢花", type: "夏花", x: 290, y: 65, level: 2, parent: "flowers" },
  { id: "crape", title: "紫薇", type: "夏花", x: 420, y: 155, level: 2, parent: "flowers" },
  { id: "gardenia", title: "栀子", type: "夏花", x: 105, y: 290, level: 2, parent: "flowers" },
  { id: "jasmine", title: "茉莉", type: "夏花", x: 315, y: 325, level: 2, parent: "flowers" },
  { id: "daylily", title: "萱草", type: "夏花", x: 430, y: 280, level: 2, parent: "flowers" },

  { id: "qixi", title: "七夕", type: "节令", x: 1040, y: 80, level: 2, parent: "festival" },
  { id: "dragonboat", title: "端午", type: "节令", x: 1110, y: 210, level: 2, parent: "festival" },
  { id: "solstice", title: "夏至", type: "节气", x: 1015, y: 345, level: 2, parent: "festival" },
  { id: "zhongyuan", title: "中元", type: "节令", x: 1140, y: 360, level: 2, parent: "festival" },

  { id: "downpour", title: "大雨", type: "夏雨", x: 80, y: 510, level: 2, parent: "rain" },
  { id: "drizzle", title: "小雨", type: "夏雨", x: 95, y: 665, level: 2, parent: "rain" },
  { id: "after-rain", title: "雨后", type: "夏雨", x: 300, y: 725, level: 2, parent: "rain" },
  { id: "lotus-rain", title: "荷上雨", type: "夏雨", x: 395, y: 570, level: 2, parent: "rain" },

  { id: "south-wind", title: "南风", type: "夏风", x: 1030, y: 490, level: 2, parent: "wind" },
  { id: "evening-wind", title: "晚风", type: "夏风", x: 1110, y: 625, level: 2, parent: "wind" },
  { id: "pond", title: "荷塘", type: "夏水", x: 680, y: 790, level: 2, parent: "water" },
  { id: "lake", title: "湖", type: "夏水", x: 825, y: 735, level: 2, parent: "water" },
  { id: "xiaoshitan", title: "小石潭", type: "夏水", x: 550, y: 785, level: 2, parent: "water" },
  { id: "bamboo", title: "竹林", type: "游处", x: 370, y: 785, level: 2, parent: "travel" },
  { id: "nightwalk", title: "夜游", type: "游处", x: 455, y: 755, level: 2, parent: "travel" },

  { id: "lotus-leaf", title: "荷叶", type: "细节", x: 62, y: 70, level: 3, parent: "lotus" },
  { id: "boat", title: "小艇", type: "细节", x: 55, y: 165, level: 3, parent: "lotus" },
  { id: "stars", title: "星河", type: "细节", x: 1125, y: 38, level: 3, parent: "qixi" },
  { id: "fireflies", title: "流萤", type: "细节", x: 1150, y: 690, level: 3, parent: "evening-wind" },
  { id: "wet-leaf", title: "雨滴", type: "细节", x: 420, y: 635, level: 3, parent: "lotus-rain" },
];

const nodeById = new Map(nodes.map((node) => [node.id, node]));
const verses: Record<string, Array<{ line: string; source: string; href: string }>> = {
  lotus: [
    { line: "水面清圆，一一风荷举。", source: "周邦彦《苏幕遮》", href: "/library/flowers/zhou-bangyan-sumu-zhe" },
    { line: "兴尽晚回舟，误入藕花深处。", source: "李清照《如梦令》", href: "/library/flowers/li-qingzhao-lotus-dream" },
  ],
  rain: [
    { line: "黑云翻墨未遮山，白雨跳珠乱入船。", source: "苏轼《六月二十七日望湖楼醉书》", href: "/library/rain/su-shi-wanghu-storm" },
    { line: "风如拔山怒，雨如决河倾。", source: "陆游《大风雨中作》", href: "/library/rain/lu-you-great-wind-rain" },
  ],
  downpour: [{ line: "黑云翻墨未遮山，白雨跳珠乱入船。", source: "苏轼《六月二十七日望湖楼醉书》", href: "/library/rain/su-shi-wanghu-storm" }],
  "lotus-rain": [{ line: "却是池荷跳雨，散了真珠还聚。", source: "杨万里《昭君怨·咏荷上雨》", href: "/library/rain/yang-wanli-lotus-rain" }],
  qixi: [{ line: "金风玉露一相逢，便胜却、人间无数。", source: "秦观《鹊桥仙》", href: "/library/festivals/qixi#queqiao-xian" }],
  moon: [{ line: "轻罗小扇扑流萤。", source: "杜牧《秋夕》", href: "/library/seasons/summer" }],
  water: [{ line: "水面清圆，一一风荷举。", source: "周邦彦《苏幕遮》", href: "/library/flowers/zhou-bangyan-sumu-zhe" }],
};
const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export function LiteraryNebula() {
  const [zoom, setZoom] = useState(.84);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [selected, setSelected] = useState("summer");
  const dragging = useRef<{ x: number; y: number; panX: number; panY: number } | null>(null);
  const selectedNode = nodeById.get(selected) ?? nodes[0];
  const selectedVerses = verses[selected] ?? [];
  const visibleLevel = zoom >= 1.75 ? 3 : zoom >= 1.12 ? 2 : 1;
  const tx = pan.x + 600 * (1 - zoom);
  const ty = pan.y + 400 * (1 - zoom);

  const focusNode = (node: StarNode) => {
    const nextZoom = node.level === 1 ? 1.25 : node.level === 2 ? 1.82 : 2.25;
    setZoom(nextZoom);
    setPan({ x: nextZoom * (600 - node.x), y: nextZoom * (400 - node.y) });
    setSelected(node.id);
  };
  const onWheel = (event: WheelEvent<SVGSVGElement>) => {
    event.preventDefault();
    setZoom((value) => clamp(value + (event.deltaY < 0 ? .14 : -.14), .58, 2.5));
  };
  const onPointerDown = (event: PointerEvent<SVGSVGElement>) => {
    dragging.current = { x: event.clientX, y: event.clientY, panX: pan.x, panY: pan.y };
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const onPointerMove = (event: PointerEvent<SVGSVGElement>) => {
    if (!dragging.current) return;
    setPan({ x: dragging.current.panX + event.clientX - dragging.current.x, y: dragging.current.panY + event.clientY - dragging.current.y });
  };
  const onPointerUp = () => { dragging.current = null; };
  const reset = () => { setZoom(.84); setPan({ x: 0, y: 0 }); setSelected("summer"); };

  return <section className="nebula-explorer" aria-label="夏天的文学星云">
    <div className="nebula-explorer__bar">
      <div><p>文学星云</p><strong>夏天</strong></div>
      <p className="nebula-explorer__guide">滚轮缩放 · 拖动漫游 · 点词靠近</p>
      <div className="nebula-explorer__controls" aria-label="缩放控制"><button type="button" onClick={() => setZoom((value) => clamp(value - .16, .58, 2.5))}>−</button><button type="button" onClick={() => setZoom((value) => clamp(value + .16, .58, 2.5))}>＋</button><button type="button" onClick={reset}>归位</button></div>
    </div>
    <div className="nebula-explorer__canvas">
      <svg viewBox="0 0 1200 800" role="img" aria-label="可缩放的夏天文学关系图" onWheel={onWheel} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerLeave={onPointerUp}>
        <defs>
          <radialGradient id="summer-glow"><stop stopColor="#fbf8ef" stopOpacity="1"/><stop offset=".52" stopColor="#edf2ed" stopOpacity=".94"/><stop offset="1" stopColor="#dbe8e3" stopOpacity="1"/></radialGradient>
          <radialGradient id="ink-core"><stop stopColor="#91a7a2"/><stop offset=".58" stopColor="#5f7778"/><stop offset="1" stopColor="#3a5155"/></radialGradient>
          <radialGradient id="ink-orbit"><stop stopColor="#afc0bc" stopOpacity=".98"/><stop offset="1" stopColor="#647c7d" stopOpacity="1"/></radialGradient>
          <radialGradient id="mist-star"><stop stopColor="#fffdf6" stopOpacity=".98"/><stop offset=".5" stopColor="#d3e0db" stopOpacity=".8"/><stop offset="1" stopColor="#97b0ab" stopOpacity=".38"/></radialGradient>
        </defs>
        <image className="nebula-atmosphere" href="/images/nebula-summer-atmosphere-v1.png" x="0" y="0" width="1200" height="800" preserveAspectRatio="xMidYMid slice" />
        <rect width="1200" height="800" fill="url(#summer-glow)" opacity=".18" />
        <g className="nebula-orbits" aria-hidden="true"><ellipse cx="600" cy="650" rx="540" ry="172"/><ellipse cx="600" cy="570" rx="430" ry="128"/><ellipse cx="600" cy="470" rx="318" ry="86"/><ellipse cx="600" cy="365" rx="210" ry="55"/><ellipse cx="600" cy="270" rx="120" ry="31"/><path d="M600 660 C570 510 633 330 600 135" /></g>
        <g transform={`translate(${tx} ${ty}) scale(${zoom})`}>
          {nodes.filter((node) => node.level <= visibleLevel && node.parent).map((node) => {
            const parent = nodeById.get(node.parent!);
            if (!parent || parent.level > visibleLevel) return null;
            const middleX = (parent.x + node.x) / 2 + (node.y - parent.y) * .07;
            const middleY = (parent.y + node.y) / 2 - (node.x - parent.x) * .07;
            return <path className={`nebula-edge nebula-edge--level-${node.level}`} key={`${node.parent}-${node.id}`} d={`M ${parent.x} ${parent.y} Q ${middleX} ${middleY} ${node.x} ${node.y}`} />;
          })}
          {nodes.filter((node) => node.level <= visibleLevel).map((node) => <g key={node.id} className={`nebula-node nebula-node--level-${node.level} ${selected === node.id ? "is-current" : ""}`} transform={`translate(${node.x} ${node.y})`} role="button" tabIndex={0} aria-label={`${node.type}：${node.title}`} onPointerDown={(event) => event.stopPropagation()} onPointerUp={(event) => { event.stopPropagation(); focusNode(node); }} onClick={(event) => { event.stopPropagation(); focusNode(node); }} onKeyDown={(event) => { if (event.key === "Enter") focusNode(node); }}>
            <circle r={node.level === 1 ? 39 : node.level === 2 ? 25 : 13} />
            <text y={node.level === 1 ? -5 : -3} className="nebula-node__type">{node.type}</text><text y={node.level === 1 ? 17 : node.level === 2 ? 12 : 5} className="nebula-node__title">{node.title}</text>
          </g>)}
        </g>
      </svg>
      <aside className="nebula-explorer__focus"><span>{selectedNode.type}</span><strong>{selectedNode.title}</strong><em>缩放 {Math.round(zoom * 100)}%</em></aside>
      {selectedVerses.length > 0 ? <aside className="nebula-explorer__verses" aria-label={`${selectedNode.title}相关诗句`}><p>诗句从这里生长</p><strong>{selectedNode.title}</strong>{selectedVerses.map((verse) => <Link href={verse.href} key={verse.line}><span>{verse.line}</span><small>{verse.source}　→</small></Link>)}</aside> : null}
      <p className="nebula-explorer__level">{visibleLevel === 1 ? "远看：夏天与七个主题" : visibleLevel === 2 ? "走近：主题里的夏日意象" : "近看：意象里的细节"}</p>
    </div>
  </section>;
}

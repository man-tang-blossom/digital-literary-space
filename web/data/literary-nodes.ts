export type LiteraryNode = {
  id: string;
  name: string;
  kind: "作者" | "意象" | "主题";
  description: string;
  x: number;
  y: number;
};

export const literaryNodes: LiteraryNode[] = [
  { id: "li-bai", name: "李白", kind: "作者", description: "诗、酒与明月之间，一位不断远行的浪漫主义诗人。", x: 18, y: 25 },
  { id: "du-fu", name: "杜甫", kind: "作者", description: "以沉郁的诗笔记录时代，也写下草木与人间。", x: 36, y: 15 },
  { id: "su-shi", name: "苏轼", kind: "作者", description: "在山水、月色与人生起伏中寻找旷达。", x: 70, y: 23 },
  { id: "cao-zhi", name: "曹植", kind: "作者", description: "才情与生命困境交织，留下瑰丽而哀伤的篇章。", x: 84, y: 42 },
  { id: "zong-pu", name: "宗璞", kind: "作者", description: "以细腻散文凝视花木、记忆与生命成长。", x: 75, y: 76 },
  { id: "moon", name: "月", kind: "意象", description: "团圆、乡愁、孤独与时间共同汇聚的古老意象。", x: 50, y: 38 },
  { id: "wine", name: "酒", kind: "意象", description: "既是欢聚与放达，也是失意时与自我的对话。", x: 27, y: 55 },
  { id: "wisteria", name: "紫藤", kind: "意象", description: "花开如瀑，在宗璞笔下连接苦难、希望与新生。", x: 60, y: 83 },
  { id: "homesick", name: "乡愁", kind: "主题", description: "由明月、故园、远行和时间共同牵引的情感。", x: 43, y: 68 },
  { id: "solitude", name: "孤独", kind: "主题", description: "独处不是终点，而是文学开始回望内心的地方。", x: 14, y: 78 },
  { id: "growth", name: "成长", kind: "主题", description: "生命穿过失去与记忆，仍然继续舒展。", x: 88, y: 88 },
];

export const literaryLinks: Array<[string, string]> = [
  ["li-bai", "moon"], ["li-bai", "wine"], ["li-bai", "homesick"],
  ["du-fu", "wine"], ["du-fu", "solitude"], ["su-shi", "moon"],
  ["su-shi", "wine"], ["su-shi", "homesick"], ["cao-zhi", "solitude"],
  ["zong-pu", "wisteria"], ["zong-pu", "growth"], ["moon", "homesick"],
  ["moon", "solitude"], ["wisteria", "growth"], ["homesick", "solitude"],
];

export type SummerStormReading = {
  slug: string;
  title: string;
  author: string;
  era: string;
  excerpt: string[];
  lines: string[];
  translation: string;
  note: string;
  sourceUrl: string;
};

export const summerStormReadings: SummerStormReading[] = [
  {
    slug: "li-qingzhao-sudden-wind-rain",
    title: "如梦令·昨夜雨疏风骤",
    author: "李清照",
    era: "北宋",
    excerpt: ["昨夜雨疏风骤，浓睡不消残酒。", "试问卷帘人，却道海棠依旧。"],
    lines: ["昨夜雨疏风骤，浓睡不消残酒。", "试问卷帘人，却道海棠依旧。", "知否，知否？应是绿肥红瘦。"],
    translation: "昨夜雨不算密，风却很急，睡了一场仍没有消去酒意。醒来后问卷帘的人，海棠怎么样了，她说花还是老样子。词人却知道，经过一夜风雨，叶子该更浓了，花却要少一些。",
    note: "这是一场有风的雨。词里没有写雨点怎样落，只写醒来后的问答，海棠已经替这场夜雨留下了痕迹。",
    sourceUrl: "https://zh.wikisource.org/zh-hans/%E5%A6%82%E5%A4%A2%E4%BB%A4_%28%E6%9D%8E%E6%B8%85%E7%85%A7%29/%E5%A6%82%E5%A4%A2%E4%BB%A4_%28%E6%98%A8%E5%A4%9C%E9%9B%A8%E7%96%8F%E9%A2%A8%E9%A9%9F%29",
  },
  {
    slug: "yang-wanli-lotus-rain",
    title: "昭君怨·咏荷上雨",
    author: "杨万里",
    era: "南宋",
    excerpt: ["急雨打篷声，梦初惊。", "却是池荷跳雨，散了真珠还聚。"],
    lines: ["午梦扁舟花底，香满西湖烟水。", "急雨打篷声，梦初惊。", "却是池荷跳雨，散了真珠还聚。", "聚作水银窝，泛清波。"],
    translation: "午睡时仿佛坐着小船，停在荷花底下，西湖的烟水间满是香气。急雨敲打船篷，把我从梦里惊醒。原来是池塘的荷叶上雨点跳动，水珠散开又聚拢，最后在叶心聚成一窝水银般的清亮，浮在水波上。",
    note: "这首词写得很近。雨点先有声音，再落到荷叶上。荷叶上的水珠被打散，又回到叶心，整场急雨都收在一片荷叶里。",
    sourceUrl: "https://zh.wikisource.org/zh-hans/%E6%98%AD%E5%90%9B%E6%80%A8%C2%B7%E8%A9%A0%E8%8D%B7%E4%B8%8A%E9%9B%A8",
  },
  {
    slug: "lu-you-great-wind-rain",
    title: "大风雨中作",
    author: "陆游",
    era: "南宋",
    excerpt: ["风如拔山怒，雨如决河倾。"],
    lines: ["风如拔山怒，雨如决河倾。", "屋漏不可支，窗户俱有声。", "乌鸢堕地死，鸡犬噤不鸣。", "老病无避处，起坐徒叹惊。", "三年稼如云，一旦败垂成。", "夫岂或使之，忧乃及躬耕。", "邻曲无人色，妇子泪纵横。", "且抽架上书，洪范推五行。"],
    translation: "狂风像要拔起山岳，暴雨像决堤的河水倾泻。屋漏得难以支撑，窗户都在作响，乌鸢坠地，鸡犬也吓得不叫。诗人年老多病，无处躲避，只能坐起叹息。他更担心田里的庄稼，三年长得像云一样密，眼看一夜之间就要毁掉。",
    note: "陆游把暴雨写得很重。风雨落在屋上，也落在田里。后面的鸡犬、邻人和庄稼，让这场雨有了真实的分量。",
    sourceUrl: "https://www.gushiwen.cn/mingju/juv_7b034e6a86af.aspx",
  },
  {
    slug: "su-shi-wanghu-storm",
    title: "六月二十七日望湖楼醉书·其一",
    author: "苏轼",
    era: "北宋",
    excerpt: ["黑云翻墨未遮山，白雨跳珠乱入船。", "卷地风来忽吹散，望湖楼下水如天。"],
    lines: ["黑云翻墨未遮山，白雨跳珠乱入船。", "卷地风来忽吹散，望湖楼下水如天。"],
    translation: "乌云翻涌，像泼开的浓墨，还没有把远山完全遮住。白亮的大雨点像跳动的珠子，乱纷纷打进船里。一阵风从地面卷来，忽然吹散乌云和骤雨，望湖楼下的湖水又同天空连成一片。",
    note: "这首诗写得极快。黑云、白雨、卷地风，接着便是水天一色。夏日暴雨的来和去，都在四句里。",
    sourceUrl: "https://www.gushiwen.cn/mingju_1313.aspx",
  },
];

export const summerStormReadingsBySlug = Object.fromEntries(
  summerStormReadings.map((reading) => [reading.slug, reading]),
) as Record<string, SummerStormReading>;

export type PoemCollectionItem = {
  title: string;
  author: string;
  era: string;
  lines: string[];
  reading: string;
  sourceUrl: string;
};

export type PoemCollection = {
  slug: string;
  kicker: string;
  title: string;
  intro: string;
  status: string;
  afterword: string;
  items: PoemCollectionItem[];
};

export const poemCollections: PoemCollection[] = [
  {
    slug: "landscape-journey",
    kicker: "Scenery / On the Road",
    title: "景色篇 · 行旅山水",
    intro: "落日落在江面，春山立在平芜尽处，溪竹与荷花送人往更远的地方。",
    status: "三段山水 · 三次远行",
    afterword: "这三首诗不只是把景色放在眼前。江水、平野、春山和舟行的路，都让人知道：风景会随着人一起走远。",
    items: [
      { title: "暮江吟", author: "白居易", era: "唐", lines: ["一道残阳铺水中，半江瑟瑟半江红。", "可怜九月初三夜，露似真珠月似弓。"], reading: "“铺”字很轻。日光没有猛地压下来，只是平平地落在江面上。白居易把一个傍晚写得很有层次，先看见红与碧，夜深一点，才看见露珠和弯月。", sourceUrl: "https://www.gushiwen.cn/mingju/juv_5d5f89939d5e.aspx" },
      { title: "踏莎行·候馆梅残", author: "欧阳修", era: "北宋", lines: ["平芜尽处是春山，行人更在春山外。"], reading: "草地尽头是春山，春山外还有赶路的人。欧阳修把人越走越远的感觉写得很有层次，先看见平野，再看见山，最后连山外的人也只能凭想象去追。", sourceUrl: "https://www.gushiwen.cn/mingju/juv.aspx?id=07875c48007a" },
      { title: "别储邕之剡中", author: "李白", era: "唐", lines: ["竹色溪下绿，荷花镜里香。", "辞君向天姥，拂石卧秋霜。"], reading: "李白问去剡中的路，朋友指向东南。船从广陵出发，水路一路通到会稽，绿竹映着溪水，荷花倒映在明净的水面。诗写的是告别，也已经带着人往天姥山走。", sourceUrl: "https://zh.wikisource.org/zh-hans/%E5%88%A5%E5%84%B2%E9%82%95%E4%B9%8B%E5%89%A1%E4%B8%AD" },
    ],
  },
  {
    slug: "sunset-river",
    kicker: "Scenery / River at Dusk",
    title: "景色篇·落日江景",
    intro: "江水在将暮未暮之间，一半青碧，一半染红。",
    status: "白居易 · 唐",
    afterword: "白居易没有把江景写得很重。他只写残阳落在水面，写露珠与新月，颜色便慢慢亮起来。",
    items: [{ title: "暮江吟", author: "白居易", era: "唐", lines: ["一道残阳铺水中，半江瑟瑟半江红。", "可怜九月初三夜，露似真珠月似弓。"], reading: "“铺”字很轻。日光没有猛地压下来，只是平平地落在江面上。白居易把一个傍晚写得很有层次，先看见红与碧，夜深一点，才看见露珠和弯月。", sourceUrl: "https://www.gushiwen.cn/mingju/juv_5d5f89939d5e.aspx" }],
  },
  {
    slug: "moon-and-dream",
    kicker: "Moon and Dream",
    title: "月与梦",
    intro: "雾遮住楼台，月光又把渡口照得无处可辨。",
    status: "秦观 · 北宋",
    afterword: "这不是一个安稳的月夜。雾、月、楼台与津渡都在，路却一时看不清。",
    items: [{ title: "踏莎行·郴州旅舍", author: "秦观", era: "北宋", lines: ["雾失楼台，月迷津渡。", "桃源望断无寻处。", "可堪孤馆闭春寒，杜鹃声里斜阳暮。"], reading: "秦观写郴州旅舍，开头便把视线弄得朦胧。楼台在雾里消失，渡口也被月色遮住。他想望见的桃源没有踪影，眼前只剩春寒、孤馆、杜鹃和斜阳。", sourceUrl: "https://www.gushiwen.cn/mingju/juv_2f2d302291f5.aspx" }],
  },
  {
    slug: "youthful-thoughts",
    kicker: "Youthful Thoughts",
    title: "少年心事",
    intro: "有的人误入藕花深处，有的人重过南楼，才知道少年游已经很远。",
    status: "李清照 · 刘过",
    afterword: "少年心事里有一阵鸥鹭飞起，也有多年以后想买桂花、同载酒的念头。前者正在发生，后者已经回不去。",
    items: [
      { title: "如梦令·常记溪亭日暮", author: "李清照", era: "北宋", lines: ["常记溪亭日暮，沉醉不知归路。", "兴尽晚回舟，误入藕花深处。", "争渡，争渡，惊起一滩鸥鹭。"], reading: "这首词里有年轻人的兴致。日暮、酒意、小船和一片荷花，本来已经足够好；偏又“误入”深处，划船声一响，满滩鸥鹭都飞起来了。", sourceUrl: "https://zh.wikisource.org/zh-hans/%E5%A6%82%E5%A4%A2%E4%BB%A4_%28%E6%9D%8E%E6%B8%85%E7%85%A7%29/%E5%A6%82%E5%A4%A2%E4%BB%A4_%28%E5%B8%B8%E8%A8%98%E6%BA%AA%E4%BA%AD%E6%97%A5%E6%9A%AE%29" },
      { title: "唐多令·芦叶满汀洲", author: "刘过", era: "南宋", lines: ["芦叶满汀洲，寒沙带浅流。", "二十年重过南楼。", "欲买桂花同载酒，终不似，少年游。"], reading: "刘过和友人重到南楼，眼前还是江水、沙洲和中秋，心里却已经隔了二十年。“欲买桂花同载酒”还有兴致，最后三个字却把兴致按住了。少年时的那个人，已经不能和今天重合。", sourceUrl: "https://m.gushici.net/ju/41/1062.html" },
    ],
  },
  {
    slug: "life-reflections",
    kicker: "Life Reflections",
    title: "人生感悟",
    intro: "有些句子写在舟中，有些写在雪地，有些从墙角一朵苔花里生出来。",
    status: "五首已归栏",
    afterword: "这些诗不替人把日子讲明白。它们只是把人走过的路、留过的印、受过的苦和仍肯开放的心，留在句子里。",
    items: [
      { title: "一剪梅·舟过吴江", author: "蒋捷", era: "宋末元初", lines: ["一片春愁待酒浇。江上舟摇，楼上帘招。", "流光容易把人抛，红了樱桃，绿了芭蕉。"], reading: "船一直在走，季节也没有停。樱桃刚红，芭蕉又绿，人在漂泊里忽然看见春夏已经过去。这句的好处在于它不喊苦，只让两种颜色替时间说话。", sourceUrl: "https://www.gushiwenku.cn/shiwen/e08f700/" },
      { title: "和子由渑池怀旧", author: "苏轼", era: "北宋", lines: ["人生到处知何似，应似飞鸿踏雪泥。", "泥上偶然留指爪，鸿飞那复计东西。"], reading: "苏轼想起自己和弟弟走过的旧路。鸿雁偶然在雪泥上留下一点爪印，飞远后也不会记得东还是西。人生许多相逢与停留，大约就是这样。", sourceUrl: "https://www.edb.gov.hk/attachment/tc/curriculum-development/kla/chi-edu/chinese-culture/2025/2526_Classic_sayings_Brief_ul.pdf" },
      { title: "玉楼春", author: "欧阳修", era: "北宋", lines: ["尊前拟把归期说，欲语春容先惨咽。", "人生自是有情痴，此恨不关风与月。", "直须看尽洛城花，始共春风容易别。"], reading: "临别时想说归期，话还没有出口，脸上已经有了哽咽。欧阳修知道，离愁并不由风月挑起，人本来有情，才会这样舍不得。", sourceUrl: "https://m.gushiwen.cn/mingjuw_1603.aspx" },
      { title: "苔", author: "袁枚", era: "清", lines: ["白日不到处，青春恰自来。", "苔花如米小，也学牡丹开。"], reading: "苔生在日光难到的地方，花也小得像一粒米。袁枚没有替它叹气，只看见它照样长出绿意，照样开花。", sourceUrl: "https://www.gushiwen.cn/mingju/juv.aspx?id=8d99a8fabb20" },
      { title: "大墙上蒿行", author: "曹丕", era: "魏", lines: ["今日乐，不可忘，乐未央。", "为乐常苦迟，岁月逝，忽若飞。", "何为自苦，使我心悲。"], reading: "曹丕在长篇乐府歌行的末尾，忽然劝人别把眼前的乐事一再推迟。岁月很快，何必把苦又加给自己。这句话很直，也很像乱世里的人说出来的话。", sourceUrl: "https://ku.meirishici.com/mingju/5681971f04" },
      { title: "唐多令·芦叶满汀洲", author: "刘过", era: "南宋", lines: ["欲买桂花同载酒，终不似，少年游。"], reading: "刘过和友人重到南楼，眼前还是江水、沙洲和中秋，心里却已经隔了二十年。“欲买桂花同载酒”还有兴致，最后三个字却把兴致按住了。少年时的那个人，已经不能和今天重合。", sourceUrl: "https://m.gushici.net/ju/41/1062.html" },
    ],
  },
  {
    slug: "character-and-bearing",
    kicker: "Character and Bearing",
    title: "人物气质",
    intro: "清风朗月的君子，也得经过谷风和冰霜。",
    status: "刘桢 · 建安",
    afterword: "松树立在山上，风从谷中来。诗写松，也是在赠给堂弟的一句提醒。",
    items: [{ title: "赠从弟·其二", author: "刘桢", era: "东汉末", lines: ["亭亭山上松，瑟瑟谷中风。", "风声一何盛，松枝一何劲。", "冰霜正惨凄，终岁常端正。", "岂不罹凝寒，松柏有本性。"], reading: "“亭亭”是松的站姿，“瑟瑟”是风的声音。刘桢把君子的气质写得很实在，风会来，霜也会来，可松枝仍然有自己的劲。", sourceUrl: "https://m.gushiwen.cn/mingju/juv_f37be3934e32.aspx" }],
  },
  {
    slug: "wild-landscapes",
    kicker: "Wild Landscapes",
    title: "野外风景",
    intro: "平野、春山、溪竹与荷花，人在路上，眼前的景也正在往远处展开。",
    status: "欧阳修 · 李白",
    afterword: "一边是春山之外的行人，一边是去往剡中的舟。山水很开阔，心事也跟着走远。",
    items: [
      { title: "踏莎行·候馆梅残", author: "欧阳修", era: "北宋", lines: ["候馆梅残，溪桥柳细。草薰风暖摇征辔。", "离愁渐远渐无穷，迢迢不断如春水。", "平芜尽处是春山，行人更在春山外。"], reading: "草地尽头是春山，春山外还有赶路的人。欧阳修把人越走越远的感觉写得很有层次，先看见平野，再看见山，最后连山外的人也只能凭想象去追。", sourceUrl: "https://www.gushiwen.cn/mingju/juv.aspx?id=07875c48007a" },
      { title: "别储邕之剡中", author: "李白", era: "唐", lines: ["借问剡中道，东南指越乡。", "舟从广陵去，水入会稽长。", "竹色溪下绿，荷花镜里香。", "辞君向天姥，拂石卧秋霜。"], reading: "李白问去剡中的路，朋友指向东南。船从广陵出发，水路一路通到会稽，绿竹映着溪水，荷花倒映在明净的水面。诗写的是告别，也已经带着人往天姥山走。", sourceUrl: "https://zh.wikisource.org/zh-hans/%E5%88%A5%E5%84%B2%E9%82%95%E4%B9%8B%E5%89%A1%E4%B8%AD" },
    ],
  },
];

export function getPoemCollection(slug: string) {
  return poemCollections.find((collection) => collection.slug === slug);
}

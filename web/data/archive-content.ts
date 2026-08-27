export type ArchivePhrase = {
  text: string;
  source?: string;
  author?: string;
  era?: string;
  status: "verified" | "to-check" | "modern";
  note?: string;
  sourceUrl?: string;
  detailHref?: string;
};

export const imageryArchive: Record<string, { title: string; subtitle: string; description: string; phrases: ArchivePhrase[] }> = {
  gold: {
    title: "金系",
    subtitle: "光、酒、秋意与华美器物",
    description: "金在古典文学中不只有富贵，也可以是秋风、月光、酒器、衣饰和短暂闪耀的时间。第一批保留容易理解、画面明确的词。",
    phrases: [
      { text: "金风玉露", source: "《鹊桥仙·纤云弄巧》", author: "秦观", era: "北宋", status: "verified" },
      { text: "金樽清酒", source: "《行路难·其一》", author: "李白", era: "唐", status: "verified" },
      { text: "金貂换酒", source: "《对酒忆贺监二首·其一》", author: "李白", era: "唐", status: "verified" },
      { text: "金蟾啮锁", source: "《无题·飒飒东风细雨来》", author: "李商隐", era: "唐", status: "verified" },
      { text: "金炉香尽漏声残", source: "《早朝大明宫呈两省僚友》", author: "贾至", era: "唐", status: "verified" },
      { text: "金波", note: "常以金色波光写月色或水光，正式引用时需逐句关联作品。", status: "to-check" },
      { text: "金步摇", note: "古代妇女首饰，适合关联衣饰与人物意象。", status: "to-check" },
      { text: "金樽对绮筵", status: "to-check" },
      { text: "金壶漏晚", status: "to-check" },
      { text: "金茎承露", status: "to-check" },
      { text: "锵金鸣玉", note: "常形容声韵铿锵或文章华美。", status: "to-check" },
      { text: "炊金馔玉", note: "写饮食珍贵丰盛。", status: "to-check" },
      { text: "鹅黄金缕衣", status: "to-check" },
      { text: "秋影金波", status: "to-check" },
      { text: "金蕊泛流霞", status: "to-check" },
      { text: "金尊滟玉醅", status: "to-check" }
    ]
  },
  jade: {
    title: "玉系",
    subtitle: "清润、品格、肌理与声音",
    description: "玉系词语最适合保留清、润、寒、洁的感觉。过度生僻、只为堆砌华丽的组合暂不收入首批。",
    phrases: [
      { text: "琼枝玉树", note: "常写积雪覆树，也可喻姿容与品格。", status: "to-check" },
      { text: "昆山玉碎", source: "《李凭箜篌引》", author: "李贺", era: "唐", status: "verified" },
      { text: "雕栏玉砌", source: "《虞美人·春花秋月何时了》", author: "李煜", era: "南唐", status: "verified" },
      { text: "玉润冰清", note: "写品格洁净温润。", status: "to-check" },
      { text: "飞泉鸣玉珮", status: "to-check" },
      { text: "飞流漱玉", status: "to-check" },
      { text: "韫玉于山", note: "玉藏山中，以内在才德等待被发现。", status: "to-check" },
      { text: "碧玉储清寒", status: "to-check" },
      { text: "春泉漱玉", status: "to-check" },
      { text: "玉指呵寒", status: "to-check" },
      { text: "玉蟾秋色", status: "to-check" },
      { text: "寒玉簪秋水", status: "to-check" },
      { text: "一篙珠玉碎", status: "to-check" },
      { text: "渊清玉洁", note: "写水清，也写品格清洁。", status: "to-check" },
      { text: "玉人心事", status: "to-check" },
      { text: "猗猗散青玉", status: "to-check" }
    ]
  },
  mountain: {
    title: "山系",
    subtitle: "远望、归隐、阻隔与精神居所",
    description: "山既是风景，也是人的姿态：可以阻隔去路，也可以安放内心。首批以画面清楚、可继续追溯的表达为主。",
    phrases: [
      { text: "巴山夜雨", source: "《夜雨寄北》", author: "李商隐", era: "唐", status: "verified" },
      { text: "采菊东篱下，悠然见南山", source: "《饮酒·其五》", author: "陶渊明", era: "东晋", status: "verified" },
      { text: "绿树村边合，青山郭外斜", source: "《过故人庄》", author: "孟浩然", era: "唐", status: "verified" },
      { text: "空山新雨后", source: "《山居秋暝》", author: "王维", era: "唐", status: "verified" },
      { text: "山抹微云", source: "《满庭芳·山抹微云》", author: "秦观", era: "北宋", status: "verified" },
      { text: "云出岫", source: "《归去来兮辞》", author: "陶渊明", era: "东晋", status: "verified" },
      { text: "月满空山", status: "to-check" },
      { text: "春山眉黛", status: "to-check" },
      { text: "遥岑远目", status: "to-check" },
      { text: "云山千叠", status: "to-check" },
      { text: "日夕山气", status: "to-check" },
      { text: "烟岫衔月", status: "to-check" },
      { text: "乱山深处水萦回", status: "to-check" },
      { text: "山泉煎茶", status: "to-check" },
      { text: "鹤鸣山静", status: "to-check" },
      { text: "山染修眉新绿", status: "to-check" }
    ]
  },
  water: {
    title: "水系",
    subtitle: "时间、离愁、通达与无尽",
    description: "水最容易连接不同作品：它可以东流不返，也可以澄明如练；可以阻隔故人，也可以载着一叶舟通向远方。",
    phrases: [
      { text: "问君能有几多愁，恰似一江春水向东流", source: "《虞美人·春花秋月何时了》", author: "李煜", era: "南唐", status: "verified" },
      { text: "曾经沧海难为水", source: "《离思五首·其四》", author: "元稹", era: "唐", status: "verified" },
      { text: "烟笼寒水月笼沙", source: "《泊秦淮》", author: "杜牧", era: "唐", status: "verified" },
      { text: "澄江静如练", source: "《晚登三山还望京邑》", author: "谢朓", era: "南朝齐", status: "verified" },
      { text: "盈盈一水间", source: "《迢迢牵牛星》", author: "佚名", era: "汉", status: "verified" },
      { text: "滚滚长江东逝水", source: "《临江仙·滚滚长江东逝水》", author: "杨慎", era: "明", status: "verified" },
      { text: "清冽", source: "《小石潭记》", author: "柳宗元", era: "唐", status: "verified", note: "水尤清冽。清而带凉，是小石潭的水，也是文章最后留下的气息。", detailHref: "/library/travel/xiaoshitan" },
      { text: "扁舟沧浪", status: "to-check" },
      { text: "江潮淼淼", status: "to-check" },
      { text: "涧水浮落花", status: "to-check" },
      { text: "风定水烟细", status: "to-check" },
      { text: "日静川澄", status: "to-check" },
      { text: "倒影清漪", status: "to-check" },
      { text: "孤舟寒水畔", status: "to-check" },
      { text: "水如环佩月如襟", status: "to-check" },
      { text: "江澄水浴秋", status: "to-check" },
      { text: "蝶梦水云乡", status: "to-check" }
    ]
  },
  animal: {
    title: "动物篇",
    subtitle: "鹤的清远，虎的险峻与力量",
    description: "动物进入诗文后，往往不只是动物。鹤可以是高洁、长寿和隐士的身影；虎则带着山林的危险、威势与人面对困境时的惊惧。",
    phrases: [
      { text: "鹤鸣于九皋，声闻于野", source: "《诗经·小雅·鹤鸣》", author: "《诗经》", era: "先秦", status: "verified", note: "鹤在深泽鸣叫，声音却传到旷野；后来常被借作贤者虽隐、声名仍可远闻。" },
      { text: "梅妻鹤子", source: "林逋故事", author: "林逋", era: "北宋", status: "verified", note: "孤山种梅养鹤的文人生活，后来成了清雅隐逸的一种想象。", detailHref: "/library/flowers/lin-bu-little-plum" },
      { text: "闲云孤鹤", source: "《池上闲吟二首·其二》", author: "白居易", era: "唐", status: "verified", note: "以云与鹤写自在、无所系属的人。" },
      { text: "猛虎又掉尾，磨牙皓秋霜", source: "《北上行》", author: "李白", era: "唐", status: "verified", note: "太行道上的虎，写的是乱世北行的实在危险。" },
      { text: "朝避猛虎，夕避长蛇", source: "《蜀道难》", author: "李白", era: "唐", status: "verified", note: "虎与长蛇让蜀道的险，不再只是山路的险。" },
      { text: "虎啸风生", note: "虎啸常与山风、威势相连；后续可继续扩展到典籍与绘画。", status: "to-check" }
    ]
  }
};

export const farewellPhrases: ArchivePhrase[] = [
  { text: "于道各努力，千里自同风。", source: "《送友人东归》", author: "周行己", era: "北宋", status: "verified", note: "道路不同，仍可共享同一种清风。", sourceUrl: "https://www.cidianwang.com/mingju/8/ee4081572188.htm" },
  { text: "飞蓬各自远，且尽手中杯。", source: "《鲁郡东石门送杜二甫》", author: "李白", era: "唐", status: "verified", note: "将离别写得旷达：先饮尽此杯，再各自远行。", sourceUrl: "https://zh.wikisource.org/wiki/Page:Gujin_Tushu_Jicheng,_Volume_337_(1700-1725).djvu/25" },
  { text: "把酒祝东风，且共从容。", source: "《浪淘沙·把酒祝东风》", author: "欧阳修", era: "北宋", status: "verified", note: "明知聚散匆匆，仍愿与春风从容相处。", sourceUrl: "https://zh.wikisource.org/wiki/浪淘沙_(歐陽修)" },
  { text: "从此应多好消息，莫忘江上一闲人。", source: "《送郑阁赴闽辟》", author: "贯休", era: "唐末五代", status: "verified", note: "祝友人前程顺遂，也轻轻留下不要忘我的请求。", sourceUrl: "https://m.gushici.net/mingju/47/38346/219867.html" },
  { text: "一曲清歌满樽酒，人生何处不相逢。", source: "《金柅园》", author: "晏殊", era: "北宋", status: "verified", note: "告别并非终结，人生仍有重逢之地。", sourceUrl: "https://www.gushiwenku.cn/mingju/bdb4f05c/" },
  { text: "数声风笛离亭晚，君向潇湘我向秦。", source: "《淮上与友人别》", author: "郑谷", era: "唐", status: "verified", note: "同在渡口听见风笛，转身却走向两个方向。" },
  { text: "青山不改，绿水长流。", author: "来源待考", status: "to-check", note: "常见于近现代告别语境，暂不标作某位古人诗句。" }
];

export const reframingExamples = [
  { ordinary: "在乡镇卫生院上班", literary: "在小镇当医生", thought: "前者强调劳动处境，后者打开了人物、街道与日常生活的想象。" },
  { ordinary: "村舍与农村", literary: "绿树村边合，青山郭外斜", thought: "孟浩然把地理环境变成可进入、可作客的生活空间。" },
  { ordinary: "在山里过隐居生活", literary: "采菊东篱下，悠然见南山", thought: "陶渊明不解释隐逸，只让动作、视线与南山自然相遇。" },
  { ordinary: "边塞到了秋天", literary: "塞下秋来风景异，衡阳雁去无留意", thought: "范仲淹用雁的离去写出边地气候，也写出人的滞留。" },
  { ordinary: "乌云压城，战斗将要开始", literary: "黑云压城城欲摧，甲光向日金鳞开", thought: "李贺把天气、城墙与铠甲压缩成一幅高对比画面。" },
  { ordinary: "醉倒在船上，看见满天星光", literary: "醉后不知天在水，满船清梦压星河", thought: "唐珙让水面、夜空、船与梦境失去边界。" },
  { ordinary: "沙漠里下了很厚的雪", literary: "瀚海阑干百丈冰，愁云惨淡万里凝", thought: "岑参把极寒写成巨大而凝固的空间。" },
  { ordinary: "春天慢慢来了", literary: "春天是一点一点化开的", thought: "现代重新叙述：将季节变化写成冰雪、颜色和心绪共同融化。" }
];

export const windSnowPhrases: ArchivePhrase[] = [
  { text: "万里赴戎机，关山度若飞。", source: "《木兰诗》", author: "佚名", era: "北朝民歌", status: "verified", note: "用极短的两句跨越万里征程。" },
  { text: "月黑雁飞高，单于夜遁逃。", source: "《和张仆射塞下曲·其三》", author: "卢纶", era: "唐", status: "verified", note: "黑夜、飞雁与追骑共同制造边塞的紧张感。" },
  { text: "谁言天公不好客，漫天风雪送一人。", author: "来源待考", status: "to-check" },
  { text: "千山雪，万林松，一骑孤客踏雪行。", author: "疑似现代拟古", status: "modern" },
  { text: "雾凇清江锁，风雪马蹄奔。", author: "现代拟古素材", status: "modern" },
  { text: "一骑绝尘度横江，半点风雪不留人。", author: "现代拟古素材", status: "modern" }
];

export const literaryFlavors = [
  ["先秦", "生吃", "诸子散文像刚从地里拔出来的萝卜，带着泥；《诗经》像野菜，直接把天地、战争和爱情送入口中。屈原则把一整个楚国的悲伤连鳞带刺吞下。"],
  ["汉", "刀工与乱炖", "汉赋讲究刀工，把辞藻切成细丝，摆得金光闪闪；《史记》却把人物和历史炖成一锅滚烫的肉。"],
  ["魏晋", "吃药", "五石散就着酒。嵇康、阮籍的文字像文学里的致幻剂，迷离的胡话里偏偏藏着清醒的真理。"],
  ["唐", "盛宴", "李白像烤全羊，杜甫像苦瓜炒肉，王维像素斋。盛唐的餐桌太满，酒杯与诗句一起飞。"],
  ["宋", "品茶", "柳永像花茶，苏轼像耐泡的老茶梗，李清照像隔年龙井。不是喝，而是一小口一小口地品。"],
  ["元", "路边摊", "关汉卿支起杂碎汤的小棚：碗是破的，汤是烫的，喝完却浑身舒坦。"],
  ["明", "食堂", "《水浒传》大碗酒大块肉，《三国演义》是宴席政治，《西游记》像调料繁多的素斋。"],
  ["清", "回锅与慢煨", "《红楼梦》像一席渐凉的盛宴，曹雪芹用小火慢慢煨出将散未散的香气。"],
];

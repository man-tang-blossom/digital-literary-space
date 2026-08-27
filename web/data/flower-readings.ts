export type FlowerReading = {
  slug: string;
  flower: string;
  title: string;
  author: string;
  era: string;
  lines: string[];
  translation: string;
  introduction: string;
  sourceUrl: string;
  isExcerpt?: boolean;
};

export const flowerReadings: FlowerReading[] = [
  {
    slug: "li-bai-qing-ping-diao-i", flower: "牡丹", title: "清平调·其一", author: "李白", era: "唐",
    lines: ["云想衣裳花想容，春风拂槛露华浓。", "若非群玉山头见，会向瑶台月下逢。"],
    introduction: "沉香亭前，牡丹正开。李白没有把花和杨玉环分开来写，云、花、春风、露水一路映到人的衣裳和容貌上。它写尽了天宝年间宫廷里最明亮的一刻，也让牡丹从一朵名花，带上了盛唐的华光。",
    translation: "看到云，就想起她轻柔华美的衣裳；看到花，就想起她明艳的容貌。春风吹过栏杆，带着露水的牡丹开得丰润浓丽。这样的美人，若不是在仙境群玉山头见过，便该是在瑶台月光下遇见的。",
    sourceUrl: "https://www.gushiwen.cn/shiwenv_170df91879a2.aspx",
  },
  {
    slug: "liu-yuxi-appreciating-peony", flower: "牡丹", title: "赏牡丹", author: "刘禹锡", era: "唐",
    lines: ["庭前芍药妖无格，池上芙蕖净少情。", "唯有牡丹真国色，花开时节动京城。"],
    introduction: "前两句先写芍药和荷花，末句才把牡丹推到京城中央。刘禹锡写的是花，也是唐人看花时那种整座城都被带动的热闹。",
    translation: "庭院前的芍药虽然妖艳，却显得少了格调；池里的荷花虽清净，也像少了一点情意。只有牡丹，才配得上真正的国色。它一开，整个京城都要去看。",
    sourceUrl: "https://zh.wikisource.org/zh-hans/%E8%B5%8F%E7%89%A1%E4%B8%B9_(%E5%88%98%E7%A6%B9%E9%94%A1)",
  },
  {
    slug: "bai-juyi-peony-fragrance", flower: "牡丹", title: "牡丹芳", author: "白居易", era: "唐",
    lines: ["牡丹芳，牡丹芳，黄金蕊绽红玉房。", "千片赤英霞烂烂，百枝绛点灯煌煌。", "花开花落二十日，一城之人皆若狂。", "三代以还文胜质，人心重华不重实。", "去岁嘉禾生九穗，田中寂寞无人至。"],
    introduction: "这首诗先把牡丹写得极盛，写到“一城之人皆若狂”时忽然转了方向。白居易在赏花，也在提醒人：人们围着名花，田里的嘉禾却无人去看。",
    translation: "牡丹开了，金黄的花蕊从红玉般的花房里绽出来，千片红花像晚霞，枝头又像点起了灯。花期不过二十来天，城里的人却都为它着迷。可诗人转头看见，去年田里的好禾苗，反而没有人去赏。",
    sourceUrl: "https://zh.wikisource.org/zh-hans/%E7%89%A1%E4%B8%B9%E8%8A%B3", isExcerpt: true,
  },
  {
    slug: "zhou-bangyan-sumu-zhe", flower: "荷花", title: "苏幕遮·燎沉香", author: "周邦彦", era: "北宋",
    lines: ["燎沉香，消溽暑。鸟雀呼晴，侵晓窥檐语。", "叶上初阳干宿雨，水面清圆，一一风荷举。", "故乡遥，何日去？家住吴门，久作长安旅。", "五月渔郎相忆否？小楫轻舟，梦入芙蓉浦。"],
    introduction: "“水面清圆”是这首词最亮的一瞬。但它不是一幅静止的荷花画：词人从眼前的清荷，一路想到吴门的家和梦里的小船，荷花里藏着久客的乡愁。",
    translation: "点起沉香，消散夏日闷热的湿气。鸟雀一早在檐下叫着，像在说晴天到了。初升的阳光晒干了荷叶上的昨夜雨水；水面上的荷叶清润圆正，迎着风，一片一片从水里举起来。看着这景色，我想起遥远的故乡：何时才能回去？五月里，故乡的旧友会不会也想起我？也许正划着小船，在我的梦里驶进荷花深处。",
    sourceUrl: "https://zh.wikisource.org/zh-hans/%E8%98%87%E5%B9%95%E9%81%AE_(%E7%87%8E%E6%B2%89%E9%A6%99)",
  },
  {
    slug: "li-qingzhao-lotus-dream", flower: "荷花", title: "如梦令·常记溪亭日暮", author: "李清照", era: "宋",
    lines: ["常记溪亭日暮，沉醉不知归路。", "兴尽晚回舟，误入藕花深处。", "争渡，争渡，惊起一滩鸥鹭。"],
    introduction: "这朵荷花不是安静摆在水上的。少女游兴正浓，船误入藕花深处，末两句忽然有了急促的桨声和飞起的鸥鹭，整首词一下亮起来。",
    translation: "常常记得那次傍晚在溪亭边喝得微醉，连回去的路都忘了。兴致尽了才划船回来，不小心钻进了荷花深处。快划，快划，惊起了一滩鸥鹭。",
    sourceUrl: "https://zh.wikisource.org/zh-hans/%E5%A6%82%E5%A4%A2%E4%BB%A4_(%E5%B8%B8%E8%A8%98%E6%BA%AA%E4%BA%AD%E6%97%A5%E6%9A%AE)",
  },
  {
    slug: "shijing-zhenwei", flower: "芍药", title: "郑风·溱洧", author: "《诗经》", era: "先秦",
    lines: ["溱与洧，方涣涣兮。士与女，方秉蕑兮。", "女曰观乎，士曰既且。且往观乎？洧之外，洵訏且乐。", "维士与女，伊其相谑，赠之以勺药。", "溱与洧，浏其清矣。士与女，殷其盈矣。", "维士与女，伊其将谑，赠之以勺药。"],
    introduction: "春水漫涨，男女到河边游玩，说笑，互相赠花。诗里的“勺药”即后来的芍药；它在这里不是孤高的名花，而是一枝带着人情和惜别意味的春日礼物。",
    translation: "溱水和洧水正漫漫涨着，青年男女手里拿着兰草去游春。姑娘说，去看看吧；小伙子说，已经去过了。那就再去一次吧，洧水外面，真是热闹又快乐。他们一路说笑，临别时赠给对方一枝芍药。",
    sourceUrl: "https://zh.wikisource.org/zh-hans/%E8%A9%A9%E7%B6%93/%E6%BA%B1%E6%B4%A7",
  },
  {
    slug: "li-qingzhao-begonia-dream", flower: "海棠", title: "如梦令·昨夜雨疏风骤", author: "李清照", era: "宋",
    lines: ["昨夜雨疏风骤，浓睡不消残酒。", "试问卷帘人，却道海棠依旧。", "知否，知否？应是绿肥红瘦。"],
    introduction: "问海棠，其实是在问春天。卷帘人只看见花还在，李清照却知道雨后的枝头早已不同：绿叶更盛，红花已瘦。那一点不甘心，全在连问两遍的“知否”里。",
    translation: "昨夜雨下得不大，风却很急。酒意未消，我睡得很沉。醒来问卷帘的人：海棠怎么样了？她说，还是老样子。怎么会呢，怎么会呢？应该是绿叶更肥，红花更瘦了。",
    sourceUrl: "https://zh.wikisource.org/zh-hans/%E5%A6%82%E6%A2%A6%E4%BB%A4_(%E6%9D%8E%E6%B8%85%E7%85%A7)",
  },
  {
    slug: "qu-yuan-li-sao-orchid", flower: "兰花", title: "离骚·香草选段", author: "屈原", era: "战国",
    lines: ["余既滋兰之九畹兮，又树蕙之百亩。", "畦留夷与揭车兮，杂杜衡与芳芷。", "冀枝叶之峻茂兮，愿俟时乎吾将刈。", "虽萎绝其亦何伤兮，哀众芳之芜秽。", "朝饮木兰之坠露兮，夕餐秋菊之落英。", "苟余情其信姱以练要兮，长顑颔亦何伤？"],
    introduction: "《离骚》里的兰和蕙不只是植物。屈原借香草说修身、理想和不肯同流的心志。这一页只取与兰花最相关的一段，全文很长，宜慢慢读。",
    translation: "我种下大片兰花，又栽了许多蕙草，还把留夷、揭车、杜衡、芳芷一同种在畦里。我盼它们枝叶茂盛，等时节到了再收割。即使它们枯萎又有什么可惜？我忧虑的是许多芳草都被荒秽淹没。早晨我饮木兰花上的露水，傍晚吃秋菊落下的花瓣；只要心意本来美好，即使清瘦困顿，又有什么关系。",
    sourceUrl: "https://zh.wikisource.org/zh-hans/%E9%9B%A2%E9%A8%B7", isExcerpt: true,
  },
  {
    slug: "tao-yuanming-drinking-v", flower: "菊花", title: "饮酒·其五", author: "陶渊明", era: "东晋",
    lines: ["结庐在人境，而无车马喧。", "问君何能尔？心远地自偏。", "采菊东篱下，悠然见南山。", "山气日夕佳，飞鸟相与还。", "此中有真意，欲辨已忘言。"],
    introduction: "陶渊明没有逃到绝对的荒山。他说结庐仍在人境，只因“心远”，地方便显得偏静。菊花在东篱下，是日常的一部分，也是他把心安放下来的方式。",
    translation: "我把房子建在人间，却听不见车马的喧闹。你问我为什么能这样？心离尘事远了，住处自然显得偏静。东篱下采一朵菊，抬头正好望见南山。傍晚山色很好，飞鸟结伴归去。这里面原有一种意思，想说时，却又忘了该怎样说。",
    sourceUrl: "https://zh.wikisource.org/zh-hans/%E9%A3%B2%E9%85%92%E5%85%B6%E4%BA%94", 
  },
  {
    slug: "huang-chao-chrysanthemum", flower: "菊花", title: "不第后赋菊", author: "黄巢", era: "唐末",
    lines: ["待到秋来九月八，我花开后百花杀。", "冲天香阵透长安，满城尽带黄金甲。"],
    introduction: "黄巢笔下的菊花不做隐士。它在秋天压过百花，香气直上长安，满城像披上金甲。这首咏菊诗里有很强的起事者想象，读它时不必只把它当作写花。",
    translation: "等到深秋九月，菊花一开，别的花就都凋零了。它的香气直冲天空，弥漫长安，整座城仿佛都披上了金色铠甲。",
    sourceUrl: "https://zh.wikisource.org/zh-hans/%E4%B8%8D%E7%AC%AC%E5%BE%8C%E8%B3%A6%E8%8F%8A", 
  },
  {
    slug: "mao-zedong-yong-mei", flower: "梅花", title: "卜算子·咏梅", author: "毛泽东", era: "现代",
    lines: ["风雨送春归，飞雪迎春到。", "已是悬崖百丈冰，犹有花枝俏。", "俏也不争春，只把春来报。", "待到山花烂漫时，她在丛中笑。"],
    introduction: "这首词用了陆游同题词的词牌和题目，却把梅花的心境换了。冰崖上的花枝并不自怜；它先报春，等到群花盛开，又退回到花丛中。",
    translation: "风雨送走春天，飞雪迎来春天。悬崖上已经结了百丈厚的冰，梅花枝头却还俏丽。它俏丽，却不和百花争春，只是先把春天的消息告诉人们。等到满山花开，它便在花丛里微笑。",
    sourceUrl: "https://zh.wikisource.org/zh-hans/%E5%8D%9C%E7%AE%97%E5%AD%90%C2%B7%E5%92%8F%E6%A2%85_(%E9%A3%8E%E9%9B%A8%E9%80%81%E6%98%A5%E5%BD%92)",
  },
  {
    slug: "lu-you-yong-mei", flower: "梅花", title: "卜算子·咏梅", author: "陆游", era: "南宋",
    lines: ["驿外断桥边，寂寞开无主。", "已是黄昏独自愁，更著风和雨。", "无意苦争春，一任群芳妒。", "零落成泥碾作尘，只有香如故。"],
    introduction: "驿外、断桥、黄昏、风雨，梅花的位置很低，也很孤单。但末一句没有退让：花可以落成尘，香气却不肯改。陆游把自己的不平和坚持，放进了一枝梅里。",
    translation: "驿站外、断桥边，一枝梅花寂寞地开着，没有人照看。黄昏里它已经够愁了，还遭着风雨。它本不想同别的花争春，任凭群花猜忌。即便凋落成泥，被车轮碾成尘土，香气还是原来的香气。",
    sourceUrl: "https://zh.wikisource.org/zh-hans/%E5%8D%9C%E7%AE%97%E5%AD%90%C2%B7%E8%A9%A0%E6%A2%85_(%E9%A9%9B%E5%A4%96%E6%96%B7%E6%A9%8B%E9%82%8A)",
  },
  {
    slug: "lin-bu-little-plum", flower: "梅花", title: "山园小梅·其一", author: "林逋", era: "北宋",
    lines: ["众芳摇落独暄妍，占尽风情向小园。", "疏影横斜水清浅，暗香浮动月黄昏。", "霜禽欲下先偷眼，粉蝶如知合断魂。", "幸有微吟可相狎，不须檀板共金樽。"],
    introduction: "林逋住在西湖孤山，种梅养鹤，后人称他“梅妻鹤子”。这不是把梅花神化，而是说他把一枝梅、一只鹤当作了日常的陪伴。“疏影”与“暗香”从此成了人们写梅时绕不开的两种美。",
    translation: "百花都凋零了，只有梅花明丽温暖，占尽小园的风情。稀疏的影子斜映在清浅的水面，淡淡的香气浮动在月色初黄昏时。霜天的鸟想落下来，先偷偷看它一眼；粉蝶若懂得这份美，也该为它失魂。幸好我还能低声吟诗同它相伴，不必敲着檀板、端起金樽去凑热闹。",
    sourceUrl: "https://www.gushiwen.cn/GuShiWenAuthor_8ae65d26c2_1.aspx/GuShiWen_80049b5799.aspx",
  },
  {
    slug: "shijing-taoyao", flower: "桃花", title: "周南·桃夭", author: "《诗经》", era: "先秦",
    lines: ["桃之夭夭，灼灼其华。之子于归，宜其室家。", "桃之夭夭，有蕡其实。之子于归，宜其家室。", "桃之夭夭，其叶蓁蓁。之子于归，宜其家人。"],
    introduction: "这是婚礼上的祝福诗。桃花的明艳、桃实的丰足、桃叶的茂盛，依次落在新嫁娘和她将要进入的家里；它写青春，也写一个家庭的好开始。",
    translation: "桃树长得多么茂盛，桃花开得多么鲜亮。这个姑娘今天出嫁，愿她能把新家料理得和美。桃子已经结得丰足，愿她和这户人家日子丰实；桃叶长得浓密，愿她同一家人相处得安稳兴旺。",
    sourceUrl: "https://zh.wikisource.org/zh-hans/%E8%A9%A9%E7%B6%93/%E6%A1%83%E5%A4%AD",
  },
];

export const flowerReadingsBySlug = Object.fromEntries(
  flowerReadings.map((reading) => [reading.slug, reading]),
) as Record<string, FlowerReading>;

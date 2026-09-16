export type Place = {
  name: string;
  title: string;
  place: string;
  geography: string;
  history: string;
  space: string;
  literature: string;
  quote: string;
  source: string;
  readingHref?: string;
  readingLabel?: string;
};

export const places: Record<string, Place> = {
  zuiweng: {
    name: "醉翁亭", title: "山泉边的一座亭", place: "安徽滁州琅琊山麓，沿山路而上，泉声先至。",
    geography: "欧阳修在《醉翁亭记》里带着读者走路。先说环滁皆山，再望见琅琊山，听到水声，最后才在峰回路转处看见亭子。它不靠高大取胜，藏在山与泉之间。",
    history: "北宋庆历年间，滁州僧人智仙建亭，欧阳修为它取名。欧阳修被贬知滁州时常到这里游宴，亭子的名声便与这篇文章一起流传下来。",
    space: "亭翼然临于泉上，四面开敞。人坐在里面，能听泉、看山、望四时草木，也能容下投壶、饮酒、唱歌的游人。它是一个让人与自然靠近的空间。",
    literature: "《醉翁亭记》最可贵的是把山水写进了人的日子。欧阳修并未停在自己的失意里，他写滁人的游乐，写宴饮与禽鸟，最后说太守以众人的快乐为快乐。",
    quote: "醉翁之意不在酒，在乎山水之间也。", source: "https://zh.wikisource.org/zh-hans/%E9%86%89%E7%BF%81%E4%BA%AD%E8%A8%98", readingHref: "/library/landmarks/zuiwengting-ji", readingLabel: "进入《醉翁亭记》",
  },
  yueyang: {
    name: "岳阳楼", title: "洞庭湖边的忧乐", place: "湖南岳阳古城西门城墙上，东临洞庭湖，西近长江。",
    geography: "洞庭湖汇纳湘、资、沅、澧诸水，又与长江相通。登楼望去，水面开阔，远山与洲渚常隐现在云气中。范仲淹笔下的“衔远山，吞长江”，来自这种巨大的水势。",
    history: "岳阳楼早期与巴陵城防、阅军有关，唐代以后逐渐成为登览题咏之地。北宋滕子京重修楼阁，请在邓州的范仲淹作记，自此《岳阳楼记》让它成为一座反复被谈起的文学名楼。",
    space: "现存楼体保持清代重建的形制，三层、四柱、飞檐盔顶，以木构榫卯承重。楼并不一味向高处堆叠，屋檐的收束与向湖面打开的视野，让它显得稳而不滞。",
    literature: "范仲淹写阴雨与晴日两种登楼心情，最后提出“不以物喜，不以己悲”。杜甫晚年登楼，又从洞庭的雄阔写到“老病有孤舟”。同一座楼，容得下为天下忧，也容得下一个人的漂泊。",
    quote: "先天下之忧而忧，后天下之乐而乐。", source: "https://www.yueyang.gov.cn/ml/content_51560.html", readingHref: "/library/landmarks/yueyanglou-ji", readingLabel: "进入《岳阳楼记》",
  },
  tengwang: {
    name: "滕王阁", title: "赣江边的秋水长天", place: "江西南昌，坐落在赣江与抚河故道交汇一带，依城临江。",
    geography: "这处江岸能望见西山与浩荡赣江。江面、晚霞、飞鸟和远处的山，使它天然适合用来写大景。王勃的“落霞与孤鹜齐飞”，正把这些本来散开的景物收进同一幅画面。",
    history: "唐永徽四年，洪州都督李元婴创建滕王阁。它在后世多次毁坏又重建，今天所见主体为仿宋建筑。真正让这座楼越过地方记忆、进入所有人的文学记忆的，是王勃的《滕王阁序》。",
    space: "高阁依城临江，楼外是江，楼内可设宴集。它既属于地方官署与城市，也适合一群人在此看山水、饮酒、送别。建筑把公共生活与远望放在同一个高度上。",
    literature: "王勃写这篇序时年轻，却已有仕途波折。文中先铺开盛宴与秋景，再转向“兴尽悲来”，写自己的不遇与抱负。阁中歌舞会散，栏外江水还在，这种繁华与无常一直是滕王阁最深的文学底色。",
    quote: "落霞与孤鹜齐飞，秋水共长天一色。", source: "https://www.nc.gov.cn/ncszf/rwfg/202505/caef4edf190a44099b002d0891a3d0f8.shtml", readingHref: "/library/landmarks/tengwangge-xu", readingLabel: "进入《滕王阁序》",
  },
  huanghe: {
    name: "黄鹤楼", title: "蛇山上的白云与故乡", place: "湖北武汉武昌蛇山，面向长江。",
    geography: "蛇山临江，江面宽阔，隔岸可望汉口与龟山。登楼时，船帆、江水、树影与远处的地平线一起进入视野。这样的地势让黄鹤楼从一开始就与送别、远行和望乡相连。",
    history: "黄鹤楼始于三国时期，历史上多次毁坏、重修。传说中的仙人乘鹤给它添了神异色彩，崔颢一首诗又给它添了长久的乡愁。今天的楼为近现代重建，仍延续临江登眺的传统。",
    space: "楼建在山上，先得高处，再得江面。层层登上去，目光由近到远，最后越过城市落到江天之间。它的意义一直不只在一座建筑，也在这种把人送向远方的视线。",
    literature: "崔颢由传说写到眼前的白云、汉阳树和鹦鹉洲，最后问“日暮乡关何处是”。李白送孟浩然下扬州，也从这里看朋友的孤帆消失在碧空尽处。它写尽了人要离开，又回头望一眼的时刻。",
    quote: "黄鹤一去不复返，白云千载空悠悠。", source: "https://zjt.hubei.gov.cn/bmdt/ztzl/hbcjda/gzdt_7471/201910/t20191028_79891.shtml", readingHref: "/library/landmarks/huanghelou", readingLabel: "进入崔颢《黄鹤楼》",
  },
};

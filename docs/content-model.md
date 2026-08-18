# 文学内容模型 V2

本模型服务于长期收录。它将“原作事实”“编辑赏析”“作者轶事”“意象词”“主题选集”和“个人写作”分开保存，同时允许它们在文学星云中建立关系。

## 一、基本原则

1. **先归档，后核验，再发布。** 新材料先进入 `content/inbox/`，未核实内容不得直接成为正式作品。
2. **原文与解读分离。** 古典原文、现代标点、简要赏析和个人感受分别记录。
3. **来源状态透明。** 每条引文必须标记核验状态；找不到可靠出处时明确写“待考”。
4. **简略但不含糊。** 普通条目只写必要信息，重要作品再增加典故、版本和延伸阅读。
5. **关系使用稳定 ID。** 作者、作品、意象、主题、故事和选集均通过 ID 相连。

## 二、核验状态

所有可能涉及出处的内容使用 `verificationStatus`：

| 值 | 含义 | 是否公开展示 |
| --- | --- | --- |
| `verified` | 已由可靠版本、权威古籍库或正式出版物核实 | 可以 |
| `partially-verified` | 作者或作品已知，但文字、版本仍需复核 | 谨慎 |
| `unverified` | 网络流传、来源不明或尚未查证 | 默认不公开 |
| `modern-adaptation` | 现代改写、仿写或重新叙述 | 可以，但须明确标注 |
| `original` | Xiaojin 的原创文字 | 可以，标注原创 |

`sources` 是数组，每项可记录：

```json
{
  "title": "书名、篇名或网页标题",
  "authorOrEditor": "作者或整理者",
  "publisher": "出版社或机构",
  "year": "出版年或访问年",
  "url": "可选链接",
  "note": "版本、卷次、页码或核验说明"
}
```

## 三、实体类型

### 1. 作者 Author

目录：`content/authors/`

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| `id` | string | 唯一标识 |
| `name` | string | 姓名 |
| `courtesyName` | string/null | 字 |
| `artNames` | string[] | 号、别称 |
| `dynasty` | string | 朝代或时代 |
| `years` | object | 生卒年及不确定性说明 |
| `summary` | string | 简介，默认 80–150 字 |
| `representativeWorks` | string[] | 代表作品 ID |
| `relatedAuthors` | string[] | 关联作者 ID |
| `relatedThemes` | string[] | 关联主题 ID |
| `stories` | string[] | 作者故事 ID |
| `sources` | object[] | 资料来源 |

### 2. 作品 Work

目录：`content/works/`

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| `id` | string | 唯一标识 |
| `title` | string | 标题 |
| `authorId` | string | 作者 ID |
| `era` | string | 时代 |
| `genre` | string | 文体 |
| `text` | string | 原文或节选 |
| `textNote` | string | 底本、标点、节选说明 |
| `appreciation` | object | 简要赏析与重要程度 |
| `allusions` | object[] | 典故；普通条目可为空 |
| `imageryIds` | string[] | 意象 ID |
| `themeIds` | string[] | 主题 ID |
| `relatedWorks` | string[] | 关联作品 ID |
| `verificationStatus` | string | 核验状态 |
| `sources` | object[] | 版本与出处 |

`appreciation` 建议格式：

```json
{
  "level": "brief",
  "summary": "默认 60–120 字；重要作品可以使用 detailed。",
  "highlights": ["值得留意的意象或表达"]
}
```

### 3. 作者故事 Story

目录：`content/stories/`

用于可爱、温柔、浪漫或重要的作者轶事。不是每位作者都必须有故事。

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| `id` | string | 唯一标识 |
| `title` | string | 小故事标题 |
| `authorIds` | string[] | 涉及作者 |
| `summary` | string | 简短叙述，建议 100–250 字 |
| `tone` | string[] | 如温柔、浪漫、诙谐、惆怅 |
| `historicity` | string | `historical`、`anecdotal` 或 `legendary` |
| `verificationStatus` | string | 核验状态 |
| `sources` | object[] | 来源 |

### 4. 意象 Imagery

目录：`content/imagery/`

意象不是简单关键词，而是由字词、原句、情感和作品共同构成的入口。

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| `id` | string | 唯一标识 |
| `name` | string | 核心意象，如月、水、金 |
| `system` | string | 所属体系，如天象、山水、草木、器物、色彩 |
| `description` | string | 文学含义简介 |
| `expressions` | object[] | 意象词与出处状态 |
| `workIds` | string[] | 相关作品 |
| `themeIds` | string[] | 相关主题 |
| `relatedImagery` | string[] | 关联意象 |

`expressions` 中的单条词语：

```json
{
  "text": "金风玉露",
  "quote": "可选：包含该词的完整原句",
  "workId": "可选：核验后关联作品",
  "verificationStatus": "unverified",
  "note": "待查出处"
}
```

### 5. 主题 Theme

目录：`content/themes/`

主题是较稳定的文学母题，如乡愁、孤独、成长、离别、重逢、从容。

### 6. 主题选集 Collection

目录：`content/collections/`

选集是有标题、有编辑顺序的内容集合，如“江湖再见”“风雪行人”“踏雪寻梅”。它可以同时收录作品、句子、意象和个人文字。

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| `id` | string | 唯一标识 |
| `title` | string | 选集标题 |
| `subtitle` | string | 一句说明 |
| `description` | string | 编辑序言 |
| `itemRefs` | object[] | 按顺序排列的内容引用 |
| `themeIds` | string[] | 关联主题 |
| `status` | string | `draft` 或 `published` |

### 7. 文章 Essay

目录：`content/essays/`

用于 Xiaojin 的散文、文学化评论与重新叙述。栏目建议：

- `personal-writing`：我的文字
- `literary-flavors`：文心百味
- `language-renewal`：辞语新生
- `life-philosophy`：生活哲学

现代文章必须记录 `authorship` 与 `sourceNote`，避免将网络文章误标为原创。

### 8. 人间采风 Place Note

目录：`content/places/`

记录花海、绿道、山川、城市与季节体验，并关联当地文学、草木、色彩和时令。地点信息可能变化，公开前需重新核验交通、开放时间等现实信息。

## 四、关系 Relation

关系仍存储于 `data/relations.json`。常用类型见 `data/relation-types.json`。

关系示例：

```json
{
  "source": "work-shui-diao-ge-tou-ming-yue-ji-shi-you",
  "target": "imagery-moon",
  "relationType": "contains-imagery",
  "description": "作品以明月组织时间、空间和思念。"
}
```

## 五、收录流程

详细流程见 `docs/editorial-workflow.md`。正式内容的最低发布条件是：作者与篇名明确、原文经过核验、至少一条来源记录、意象与主题关系没有明显误判。

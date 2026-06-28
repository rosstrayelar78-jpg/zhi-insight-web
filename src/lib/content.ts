// ============================================
// 知璟远珩 ZHI Insight — All Site Content
// Static content data for all pages
// ============================================

import { siteConfig } from "./site";

// ─── Core Capabilities (首页模块3) ──────────
export const capabilities = [
  {
    icon: "🎯",
    title: "问题定义",
    desc: "不急于给答案。我们花时间搞清楚什么才是真正值得回答的问题。",
  },
  {
    icon: "⚖️",
    title: "独立判断",
    desc: "不依附利益集团，不追逐热点。所有结论只对事实和逻辑负责。",
  },
  {
    icon: "📐",
    title: "方案设计",
    desc: "不空谈趋势。我们产出可执行的策略、可输出的表达、可落地的路径。",
  },
  {
    icon: "🚀",
    title: "推动行动",
    desc: "研究不以报告为终点。我们的交付包含从认知到执行的完整链路。",
  },
];

// ─── Research Tracks (研究方向 / 首页模块4) ──
export const researchTracks = [
  {
    slug: "silver-economy",
    title: "银发经济",
    desc: "中国正在经历人类历史上规模最大的老龄化进程，追踪从消费到金融的全链路机会。",
  },
  {
    slug: "elderly-care",
    title: "养老产业",
    desc: "从政策驱动到市场驱动，关注社区养老、机构养老、智慧养老三大方向的结构性变化。",
  },
  {
    slug: "ai-industry",
    title: "AI 产业",
    desc: "AI 正从技术爆发期走向产业渗透期，关注大模型在垂直行业的落地路径与商业模式变迁。",
  },
  {
    slug: "urban-renewal",
    title: "城市更新",
    desc: "中国城市从增量扩张进入存量运营时代，研究商业模式、政策框架与资产价值重估。",
  },
  {
    slug: "industrial-park",
    title: "产业园区",
    desc: "产业园区正从「收租逻辑」走向「运营逻辑」，关注定位重构、招商策略与数字化升级。",
  },
  {
    slug: "robotics",
    title: "机器人",
    desc: "机器人与人协同工作的时代正在到来，关注服务机器人、工业机器人及关键零部件的投资逻辑。",
  },
  {
    slug: "industrial-metals",
    title: "工业金属",
    desc: "工业金属是制造业的基础，也是大国博弈的资源锚点，关注供需结构、地缘政治与技术替代。",
  },
  {
    slug: "corporate-research",
    title: "企业研究",
    desc: "以深度研究驱动企业决策，提供标杆企业分析、竞争格局梳理与战略盲区识别。",
  },
  {
    slug: "new-quality-productivity",
    title: "新质生产力",
    desc: "从产业落地、要素重组、效率跃迁三个维度解构新质生产力的真实内涵。",
  },
  {
    slug: "investment-opportunities",
    title: "产业投资机会",
    desc: "在结构性变化中寻找超预期的投资机会，识别被低估的赛道、被忽视的信号与被误解的资产。",
  },
];

// ─── Topics (产业专题) ─────────────────────
export const topics = [
  {
    slug: "silver-economy-panorama",
    title: "银发经济全景研究",
    desc: "从人口结构到消费变迁，从政策框架到商业机会——银发经济的完整拼图。",
    status: "持续更新中",
    articleCount: 12,
  },
  {
    slug: "ai-industry-penetration",
    title: "AI 产业渗透报告",
    desc: "AI 最大的机会不在技术本身，而在其对传统行业的重塑。聚焦大模型与 AI Agent 的落地实况。",
    status: "持续更新中",
    articleCount: 10,
  },
  {
    slug: "urban-renewal-whitepaper",
    title: "中国城市更新白皮书",
    desc: "从增量到存量，中国城市正在经历百年未有的资产价值重估。",
    status: "持续更新中",
    articleCount: 8,
  },
  {
    slug: "robotics-industry-observation",
    title: "机器人产业观察",
    desc: "服务机器人与工业机器人正在两条不同的路径上加速，追踪产业链的结构性变化与关键节点。",
    status: "筹备中",
    articleCount: 5,
  },
  {
    slug: "new-quality-productivity-deep-dive",
    title: "新质生产力深度解构",
    desc: "新质生产力不是政策术语，是产业落地逻辑。从要素重组、效率跃迁、制度破壁三个维度理解中国新引擎。",
    status: "筹备中",
    articleCount: 6,
  },
  {
    slug: "industrial-metals-cycle-report",
    title: "工业金属周期报告",
    desc: "工业金属是制造业的基石，也是大国博弈的锚点，追踪供需结构、地缘政治与技术替代的交叉影响。",
    status: "筹备中",
    articleCount: 6,
  },
  {
    slug: "industrial-park-evolution",
    title: "产业园区进化论",
    desc: "从土地经济到运营经济，产业园区的商业模式正在被彻底重构。",
    status: "筹备中",
    articleCount: 6,
  },
  {
    slug: "ai-think-tank-methodology",
    title: "AI 时代产业智库方法论",
    desc: "AI 改变了研究的速度，但没有改变研究的本质。分享研究工具、分析框架和思维模型。",
    status: "筹备中",
    articleCount: 5,
  },
  {
    slug: "china-corporate-strategy",
    title: "中国企业战略研究",
    desc: "以深度研究驱动企业决策，提供标杆企业分析、竞争格局梳理与战略盲区识别。",
    status: "筹备中",
    articleCount: 8,
  },
  {
    slug: "industry-investment-map",
    title: "产业投资机会地图",
    desc: "在结构性变化中寻找超预期的投资机会。",
    status: "筹备中",
    articleCount: 8,
  },
  {
    slug: "annual-trend-report-2026",
    title: "2026 年度产业趋势报告",
    desc: "每年初发布，覆盖十大重点赛道的年度趋势判断——知璟远珩最重要的旗舰产品。",
    status: "年度旗舰",
    articleCount: 11,
  },
];

// ─── Articles (最新研究 / 文章列表) ─────────
export const articles = [
  {
    slug: "silver-economy-full-map",
    title: "中国银发经济全景图：从人口结构到万亿市场",
    excerpt: "中国正在经历人类历史上规模最大的老龄化进程。本文从人口结构出发，系统梳理银发经济的消费图谱、政策框架和投资机会。",
    category: "深度研究",
    track: "银发经济",
    date: "2026-06-28",
  },
  {
    slug: "ai-agent-underrated-opportunity",
    title: "AI Agent：2026 年最被低估的商业机会",
    excerpt: "当所有人都在关注大模型的参数竞赛时，真正的商业机会正在 AI Agent 领域悄然成型。为什么 Agent 是下一个十倍赛道？",
    category: "趋势速读",
    track: "AI 产业",
    date: "2026-06-28",
  },
  {
    slug: "urban-renewal-2-0-era",
    title: "中国城市更新进入 2.0 时代：从拆改到运营",
    excerpt: "增量时代的终结意味着城市更新范式的根本转变。不再是拆旧建新，而是存量资产的精细化运营与价值重估。",
    category: "深度研究",
    track: "城市更新",
    date: "2026-06-20",
  },
  {
    slug: "value-creation-formula",
    title: "知璟远珩研究框架：如何用一个公式重新定义价值创造",
    excerpt: "V = P × J × A。这不是一个数学游戏，而是我们对「什么真正创造价值」的核心回答。",
    category: "方法工具",
    track: "方法论",
    date: "2026-06-15",
  },
];

// ─── Services (服务能力) ────────────────────
export const services = [
  {
    icon: "📊",
    title: "产业研究与趋势研判",
    desc: "为企业和投资机构提供深度产业研究报告、竞争格局分析和趋势预判。",
    fit: "适合：战略规划、投资决策、赛道评估",
  },
  {
    icon: "🧭",
    title: "项目定位与商业模式设计",
    desc: "为具体项目提供精准定位、商业模式重构和差异化策略设计。",
    fit: "适合：新区开发、产业园定位、城市更新项目、新业务孵化",
  },
  {
    icon: "✍️",
    title: "战略表达与内容输出",
    desc: "将复杂的研究结论转化为可传播、可说服、可打动的战略表达。",
    detail: "包括：PPT 体系设计、品牌叙事构建、关键发布稿撰写。",
    fit: "适合：上市路演、政府汇报、品牌升级、战略发布",
  },
  {
    icon: "🤖",
    title: "AI 协同研究支持",
    desc: "利用 AI 工具链辅助研究全流程：数据采集、分析框架搭建、报告生成、观点验证。",
    fit: "适合：研究团队效率升级、研究流程数字化",
  },
  {
    icon: "🤝",
    title: "定制化智库服务",
    desc: "长期顾问式合作，为企业提供持续性的产业跟踪、竞争监测和战略议题判断。",
    fit: "适合：需要持续产业判断支撑的企业与机构",
  },
];

// ─── Methodology Steps (四步方法论) ─────────
export const methodologySteps = [
  {
    step: 1,
    short: "定见 · 识局",
    full: "定见 · 识局",
    subtitle: "发现问题 · 界定格局 · 判断优先级",
    actions: ["产业扫描 — 识别结构变化的关键信号", "问题定义 — 与客户共同界定真正值得回答的问题", "优先排序 — 在信息过载中识别真正的战略性议题"],
    deliverables: "研究框架 | 关键议题清单 | 产业地图",
  },
  {
    step: 2,
    short: "深见 · 判势",
    full: "深见 · 判势",
    subtitle: "深入分析 · 独立判断 · 形成洞察",
    actions: ["深度研究 — 穿透公开数据，找到结构的深层逻辑", "交叉验证 — 多渠道信息相互校验，排除认知偏差", "趋势判断 — 在不确定性中识别确定性方向"],
    deliverables: "深度研究报告 | 趋势白皮书 | 策略研判",
  },
  {
    step: 3,
    short: "创见 · 定策",
    full: "创见 · 定策",
    subtitle: "设计方案 · 构建路径 · 形成表达",
    actions: ["策略设计 — 从判断到可执行的策略框架", "商业模式重构 — 基于产业洞察重新设计价值获取方式", "战略表达 — 将研究结论转化为有冲击力的叙事"],
    deliverables: "战略方案 | 商业模式设计 | PPT 体系 | 品牌表达",
  },
  {
    step: 4,
    short: "践行 · 成事",
    full: "践行 · 成事",
    subtitle: "推动落地 · 追踪执行 · 闭环验证",
    actions: ["行动路径规划 — 从策略到执行的路线图", "执行支持 — AI 辅助的流程推进与工具搭建", "价值验证 — 定量与定性结合的结果追溯"],
    deliverables: "行动计划 | 执行工具 | 效果追踪报告",
  },
];

// ─── SEO Metadata per page ──────────────────
export const pageMetadata = {
  home: {
    title: `${siteConfig.name} ${siteConfig.nameEn} — AI 时代的产业智库`,
    description: siteConfig.description,
    keywords: "知璟远珩, ZHI Insight, 产业研究, 产业智库, AI 研究, 李青广, 银发经济研究, 城市更新咨询, 产业趋势分析, AI 时代咨询, 产业投资研究",
  },
  about: {
    title: `关于${siteConfig.name} — AI 时代产业智库 | ${siteConfig.nameEn}`,
    description: `${siteConfig.name}（${siteConfig.nameEn}）面向 AI 时代的新型产业智库。创始人${siteConfig.founder}。核心理念：不追热点追结构，研究以落地为终点。`,
    keywords: `知璟远珩关于我们, ${siteConfig.founder}, ${siteConfig.nameEn}团队, 产业智库, 新型智库, AI时代咨询`,
  },
  research: {
    title: `研究方向 — ${siteConfig.name} ${siteConfig.nameEn}`,
    description: `${siteConfig.name}覆盖十大产业赛道：银发经济、养老产业、AI 产业、城市更新、产业园区、机器人、工业金属、企业研究、新质生产力、产业投资机会。`,
    keywords: "银发经济研究, 养老产业分析, AI产业报告, 城市更新研究, 产业园区咨询, 机器人产业分析, 工业金属研究, 新质生产力报告",
  },
  methodology: {
    title: `研究方法论 — ${siteConfig.name} ${siteConfig.nameEn}`,
    description: `${siteConfig.name}核心方法论：价值创造 = 问题质量 × 判断能力 × 行动能力。四步工作框架：定见·识局、深见·判势、创见·定策、践行·成事。`,
    keywords: "产业研究方法论, 智库研究方法, 问题定义框架, 战略表达方法论, ZHI Insight方法论",
  },
  insights: {
    title: `研究文章 — ${siteConfig.name} ${siteConfig.nameEn}`,
    description: `${siteConfig.name}研究文章栏目：深度研究、趋势速读、方法工具、创始人专栏。独立判断，行动导向。`,
    keywords: "产业研究文章, 深度报告, 趋势分析, AI产业观察, 城市更新研究, 银发经济分析",
  },
  services: {
    title: `服务能力 — ${siteConfig.name} ${siteConfig.nameEn}`,
    description: `${siteConfig.name}提供五大核心服务：产业研究与趋势研判、项目定位与商业模式设计、战略表达与内容输出、AI 协同研究支持、定制化智库服务。`,
    keywords: "产业研究服务, 战略咨询, 项目定位, 商业模式设计, PPT体系设计, AI辅助研究, 智库服务",
  },
  contact: {
    title: `联系我们 — ${siteConfig.name} ${siteConfig.nameEn}`,
    description: `与${siteConfig.name}开启对话。无论您需要产业趋势的独立判断、战略方向的清晰表达，还是研究驱动的行动方案。`,
    keywords: `联系${siteConfig.name}, 业务合作, 产业研究咨询, 项目合作, 智库服务`,
  },
};

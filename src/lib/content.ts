// ============================================
// 知璟远珩 ZHI Insight — All Site Content
// Static content data for all pages
// ============================================

import { siteConfig } from "./site";

// ─── Core Capabilities (首页模块3) ──────────
export const capabilities = [
  {
    icon: "focus",
    title: "问题定义",
    desc: "不急于给答案。我们花时间搞清楚什么才是真正值得回答的问题。",
  },
  {
    icon: "scale",
    title: "独立判断",
    desc: "不依附利益集团，不追逐热点。所有结论只对事实和逻辑负责。",
  },
  {
    icon: "drafting-compass",
    title: "方案设计",
    desc: "不空谈趋势。我们产出可执行的策略、可输出的表达、可落地的路径。",
  },
  {
    icon: "route",
    title: "推动行动",
    desc: "研究不以报告为终点。我们的交付包含从认知到执行的完整链路。",
  },
];

// ─── Core Businesses (首页与服务页) ────────
export const coreBusinesses = [
  {
    slug: "urban-renewal",
    icon: "building-2",
    title: "城市更新与存量资产价值重构",
    desc: "中国城市正从增量扩张转向存量运营。我们帮助客户在存量资产中发现被低估的价值，并将其转化为可执行的商业策略。",
    services: [
      "城市更新战略研究",
      "存量资产诊断与价值重构",
      "商业综合体定位与产品策略",
      "TOD与片区综合开发研究",
      "产业导入与招商策略",
    ],
  },
  {
    slug: "silver-economy",
    icon: "heart-handshake",
    title: "银发经济与长寿社会研究",
    desc: "从老龄化到长寿社会，我们研究的是中国未来三十年的社会基础设施重构。",
    services: [
      "银发经济产业链与政策研究",
      "长寿社会公共服务体系规划",
      "居家养老与社区养老模式研究",
      "长护险与支付体系研究",
      "AI+养老与智慧养老服务研究",
    ],
  },
  {
    slug: "ai-industry",
    icon: "bot",
    title: "AI产业研究与智能化应用",
    desc: "我们不训练大模型。我们研究AI如何改变产业逻辑，并用AI工具提升研究质量与效率。",
    services: [
      "AI产业趋势与商业落地研究",
      "AI Agent与产业应用场景分析",
      "AI协同研究工具链建设",
      "AI治理体系与合规材料建设",
      "产业认知生产与数据库建设",
    ],
  },
  {
    slug: "knowledge-assets",
    icon: "library-big",
    title: "产业认知资产与咨询服务",
    desc: "把一次性项目经验沉淀为可复用的方法论、数据库、案例库和AI工具链。",
    services: [
      "产业研究报告",
      "项目定位与策略咨询",
      "方法论体系建设",
      "产业数据库建设",
      "企业认知资产库建设",
    ],
  },
];

// ─── Research Tags (研究索引，不作为核心业务) ─
export const researchTags = [
  {
    slug: "urban-renewal",
    title: "城市更新",
    desc: "存量资产、商业更新、片区开发、产业导入与运营策略。",
  },
  {
    slug: "silver-economy",
    title: "银发经济与长寿社会",
    desc: "人口结构、公共服务、社区养老、支付体系与养老科技。",
  },
  {
    slug: "ai-industry",
    title: "AI产业与智能化应用",
    desc: "AI Agent、产业场景、研究工具链、治理与合规。",
  },
  {
    slug: "knowledge-assets",
    title: "产业认知资产",
    desc: "方法论、数据库、案例库、知识库与企业认知资产建设。",
  },
  {
    slug: "industrial-park",
    title: "产业园区",
    desc: "产业定位、园区更新、招商策略、运营体系与创新生态。",
  },
  {
    slug: "robotics",
    title: "机器人与智能设备",
    desc: "作为AI产业的延伸方向，关注服务机器人与产业应用。",
  },
  {
    slug: "industrial-metals",
    title: "工业金属",
    desc: "作为产业观察标签，关注供需结构、资源安全与技术替代。",
  },
  {
    slug: "corporate-research",
    title: "企业研究",
    desc: "标杆企业分析、竞争格局、战略议题与认知资产沉淀。",
  },
  {
    slug: "new-quality-productivity",
    title: "新质生产力",
    desc: "作为政策与产业研究标签，关注要素重组与效率跃迁。",
  },
  {
    slug: "investment-opportunities",
    title: "产业投资机会",
    desc: "作为趋势研究标签，识别结构变化中的产业机会与风险。",
  },
];

// ─── Topics (产业专题) ─────────────────────
export const topics = [
  {
    slug: "silver-economy-panorama",
    title: "银发经济全景研究",
    desc: "从人口结构到消费变迁，从政策框架到商业机会——银发经济的完整拼图。",
    status: "持续更新中",
  },
  {
    slug: "ai-industry-penetration",
    title: "AI 产业渗透报告",
    desc: "AI 最大的机会不在技术本身，而在其对传统行业的重塑。聚焦大模型与 AI Agent 的落地实况。",
    status: "持续更新中",
  },
  {
    slug: "urban-renewal-whitepaper",
    title: "中国城市更新白皮书",
    desc: "从增量到存量，中国城市正在经历百年未有的资产价值重估。",
    status: "持续更新中",
  },
  {
    slug: "robotics-industry-observation",
    title: "机器人产业观察",
    desc: "服务机器人与工业机器人正在两条不同的路径上加速，追踪产业链的结构性变化与关键节点。",
    status: "筹备中",
  },
  {
    slug: "new-quality-productivity-deep-dive",
    title: "新质生产力深度解构",
    desc: "新质生产力不是政策术语，是产业落地逻辑。从要素重组、效率跃迁、制度破壁三个维度理解中国新引擎。",
    status: "筹备中",
  },
  {
    slug: "industrial-metals-cycle-report",
    title: "工业金属周期报告",
    desc: "工业金属是制造业的基石，也是大国博弈的锚点，追踪供需结构、地缘政治与技术替代的交叉影响。",
    status: "筹备中",
  },
  {
    slug: "industrial-park-evolution",
    title: "产业园区进化论",
    desc: "从土地经济到运营经济，产业园区的商业模式正在被彻底重构。",
    status: "筹备中",
  },
  {
    slug: "ai-think-tank-methodology",
    title: "AI 时代产业咨询方法论",
    desc: "AI 改变了研究的速度，但没有改变研究的本质。分享研究工具、分析框架和思维模型。",
    status: "筹备中",
  },
  {
    slug: "china-corporate-strategy",
    title: "中国企业战略研究",
    desc: "以深度研究驱动企业决策，提供标杆企业分析、竞争格局梳理与战略盲区识别。",
    status: "筹备中",
  },
  {
    slug: "industry-investment-map",
    title: "产业投资机会地图",
    desc: "在结构性变化中寻找超预期的投资机会。",
    status: "筹备中",
  },
  {
    slug: "annual-trend-report-2026",
    title: "2026 年度产业趋势报告",
    desc: "围绕核心业务方向形成年度趋势判断与专题研究。",
    status: "年度研究",
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

// ─── Representative Research ───────────────
export const representativeResearch = [
  {
    title: "超大型交通枢纽站前综合开发定位研究",
    category: "城市更新与综合开发",
    excerpt:
      "围绕综合交通枢纽站前区域，开展产业定位、功能布局、商务生态与城市门户价值研究。",
  },
  {
    title: "虹桥核心区商业综合体产品策略研究",
    category: "商业综合体策略",
    excerpt:
      "围绕城市综合体项目，开展商业定位、大平层产品策略、招商逻辑与资产价值体系研究。",
  },
  {
    title: "浦东科创产业园区更新策略研究",
    category: "产业园区更新",
    excerpt:
      "围绕产业园区转型升级，开展产业定位、科技创新、中试平台与产业生态体系研究。",
  },
  {
    title: "中国长寿社会现代化系统工程研究",
    category: "长寿社会研究",
    excerpt:
      "围绕人口结构重构、城市现代化与国家治理能力，开展长寿社会现代化系统工程研究。",
  },
  {
    title: "银发经济产业平台研究",
    category: "银发经济",
    excerpt:
      "围绕养老服务、健康管理、康养旅居、养老科技和智慧养老，开展银发经济产业平台研究。",
  },
  {
    title: "AI赋能产业研究成果检索系统",
    category: "AI与认知资产",
    excerpt:
      "围绕AI Agent、文件检索、知识库和成果管理，探索AI提升产业研究效率的工具体系。",
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
    title: "知璟远珩｜城市更新、银发经济与AI产业研究咨询",
    description: siteConfig.description,
    keywords: "知璟远珩, 城市更新咨询, 银发经济研究, AI产业研究, 产业认知资产, 咨询管理公司, 李青广",
  },
  about: {
    title: `关于${siteConfig.name} — 产业研究型咨询机构 | ${siteConfig.nameEn}`,
    description: `${siteConfig.name}是一家聚焦城市更新、银发经济、AI产业研究与产业认知资产建设的咨询管理公司。创始人${siteConfig.founder}。`,
    keywords: `知璟远珩关于我们, ${siteConfig.founder}, ${siteConfig.nameEn}, 产业研究型咨询机构, 咨询管理公司`,
  },
  research: {
    title: `研究索引 — ${siteConfig.name} ${siteConfig.nameEn}`,
    description: `${siteConfig.name}围绕城市更新、银发经济、AI产业与产业认知资产开展核心研究，并持续跟踪相关产业标签。`,
    keywords: "城市更新研究, 银发经济研究, AI产业报告, 产业认知资产, 产业园区咨询, 企业研究",
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
    description: `${siteConfig.name}提供城市更新、银发经济、AI产业研究与产业认知资产四大核心咨询服务。`,
    keywords: "城市更新咨询, 银发经济研究, AI产业咨询, 产业认知资产, 项目定位, 产业数据库",
  },
  contact: {
    title: `联系我们 — ${siteConfig.name} ${siteConfig.nameEn}`,
    description: `与${siteConfig.name}开启对话。无论您需要产业趋势的独立判断、战略方向的清晰表达，还是研究驱动的行动方案。`,
    keywords: `联系${siteConfig.name}, 业务合作, 产业研究咨询, 项目合作, 咨询服务`,
  },
};

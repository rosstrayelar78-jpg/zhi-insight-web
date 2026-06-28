import Link from "next/link";
import { siteConfig } from "@/lib/site";
import {
  capabilities,
  researchTracks,
  articles,
  topics,
} from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";

// ─── Module 1: Hero ──────────────────────
function Hero() {
  return (
    <section className="bg-gradient-hero text-white relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="container-main relative z-10 py-24 md:py-36 lg:py-44">
        <div className="max-w-3xl">
          <p className="text-accent font-medium tracking-widest text-sm mb-4 uppercase">
            {siteConfig.slogan}
          </p>
          <h1 className="text-white leading-tight mb-6">
            {siteConfig.name}
            <span className="block text-2xl md:text-3xl mt-2 font-normal text-gray-300">
              {siteConfig.tagline}
            </span>
          </h1>

          {/* Core Formula */}
          <div className="my-10 p-6 bg-white/5 border border-white/10 rounded-lg inline-block backdrop-blur-sm">
            <p className="text-lg md:text-xl font-mono tracking-wide text-gray-200">
              Value = Problem × Judgment × Action
            </p>
            <p className="text-sm text-gray-400 mt-2">价值创造 = 问题质量 × 判断能力 × 行动能力</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="/research"
              className="inline-flex items-center px-7 py-3 bg-accent hover:bg-accent-hover text-white rounded transition-colors font-medium text-sm"
            >
              探索研究方向 →
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center px-7 py-3 border border-white/20 hover:border-white/40 text-white rounded transition-colors font-medium text-sm"
            >
              关于我们
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-warm to-transparent" />
    </section>
  );
}

// ─── Module 2: 时代背景 ──────────────────
function EraBackground() {
  return (
    <section className="bg-bg-warm section-padding">
      <div className="container-main max-w-4xl">
        <h2 className="text-center mb-10">在这个答案泛滥的时代</h2>
        <div className="space-y-5 text-text-secondary leading-loose text-base md:text-lg">
          <p>
            大模型可以写出研究报告，可以生成策略框架，可以模拟商业推演。
          </p>
          <p>但真正稀缺的能力，从未改变——</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-8">
            <div className="text-center p-5 bg-bg-white rounded-card shadow-card">
              <p className="text-text-muted text-sm mb-2">不是</p>
              <p className="font-semibold text-text">获取答案的速度</p>
              <p className="text-text-muted text-sm mt-1">而是</p>
              <p className="font-bold text-primary">定义问题的精度</p>
            </div>
            <div className="text-center p-5 bg-bg-white rounded-card shadow-card">
              <p className="text-text-muted text-sm mb-2">不是</p>
              <p className="font-semibold text-text">知识的总量</p>
              <p className="text-text-muted text-sm mt-1">而是</p>
              <p className="font-bold text-primary">独立判断的质量</p>
            </div>
            <div className="text-center p-5 bg-bg-white rounded-card shadow-card">
              <p className="text-text-muted text-sm mb-2">不是</p>
              <p className="font-semibold text-text">分析的过程</p>
              <p className="text-text-muted text-sm mt-1">而是</p>
              <p className="font-bold text-primary">推动行动的能力</p>
            </div>
          </div>
        </div>
        <p className="text-center text-xl font-semibold text-primary mt-10">
          知璟远珩，为捍卫这种稀缺而存在。
        </p>
      </div>
    </section>
  );
}

// ─── Module 3: 核心能力（四卡片） ────────
function Capabilities() {
  return (
    <section className="bg-bg-white section-padding">
      <div className="container-main">
        <SectionHeading title="我们的能力" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="group p-7 bg-bg-warm rounded-card border border-border-light hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-3xl mb-4 block">{cap.icon}</span>
              <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">
                {cap.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Module 4: 研究方向 ──────────────────
function ResearchTracksPreview() {
  return (
    <section className="bg-bg-warm section-padding">
      <div className="container-main">
        <SectionHeading
          title="研究方向"
          subtitle="覆盖十大产业赛道 · 持续追踪结构变化"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {researchTracks.map((track) => (
            <Link
              key={track.slug}
              href="/research"
              className="group block p-5 bg-bg-white rounded-card border border-border-light hover:border-accent/30 hover:shadow-card-hover transition-all duration-300"
            >
              <h3 className="font-bold text-sm group-hover:text-accent transition-colors mb-2">
                {track.title}
              </h3>
              <p className="text-text-muted text-xs leading-relaxed line-clamp-3">
                {track.desc.length > 60 ? track.desc.slice(0, 60) + "…" : track.desc}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/research"
            className="inline-flex items-center text-sm text-accent hover:text-accent-hover font-medium"
          >
            查看完整研究方向 →
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Module 5: 最新研究 ──────────────────
function LatestArticles() {
  return (
    <section className="bg-bg-white section-padding">
      <div className="container-main">
        <SectionHeading title="最新研究" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/insights#${article.slug}`}
              className="group block bg-bg-warm rounded-card overflow-hidden border border-border-light hover:shadow-card-hover transition-all duration-300"
            >
              {/* Article card placeholder visual */}
              <div className="h-36 bg-gradient-to-br from-primary to-primary-light flex items-end p-5">
                <span className="text-xs text-gray-400 uppercase tracking-wider">
                  {article.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-sm leading-snug group-hover:text-accent transition-colors line-clamp-2 mb-2">
                  {article.title}
                </h3>
                <p className="text-text-muted text-xs leading-relaxed line-clamp-2 mb-3">
                  {article.excerpt}
                </p>
                <time className="text-xs text-gray-400">{article.date}</time>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/insights"
            className="inline-flex items-center text-sm text-accent hover:text-accent-hover font-medium"
          >
            查看所有文章 →
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Module 6: 专题 ──────────────────────
function FeaturedTopics() {
  const featuredTopics = topics.slice(0, 3);

  return (
    <section className="bg-bg-warm section-padding">
      <div className="container-main">
        <SectionHeading title="深度专题" subtitle="持续追踪 · 持续更新 · 不止于表面" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredTopics.map((topic) => (
            <Link
              key={topic.slug}
              href="/topics"
              className="group block relative overflow-hidden rounded-card aspect-[4/3] bg-primary"
            >
              {/* Gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="inline-block self-start px-2.5 py-0.5 bg-accent/20 text-accent text-[11px] font-medium rounded mb-3">
                  {topic.status} · 已发布 {topic.articleCount} 篇
                </span>
                <h3 className="text-white font-bold text-lg leading-snug group-hover:underline decoration-accent underline-offset-4">
                  {topic.title}
                </h3>
                <p className="text-gray-300 text-sm mt-2 line-clamp-2">
                  {topic.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/topics"
            className="inline-flex items-center text-sm text-accent hover:text-accent-hover font-medium"
          >
            查看更多专题 →
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Module 7: 关于我们 ──────────────────
function AboutPreview() {
  return (
    <section className="bg-primary text-white section-padding">
      <div className="container-main max-w-3xl text-center">
        <h2 className="mb-6">{siteConfig.name}</h2>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
          {siteConfig.name}（{siteConfig.nameEn}）是一家面向 AI 时代的新型产业智库。
        </p>
        <p className="text-gray-300 leading-relaxed mb-8">
          我们相信：<span className="text-white font-semibold">价值创造 = 问题质量 × 判断能力 × 行动能力</span>。
          <br />
          我们不生产标准化的答案，我们生产<span className="text-accent font-semibold">稀缺的判断力</span>。
        </p>
        <div className="flex justify-center gap-6 text-sm text-gray-400 mb-8">
          <span>创始人：{siteConfig.founder}</span>
          <span className="hidden sm:inline">|</span>
          <span>核心领域：产业研究 · 项目定位 · 战略表达 · AI 协同</span>
        </div>
        <Link
          href="/about"
          className="inline-flex items-center text-sm text-accent hover:text-white font-medium transition-colors"
        >
          了解我们的故事 →
        </Link>
      </div>
    </section>
  );
}

// ─── Module 8: 联系与订阅 ─────────────────
function ContactCTA() {
  return (
    <section className="bg-bg-warm section-padding">
      <div className="container-main max-w-2xl text-center">
        <h2 className="mb-4">与知璟远珩合作</h2>
        <p className="text-text-secondary text-base leading-relaxed mb-8">
          无论您正在寻找产业趋势的独立判断、<br className="hidden sm:block" />
          战略方向的清晰表达、<br className="hidden sm:block" />
          还是研究驱动的行动方案——<br className="hidden sm:block" />
          我们值得一次对话。
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3.5 bg-accent hover:bg-accent-hover text-white rounded transition-colors font-medium text-sm"
          >
            联系我们 →
          </Link>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center px-8 py-3.5 border border-primary text-primary hover:bg-primary hover:text-white rounded transition-colors font-medium text-sm"
          >
            发送邮件
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Homepage ─────────────────────────────
export default function HomePage() {
  return (
    <>
      <Hero />
      <EraBackground />
      <Capabilities />
      <ResearchTracksPreview />
      <LatestArticles />
      <FeaturedTopics />
      <AboutPreview />
      <ContactCTA />
    </>
  );
}

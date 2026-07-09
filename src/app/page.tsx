import Link from "next/link";
import {
  Bot,
  Building2,
  Check,
  DraftingCompass,
  Focus,
  HeartHandshake,
  LibraryBig,
  Route,
  Scale,
  type LucideIcon,
} from "lucide-react";
import { siteConfig } from "@/lib/site";
import {
  capabilities,
  coreBusinesses,
  articles,
  topics,
} from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";

const capabilityIcons: Record<string, LucideIcon> = {
  focus: Focus,
  scale: Scale,
  "drafting-compass": DraftingCompass,
  route: Route,
};

const businessIcons: Record<string, LucideIcon> = {
  "building-2": Building2,
  "heart-handshake": HeartHandshake,
  bot: Bot,
  "library-big": LibraryBig,
};

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
              城市更新 · 银发经济 · AI产业研究
            </span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg">
            {siteConfig.tagline}
          </p>

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
              href="/services"
              className="inline-flex items-center px-7 py-3 bg-accent hover:bg-accent-hover text-white rounded transition-colors font-medium text-sm"
            >
              查看服务能力 →
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
          知璟远珩，致力于在 AI 时代提供稀缺的产业判断力。
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
          {capabilities.map((cap) => {
            const Icon = capabilityIcons[cap.icon] ?? Focus;
            return (
              <div
                key={cap.title}
                className="group p-7 bg-bg-warm rounded-card border border-border-light hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <Icon
                  className="w-7 h-7 mb-4 text-accent"
                  aria-hidden="true"
                />
                <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">
                  {cap.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Module 4: 四大核心业务 ──────────────
function CoreBusinesses() {
  return (
    <section className="bg-bg-warm section-padding">
      <div className="container-main">
        <SectionHeading
          title="四大核心业务"
          subtitle="研究、咨询与交付协同，为客户形成可执行的产业策略"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {coreBusinesses.map((business) => {
            const Icon = businessIcons[business.icon] ?? Building2;
            return (
              <Link
                key={business.slug}
                href={`/services#${business.slug}`}
                className="group block p-7 md:p-8 bg-bg-white rounded-card border border-border-light hover:border-accent/30 hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="shrink-0 w-11 h-11 flex items-center justify-center bg-accent/10 text-accent rounded-card">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-bold text-lg group-hover:text-accent transition-colors mb-2">
                      {business.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {business.desc}
                    </p>
                  </div>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 pt-4 border-t border-border-light">
                  {business.services.map((service) => (
                    <li
                      key={service}
                      className="flex items-start gap-2 text-xs text-text-secondary"
                    >
                      <Check
                        className="w-3.5 h-3.5 mt-0.5 text-accent shrink-0"
                        aria-hidden="true"
                      />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center text-sm text-accent hover:text-accent-hover font-medium"
          >
            查看完整服务能力 →
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
                  {topic.status}
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
          {siteConfig.name}是一家聚焦城市更新、银发经济、AI产业研究与产业认知资产建设的产业研究型咨询机构。
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
      <CoreBusinesses />
      <LatestArticles />
      <FeaturedTopics />
      <AboutPreview />
      <ContactCTA />
    </>
  );
}

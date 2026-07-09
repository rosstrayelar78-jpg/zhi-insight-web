import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { pageMetadata } from "@/lib/content";
import { articles } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: pageMetadata.insights.title,
  description: pageMetadata.insights.description,
  keywords: pageMetadata.insights.keywords,
  alternates: {
    canonical: "/insights",
  },
  openGraph: {
    title: pageMetadata.insights.title,
    type: "website",
  },
};

// Category color mapping
const categoryStyle: Record<string, string> = {
  深度研究: "bg-blue-500/10 text-blue-700",
  趋势速读: "bg-purple-500/10 text-purple-700",
  方法工具: "bg-emerald-500/10 text-emerald-700",
  知璟对话: "bg-orange-500/10 text-orange-700",
};

export default function InsightsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-dark text-white py-20 md:py-28">
        <div className="container-main max-w-3xl text-center">
          <h1>研究文章</h1>
          <p className="mt-4 text-gray-300 text-lg">
            独立判断，行动导向
          </p>
        </div>
      </section>

      {/* 文章栏目说明 */}
      <section className="bg-bg-white section-padding pb-0">
        <div className="container-main max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { name: "深度研究", desc: "产业深度报告 & 专题观察" },
              { name: "趋势速读", desc: "趋势信号 & 赛道观察" },
              { name: "方法工具", desc: "研究框架 & 思维模型分享" },
              { name: "知璟对话", desc: "创始人专栏 & 行业访谈" },
            ].map((cat) => (
              <div
                key={cat.name}
                className="text-center p-5 bg-bg-warm rounded-card border border-border-light"
              >
                <p className="font-bold text-sm text-primary mb-1">{cat.name}</p>
                <p className="text-xs text-text-muted">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 文章列表 */}
      <section className="bg-bg-warm section-padding pt-0">
        <div className="container-main max-w-4xl">
          <SectionHeading title="最新发布" centered={false} />

          <div className="space-y-6">
            {articles.map((article) => (
              <article
                id={article.slug}
                key={article.slug}
                className="group bg-bg-white rounded-card overflow-hidden border border-border-light hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Visual placeholder */}
                  <div className="w-full sm:w-56 shrink-0 h-48 sm:h-auto bg-gradient-to-br from-primary to-primary-light flex items-end p-5">
                    <div>
                      <span className={`inline-block px-2.5 py-1 text-xs font-medium rounded-full ${categoryStyle[article.category] || "bg-gray-500/10 text-gray-600"}`}>
                        {article.category}
                      </span>
                      <p className="text-gray-400 text-xs mt-2">{article.track}</p>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-1 p-6 md:p-8">
                    <h2 className="font-bold text-lg leading-snug group-hover:text-accent transition-colors mb-3">
                      {article.title}
                    </h2>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <time className="text-xs text-text-muted">{article.date}</time>
                      <span className="text-sm text-text-muted">即将上线</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Coming soon notice */}
          <div className="mt-12 p-8 bg-bg-white rounded-card border border-dashed border-border-light text-center">
            <p className="text-text-muted text-sm">
              更多文章正在筹备中……<br />
              后续内容将围绕城市更新、银发经济、AI产业研究与产业认知资产持续发布。
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

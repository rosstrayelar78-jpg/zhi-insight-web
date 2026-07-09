import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { topics } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: `产业专题 — ${siteConfig.name} ${siteConfig.nameEn}`,
  description: `${siteConfig.name}深度专题系列：围绕银发经济、AI产业、城市更新与产业认知资产开展持续研究。`,
  alternates: {
    canonical: "/topics",
  },
  openGraph: {
    title: `产业专题 — ${siteConfig.name}`,
    type: "website",
  },
};

const statusColor: Record<string, string> = {
  "持续更新中": "bg-green-500/15 text-green-600",
  "筹备中": "bg-yellow-500/15 text-yellow-700",
  "年度研究": "bg-accent/15 text-accent",
};

export default function TopicsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-dark text-white py-20 md:py-28">
        <div className="container-main max-w-3xl text-center">
          <h1>产业专题</h1>
          <p className="mt-4 text-gray-300 text-lg">
            深度追踪 · 持续更新 · 不止于表面
          </p>
        </div>
      </section>

      {/* 专题列表 */}
      <section className="section-padding bg-bg-white">
        <div className="container-main max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topics.map((topic) => (
              <article
                key={topic.slug}
                className="group p-7 bg-bg-warm rounded-card border border-border-light hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h2 className="font-bold text-lg group-hover:text-accent transition-colors leading-snug">
                    {topic.title}
                  </h2>
                  <span
                    className={`shrink-0 px-2.5 py-1 text-xs font-medium rounded-full ${
                      statusColor[topic.status] || statusColor["筹备中"]
                    }`}
                  >
                    {topic.status}
                  </span>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-5">
                  {topic.desc}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border-light">
                  <span className="text-xs text-text-muted">
                    专题研究
                  </span>
                  <a
                    href="/insights"
                    className="text-xs text-accent hover:text-accent-hover font-medium"
                  >
                    查看文章 →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg-warm py-16">
        <div className="container-main text-center">
          <h2 className="mb-4">想要定制化深度研究？</h2>
          <p className="text-text-muted mb-8">
            我们为企业提供定制化的产业研究服务，从单篇报告到长期跟踪。
          </p>
          <a
            href="/services"
            className="inline-flex items-center px-8 py-3.5 bg-accent hover:bg-accent-hover text-white rounded transition-colors font-medium text-sm"
          >
            查看服务能力 →
          </a>
        </div>
      </section>
    </>
  );
}

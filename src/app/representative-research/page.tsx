import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileSearch } from "lucide-react";
import { representativeResearch } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `代表研究 — ${siteConfig.name} ${siteConfig.nameEn}`,
  description:
    "知璟远珩关注和参与研究的代表方向，覆盖城市更新、商业综合体、产业园区、长寿社会、银发经济与AI产业研究工具。",
  keywords:
    "代表研究, 城市更新研究, 商业综合体策略, 产业园区更新, 长寿社会, 银发经济, AI产业研究",
  alternates: {
    canonical: "/representative-research",
  },
  openGraph: {
    title: `代表研究 — ${siteConfig.name}`,
    description: "知璟远珩关注和参与研究的代表方向。",
    type: "website",
  },
};

export default function RepresentativeResearchPage() {
  return (
    <>
      <section className="bg-gradient-dark text-white py-20 md:py-28">
        <div className="container-main max-w-3xl text-center">
          <h1>代表研究</h1>
          <p className="mt-4 text-gray-300 text-lg">
            以研究识别问题，以策略推动价值创造
          </p>
        </div>
      </section>

      <section className="section-padding bg-bg-white">
        <div className="container-main max-w-4xl">
          <p className="max-w-3xl text-text-secondary leading-loose mb-12">
            以下内容为知璟远珩关注和参与研究的代表方向，部分项目因客户保密要求进行脱敏表达。
            页面仅介绍研究议题与工作范围，不披露客户信息，也不对项目成果作夸大表述。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {representativeResearch.map((item, index) => (
              <article
                key={item.title}
                className="p-7 bg-bg-warm rounded-card border border-border-light"
              >
                <div className="flex items-center justify-between gap-4 mb-5">
                  <span className="w-10 h-10 flex items-center justify-center bg-bg-white text-accent rounded-card shadow-card">
                    <FileSearch className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-mono text-text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-xs text-accent font-medium mb-2">
                  {item.category}
                </p>
                <h2 className="text-lg mb-3">{item.title}</h2>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-white py-20">
        <div className="container-main max-w-2xl text-center">
          <h2 className="mb-4">讨论您的研究与咨询议题</h2>
          <p className="text-gray-300 mb-8">
            如需了解相关研究方法或讨论具体项目，请通过官方邮箱与我们联系。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent hover:bg-accent-hover text-white rounded transition-colors font-medium text-sm"
          >
            联系我们
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}

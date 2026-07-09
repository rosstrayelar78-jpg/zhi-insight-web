import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/content";
import { researchTags } from "@/lib/content";

export const metadata: Metadata = {
  title: pageMetadata.research.title,
  description: pageMetadata.research.description,
  keywords: pageMetadata.research.keywords,
  alternates: {
    canonical: "/research",
  },
  openGraph: {
    title: pageMetadata.research.title,
    description: pageMetadata.research.description,
    type: "website",
  },
};

export default function ResearchPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-dark text-white py-20 md:py-28">
        <div className="container-main max-w-3xl text-center">
          <h1>研究索引</h1>
          <p className="mt-4 text-gray-300 text-lg">
            围绕核心业务持续研究，并保留对相关产业议题的长期观察
          </p>
        </div>
      </section>

      {/* 研究标签 */}
      <section className="section-padding bg-bg-white">
        <div className="container-main max-w-4xl">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-2xl mb-3">核心业务之外的研究索引</h2>
            <p className="text-text-secondary leading-relaxed">
              以下内容用于组织文章、专题和持续研究，不等同于对外提供的核心业务清单。
              我们以城市更新、银发经济、AI产业研究和产业认知资产为主线，并跟踪与之相关的结构性议题。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {researchTags.map((track, index) => (
              <article
                key={track.slug}
                className="group p-7 bg-bg-warm rounded-card border border-border-light hover:border-accent/20 hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="shrink-0 w-8 h-8 flex items-center justify-center bg-primary text-white text-xs font-bold rounded-full">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-bold text-lg group-hover:text-accent transition-colors">
                    {track.title}
                  </h2>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed pl-11">
                  {track.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA to Topics */}
      <section className="bg-bg-warm py-16">
        <div className="container-main text-center">
          <h2 className="mb-4">需要把研究转化为行动方案？</h2>
          <p className="text-text-muted mb-8">
            查看四大核心服务，了解研究如何进入项目定位、策略咨询和认知资产建设。
          </p>
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-3.5 bg-accent hover:bg-accent-hover text-white rounded transition-colors font-medium text-sm"
          >
            查看服务能力 →
          </Link>
        </div>
      </section>
    </>
  );
}

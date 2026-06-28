import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { pageMetadata } from "@/lib/content";
import { researchTracks } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";

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
          <h1>研究方向</h1>
          <p className="mt-4 text-gray-300 text-lg">
            覆盖十大产业赛道 · 持续追踪结构变化
          </p>
        </div>
      </section>

      {/* 赛道展示 */}
      <section className="section-padding bg-bg-white">
        <div className="container-main max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {researchTracks.map((track, index) => (
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
          <h2 className="mb-4">想深入了解某个赛道？</h2>
          <p className="text-text-muted mb-8">
            查看我们的深度专题系列，每个赛道都有持续更新的系统性研究。
          </p>
          <a
            href="/topics"
            className="inline-flex items-center px-8 py-3.5 bg-accent hover:bg-accent-hover text-white rounded transition-colors font-medium text-sm"
          >
            浏览深度专题 →
          </a>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { pageMetadata } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: pageMetadata.about.title,
  description: pageMetadata.about.description,
  keywords: pageMetadata.about.keywords,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: pageMetadata.about.title,
    description: pageMetadata.about.description,
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-dark text-white py-20 md:py-28">
        <div className="container-main max-w-3xl text-center">
          <h1>关于{siteConfig.name}</h1>
          <p className="mt-4 text-gray-300 text-lg">
            产业研究型咨询机构 · 定义问题 · 创造价值
          </p>
        </div>
      </section>

      {/* 品牌故事 */}
      <section className="section-padding bg-bg-white">
        <div className="container-main max-w-3xl">
          <SectionHeading title="品牌故事" centered />

          <div className="space-y-6 text-text-secondary leading-loose text-base md:text-lg">
            <p>
              AI 可以生成答案。但真正创造价值的人，永远是能够定义问题、判断答案、推动行动的人。
            </p>
            <p>{siteConfig.name}因此而生。</p>

            <div className="my-8 p-6 bg-bg-warm rounded-card border border-border-light">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-primary">知</p>
                  <p className="text-sm text-text-muted mt-1">深度认知<br />穿透表象的结构性理解</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">璟</p>
                  <p className="text-sm text-text-muted mt-1">玉的光彩<br />独特洞察的锋芒</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">远</p>
                  <p className="text-sm text-text-muted mt-1">长期视野<br />不追逐短期噪音的定力</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">珩</p>
                  <p className="text-sm text-text-muted mt-1">古玉顶层横玉<br />体系中的顶层构件</p>
                </div>
              </div>
            </div>

            <p className="font-medium text-text text-lg">
              我们不在信息堆里找答案。<br />
              我们在产业的深层结构里找那个真正值得回答的问题。
            </p>
          </div>
        </div>
      </section>

      {/* 创始人 */}
      <section className="section-padding bg-bg-warm">
        <div className="container-main max-w-4xl">
          <SectionHeading title="创始人" centered />

          <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
            <div className="w-full max-w-[280px] md:w-64 shrink-0">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/team/li-qingguang-portrait-transparent.webp"
                  alt="李青广，知璟远珩创始人。"
                  fill
                  sizes="(min-width: 768px) 256px, 280px"
                  className="object-contain object-bottom"
                />
              </div>
            </div>
            <div className="flex-1 space-y-5">
              <h2 className="text-2xl">{siteConfig.founder}</h2>
              <p className="text-accent font-medium">
                知璟远珩创始人 / 咨询实战专家
              </p>
              <p className="text-text-secondary leading-relaxed">
                长期关注城市更新、商业地产、银发经济、AI产业研究与产业认知资产建设，
                致力于以研究、洞察和AI协同推动产业价值创造。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 核心理念 */}
      <section className="section-padding bg-bg-white">
        <div className="container-main max-w-3xl">
          <SectionHeading title="我们的理念" centered />

          <div className="space-y-0 divide-y divide-border-light">
            <div className="py-8 flex items-start gap-5">
              <span className="shrink-0 w-12 h-12 flex items-center justify-center bg-accent/10 text-accent rounded-full text-xl font-bold">
                P
              </span>
              <div>
                <h3 className="font-bold mb-2">问题质量</h3>
                <p className="text-text-secondary leading-relaxed">
                  我们花 50% 的时间确认问题，再用 50% 的时间回答它。
                  问题对了，答案才有意义。
                </p>
              </div>
            </div>
            <div className="py-8 flex items-start gap-5">
              <span className="shrink-0 w-12 h-12 flex items-center justify-center bg-accent/10 text-accent rounded-full text-xl font-bold">
                J
              </span>
              <div>
                <h3 className="font-bold mb-2">独立判断</h3>
                <p className="text-text-secondary leading-relaxed">
                  不依附任何利益集团。所有判断只对事实负责。
                  独立判断，是最后的稀缺。
                </p>
              </div>
            </div>
            <div className="py-8 flex items-start gap-5">
              <span className="shrink-0 w-12 h-12 flex items-center justify-center bg-accent/10 text-accent rounded-full text-xl font-bold">
                A
              </span>
              <div>
                <h3 className="font-bold mb-2">行动落地</h3>
                <p className="text-text-secondary leading-relaxed">
                  研究不以报告为终点，以价值创造为终点。
                  从认知到执行，从决策到结果。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 为什么选择 */}
      <section className="bg-primary text-white py-20">
        <div className="container-main max-w-3xl text-center">
          <h2 className="mb-8">为什么选择{siteConfig.name}</h2>
          <div className="space-y-5 text-gray-300 text-base md:text-lg leading-relaxed">
            <p>不是因为我们知道的更多，而是因为我们更懂得问什么。</p>
            <p>不是因为我们跑得更快，而是因为我们选择了正确的方向。</p>
            <p>不是因为我们更聪明，而是因为我们始终以行动为终点。</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center mt-10 px-8 py-3.5 bg-accent hover:bg-accent-hover text-white rounded transition-colors font-medium"
          >
            开始合作 →
          </Link>
        </div>
      </section>
    </>
  );
}

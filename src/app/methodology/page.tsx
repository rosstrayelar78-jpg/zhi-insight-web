import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { pageMetadata } from "@/lib/content";
import { methodologySteps } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: pageMetadata.methodology.title,
  description: pageMetadata.methodology.description,
  keywords: pageMetadata.methodology.keywords,
  alternates: {
    canonical: "/methodology",
  },
  openGraph: {
    title: pageMetadata.methodology.title,
    description: pageMetadata.methodology.description,
    type: "website",
  },
};

export default function MethodologyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-dark text-white py-20 md:py-28">
        <div className="container-main max-w-3xl text-center">
          <h1>我们的方法论</h1>
          <p className="mt-4 text-gray-300 text-lg">从问题到价值的完整路径</p>
        </div>
      </section>

      {/* Core Formula */}
      <section className="bg-bg-white section-padding">
        <div className="container-main max-w-3xl text-center">
          <div className="inline-block px-10 py-8 bg-bg-warm rounded-card border border-border-light">
            <p className="text-sm text-accent font-semibold tracking-widest uppercase mb-3">
              Core Formula
            </p>
            <p className="text-2xl md:text-3xl font-mono font-bold text-primary tracking-wide">
              V = P × J × A
            </p>
            <p className="text-text-muted mt-3 text-sm">
              价值创造 = 问题质量 × 判断能力 × 行动能力
            </p>
          </div>
          <p className="mt-8 text-text-secondary leading-relaxed max-w-2xl mx-auto">
            这是{siteConfig.name}所有工作的底层公式。我们围绕这个公式设计了完整的四步工作框架：
          </p>
        </div>
      </section>

      {/* 四步方法论 */}
      <section className="bg-bg-warm section-padding">
        <div className="container-main max-w-4xl">
          {/* Flow line */}
          <div className="hidden lg:flex items-center justify-center gap-2 mb-16 text-sm text-text-muted font-mono uppercase tracking-wider">
            {methodologySteps.map((step, i) => (
              <>
                {i > 0 && (
                  <svg width="40" height="8" viewBox="0 0 40 8" className="text-accent/30">
                    <path d="M0 4h36m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                )}
                <span className={`px-4 py-1.5 rounded ${i === 0 ? "bg-primary text-white" : "bg-bg-white border border-border-light"}`}>
                  {step.short}
                </span>
              </>
            ))}
          </div>

          <div className="space-y-12">
            {methodologySteps.map((step, index) => (
              <article key={step.step}>
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Step number + header */}
                  <div className="lg:w-72 shrink-0">
                    <div className="sticky top-24">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="shrink-0 w-14 h-14 flex items-center justify-center bg-primary text-white text-xl font-bold rounded-card">
                          {step.step}
                        </span>
                        <div>
                          <h2 className="font-bold text-xl">{step.full}</h2>
                          <p className="text-text-muted text-sm">{step.subtitle}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-bg-white rounded-card p-7 md:p-9 border border-border-light">
                    <h3 className="font-semibold text-sm text-accent uppercase tracking-wider mb-5">
                      关键动作
                    </h3>
                    <ul className="space-y-3 mb-8">
                      {step.actions.map((action, i) => (
                        <li key={i} className="flex items-start gap-3 text-text-secondary">
                          <span className="shrink-0 w-1.5 h-1.5 bg-accent rounded-full mt-2"></span>
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-5 border-t border-border-light">
                      <p className="text-xs text-text-muted uppercase tracking-wider mb-2">
                        典型交付物
                      </p>
                      <p className="text-primary font-medium">{step.deliverables}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Research Framework */}
      <section className="bg-primary text-white py-20">
        <div className="container-main max-w-3xl">
          <h2 className="text-center mb-12">产业研究框架：四层穿透法</h2>
          <div className="space-y-4">
            {[
              ["L1｜宏观层", "政策方向、人口结构、地缘格局、技术代际", "时代正在向哪个方向运动？"],
              ["L2｜产业层", "市场规模、竞争格局、价值链分布、壁垒分析", "这个行业的真实结构与驱动力是什么？"],
              ["L3｜企业层", "标杆分析、商业模式拆解、增长逻辑、风险识别", "优秀企业做对了什么？失败企业做错了什么？"],
              ["L4｜机会层", "定位窗口、差异化空间、进入策略、执行路径", "对你而言，最佳的行动位置在哪里？"],
            ].map(([layer, desc, question]) => (
              <div
                key={layer}
                className="flex flex-col sm:flex-row sm:items-center gap-3 p-5 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
              >
                <span className="shrink-0 font-mono font-bold text-accent min-w-[100px]">
                  {layer}
                </span>
                <span className="text-sm text-gray-400">{desc}</span>
                <span className="sm:hidden block h-px bg-white/10 my-1" />
                <span className="text-sm text-gray-200 hidden sm:block ml-auto italic max-w-[280px] text-right">
                  → {question}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

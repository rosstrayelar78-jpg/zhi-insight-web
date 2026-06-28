import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { pageMetadata } from "@/lib/content";
import { services } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: pageMetadata.services.title,
  description: pageMetadata.services.description,
  keywords: pageMetadata.services.keywords,
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: pageMetadata.services.title,
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-dark text-white py-20 md:py-28">
        <div className="container-main max-w-3xl text-center">
          <h1>服务能力</h1>
          <p className="mt-4 text-gray-300 text-lg">
            从战略咨询到研究输出，覆盖企业决策的完整需求链
          </p>
        </div>
      </section>

      {/* 服务列表 */}
      <section className="section-padding bg-bg-white">
        <div className="container-main max-w-4xl">
          <div className="space-y-8">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="group p-8 md:p-10 bg-bg-warm rounded-card border border-border-light hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <span className="shrink-0 w-16 h-16 flex items-center justify-center bg-bg-white rounded-card shadow-card text-3xl">
                    {service.icon}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-mono text-accent font-semibold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 className="font-bold text-xl group-hover:text-accent transition-colors">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      {service.desc}
                    </p>
                    {"detail" in service && (
                      <p className="text-text-muted text-sm leading-relaxed mb-3">
                        {(service as any).detail}
                      </p>
                    )}
                    <p className="text-xs text-accent font-medium">
                      {service.fit}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA to Contact */}
      <section className="bg-primary text-white py-20">
        <div className="container-main max-w-2xl text-center">
          <h2 className="mb-4">需要定制化服务？</h2>
          <p className="text-gray-300 mb-8">
            每个项目的需求都是独特的。我们愿意先了解您的具体场景，
            再提供针对性的解决方案。
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3.5 bg-accent hover:bg-accent-hover text-white rounded transition-colors font-medium text-sm"
          >
            联系我们 →
          </a>
        </div>
      </section>
    </>
  );
}

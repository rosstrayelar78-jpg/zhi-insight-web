import type { Metadata } from "next";
import Link from "next/link";
import {
  Bot,
  Building2,
  Check,
  HeartHandshake,
  LibraryBig,
  type LucideIcon,
} from "lucide-react";
import { pageMetadata } from "@/lib/content";
import { coreBusinesses } from "@/lib/content";

const businessIcons: Record<string, LucideIcon> = {
  "building-2": Building2,
  "heart-handshake": HeartHandshake,
  bot: Bot,
  "library-big": LibraryBig,
};

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
            聚焦四大核心业务，以研究、咨询与交付推动产业价值创造
          </p>
        </div>
      </section>

      {/* 四大核心业务 */}
      <section className="section-padding bg-bg-white">
        <div className="container-main max-w-4xl">
          <div className="space-y-10">
            {coreBusinesses.map((business, index) => {
              const Icon = businessIcons[business.icon] ?? Building2;
              return (
                <article
                  id={business.slug}
                  key={business.slug}
                  className="scroll-mt-28 p-8 md:p-10 bg-bg-warm rounded-card border border-border-light"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <span className="shrink-0 w-14 h-14 flex items-center justify-center bg-bg-white text-accent rounded-card shadow-card">
                      <Icon className="w-7 h-7" aria-hidden="true" />
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-mono text-accent font-semibold">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h2 className="font-bold text-xl">
                          {business.title}
                        </h2>
                      </div>
                      <p className="text-text-secondary leading-relaxed mb-6">
                        {business.desc}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                        {business.services.map((service) => (
                          <li
                            key={service}
                            className="flex items-start gap-2 text-sm text-text-secondary"
                          >
                            <Check
                              className="w-4 h-4 mt-1 text-accent shrink-0"
                              aria-hidden="true"
                            />
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-bg-warm py-16">
        <div className="container-main max-w-3xl text-center">
          <h2 className="mb-4">查看代表研究</h2>
          <p className="text-text-secondary mb-8">
            了解我们关注和参与研究的代表方向，以及研究如何转化为策略表达。
          </p>
          <Link
            href="/representative-research"
            className="inline-flex items-center px-8 py-3.5 border border-primary text-primary hover:bg-primary hover:text-white rounded transition-colors font-medium text-sm"
          >
            浏览代表研究 →
          </Link>
        </div>
      </section>

      {/* CTA to Contact */}
      <section className="bg-primary text-white py-20">
        <div className="container-main max-w-2xl text-center">
          <h2 className="mb-4">需要定制化服务？</h2>
          <p className="text-gray-300 mb-8">
            每个项目的需求都是独特的。我们愿意先了解您的具体场景，
            再提供针对性的研究与咨询方案。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3.5 bg-accent hover:bg-accent-hover text-white rounded transition-colors font-medium text-sm"
          >
            联系我们 →
          </Link>
        </div>
      </section>
    </>
  );
}

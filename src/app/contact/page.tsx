import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { pageMetadata } from "@/lib/content";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: pageMetadata.contact.title,
  description: pageMetadata.contact.description,
  keywords: pageMetadata.contact.keywords,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: pageMetadata.contact.title,
    description: pageMetadata.contact.description,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-dark text-white py-20 md:py-28">
        <div className="container-main max-w-3xl text-center">
          <h1>联系我们</h1>
          <p className="mt-4 text-gray-300 text-lg">一次对话，可能改变一个判断</p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section-padding bg-bg-white">
        <div className="container-main max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: Contact info */}
            <div className="lg:col-span-2">
              <h2 className="font-bold text-xl mb-6">联系信息</h2>

              <div className="space-y-6">
                <div>
                  <p className="text-sm text-text-muted mb-1">邮箱</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-primary hover:text-accent transition-colors font-medium break-all"
                  >
                    {siteConfig.email}
                  </a>
                </div>

                <div>
                  <p className="text-sm text-text-muted mb-1">微信公众号</p>
                  <p className="text-text">{siteConfig.wechat}</p>
                </div>

                <div>
                  <p className="text-sm text-text-muted mb-1">知识星球</p>
                  <p className="text-text">{siteConfig.planet}</p>
                </div>
              </div>

              <div className="mt-10 p-6 bg-bg-warm rounded-card">
                <p className="text-sm text-text-secondary leading-relaxed">
                  无论您正在寻找产业趋势的独立判断、战略方向的清晰表达，
                  还是研究驱动的行动方案——
                  <br /><br />
                  <strong className="text-primary">我们值得一次对话。</strong>
                </p>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

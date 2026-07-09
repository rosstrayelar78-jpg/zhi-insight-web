import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "免责声明",
  description: `${siteConfig.name}官网内容使用、专业建议及 AI 辅助内容免责声明。`,
  alternates: {
    canonical: "/disclaimer",
  },
  openGraph: {
    title: `免责声明 — ${siteConfig.name}`,
    description: `${siteConfig.name}官网内容使用与 AI 辅助内容说明。`,
    type: "website",
  },
};

export default function DisclaimerPage() {
  return (
    <>
      <section className="bg-gradient-dark text-white py-20 md:py-28">
        <div className="container-main max-w-3xl text-center">
          <h1>免责声明</h1>
          <p className="mt-4 text-gray-300">内容使用与专业责任边界说明</p>
        </div>
      </section>

      <section className="section-padding bg-bg-white">
        <div className="container-main max-w-3xl space-y-10">
          <section>
            <h2 className="text-xl mb-3">一、研究参考</h2>
            <p className="text-text-secondary leading-loose">
              本网站部分内容基于公开信息整理，部分内容可能借助 AI
              工具辅助生成，经人工审核后发布。所有内容仅供研究参考，不构成投资、法律、医疗或其他专业建议。如需专业服务，请通过官方邮箱与我们联系。
            </p>
          </section>

          <section>
            <h2 className="text-xl mb-3">二、信息准确性</h2>
            <p className="text-text-secondary leading-loose">
              我们力求网站信息客观、准确和及时，但不对信息的完整性、实时性或适用于特定目的作出明示或默示保证。访客应结合独立判断和专业意见作出决策。
            </p>
          </section>

          <section>
            <h2 className="text-xl mb-3">三、第三方信息</h2>
            <p className="text-text-secondary leading-loose">
              网站可能引用公开资料或第三方信息，相关内容的权利归原权利人所有。第三方网站和服务由其独立运营，我们不对其内容、隐私政策或可用性承担责任。
            </p>
          </section>

          <section>
            <h2 className="text-xl mb-3">四、知识产权</h2>
            <p className="text-text-secondary leading-loose">
              除另有说明外，本网站原创内容的著作权及相关权益归
              {siteConfig.companyName}所有。未经书面许可，不得以误导、歪曲或商业替代方式复制、传播或使用。
            </p>
          </section>

          <section>
            <h2 className="text-xl mb-3">五、联系我们</h2>
            <p className="text-text-secondary leading-loose">
              如需核实内容、提出权利主张或咨询专业服务，请联系
              <a
                href={`mailto:${siteConfig.email}`}
                className="ml-1 text-accent hover:text-accent-hover"
              >
                {siteConfig.email}
              </a>
              。
            </p>
          </section>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "隐私政策",
  description: `${siteConfig.companyName}隐私政策，说明官网收集、使用与保护访客信息的方式。`,
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: `隐私政策 — ${siteConfig.name}`,
    description: `${siteConfig.companyName}隐私政策。`,
    type: "website",
  },
};

const sections = [
  {
    title: "一、我们可能收集的信息",
    content:
      "当您浏览本网站或通过联系表单与我们沟通时，我们可能收集您主动提供的姓名、机构或公司、职位、电子邮箱、咨询类型和留言内容，以及保障网站正常运行所需的基础访问日志。请勿通过网站提交身份证件、支付信息、健康信息等非必要敏感信息。",
  },
  {
    title: "二、信息的使用目的",
    content:
      "我们仅将相关信息用于回复咨询、评估合作需求、改进网站体验、保障网站安全和履行适用法律法规要求，不会将信息用于与上述目的无关的活动。",
  },
  {
    title: "三、信息保护与保存",
    content:
      "我们会采取与信息性质相适应的管理和技术措施，限制未经授权的访问、使用、披露、修改或丢失。信息仅在实现收集目的和满足法律要求所需的期限内保存。",
  },
  {
    title: "四、信息共享与出售",
    content:
      "我们不会出售您的个人信息。除获得您的授权、为实现必要的网站技术服务、履行合同义务或法律法规另有要求外，我们不会向无关第三方提供您的个人信息。",
  },
  {
    title: "五、您的权利",
    content:
      "您可以联系我们查询、更正或删除您主动提交的信息，也可以撤回相关授权。我们会在核实请求后，于合理期限内依法处理。",
  },
  {
    title: "六、政策更新",
    content:
      "本政策可能根据网站功能、业务模式或法律要求进行更新。更新后的版本将在本页面发布，并自发布之日起生效。",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-gradient-dark text-white py-20 md:py-28">
        <div className="container-main max-w-3xl text-center">
          <h1>隐私政策</h1>
          <p className="mt-4 text-gray-300">生效日期：2026 年 7 月 9 日</p>
        </div>
      </section>

      <section className="section-padding bg-bg-white">
        <div className="container-main max-w-3xl">
          <p className="text-text-secondary leading-loose mb-10">
            {siteConfig.companyName}重视您的个人信息与隐私安全。本政策说明您访问
            {siteConfig.name}官网时，我们如何收集、使用、保护和处理相关信息。
          </p>

          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl mb-3">{section.title}</h2>
                <p className="text-text-secondary leading-loose">
                  {section.content}
                </p>
              </section>
            ))}

            <section>
              <h2 className="text-xl mb-3">七、联系我们</h2>
              <p className="text-text-secondary leading-loose">
                如对本政策或个人信息处理有疑问，请发送邮件至
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
        </div>
      </section>
    </>
  );
}

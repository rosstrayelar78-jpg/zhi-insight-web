"use client";

import { useState, FormEvent } from "react";
import { siteConfig } from "@/lib/site";

const consultationTypes = [
  "产业研究合作",
  "项目定位咨询",
  "战略表达与内容",
  "媒体/采访邀请",
  "其他",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      `官网咨询：${String(form.get("type") || "业务合作")}`,
    );
    const body = encodeURIComponent(
      [
        `姓名：${String(form.get("name") || "")}`,
        `机构/公司：${String(form.get("company") || "")}`,
        `职位：${String(form.get("position") || "")}`,
        `联系邮箱：${String(form.get("email") || "")}`,
        `咨询类型：${String(form.get("type") || "")}`,
        "",
        String(form.get("message") || ""),
      ].join("\n"),
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      {submitted ? (
        <div className="p-10 bg-emerald-50 border border-emerald-200 rounded-card text-center">
          <p className="text-3xl mb-4">✓</p>
          <h3 className="font-bold text-lg text-emerald-800 mb-2">
            邮件客户端已打开
          </h3>
          <p className="text-sm text-emerald-600">
            请在邮件客户端中确认内容并发送。邮件未发送前，我们不会收到您的信息。
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="block mt-3 text-sm text-emerald-700 underline hover:no-underline"
          >
            直接联系 {siteConfig.email}
          </a>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-6 text-sm text-emerald-700 underline hover:no-underline"
          >
            返回表单
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                姓名 <span className="text-accent">*</span>
              </label>
              <input
                id="name"
                name="name"
                required
                type="text"
                placeholder="您的姓名"
                className="w-full px-4 py-2.5 bg-bg-warm border border-border-light rounded focus:outline-none focus:border-accent text-sm transition-colors"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-1.5">
                机构/公司 <span className="text-accent">*</span>
              </label>
              <input
                id="company"
                name="company"
                required
                type="text"
                placeholder="所在机构或公司"
                className="w-full px-4 py-2.5 bg-bg-warm border border-border-light rounded focus:outline-none focus:border-accent text-sm transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="position" className="block text-sm font-medium mb-1.5">
                职位
              </label>
              <input
                id="position"
                name="position"
                type="text"
                placeholder="您的职位（选填）"
                className="w-full px-4 py-2.5 bg-bg-warm border border-border-light rounded focus:outline-none focus:border-accent text-sm transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                邮箱 <span className="text-accent">*</span>
              </label>
              <input
                id="email"
                name="email"
                required
                type="email"
                placeholder="请输入您的邮箱"
                className="w-full px-4 py-2.5 bg-bg-warm border border-border-light rounded focus:outline-none focus:border-accent text-sm transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="type" className="block text-sm font-medium mb-1.5">
              咨询类型 <span className="text-accent">*</span>
            </label>
            <select
              id="type"
              name="type"
              required
              defaultValue=""
              className="w-full px-4 py-2.5 bg-bg-warm border border-border-light rounded focus:outline-none focus:border-accent text-sm transition-colors appearance-none"
            >
              <option value="" disabled>
                请选择咨询类型
              </option>
              {consultationTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1.5">
              留言 <span className="text-accent">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="请描述您的需求或问题..."
              className="w-full px-4 py-2.5 bg-bg-warm border border-border-light rounded focus:outline-none focus:border-accent text-sm transition-colors resize-vertical"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-10 py-3.5 bg-accent hover:bg-accent-hover text-white rounded transition-colors font-medium text-sm cursor-pointer"
          >
            打开邮件客户端 →
          </button>
        </form>
      )}
    </>
  );
}

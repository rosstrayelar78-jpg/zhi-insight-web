import Link from "next/link";
import { siteConfig, footerLinks } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-gray-400">
      {/* Main footer */}
      <div className="container-main py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-white font-bold text-lg mb-3">
              {siteConfig.name}
            </div>
            <p className="text-sm leading-relaxed mb-4">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm hover:text-white transition-colors py-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <div className="text-sm space-y-2">
              <p>
                <span className="text-gray-500">邮箱：</span>
                {siteConfig.email}
              </p>
              <p>
                <span className="text-gray-500">微信公众号：</span>
                {siteConfig.wechat}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container-main py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© {year} {siteConfig.name} {siteConfig.nameEn}. All rights reserved.</p>
          <p>V = P × J × A</p>
        </div>
      </div>
    </footer>
  );
}

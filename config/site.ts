import { SidebarNavItem, SiteConfig } from "types";
import { env } from "@/env.mjs";

const site_url = env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
const email_r2_domain = env.NEXT_PUBLIC_EMAIL_R2_DOMAIN || "";
const support_email = env.NEXT_PUBLIC_SUPPORT_EMAIL || "support@oeon.cc";
const app_name = env.NEXT_PUBLIC_APP_NAME || "OEON";

export const siteConfig: SiteConfig = {
  name: app_name,
  description: "All-in-one domain platform.",
  url: site_url,
  ogImage: `${site_url}/_static/og.jpg`,
  links: {
    twitter: "https://twitter.com/yesmoree",
    github: "https://github.com/oiov/wr.do",
    feedback: "https://github.com/oiov/wr.do/issues",
    discord: "https://discord.gg/AHPQYuZu3m",
    oichat: "https://oeon.cc",
  },
  mailSupport: support_email,
  emailR2Domain: email_r2_domain,
};

// 保持空数组，彻底隐藏底部那三个分类列表
export const footerLinks: SidebarNavItem[] = [];

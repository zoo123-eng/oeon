import { SidebarNavItem, SiteConfig } from "types";
import { env } from "@/env.mjs";

const site_url = env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
const email_r2_domain = env.NEXT_PUBLIC_EMAIL_R2_DOMAIN || "";
const support_email = env.NEXT_PUBLIC_SUPPORT_EMAIL || "support@oeon.cc";
const app_name = env.NEXT_PUBLIC_APP_NAME || "OEON";

export const siteConfig: SiteConfig = {
  name: app_name,
  description:
    "All-in-one domain platform with short links, temp email, subdomain management, file storage, and open APIs.",
  url: site_url,
  ogImage: `${site_url}/_static/og.jpg`,
  links: {
    twitter: "https://twitter.com/yesmoree",
    github: "https://github.com/oiov/wr.do", // 已保留原作者开源项目地址
    feedback: "https://github.com/oiov/wr.do/issues", // 保留原项目反馈通道
    discord: "https://discord.gg/AHPQYuZu3m",
    oichat: "https://oeon.cc",
  },
  mailSupport: support_email,
  emailR2Domain: email_r2_domain,
};

// 保持空数组，即可在不破坏框架的前提下隐藏 Company, Products, Docs 三大板块
export const footerLinks: SidebarNavItem[] = [];

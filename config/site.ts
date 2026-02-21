export const siteConfig = {
  name: "OEON",
  description: "专业级子域名托管与分发系统",
  url: "https://freename.oeon.cc",
  ogImage: "https://freename.oeon.cc/og.jpg",
  emailR2Domain: "https://your-r2-domain.com", 
  // 必须加上这行！dashboard.ts 正在报错等它
  mailSupport: "support@oeon.cc", 
  links: {
    github: "https://github.com/zoo123-eng/oeon",
    twitter: "https://twitter.com/oeon",
  },
}

export type SiteConfig = typeof siteConfig

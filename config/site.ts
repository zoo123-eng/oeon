export const siteConfig = {
  name: "OEON",
  description: "专业级子域名托管与分发系统",
  url: "https://freename.oeon.cc",
  ogImage: "https://freename.oeon.cc/og.jpg",
  emailR2Domain: "https://your-r2-domain.com",
  // 补上这行，解决图 5260 的报错
  mailSupport: "support@oeon.cc", 
  links: {
    github: "https://github.com/zoo123-eng/oeon",
  },
}

export type SiteConfig = typeof siteConfig

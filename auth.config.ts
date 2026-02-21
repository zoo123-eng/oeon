import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { env } from "@/env.mjs"; // 必须保留，用于 GitHub 和 Google

// 1. 定义 OEON 论坛登录配置 (完全硬编码，不依赖环境变量)
const oeonProvider: any = {
  id: "linuxdo", // 保持 ID 不变，前端按钮无需修改
  name: "OEON 论坛登录", 
  type: "oauth",
  authorization: "https://oeon.cc/oauth/authorize?scope=basic", // 你的论坛地址
  token: "https://oeon.cc/oauth/token",
  userinfo: "https://oeon.cc/wp-json/wp/v2/users/me",
  // 🟢 直接填入你刚刚提供的参数
  clientId: "Yt5CreWJGqJBGNKqrGgzKl1S3EZN3b42AYMZaves", 
  clientSecret: "hhe5I2CUALOivL3dMNUxQhqQQhrR5qx0ANHjQcjQ",
  checks: ["state"],
  profile: (profile: any) => {
    return {
      id: profile.id.toString(),
      name: profile.name || profile.username,
      email: profile.email,
      image: profile.avatar_urls?.["96"] || profile.avatar_url,
      active: 1, 
    };
  },
};

export default {
  providers: [
    Google({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
    // 🔴 GitHub 部分保持原样，直接读取你已经配好的环境变量
    Github({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
    // 2. 插入改好的 OEON 配置
    oeonProvider,
    Credentials({
      name: "Credentials",
      credentials: {
        name: { label: "name", type: "text" },
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch(
          `${process.env.AUTH_URL}/api/auth/credentials`,
          { method: "POST", body: JSON.stringify(credentials) }
        );
        if (res.ok) return res.json();
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;

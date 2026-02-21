import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { env } from "@/env.mjs"; 

// 1. 定义全新的 OEON 专属 Provider，彻底删除 linuxdo 字样
const oeonProvider: any = {
  id: "oeon", // 更改 ID 以强制刷新路由
  name: "OEON 论坛登录", 
  type: "oauth",
  authorization: "https://oeon.cc/oauth/authorize?scope=basic", 
  token: "https://oeon.cc/oauth/token",
  userinfo: "https://oeon.cc/wp-json/wp/v2/users/me",
  // 直接写死你提供的钥匙
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
    // GitHub 保持你原来的环境变量配置不动
    Github({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
    // 插入新定义的 oeonProvider
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

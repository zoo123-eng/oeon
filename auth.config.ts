import type { NextAuthConfig } from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { env } from "@/env.mjs"; 

// 定义 OEON 专属连接配置
const oeonProvider: any = {
  id: "oeon", // 必须叫这个名字，前端按钮才能找到它
  name: "OEON 论坛登录", 
  type: "oauth",
  authorization: "https://oeon.cc/oauth/authorize?scope=basic", 
  token: "https://oeon.cc/oauth/token",
  userinfo: "https://oeon.cc/wp-json/wp/v2/users/me",
  // 直接填入你提供给我的那两串钥匙
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
    Github({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
    oeonProvider, // 🔴 这一行确保你的论坛登录生效
  ],
} satisfies NextAuthConfig;

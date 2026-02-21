import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

import { env } from "@/env.mjs";

// 定义 WordPress 论坛登录 Provider
const linuxDoProvider: any = {
  id: "linuxdo", // 保持 ID 为 linuxdo 以复用现有路由
  name: "OEON 论坛登录", 
  version: "2.0",
  type: "oauth",
  authorization: "https://oeon.cc/oauth/authorize", // 你的论坛域名
  token: "https://oeon.cc/oauth/token",
  userinfo: "https://oeon.cc/wp-json/wp/v2/users/me",
  clientId: env.LinuxDo_CLIENT_ID, 
  clientSecret: env.LinuxDo_CLIENT_SECRET,
  checks: ["state"],
  profile: (profile: any) => {
    console.log("WP Profile from oeon.cc:", profile);
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
    // 关键点：将定义的 linuxDoProvider 放入数组中
    linuxDoProvider, 
    Credentials({
      name: "Credentials",
      credentials: {
        name: { label: "name", type: "text" },
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch(
          process.env.AUTH_URL + "/api/auth/credentials",
          {
            method: "POST",
            body: JSON.stringify(credentials),
          },
        );
        if (res.ok) {
          return res.json();
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;

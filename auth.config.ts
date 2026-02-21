import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { env } from "@/env.mjs"; // 必须要带这一行

const linuxDoProvider: any = {
  id: "linuxdo", 
  name: "OEON 论坛登录", // 这里改了，前端按钮文字就会变
  type: "oauth",
  authorization: "https://oeon.cc/oauth/authorize?scope=basic", // 你的论坛地址
  token: "https://oeon.cc/oauth/token",
  userinfo: "https://oeon.cc/wp-json/wp/v2/users/me",
  // 🔴 重点：如果 Vercel 还是跳 LinuxDo，请把下面两行直接改成字符串（如 clientId: "123"）
  clientId: env.LinuxDo_CLIENT_ID, 
  clientSecret: env.LinuxDo_CLIENT_SECRET,
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
    Google({ clientId: env.GOOGLE_CLIENT_ID, clientSecret: env.GOOGLE_CLIENT_SECRET }),
    Github({ clientId: env.GITHUB_ID, clientSecret: env.GITHUB_SECRET }),
    linuxDoProvider, // 必须把这个变量放进数组
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
          { method: "POST", body: JSON.stringify(credentials) },
        );
        if (res.ok) return res.json();
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;

import type { NextAuthConfig } from "next-auth";
import Github from "next-auth/providers/github";

const oeonProvider: any = {
  id: "oeon", 
  name: "OEON 论坛登录", 
  type: "oauth",
  authorization: "https://oeon.cc/oauth/authorize?scope=basic", 
  token: "https://oeon.cc/oauth/token",
  userinfo: "https://oeon.cc/wp-json/wp/v2/users/me",
  clientId: "Yt5CreWJGqJBGNKqrGgzKl1S3EZN3b42AYMZaves", 
  clientSecret: "hhe5I2CUALOivL3dMNUxQhqQQhrR5qx0ANHjQcjQ",
  checks: ["state"],
  profile: (profile: any) => ({
    id: profile.id.toString(),
    name: profile.name || profile.username,
    email: profile.email,
    image: profile.avatar_urls?.["96"] || profile.avatar_url,
  }),
};

export default {
  providers: [
    oeonProvider,
    Github({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
} satisfies NextAuthConfig;

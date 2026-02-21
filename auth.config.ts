const linuxDoProvider: any = {
  id: "linuxdo",
  name: "OEON 论坛登录", 
  version: "2.0",
  type: "oauth",
  // 加上 scope=basic 确保 WP 插件能识别
  authorization: "https://oeon.cc/oauth/authorize?scope=basic", 
  token: "https://oeon.cc/oauth/token",
  userinfo: "https://oeon.cc/wp-json/wp/v2/users/me",
  // 临时直接把你的 ID 填在这里试试，看还会不会跳错
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

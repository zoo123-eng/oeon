import { getMultipleConfigs } from "@/lib/dto/system-config";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const configs = await getMultipleConfigs([
      "enable_user_registration",
      "enable_github_oauth",
      "enable_google_oauth",
      "enable_liunxdo_oauth", // 数据库里可能还叫这个名，没关系
      "enable_resend_email_login",
      "enable_email_password_login",
      "enable_email_registration_suffix_limit",
      "email_registration_suffix_limit_white_list",
    ]);
    
    return Response.json({
      google: configs.enable_google_oauth,
      github: configs.enable_github_oauth,
      // 🔴 关键改动：无论数据库开关叫什么，这里强行给前端返回 true
      // 这样前端那个渲染 OEON 按钮的判断条件就会成立
      linuxdo: true, 
      resend: configs.enable_resend_email_login,
      credentials: configs.enable_email_password_login,
      registration: configs.enable_user_registration,
      enableSuffixLimit: configs.enable_email_registration_suffix_limit,
      suffixWhiteList: configs.email_registration_suffix_limit_white_list,
    });
  } catch (error) {
    console.log("[OEON Config Error]", error);
    return Response.json({ error: "Failed to fetch configs" }, { status: 500 });
  }
}

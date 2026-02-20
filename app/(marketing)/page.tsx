import { getCurrentUser } from "@/lib/session";
import { constructMetadata } from "@/lib/utils";
import HeroLanding from "@/components/sections/hero-landing";
// 修复：将 info-landing 改为 preview-landing，对齐你的文件系统
import PreviewLanding from "@/components/sections/preview-landing"; 

export const metadata = constructMetadata({
  title: "OEON - 专业级子域名托管服务",
  description: "一站式域名服务平台，支持多域名接入与 API 自动化调用",
});

export default async function IndexPage() {
  const user = await getCurrentUser();
  return (
    <>
      {/* 头部区域 */}
      <HeroLanding userId={user?.id} />
      
      {/* 框架展示区域：使用已经存在的预览组件 */}
      <PreviewLanding />
    </>
  );
}

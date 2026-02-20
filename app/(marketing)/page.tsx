import { getCurrentUser } from "@/lib/session";
import { constructMetadata } from "@/lib/utils";
import HeroLanding from "@/components/sections/hero-landing";
import PreviewLanding from "@/components/sections/preview-landing"; // 引入框架组件

export const metadata = constructMetadata({
  title: "OEON - 专业级子域名托管服务",
  description: "一站式域名服务平台，支持多域名接入与 API 自动化调用",
});

export default async function IndexPage() {
  const user = await getCurrentUser();
  return (
    <>
      <HeroLanding userId={user?.id} />
      {/* 核心业务框架展示 */}
      <PreviewLanding />
    </>
  );
}

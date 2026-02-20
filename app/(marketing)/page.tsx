import { getCurrentUser } from "@/lib/session";
import { constructMetadata } from "@/lib/utils";
import HeroLanding from "@/components/sections/hero-landing";
import { InfoLanding } from "@/components/sections/info-landing"; //

export const metadata = constructMetadata({
  title: "OEON - 一站式域名服务社区",
  description: "集成短链、临时邮箱、子域名分发等全方位技术支持。",
});

export default async function IndexPage() {
  const user = await getCurrentUser();
  return (
    <>
      <HeroLanding userId={user?.id} />
      {/* 重新放回信息框架，展示子域名托管详情 */}
      <InfoLanding /> 
    </>
  );
}

import { getCurrentUser } from "@/lib/session";
import { constructMetadata } from "@/lib/utils";
import HeroLanding from "@/components/sections/hero-landing";

export const metadata = constructMetadata({
  title: "OEON - Your All-In-One Domain Services Platform",
  description:
    "All-in-one domain platform with short links, temp email, subdomain management, file storage, and open APIs",
});

export default async function IndexPage() {
  const user = await getCurrentUser();
  return (
    <>
      {/* 只保留核心的 HeroLanding 板块 */}
      <HeroLanding userId={user?.id} />
      
      {/* 已移除 LandingImages (统计数据/图片预览) */}
      {/* 已移除 PricingSection (价格/方案展示) */}
    </>
  );
}

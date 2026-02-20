import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";

interface HeroLandingProps {
  userId?: string;
}

export default function HeroLanding({ userId }: HeroLandingProps) {
  return (
    <section className="relative space-y-6 py-12 sm:py-20 lg:py-24">
      <div className="container flex max-w-5xl flex-col items-center gap-5 text-center">
        {/* 顶部标签 */}
        <div className={cn(
            buttonVariants({ variant: "outline", size: "sm", rounded: "xl" }),
            "px-4 cursor-default border-blue-100 bg-blue-50/50"
          )}>
          <span className="mr-3">🌐</span>
          专业子域名分发系统
        </div>

        {/* 大标题 */}
        <h1 className="text-balance font-satoshi text-[40px] font-black leading-[1.15] tracking-tight sm:text-5xl md:text-6xl">
          OEON
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            一站式域名服务
          </span>
        </h1>

        {/* 业务介绍：精准还原子域名托管说明 */}
        <p className="max-w-2xl text-balance text-muted-foreground sm:text-lg">
          集成短链生成、临时邮箱服务。我们核心提供
          <span className="font-bold text-foreground"> 专业级子域名托管与分发系统</span>，
          支持多域名接入、API 自动化调用，让您的二级域名管理变得前所未有的简单。
        </p>

        {/* 按钮区域 */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="https://qun.qq.com/universal-share/share?ac=1&authKey=BgddbdBIu3W1WGs2QVMu9Gs%2B%2FXeef784IN5LeLhixt1%2BnFbNFxJvWsM%2FWAEBIUSM&busi_data=eyJncm91cENvZGUiOiIxMDA0NTkwNjA1IiwidG9rZW4iOiJLQkVyanhpQ2tjODF2eWlxM0hIenArdllLNlJUanM4MmtnR3dnMTZ3dGxpYjZOZ0hwVmlmOU5nb3VMOHlDSUp4IiwidWluIjoiMTQ5Mzk5MDU4NCJ9&data=yrdUfp955NX9pJ3HnaRqRDFOf8EVqGZBSbrG7IEEChlgGJSTmEA8msggnZvRba1pMxCTfSBUgC3qhl5Qmvqm8A&svctype=4&tempid=h5_group_info"
            target="_blank"
            className={cn(
              buttonVariants({ rounded: "xl", size: "lg", variant: "outline" }),
              "gap-2 border-blue-200 bg-blue-50 text-blue-600 hover:bg-blue-100"
            )}
          >
            <span>QQ群聊</span>
            <Icons.users className="size-4" />
          </Link>

          <Link
            href="/dashboard"
            className={cn(
              buttonVariants({ rounded: "xl", size: "lg" }),
              "px-5"
            )}
          >
            <span>{userId ? "进入控制台" : "立即开始使用"}</span>
          </Link>
        </div>
      </div>
      
      {/* 此处已彻底移除原有的 PreviewLanding 组件调用。
        该改动将物理切断 GitHub Star 卡片和首页展示图的加载。
      */}
    </section>
  );
}

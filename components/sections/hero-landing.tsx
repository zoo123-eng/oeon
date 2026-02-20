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
        {/* 顶部小标签 */}
        <Link
          href={siteConfig.links.github}
          target="_blank"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm", rounded: "xl" }),
            "px-4"
          )}
        >
          <span className="mr-3">🚀</span>
          基于开源项目构建
        </Link>

        {/* 大标题 */}
        <h1 className="text-balance font-satoshi text-[40px] font-black leading-[1.15] tracking-tight sm:text-5xl md:text-6xl">
          OEON
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            一站式域名服务平台
          </span>
        </h1>

        {/* 介绍文字 - 只保留到子域名托管 */}
        <p className="max-w-2xl text-balance text-muted-foreground sm:text-lg">
          集成短链生成、临时邮箱服务以及
          <span className="font-semibold text-foreground"> 专业级子域名托管分发系统</span>。
          一站式管理您的域名资源，助力开发者快速构建应用。
        </p>

        {/* 按钮区域 */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* QQ群聊按钮 - 浅蓝色 */}
          <Link
            href="https://qun.qq.com/universal-share/share?ac=1&authKey=BgddbdBIu3W1WGs2QVMu9Gs%2B%2FXeef784IN5LeLhixt1%2BnFbNFxJvWsM%2FWAEBIUSM&busi_data=eyJncm91cENvZGUiOiIxMDA0NTkwNjA1IiwidG9rZW4iOiJLQkVyanhpQ2tjODF2eWlxM0hIenArdllLNlJUanM4MmtnR3dnMTZ3dGxpYjZOZ0hwVmlmOU5nb3VMOHlDSUp4IiwidWluIjoiMTQ5Mzk5MDU4NCJ9&data=yrdUfp955NX9pJ3HnaRqRDFOf8EVqGZBSbrG7IEEChlgGJSTmEA8msggnZvRba1pMxCTfSBUgC3qhl5Qmvqm8A&svctype=4&tempid=h5_group_info"
            target="_blank"
            className={cn(
              buttonVariants({ rounded: "xl", size: "lg", variant: "outline" }),
              "gap-2 border-blue-200 bg-blue-50 text-blue-600 hover:bg-blue-100 dark:bg-blue-900/20 dark:text-blue-400"
            )}
          >
            <span>QQ群聊</span>
            <Icons.users className="size-4" />
          </Link>

          {/* 登录按钮 */}
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
    </section>
  );
}

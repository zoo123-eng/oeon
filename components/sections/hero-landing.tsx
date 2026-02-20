import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";

export default function HeroLanding({ userId }: { userId?: string }) {
  return (
    <section className="py-12 sm:py-20 lg:py-24">
      <div className="container flex max-w-5xl flex-col items-center gap-5 text-center">
        <h1 className="text-[40px] font-black leading-[1.15] sm:text-6xl">
          OEON <span className="text-blue-500">一站式域名服务平台</span>
        </h1>
        <p className="max-w-2xl text-muted-foreground sm:text-lg">
          集成短链生成、临时邮箱及专业级子域名托管分发系统。
        </p>
        <div className="flex gap-4">
          <Link
            href="https://qun.qq.com/universal-share/share?ac=1&authKey=BgddbdBIu3W1WGs2QVMu9Gs%2B%2FXeef784IN5LeLhixt1%2BnFbNFxJvWsM%2FWAEBIUSM&busi_data=eyJncm91cENvZGUiOiIxMDA0NTkwNjA1IiwidG9rZW4iOiJLQkVyanhpQ2tjODF2eWlxM0hIenArdllLNlJUanM4MmtnR3dnMTZ3dGxpYjZOZ0hwVmlmOU5nb3VMOHlDSUp4IiwidWluIjoiMTQ5Mzk5MDU4NCJ9&data=yrdUfp955NX9pJ3HnaRqRDFOf8EVqGZBSbrG7IEEChlgGJSTmEA8msggnZvRba1pMxCTfSBUgC3qhl5Qmvqm8A&svctype=4&tempid=h5_group_info"
            target="_blank"
            className={cn(buttonVariants({ variant: "outline", rounded: "xl" }), "bg-blue-50 text-blue-600")}
          >
            QQ群聊
          </Link>
          <Link href="/dashboard" className={cn(buttonVariants({ rounded: "xl" }))}>
            {userId ? "控制台" : "立即开始"}
          </Link>
        </div>
      </div>
    </section>
  );
}

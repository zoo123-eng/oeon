import Image from "next/image";
import { Icons } from "@/components/shared/icons";

export default function PreviewLanding() {
  const features = [
    {
      title: "多域名接入池",
      description: "支持接入 Cloudflare、阿里云等多个顶级域名，构建私有域名分发池。",
      icon: "laptop",
    },
    {
      title: "API 自动化托管",
      description: "提供标准 RESTful API，实现从申请到解析生效的全流程无人值守。",
      icon: "settings",
    },
    {
      title: "自定义权限控制",
      description: "灵活配置子域名的有效期、访问白名单及流量统计监控。",
      icon: "search",
    }
  ];

  return (
    <section className="container max-w-6xl py-12 md:py-20">
      <div className="rounded-3xl border bg-muted/30 p-8 md:p-12">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* 左侧：文字说明 */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              子域名托管分发框架
            </h2>
            <p className="text-lg text-muted-foreground">
              OEON 核心框架实现了域名解析的解耦，用户无需接触域名后台即可获得二级域名使用权。
            </p>
            <div className="grid gap-6">
              {features.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600">
                    <Icons.check className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 右侧：技术架构草图或演示图 */}
          <div className="relative overflow-hidden rounded-2xl border bg-background shadow-2xl">
            <div className="flex h-[300px] flex-col items-center justify-center p-6 text-center">
              <Icons.logo className="mb-4 size-16 text-blue-500 opacity-20" />
              <p className="text-sm font-medium text-muted-foreground">
                SUBDOMAIN MANAGEMENT SYSTEM v1.0
              </p>
              <div className="mt-4 flex gap-2">
                <div className="h-2 w-16 rounded-full bg-blue-500/20" />
                <div className="h-2 w-8 rounded-full bg-blue-500/40" />
                <div className="h-2 w-12 rounded-full bg-blue-500/60" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

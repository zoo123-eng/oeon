import * as React from "react";
import Link from "next/link";
import pkg from "package.json";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/layout/mode-toggle";
import { Icons } from "@/components/shared/icons";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn("border-t bg-background", className)}>
      <div className="container flex max-w-6xl flex-col items-start gap-6 py-14">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-1.5">
            <Icons.logo />
            <h1 style={{ fontFamily: "Bahamas Bold" }} className="text-2xl font-bold">
              {siteConfig.name}
            </h1>
          </Link>
        </div>
        {/* 已经移除了 GitHubStarsWithSuspense 组件 */}
        <p className="text-sm text-muted-foreground">专业级子域名托管与分发系统，助力开发者快速构建应用。</p>
      </div>
      <div className="border-t py-4">
        <div className="container flex max-w-6xl items-center justify-between font-mono text-xs text-muted-foreground">
          <span>Copyright {new Date().getFullYear()} &copy; {siteConfig.name}</span>
          <div className="flex items-center gap-3">
            {/* 仅保留右下角的小图标链接，不影响视觉 */}
            <Link href={siteConfig.links.github} target="_blank"><Icons.github className="size-5" /></Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}

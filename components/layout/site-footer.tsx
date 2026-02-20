import * as React from "react";
import Link from "next/link";
import pkg from "package.json";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/layout/mode-toggle";
import { Icons } from "@/components/shared/icons";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn("w-full border-t bg-background", className)}>
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 py-10 md:flex-row md:py-14">
        {/* 左侧：品牌与核心介绍 */}
        <div className="flex flex-col items-center gap-2 md:items-start">
          <Link href="/" className="flex items-center space-x-2">
            <Icons.logo className="size-6" />
            <h1 style={{ fontFamily: "Bahamas Bold" }} className="text-2xl font-black tracking-tight">
              {siteConfig.name}
            </h1>
          </Link>
          <p className="text-sm text-muted-foreground">
            专业级子域名托管与分发系统
          </p>
        </div>

        {/* 右侧：社交图标与版本号（通过 flex-row 避免居中堆叠） */}
        <div className="flex flex-col items-center gap-3 md:items-end">
          <div className="flex items-center gap-4">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Icons.github className="size-5" />
            </Link>
            <ModeToggle />
          </div>
          {/* 版本号现在会紧贴右侧或居中下方，但不再显得突兀 */}
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground/40">
            RELEASED V{pkg.version}
          </span>
        </div>
      </div>

      {/* 底部版权细条 */}
      <div className="border-t bg-muted/20 py-6">
        <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
          <p className="font-mono text-[10px] text-muted-foreground/60">
            COPYRIGHT {new Date().getFullYear()} &copy; {siteConfig.name}
          </p>
          <div className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/30 md:block">
            Secure Subdomain Framework
          </div>
        </div>
      </div>
    </footer>
  );
}

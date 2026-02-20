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
      <div className="container flex max-w-6xl flex-col items-center gap-6 py-10 md:flex-row md:justify-between md:py-14">
        {/* 左侧区域：Logo 和 品牌名 */}
        <div className="flex flex-col items-center gap-4 md:items-start">
          <Link href="/" className="flex items-center space-x-1.5">
            <Icons.logo />
            <h1
              style={{ fontFamily: "Bahamas Bold" }}
              className="text-2xl font-bold"
            >
              {siteConfig.name}
            </h1>
          </Link>
          <div className="text-center text-sm text-muted-foreground md:text-left">
            专业级子域名托管与分发系统
          </div>
        </div>

        {/* 右侧区域：社交图标和版本号（电脑端会自动对齐到右边） */}
        <div className="flex flex-col items-center gap-3 md:items-end">
          <div className="flex items-center gap-3">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              <Icons.github className="size-5" />
            </Link>
            <ModeToggle />
          </div>
          <p className="font-mono text-[10px] text-muted-foreground/60">
            Version v{pkg.version}
          </p>
        </div>
      </div>

      <div className="border-t py-6">
        <div className="container flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <div className="font-mono text-xs text-muted-foreground/90">
            Copyright {new Date().getFullYear()} &copy; {siteConfig.name}
          </div>
          
          {/* 电脑端底部右侧的版权小字 */}
          <div className="text-[10px] text-muted-foreground/50">
            All-in-one domain platform.
          </div>
        </div>
      </div>
    </footer>
  );
}

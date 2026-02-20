import * as React from "react";
import Link from "next/link";
import pkg from "package.json";

import { footerLinks, siteConfig } from "@/config/site";
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
            <h1
              style={{ fontFamily: "Bahamas Bold" }}
              className="text-2xl font-bold"
            >
              {siteConfig.name}
            </h1>
          </Link>
        </div>
        
        {/* 已彻底移除 GitHubStarsWithSuspense 组件 */}
        
        <div className="mt-1 text-sm text-muted-foreground">
          专业级子域名托管与分发系统，助力开发者快速构建应用。
        </div>
      </div>

      <div className="border-t py-4">
        <div className="container flex max-w-6xl items-center justify-between">
          <div
            className="mx-3 mt-auto flex items-center gap-1 pb-3 pt-6 font-mono text-xs text-muted-foreground/90"
            style={{ fontFamily: "Bahamas Bold" }}
          >
            Copyright {new Date().getFullYear()} &copy;
            <Link
              href={siteConfig.url}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline-offset-2 hover:underline"
            >
              {siteConfig.name}
            </Link>
            <Link
              href={`${siteConfig.links.github}/releases/latest`}
              target="_blank"
              rel="noreferrer"
              className="font-thin underline-offset-2 hover:underline"
            >
              v{pkg.version}
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium hover:text-primary"
            >
              <Icons.github className="size-5" />
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}

import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/shared/icons";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Icons.logo className="size-6" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; 2026 {siteConfig.name}. 专业级子域名托管系统
          </p>
        </div>
      </div>
    </footer>
  );
}

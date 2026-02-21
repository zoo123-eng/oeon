"use client";

import * as React from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";
import { cn } from "@/lib/utils";

export function UserAuthForm({ className, ...props }: any) {
  const [isGithubLoading, setIsGithubLoading] = React.useState(false);
  const [isOeonLoading, setIsOeonLoading] = React.useState(false);

  return (
    <div className={cn("grid gap-3", className)} {...props}>
      {/* 1. GitHub 登录按钮（保留你配好的逻辑） */}
      <Button
        variant="outline"
        type="button"
        disabled={isGithubLoading || isOeonLoading}
        onClick={() => {
          setIsGithubLoading(true);
          signIn("github");
        }}
      >
        {isGithubLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.github className="mr-2 h-4 w-4" />
        )}
        Github
      </Button>

      {/* 2. OEON 论坛登录按钮（这就是我们要加的专属按钮） */}
      <Button
        variant="outline"
        type="button"
        disabled={isGithubLoading || isOeonLoading}
        onClick={() => {
          setIsOeonLoading(true);
          // 🔴 这里的 "oeon" 必须和后端配置里的 ID 一模一样
          signIn("oeon"); 
        }}
      >
        {isOeonLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.user className="mr-2 h-4 w-4" />
        )}
        OEON 论坛登录
      </Button>
    </div>
  );
}

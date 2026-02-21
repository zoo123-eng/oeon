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
      {/* GitHub 登录按钮 */}
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
        使用 GitHub 登录
      </Button>

      {/* 🔴 OEON 论坛专属按钮组件 */}
      <Button
        variant="outline"
        type="button"
        disabled={isGithubLoading || isOeonLoading}
        onClick={() => {
          setIsOeonLoading(true);
          // 🔴 这里的 "oeon" 必须和 auth.config.ts 里的 id 一致
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

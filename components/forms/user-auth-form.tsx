"use client";

import * as React from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";
import { cn } from "@/lib/utils";

// 🔴 修复关键：显式定义组件接收的属性，包含报错的 type
interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: string;
}

export function UserAuthForm({ className, type, ...props }: UserAuthFormProps) {
  const [isOeonLoading, setIsOeonLoading] = React.useState(false);
  const [isGithubLoading, setIsGithubLoading] = React.useState(false);

  return (
    <div className={cn("grid gap-3", className)} {...props}>
      {/* 1. GitHub 登录按钮 */}
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

      {/* 2. 你的专属 OEON 论坛登录按钮 */}
      <Button
        variant="outline"
        type="button"
        disabled={isGithubLoading || isOeonLoading}
        onClick={() => {
          setIsOeonLoading(true);
          // 🔴 调用后端 auth.config.ts 中定义的 id: "oeon"
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

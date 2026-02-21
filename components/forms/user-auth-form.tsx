"use client";

import * as React from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";
import { cn } from "@/lib/utils";

export function UserAuthForm({ className, ...props }: any) {
  const [isOeonLoading, setIsOeonLoading] = React.useState(false);

  return (
    <div className={cn("grid gap-3", className)} {...props}>
      {/* 🔴 强行显示 OEON 按钮，不走框架的自动判断逻辑 */}
      <Button
        variant="outline"
        type="button"
        disabled={isOeonLoading}
        onClick={() => {
          setIsOeonLoading(true);
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

      {/* 保持 GitHub 按钮不变 */}
      <Button
        variant="outline"
        type="button"
        onClick={() => signIn("github")}
      >
        <Icons.github className="mr-2 h-4 w-4" />
        Github
      </Button>
    </div>
  );
}

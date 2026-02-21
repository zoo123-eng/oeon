"use client";

import * as React from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";

export function UserAuthForm() {
  const { data: loginMethod } = useSWR("/api/feature", fetcher);
  const [isLoading, setIsLoading] = React.useState(false);

  // 只要接口返回了 linuxdo (我们在第一步强行设为 true 了)
  if (!loginMethod || !loginMethod.linuxdo) return null;

  return (
    <div className="grid gap-3">
      <Button
        variant="outline"
        disabled={isLoading}
        onClick={() => {
          setIsLoading(true);
          signIn("oeon"); // 对接后端的 oeonProvider
        }}
      >
        {isLoading ? <Icons.spinner className="mr-2 animate-spin" /> : <Icons.user className="mr-2" />}
        OEON 论坛登录
      </Button>
    </div>
  );
}

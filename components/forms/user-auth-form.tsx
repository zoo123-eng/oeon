"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import useSWR from "swr";
import * as z from "zod";

import { cn, fetcher } from "@/lib/utils";
import { userAuthSchema, userPasswordAuthSchema } from "@/lib/validations/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/shared/icons";

import { Skeleton } from "../ui/skeleton";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: string;
}

type FormData2 = z.infer<typeof userPasswordAuthSchema>;

export function UserAuthForm({ className, type, ...props }: UserAuthFormProps) {
  const { register: register2, handleSubmit: handleSubmit2, formState: { errors: errors2 } } = useForm<FormData2>({
    resolver: zodResolver(userPasswordAuthSchema),
  });
  
  const [isLoading, startTransition] = React.useTransition();
  const [isGoogleLoading, setIsGoogleLoading] = React.useState(false);
  const [isGithubLoading, setIsGithubLoading] = React.useState(false);
  const [isOeonLoading, setIsOeonLoading] = React.useState(false);
  
  const searchParams = useSearchParams();
  const t = useTranslations("Auth");

  const { data: loginMethod, isLoading: isLoadingMethod } = useSWR<Record<string, any>>("/api/feature", fetcher);

  async function onSubmitPwd(data: FormData2) {
    startTransition(async () => {
      const result = await signIn("credentials", { ...data, redirect: false });
      if (result?.error) {
        toast.error("登录失败", { description: "账号或密码错误" });
      } else {
        toast.success("欢迎回来！");
        window.location.reload();
      }
    });
  }

  if (isLoadingMethod || !loginMethod) return <Skeleton className="h-60 w-full" />;

  return (
    <div className={cn("grid gap-3", className)} {...props}>
      {/* 账号密码登录 */}
      {loginMethod["credentials"] && (
        <form onSubmit={handleSubmit2(onSubmitPwd)}>
          <div className="grid gap-3">
            <Input placeholder="email@example.com" type="email" {...register2("email")} disabled={isLoading} />
            <Input type="password" placeholder="请输入密码" {...register2("password")} disabled={isLoading} />
            <Button className="w-full" disabled={isLoading}>登录 / 注册</Button>
          </div>
        </form>
      )}

      {/* 分割线 */}
      <div className="relative my-2"><div className="absolute inset-0 flex items-center"><span className="w-full border-t" /></div><div className="relative flex justify-center text-xs uppercase"><span className="bg-background px-2 text-muted-foreground">其他方式</span></div></div>

      {/* 第三方登录按钮 */}
      {loginMethod["google"] && (
        <Button variant="outline" onClick={() => { setIsGoogleLoading(true); signIn("google"); }} disabled={isLoading || isGoogleLoading}>
          {isGoogleLoading ? <Icons.spinner className="mr-2 h-4 w-4 animate-spin" /> : <Icons.google className="mr-2 h-4 w-4" />} Google
        </Button>
      )}
      {loginMethod["github"] && (
        <Button variant="outline" onClick={() => { setIsGithubLoading(true); signIn("github"); }} disabled={isLoading || isGithubLoading}>
          {isGithubLoading ? <Icons.spinner className="mr-2 h-4 w-4 animate-spin" /> : <Icons.github className="mr-2 h-4 w-4" />} Github
        </Button>
      )}
      
      {/* 🔴 OEON 专属按钮：不再跳 LinuxDo */}
      <Button
        variant="outline"
        onClick={() => {
          setIsOeonLoading(true);
          signIn("oeon"); // 调用后端 ID 为 oeon 的配置
        }}
        disabled={isLoading || isOeonLoading}
      >
        {isOeonLoading ? <Icons.spinner className="mr-2 h-4 w-4 animate-spin" /> : <Icons.user className="mr-2 h-4 w-4" />}
        OEON 论坛登录
      </Button>
    </div>
  );
}

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-50 px-4">
      <Card className="w-full max-w-105 gap-7 rounded-4xl border-0 px-10 py-10 shadow-none">
        <CardHeader className="flex flex-col items-center gap-2 px-0">
          <CardTitle className="text-[32px] font-bold text-[#1A1A1A]">
            Log in
          </CardTitle>
          <CardDescription className="text-[15px] text-[#6B7280]">
            Welcome back! Please enter your details.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-7 px-0">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="email"
                className="text-sm font-medium text-[#1A1A1A]"
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="h-12 rounded-xl"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="password"
                className="text-sm font-medium text-[#1A1A1A]"
              >
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="h-12 rounded-xl"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Checkbox
                id="remember"
                defaultChecked
                className="data-[state=checked]:bg-[#FF6B6B] data-[state=checked]:border-[#FF6B6B]"
              />
              <Label
                htmlFor="remember"
                className="text-sm font-normal text-[#1A1A1A]"
              >
                Remember me
              </Label>
            </div>
            <Link
              href="#"
              className="text-sm font-semibold text-[#FF6B6B] hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <Button className="h-12.5 w-full rounded-[14px] bg-[#FF6B6B] text-base font-semibold text-white hover:bg-[#FF6B6B]/90">
            Sign in
          </Button>

          <p className="text-center text-sm text-[#6B7280]">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="font-semibold text-[#FF6B6B] hover:underline"
            >
              Sign up
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

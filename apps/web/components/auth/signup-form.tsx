import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoginFormData, SignupFormData, signupSchema } from "@/lib/auth/schema";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

interface SignupFormProps {
  onSubmit: (data: SignupFormData) => Promise<void>;
}

export default function SignupForm({ onSubmit }: SignupFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (data: SignupFormData) => {
    setIsLoading(true);
    try {
      await onSubmit(data);
    } catch (error) {
      console.error("Signup failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader>
        <CardTitle>Create Accounts</CardTitle>
        <CardDescription>
          Enter your information to a new account
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
}

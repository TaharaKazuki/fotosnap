import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SignupForm() {
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

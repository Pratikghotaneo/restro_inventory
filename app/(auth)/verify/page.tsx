import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MailIcon } from "lucide-react";
import Link from "next/link";

export default function VerifyEmail() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md shadow-md rounded-2xl p-6 text-center">
        <div className="flex justify-center mb-4">
          <MailIcon className="w-12 h-12 text-blue-500" />
        </div>
        <CardContent className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Verify your email address
          </h2>
          <p className="text-gray-600 text-sm">
            <span className="font-semibold">Please click on the link</span> in
            the email we just sent you to confirm your email address.
          </p>
          <div className="space-y-2">
            <Button variant="link" className="text-blue-600 hover:underline">
              Resend Email
            </Button>
            <Link href="/logout">
              <Button variant="ghost" className="text-gray-500 text-sm">
                Logout →
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

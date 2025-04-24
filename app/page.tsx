import Logout from "@/components/logout";
import { auth } from "@/lib/auth";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      <h1> Welcome back, {session.user?.email}!</h1>
      <Logout />
    </div>
  );
}

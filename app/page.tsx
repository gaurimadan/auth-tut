import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
   <main className="flex h-full flex-col items-center justify-center bg-slate-500">
    <div className="space-y-6">
      <h1 className="text-6xl text-white font-semibold drop-shadow-md">Auth</h1>
      <p className="text-white text-lg">Learning Authenticaton service</p>
      <div>
        <LoginButton>
        <Button variant="secondary" size="lg">Sign in</Button>
        </LoginButton>
      </div>

    </div>

   </main>
 
  );
}

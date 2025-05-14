import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex justify-between gap-11 py-4 items-center px-8">
      <header className="font-ubuntu text-blue-primary font-bold text-lg">
        Scheduler AI
      </header>
      <div className="flex justify-center items-center gap-6 text-xs ">
        <Link href="/features">Features</Link>
        <Link href="/working">How it Works</Link>
        <Link href="/pricing">Pricing</Link>
      </div>
      <div>
        <Button className="text-sm bg-green-primary cursor-pointer">
          <div>Log In</div>
          <div>
            <ArrowRight />
          </div>
        </Button>
      </div>
    </nav>
  );
}

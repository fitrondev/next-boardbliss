import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="border-b shadow-sm">
      <div className="h-16 container flex items-center justify-between">
        <div>
          <Logo />
        </div>

        <div>
          <SignedOut>
            <div className="inline-flex items-center gap-2">
              <Button size={"sm"} variant={"outline"} asChild>
                <Link href={"/sign-in"}>Login</Link>
              </Button>

              <Button size={"sm"} className="hidden sm:flex" asChild>
                <Link href={"/sign-up"}>Get Boardbliss for free</Link>
              </Button>
            </div>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};
export default Header;

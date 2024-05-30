import { SignedIn, SignedOut } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <div className="h-[calc(100vh-130px)] container flex flex-col items-center justify-center space-y-5">
        <div className="max-w-max bg-amber-100 text-amber-700 flex items-center justify-center p-4 rounded-full shadow-sm border uppercase">
          <Medal className="size-6 mr-2" />
          <span>No 1 task management</span>
        </div>

        <div>
          <h1 className="text-3xl md:text-6xl text-center font-semibold">
            Boardbliss helps team move
          </h1>
        </div>

        <div className="text-3xl md:text-6xl text-white font-semibold bg-gradient-to-r from-fuchsia-600 to-pink-600 px-4 py-2 rounded-md pb-4 w-fit">
          <span>Work forward.</span>
        </div>

        <div className="max-w-xs md:max-w-2xl text-center text-sm md:text-xl text-neutral-400">
          <p>
            Boardbliss is a task management tool that helps teams move forward
            with their work. It&apos;s a simple and easy to use tool that helps
            teams stay organized and focused on their work.
          </p>
        </div>

        <div>
          <SignedOut>
            <Button asChild>
              <Link href={"/sign-up"}>Get Boardbliss for free</Link>
            </Button>
          </SignedOut>

          <SignedIn>
            <Button asChild>
              <Link href={"/select-org"}>Create Organization</Link>
            </Button>
          </SignedIn>
        </div>
      </div>
    </section>
  );
}

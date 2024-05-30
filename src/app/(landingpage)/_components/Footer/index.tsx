import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="h-16 container flex items-center justify-center sm:justify-between">
        <div className="hidden sm:block">
          <Logo />
        </div>

        <div className="inline-flex items-center gap-2">
          <Button size={"sm"} variant={"link"} asChild>
            <Link href={"/"}>Privacy Policy</Link>
          </Button>

          <Button size={"sm"} variant={"link"} asChild>
            <Link href={"/"}>Terms of Service</Link>
          </Button>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

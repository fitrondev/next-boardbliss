import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const DashNavbar = () => {
  return (
    <header className="border-b shadow-sm">
      <div className="h-16 container-dashboard flex items-center justify-between">
        <div className="inline-flex items-center gap-2">
          <Logo />

          <Button size={"sm"} asChild>
            <Link href={"/select-org"}>Create</Link>
          </Button>
        </div>

        <div>
          <div className="inline-flex items-center gap-2">
            <OrganizationSwitcher
              hidePersonal
              afterCreateOrganizationUrl={"/organization/:id"}
              afterLeaveOrganizationUrl="/select-org"
              afterSelectOrganizationUrl={"/organization/:id"}
            />

            <UserButton />
          </div>
        </div>
      </div>
    </header>
  );
};
export default DashNavbar;

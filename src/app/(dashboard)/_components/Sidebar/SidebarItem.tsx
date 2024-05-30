"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Activity, CreditCard, Layout, Settings } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export type Organization = {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
};

type SidebarItemProps = {
  isActive: boolean;
  isExpanded: boolean;
  organization: Organization;
  onExpand: (id: string) => void;
};

const SidebarItem = ({
  isActive,
  isExpanded,
  organization,
  onExpand,
}: SidebarItemProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const routes = [
    {
      label: "Boards",
      icon: <Layout className="size-4 mr-2" />,
      href: `/organization/${organization.id}`,
    },
    {
      label: "Activity",
      icon: <Activity className="size-4 mr-2" />,
      href: `/organization/${organization.id}/activity`,
    },
    {
      label: "Settings",
      icon: <Settings className="size-4 mr-2" />,
      href: `/organization/${organization.id}/settings`,
    },
    {
      label: "Billing",
      icon: <CreditCard className="size-4 mr-2" />,
      href: `/organization/${organization.id}/billing`,
    },
  ];

  const onClick = (href: string) => {
    router.push(href);
  };
  return (
    <AccordionItem value={organization.id} className="border-none">
      <AccordionTrigger
        onClick={() => onExpand(organization.id)}
        className={cn(
          "flex items-center gap-2 p-1.5 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline",
          isActive && !isExpanded && "bg-sky-500/10 text-sky-700"
        )}>
        <div className="inline-flex items-center gap-2">
          <div className="relative size-7">
            <Image
              src={organization.imageUrl}
              alt=""
              fill
              className="rounded-sm object-cover"
            />
          </div>
          <span className="text-sm font-medium">{organization.name}</span>
        </div>
      </AccordionTrigger>

      <AccordionContent className="pt-1">
        {routes.map((item, index) => (
          <Button
            key={index}
            variant={"ghost"}
            size={"sm"}
            onClick={() => onClick(item.href)}
            className={cn(
              "w-full font-normal justify-start pl-10 mb-1",
              pathname === item.href && "bg-sky-500/10 text-sky-700"
            )}>
            {item.icon}
            <span>{item.label}</span>
          </Button>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
};
export default SidebarItem;

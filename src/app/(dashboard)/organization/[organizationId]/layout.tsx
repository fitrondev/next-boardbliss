import OrgControl from "../../_components/OrgControl";

export default function OrganizationIdLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
}

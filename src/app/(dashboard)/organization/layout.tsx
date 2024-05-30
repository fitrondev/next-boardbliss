import Sidebar from "../_components/Sidebar";

export default function OrganizationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="container-dashboard pt-6">
        <div className="flex">
          <Sidebar />
          {children}
        </div>
      </main>
    </>
  );
}

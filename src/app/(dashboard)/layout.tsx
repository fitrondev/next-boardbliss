import DashNavbar from "./_components/DashNavbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <DashNavbar />
      {children}
    </div>
  );
}

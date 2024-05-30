import { auth } from "@clerk/nextjs/server";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import { redirect } from "next/navigation";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { orgId } = auth();

  if (!orgId) {
    return redirect("/select-org");
  }

  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

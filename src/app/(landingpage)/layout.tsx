import { auth } from "@clerk/nextjs/server";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import { redirect } from "next/navigation";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

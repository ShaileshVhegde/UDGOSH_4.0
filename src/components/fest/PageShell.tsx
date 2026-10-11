import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export default function PageShell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative min-h-screen overflow-x-hidden", className)}>
      <Navbar />
      <main className="relative z-0">{children}</main>
      <Footer />
    </div>
  );
}

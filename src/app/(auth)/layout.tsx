import MagicLinkForm from "@/components/auth/magic-link-form";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-[100svh] grid place-content-center space-y-8">
      {children}
      <MagicLinkForm />
    </div>
  );
}

import { signIn } from "@/app/auth";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function MagicLinkForm() {
  return (
    <form
      className="space-y-3"
      action={async (formData) => {
        "use server";
        await signIn("resend", formData);
      }}
    >
      <h1 className="text-2xl">For Magic Link Login</h1>
      <Input type="text" name="email" placeholder="Email" />
      <Button type="submit" variant={"outline"}>
        Signin with Resend
      </Button>
    </form>
  );
}

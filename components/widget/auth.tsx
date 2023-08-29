import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { NavbarItem } from "~/components/navbar/item";
import { Button } from "../ui/button";

export const LoginButton = () => (
  <SignInButton>
    <Button className="h-8">Sign in</Button>
  </SignInButton>
);

export const AuthWidget = () => (
  <>
    <SignedIn>
      <UserButton />
    </SignedIn>
    <SignedOut>
      <LoginButton />
    </SignedOut>
  </>
);

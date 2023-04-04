import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { NavbarItem } from "~/components/navbar/item";

export const AuthWidgetContent = () => {
  return (
    <>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <LoginButton />
      </SignedOut>
    </>
  );
};

export const LoginButton = () => <SignInButton />;

// <a
//   className="box-border whitespace-nowrap rounded border border-gray-200 px-3 py-1 text-sm text-gray-600 transition hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 contrast-more:text-gray-700 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 contrast-more:dark:text-gray-100"
//   href="/"
// >
//   Login
// </a>

export const AuthWidget = () => (
  <NavbarItem>
    <AuthWidgetContent />
  </NavbarItem>
);

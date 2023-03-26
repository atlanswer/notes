import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import { NavbarItem } from "~/components/navbar/item";

export const AuthWidgetContent = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span className="text-red-500">Error</span>;
  }

  if (user) {
    return (
      <a href="/api/auth/logout" title="Logout">
        {user.picture ? (
          <Image
            src={user.picture}
            alt="User profile picture"
            height={25}
            width={25}
            className="rounded-full"
          />
        ) : (
          <span>{user.nickname}</span>
        )}
      </a>
    );
  }

  return LoginLink;
};

export const LoginLink = (
  <a
    className="box-border whitespace-nowrap rounded border border-slate-500 px-2 py-1 text-sm text-gray-600 transition hover:border-sky-800 hover:bg-sky-200 hover:text-sky-800 hover:shadow hover:shadow-sky-200 focus:ring-4 contrast-more:text-gray-700 dark:text-gray-400 dark:hover:border-sky-200 dark:hover:bg-sky-800 dark:hover:text-gray-200 dark:hover:shadow-sky-800 contrast-more:dark:text-gray-100"
    href="/api/auth/login"
  >
    Login
  </a>
);

export const AuthWidget = () => (
  <NavbarItem>
    <AuthWidgetContent />
  </NavbarItem>
);

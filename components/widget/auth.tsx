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
    className="box-border whitespace-nowrap rounded border border-gray-200 px-3 py-1 text-sm text-gray-600 transition hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 contrast-more:text-gray-700 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 contrast-more:dark:text-gray-100"
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

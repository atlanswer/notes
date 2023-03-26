import type { FC, PropsWithChildren } from "react";

export const NavbarItem: FC<PropsWithChildren> = ({ children }) => {
  return <div className="p-2 pl-0">{children}</div>;
};

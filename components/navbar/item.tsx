import type { FC, PropsWithChildren } from "react";

export const NavbarItem: FC<PropsWithChildren> = ({ children }) => {
  return <div className="py-2">{children}</div>;
};

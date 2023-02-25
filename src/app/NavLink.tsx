import { Menu } from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { PropsWithChildren, useContext } from "react";
import RouterContext from "./RouterContext";

type Props = {
  href: string;
  className?: string;
};

function NavLink({ href, className, children }: PropsWithChildren<Props>) {
  const startChange = useContext(RouterContext);
  const segment = useSelectedLayoutSegment();
  const isActive = segment === href.slice(1);

  return (
    <Menu.Item
      as={Link}
      href={href}
      className={clsx(
        "flex w-full items-center space-x-2 rounded-md px-2 py-2 text-sm font-medium hover:underline",
        !isActive && "text-slate-600",
        className
      )}
      onClick={() => {
        const { pathname, search, hash } = window.location;
        if (href !== pathname + search + hash) startChange();
      }}
    >
      {children}
    </Menu.Item>
  );
}

export default NavLink;

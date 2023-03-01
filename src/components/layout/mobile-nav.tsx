"use client";

import NavLink from "./nav-link";
import { Menu, Transition } from "@headlessui/react";
import { SITE_AUTHOR } from "config";
import { Fragment } from "react";

function MobileNav() {
  return (
    <Menu>
      <Menu.Button className="flex items-center space-x-2 md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <line x1="4" y1="6" x2="20" y2="6"></line>
          <line x1="4" y1="12" x2="20" y2="12"></line>
          <line x1="4" y1="18" x2="20" y2="18"></line>
        </svg>
        <span className="font-bold">Menu</span>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md md:hidden">
          <div className="relative z-20 grid gap-y-1 rounded-md bg-white p-4 shadow-md">
            <NavLink href="/" className="text-slate-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <polyline points="7 8 3 12 7 16"></polyline>
                <polyline points="17 8 21 12 17 16"></polyline>
                <line x1="14" y1="4" x2="10" y2="20"></line>
              </svg>
              <span className="font-bold">{SITE_AUTHOR}</span>
            </NavLink>

            <nav className="grid grid-flow-row auto-rows-max text-sm">
              <NavLink href="/blog">Blog</NavLink>
              <NavLink href="/distro-grub-themes">Wiki</NavLink>
              <Menu.Item
                as={"a"}
                target="_blank"
                rel="noreferrer"
                href="https://github.com/AdisonCavani/k1ng.dev"
                className="flex w-full items-center rounded-md p-2 text-sm font-medium text-slate-600 hover:underline"
              >
                Github
              </Menu.Item>
            </nav>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default MobileNav;

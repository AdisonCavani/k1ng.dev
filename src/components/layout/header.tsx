"use client";

import HeaderLink from "./header-link";
import MobileNav from "./mobile-nav";
import RouterContext from "./router-context";
import { SITE_AUTHOR } from "config";
import Link from "next/link";
import { useContext } from "react";

function Header() {
  const startChange = useContext(RouterContext);

  return (
    <header className="fixed inset-x-0 top-0 z-50 mx-auto w-full max-w-[1440px] bg-white/70 px-6 backdrop-blur">
      <nav className="flex h-16 items-center gap-x-6 border-b border-neutral-200 py-4 md:gap-x-10">
        <Link
          href="/"
          className="hidden items-center space-x-2 md:flex"
          onClick={() => {
            const { pathname, search, hash } = window.location;
            if ("/" !== pathname + search + hash) startChange();
          }}
        >
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
          <span className="ml-2 font-bold">{SITE_AUTHOR}</span>
        </Link>

        <div className="hidden gap-x-6 md:flex">
          <HeaderLink href="/blog">Blog</HeaderLink>
          <HeaderLink href="/distro-grub-themes">Wiki</HeaderLink>
          <HeaderLink
            href="https://github.com/AdisonCavani/k1ng.dev"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </HeaderLink>
        </div>

        <MobileNav />
      </nav>
    </header>
  );
}

export default Header;

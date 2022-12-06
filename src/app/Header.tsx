import Link from "next/link";
import HeaderLink from "./HeaderLink";
import MobileNav from "./MobileNav";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full max-w-[1440px] mx-auto px-6 bg-white/70 backdrop-blur">
      <nav className="flex h-16 items-center py-4 gap-x-6 md:gap-x-10 border-b border-neutral-200">
        <Link href="/" className="hidden items-center space-x-2 md:flex">
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
          <span className="font-bold ml-2">Adison Cavani</span>
        </Link>

        <div className="hidden md:flex gap-x-6">
          <HeaderLink href="/blog">Blog</HeaderLink>
          <HeaderLink href="/distro-grub-themes">Wiki</HeaderLink>
          <HeaderLink
            href="https://github.com/AdisonCavani/adison.me"
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

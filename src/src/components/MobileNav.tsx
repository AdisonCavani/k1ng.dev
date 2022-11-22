import { useState } from "react";

const MobileNav = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => {
          setVisible(!visible);

          if (visible) document.body.classList.remove("overflow-hidden");
          else document.body.classList.add("overflow-hidden");
        }}
      >
        {visible ? (
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
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
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
        )}
        <span className="font-bold">Menu</span>
      </button>

      {visible && (
        <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md md:hidden">
          <div className="relative z-20 grid gap-6 rounded-md bg-white p-4 shadow-md">
            <a href="/" className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <polyline points="7 8 3 12 7 16"></polyline>
                <polyline points="17 8 21 12 17 16"></polyline>
                <line x1="14" y1="4" x2="10" y2="20"></line>
              </svg>
              <span className="font-bold">Adison Cavani</span>
            </a>

            <nav className="grid grid-flow-row auto-rows-max text-sm">
              <a
                href="/blog"
                className="flex w-full items-center rounded-md px-2 py-2 text-sm font-medium hover:underline"
              >
                Blog
              </a>
              <a
                href="/distro-grub-themes"
                className="flex w-full items-center rounded-md px-2 py-2 text-sm font-medium hover:underline"
              >
                Wiki
              </a>
              <a
                href="https://github.com/AdisonCavani/adison.me"
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center rounded-md px-2 py-2 text-sm font-medium hover:underline"
              >
                Github
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;

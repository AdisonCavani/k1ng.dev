"use client";

import Link from "next/link";
import { useState } from "react";

function TodoListAlert() {
  const [open, setOpen] = useState<boolean>(true);

  if (!open) return;

  return (
    <div
      tabIndex={-1}
      className="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 lg:bottom-0 lg:right-0 lg:top-auto lg:max-w-[420px] lg:flex-col"
    >
      <div
        role="alert"
        tabIndex={0}
        className="pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border bg-white p-6 pr-8 shadow-lg transition-all"
      >
        <div className="grid gap-1">
          <div className="text-sm font-semibold">To-do list.</div>
          <div className="text-sm opacity-90">
            My open source progressive web app for managing tasks.
          </div>
        </div>

        <Link
          href="https://todo.k1ng.dev?utm_source=k1ng.dev&utm_medium=popup"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        >
          Open
        </Link>

        <button
          data-umami-event="close-todo-list-popup"
          onClick={() => setOpen(false)}
          className="absolute right-2 top-2 rounded-md p-1 text-black/50 transition-all hover:text-black/75 focus:opacity-100 focus:outline-none focus:ring-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="size-4"
          >
            <path d="M18 6l-12 12"></path>
            <path d="M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default TodoListAlert;

import type { ReactNode } from "react";
import Sidebar from "./Sidebar";

type Props = {
  children: ReactNode;
};

function WikiLayout({ children }: Props) {
  return (
    <main className="max-w-7xl pt-8 px-8 mx-auto mt-16 flex gap-4 flex-col lg:flex-row">
      {children}

      {/* @ts-expect-error */}
      <Sidebar />
    </main>
  );
}

export default WikiLayout;

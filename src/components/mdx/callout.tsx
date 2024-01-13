import { clsx } from "clsx";

type CalloutProps = {
  children?: React.ReactNode;
  type?: "default" | "warning" | "danger";
};

function Callout({ children, type = "default", ...props }: CalloutProps) {
  return (
    <div
      className={clsx(
        "my-6 flex flex-col items-start rounded-md border border-l-4 p-4 ",
        {
          "border-blue-500 bg-blue-50": type === "default",
          "border-yellow-500 bg-yellow-50": type === "warning",
          "border-red-500 bg-red-50": type === "danger",
        },
      )}
      {...props}
    >
      <span
        className={clsx("inline-flex items-center", {
          "text-blue-600": type === "default",
          "text-yellow-600": type === "warning",
          "text-red-600": type === "danger",
        })}
      >
        {getIcon(type)}
        {getName(type)}
      </span>
      <div>{children}</div>
    </div>
  );
}

function getIcon(type: "default" | "warning" | "danger") {
  switch (type) {
    case "default":
      return (
        <svg
          className="mr-2"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          height="16"
          aria-hidden="true"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm6.5-.25A.75.75 0 017.25 7h1a.75.75 0 01.75.75v2.75h.25a.75.75 0 010 1.5h-2a.75.75 0 010-1.5h.25v-2h-.25a.75.75 0 01-.75-.75zM8 6a1 1 0 100-2 1 1 0 000 2z"
          />
        </svg>
      );

    case "warning":
      return (
        <svg
          className="mr-2"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          height="16"
          aria-hidden="true"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"
          />
        </svg>
      );

    case "danger":
      return (
        <svg
          className="mr-2"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      );
  }
}

function getName(type: "default" | "warning" | "danger") {
  switch (type) {
    case "default":
      return "Note";

    case "warning":
      return "Warning";

    case "danger":
      return "Danger";
  }
}

export default Callout;

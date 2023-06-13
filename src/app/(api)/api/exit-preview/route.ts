import { draftMode } from "next/headers";

async function GET(_: Request) {
  draftMode().disable();
  return new Response("Draft mode is disabled");
}

export { GET };

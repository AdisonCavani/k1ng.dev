import { resolveHref } from "@sanity/lib/links";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  const documentType = searchParams.get("documentType");

  if (!documentType)
    return new Response("documentType is missing", { status: 400 });

  const href = resolveHref(documentType, slug);

  if (!href)
    return new Response(
      "Unable to resolve preview URL based on the current document type and slug",
      { status: 400 }
    );

  draftMode().enable();
  redirect(href);
}

export { GET };

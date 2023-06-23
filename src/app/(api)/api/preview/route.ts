import { previewSecretId, readToken } from "@sanity/env";
import { getClient } from "@sanity/lib/client";
import { resolveHref } from "@sanity/lib/links";
import { getSecret } from "@sanity/plugins/production-url/utils";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");
  const documentType = searchParams.get("documentType");

  if (!secret) return new Response("Invalid secret", { status: 401 });
  if (!documentType)
    return new Response("documentType is missing", { status: 400 });

  if (!readToken) {
    throw new Error(
      "A secret is provided but there is no `SANITY_API_READ_TOKEN` environment variable setup."
    );
  }

  const client = getClient().withConfig({ useCdn: false, token: readToken });
  const generatedSecret = await getSecret(client, previewSecretId);

  if (generatedSecret !== secret)
    return new Response("Invalid secret", { status: 401 });

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

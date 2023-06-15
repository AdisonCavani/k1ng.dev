import { postUpdatedQuery } from "@lib/queries";
import { client } from "@sanity/lib/client";
import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";
import { revalidatePath } from "next/cache";

const secret = process.env.SANITY_STUDIO_REVALIDATE_SECRET;

async function POST(request: Request) {
  const signature = request.headers.get(SIGNATURE_HEADER_NAME);
  const body = await request.json();

  if (signature === null)
    return new Response("Signature cannot be empty", {
      status: 404,
    });

  if (!isValidSignature(body, signature, secret))
    return new Response(
      JSON.stringify({ success: false, message: "Invalid signature" }),
      {
        status: 401,
      }
    );

  const { _id: id } = body;

  if (typeof id !== "string" || !id)
    return new Response(JSON.stringify({ message: "Invalid _id" }), {
      status: 400,
    });

  try {
    const slug = await client.fetch(postUpdatedQuery, { id });
    await Promise.all([
      revalidatePath("/blog"),
      revalidatePath(`/blog/${slug}`),
    ]);
    return new Response(JSON.stringify({ message: `Updated ${slug}` }), {
      status: 200,
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ message: err.message }), {
      status: 500,
    });
  }
}

export { POST };
import { postUpdatedQuery } from "@lib/queries";
import { client } from "@sanity/lib/client";
import { resolveHref2 } from "@sanity/lib/links";
import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";
import { revalidatePath } from "next/cache";

const secret = process.env.SANITY_STUDIO_REVALIDATE_SECRET;

async function POST(request: Request) {
  const signature = request.headers.get(SIGNATURE_HEADER_NAME);
  const body = await request.text();

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

  const jsonBody = await JSON.parse(body);
  const { _id: id } = jsonBody;
  const { _type: type } = jsonBody;

  if (typeof id !== "string" || !id)
    return new Response(JSON.stringify({ message: "Invalid _id" }), {
      status: 400,
    });

  const slug = resolveHref2(type);

  console.error("Id:", id);
  console.error("Type:", type);

  if (!slug)
    return new Response(JSON.stringify({ message: "Invalid _type" }), {
      status: 400,
    });

  try {
    if (slug === "/") {
      revalidatePath(slug);

      return new Response(JSON.stringify({ message: `Updated /` }), {
        status: 200,
      });
    }

    if (type !== "post") {
      revalidatePath("/blog");

      return new Response(JSON.stringify({ message: "Updated /blog" }), {
        status: 200,
      });
    }

    const postSlug = await client.fetch(postUpdatedQuery, { id });

    if (!postSlug)
      return new Response(
        JSON.stringify({ message: "Cannot find post with this _id" }),
        {
          status: 400,
        }
      );

    await Promise.all([
      revalidatePath("/blog"),
      revalidatePath(`/blog/${postSlug}`),
    ]);

    return new Response(
      JSON.stringify({ message: `Updated /blog & /blog/${postSlug}` }),
      {
        status: 200,
      }
    );
  } catch (err: any) {
    return new Response(JSON.stringify({ message: err.message }), {
      status: 500,
    });
  }
}

export { POST };

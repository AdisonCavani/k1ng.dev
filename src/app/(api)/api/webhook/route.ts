import crypto from "crypto";
import { revalidatePath } from "next/cache";

const WEBHOOK_SECRET = process.env.GITHUB_WEBHOOK_SECRET;

async function POST(request: Request) {
  const body = await request.json();

  // Verify the secret
  const expectedSignature =
    "sha1=" +
    crypto
      .createHmac("sha1", WEBHOOK_SECRET)
      .update(JSON.stringify(body))
      .digest("hex");

  if (request.headers.get("X-Hub-Signature") !== expectedSignature)
    return new Response("Unauthorized", {
      status: 401,
    });

  // Verify the branch is "master"
  const branch = body.ref;
  if (branch !== "refs/heads/master")
    return new Response("Not master branch", {
      status: 200,
    });

  // Verify there was a change in the "docs" folder
  const commits = body.commits;
  const changedFiles = commits.reduce(
    (files: any, commit: any) => [
      ...files,
      ...commit.added,
      ...commit.modified,
      ...commit.removed,
    ],
    [],
  );

  if (!changedFiles.some((file: any) => file.startsWith("docs/")))
    return new Response("No change in docs folder", {
      status: 200,
    });

  revalidatePath("/distro-grub-themes");
  revalidatePath("/distro-grub-themes/contributing");
  revalidatePath("/distro-grub-themes/installation");
  revalidatePath("/distro-grub-themes/preview");

  return new Response("Ok", {
    status: 200,
  });
}

export { POST };

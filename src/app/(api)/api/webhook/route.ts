import crypto from "crypto";

const WEBHOOK_SECRET = process.env.GITHUB_WEBHOOK_SECRET;

async function POST(request: Request) {
  // Verify the secret
  const expectedSignature =
    "sha256=" +
    crypto
      .createHmac("sha256", WEBHOOK_SECRET)
      .update(JSON.stringify(request.body))
      .digest("hex");

  if (request.headers.get("X-Hub-Signature-256") !== expectedSignature)
    return new Response("Unauthorized", {
      status: 401,
    });

  const body = await request.json();

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
    []
  );

  if (!changedFiles.some((file: any) => file.startsWith("docs/")))
    return new Response("No change in docs folder", {
      status: 200,
    });

  console.error("Webhook good");

  return new Response("Ok", {
    status: 200,
  });
}

export { POST };

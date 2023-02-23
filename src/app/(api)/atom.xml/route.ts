import GetFeed from "@lib/feed";

export const dynamic = "force-dynamic";

export async function GET() {
  const feed = await GetFeed();

  return new Response(feed.atom1(), {
    status: 200,
    headers: {
      "Content-Type": "text/xml",
      "Cache-Control": "public, s-maxage=1200, stale-while-revalidate=600",
    },
  });
}

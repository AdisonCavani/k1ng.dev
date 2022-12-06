import GetFeed from "@lib/feed";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const feed = await GetFeed();

  res.setHeader("Content-Type", "text/xml");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=1200, stale-while-revalidate=600"
  );
  res.write(feed.atom1());
  res.end();
}

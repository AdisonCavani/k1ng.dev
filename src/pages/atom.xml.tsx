import type { GetServerSideProps } from "next";
import GetFeed from "@lib/feed";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const feed = await GetFeed();

  res.setHeader("Content-Type", "text/xml");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=1200, stale-while-revalidate=600"
  );
  res.write(feed.atom1());
  res.end();

  return {
    props: {},
  };
};

export default function AtomFeed() {
  return null;
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://k1ng.dev",
  generateRobotsTxt: true,
  exclude: ["/api/atom", "/api/revalidate", "/api/rss"],
};

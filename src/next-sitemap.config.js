/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://adison.me",
  generateRobotsTxt: true,
  exclude: ["/api/atom", "/api/revalidate", "/api/rss"],
};

function resolveHref(
  documentType: string | null,
  slug: string | null
): string | undefined {
  switch (documentType) {
    case "index":
      return "/";
    case "blog":
      return "/blog";
    case "post":
      return slug ? `/blog/${slug}` : undefined;
    default:
      console.warn("Invalid document type:", documentType);
      return undefined;
  }
}

type Link = "/" | "/blog" | undefined;

function resolveHref2(type: string): Link {
  switch (type) {
    case "project":
    case "tech-category":
    case "tech-item":
      return "/";
    case "author":
    case "category":
    case "post":
      return "/blog";
    default:
      console.warn("Invalid _type:", type);
      return undefined;
  }
}

export { resolveHref, resolveHref2 };

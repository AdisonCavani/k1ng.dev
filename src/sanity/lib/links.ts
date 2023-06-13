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

export { resolveHref };

function resolveHref(type: string, _: string | null) {
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

export { resolveHref };

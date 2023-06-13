import Iframe from "sanity-plugin-iframe-pane";
import { DefaultDocumentNodeResolver } from "sanity/desk";

const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  switch (schemaType) {
    case "post":
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            URL: (doc: any) =>
              `${window.location.host}/api/preview?slug=${doc.slug.current}&documentType=post`,
          })
          .title("Preview"),
      ]);
    default:
      return S.document().views([S.view.form()]);
  }
};

export { defaultDocumentNode };

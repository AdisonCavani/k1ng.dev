type Props = {
  content: object;
};

function JsonLd({ content }: Props) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(content) }}
    />
  );
}

export default JsonLd;

import { slugify } from "@lib/Helpers";

type Props = {
  headings: {
    text: string;
    level: number;
  }[];
};

const Details = ({ headings }: Props) => {
  return (
    <ul className="mx-6 text-sm">
      {headings.map(({ text, level }, index) => (
        <li
          key={index}
          className="my-2"
          style={{ paddingLeft: `${12 * level}px` }}
        >
          <a
            href={`#${slugify(text)}`}
            className="hover:text-blue-600 hover:underline"
          >
            {text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Details;

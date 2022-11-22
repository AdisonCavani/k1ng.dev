import { slugify } from "@lib/Helpers";
import type { WikiHeadingsSchema } from "@lib/Types";

type Props = {
  headings: WikiHeadingsSchema[];
  slug: string;
};

const Details = ({ headings, slug }: Props) => {
  return (
    <ul className="mx-6 text-sm">
      {headings.map(({ text, level }, index) => (
        <li
          key={index}
          className="my-2"
          style={{ paddingLeft: `${12 * level}px` }}
        >
          <a
            href={`/distro-grub-themes/${slug}#${slugify(text)}`}
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

import Link from 'next/link';

export default function Portrait({ title, href }) {
  const Wrapper = href ? (
    (attributes) => <Link href={href} {...attributes} />
  ) : (
    (attributes) => <div {...attributes} />
  );

  return (
    <div>
      <Wrapper className="w-28 h-28 lg:w-40 lg:h-40 block border-2 border-black">
        {title}
      </Wrapper>
    </div>
  );
};

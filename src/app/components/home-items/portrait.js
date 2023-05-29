import Link from 'next/link';

export default function Portrait({ title, href }) {
  const Wrapper = href ? (
    (attributes) => <Link href={href} {...attributes} />
  ) : (
    (attributes) => <div {...attributes} />
  );

  return (
    <div>
      <Wrapper className="w-20 h-20 md:w-40 md:h-40 block border-2 border-black">
        {title}
      </Wrapper>
    </div>
  );
};

import Item from './item';

// TODO: Display the picture on the square part of the record UI.
// On play, attempt to play the embedded player fixed to the bottom of the screen. Confirm that this leads to a stream though.
// or, have it launch spotify

// TODO: First try an embedded spotify player. Backup options: set up inline links to the discography page, upon click.
export default function Record({ title, albumImage }) {
  console.log(`"bg-[url('" + albumImage + "')] bg-contain"`, "bg-[url('" + albumImage + "')] bg-contain");

  return (
    <Item
      href="/record"
      text={title}
      background={"bg-[url('" + albumImage + "')] bg-contain"}
    />
  );
};

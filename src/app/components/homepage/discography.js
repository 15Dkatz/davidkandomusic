import Item from './item';

// TODO: Create a shared component between About and this
export default function Discography() {
  return (
    <Item
      href="/discography"
      background="bg-[url('/discography_400.png')] bg-contain"
      text="DISCOGRAPHY"
    />
  );
};

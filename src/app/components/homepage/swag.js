import Item from './item';

// TODO: Create a shared component between About and this
export default function Swag() {
  return (
    <Item
      href="/swag"
      // TODO: Change background to an image
      // background="bg-[url('/discography_400.png')] bg-contain"
      background="bg-slate-100"
      text="SWAG"
    />
  );
};

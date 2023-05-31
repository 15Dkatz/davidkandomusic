import Item from './item';

// TODO: Create a shared component between About and this
export default function Studio() {
  return (
    <Item
      href="/studio"
      // TODO: Change background to an image
      // background="bg-[url('/discography_400.png')] bg-contain"
      background="bg-slate-100"
      text="Recording Studio"
    />
  );
};

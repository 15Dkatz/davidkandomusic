export default function Portrait({ title }) {
  return (
    <div>
      <div className="w-20 h-20 md:w-40 md:h-40 block border-2 border-black rounded">
        {title}
      </div>
    </div>
  );
};

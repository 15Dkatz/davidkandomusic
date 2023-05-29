export default function Merch({ title }) {
  return (
    <div>
      <div className="w-20 h-20 md:w-40 md:h-40 border border-black rounded">
        {title}
      </div>
    </div>
  );
};

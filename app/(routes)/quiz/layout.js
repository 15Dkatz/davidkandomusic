import PageStructure from 'app/components/page-structure';

export const metadata = {
  title: 'Playlist Personality Quiz - David Kando'
};

export default function Quiz({ children }) {
  return (
    <PageStructure
      background="bg-gradient-to-b from-slate-100 to-purple-50"
      title="Playlist Personality Quiz"
    >
      <div className={"text-md md:text-xl p-1 m-1 mt-2"}>
        {children}
      </div>
    </PageStructure>
  )
}

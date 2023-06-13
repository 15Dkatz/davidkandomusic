import PageStructure from 'components/page-structure';

export default function Layout({ children }) {
  return (
    <PageStructure
      background="bg-gradient-to-b from-slate-100 to-purple-50"
      title="Playlist Personality Quiz"
    >
      {children}
    </PageStructure>
  )
}
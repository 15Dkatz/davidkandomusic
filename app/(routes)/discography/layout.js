import PageStructure from 'app/components/page-structure';

export const metadata = {
  title: 'Discography - David Kando'
};

export default function Discography({ children }) {
  return (
    <PageStructure
      background="bg-gradient-to-b from-blue-100 to-pink-100"
      title="Discography"
    >
      {children}
    </PageStructure>
  )
}

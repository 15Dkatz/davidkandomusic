import LayoutStructure from 'components/layout-structure';

export const metadata = { title: 'David Kando Studios' };

export default function Page({ children }) {
  return (
    <LayoutStructure
      background="bg-gradient-to-b from-slate-100 to-purple-50"
      title="David Kando Studios"
    >
      {children}
    </LayoutStructure>
  )
}

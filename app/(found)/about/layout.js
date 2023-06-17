import LayoutStructure from 'components/layout-structure';

export const metadata = { title: 'About David Kando' };

export default function Layout({ children }) {
  return (
    <LayoutStructure
      background="bg-[url('/goofy_bg_500_op_80.png')] bg-contain"
      title="About David Kando"
    >
      {children}
    </LayoutStructure>
  )
}

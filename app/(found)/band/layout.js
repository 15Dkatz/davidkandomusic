import LayoutStructure from 'components/layout-structure';

export const metadata = { title: 'Curcio Band' };

export default function Page({ children }) {
  return (
    <LayoutStructure
      background="bg-[url('/curcio_banner.png')] bg-contain"
      title="Enter the Curcio-verse"
    >
      {children}
    </LayoutStructure>
  )
}

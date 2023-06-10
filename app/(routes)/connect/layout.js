export const metadata = {
  title: 'Connect with David Kando'
};

import PageStructure from 'app/components/page-structure';

export default function Layout({ children }) {
  return (
    <PageStructure
      background="bg-gradient-to-b from-slate-100 to-pink-100"
      title="Let's hang around"
    >
      {children}
    </PageStructure>
  )
}
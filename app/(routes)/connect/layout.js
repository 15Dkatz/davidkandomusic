// 'use client';

export const metadata = {
  title: 'Connect with David Kando'
};

// Per https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts
// "Passing data between a parent layout and its children is not possible. However, you can fetch the same data in a route more than once, and React will automatically dedupe the requests without affecting performance."
// However, a workaround is directly instantiating the Page component, like here with ConnectPage. Is this too much of an antipattern?
import Page from './page';
import PageStructure from 'app/components/page-structure';
import Form from './email-list/form';
import Followers from './followers';

export default function Layout() {
  return (
    <PageStructure
      background="bg-gradient-to-b from-slate-100 to-pink-100"
      title="Let's hang around"
    >
      <div className={"text-md md:text-xl p-1"}>
        <Page
          form={<Form />}
          followers={<Followers />}
        />
      </div>
    </PageStructure>
  )
}
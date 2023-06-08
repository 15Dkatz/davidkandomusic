'use client';

import ConnectPage from './page';
import PageLayout from '../components/page-layout';
import EmailForm from './email-form';
import Followers from './followers';

export default function ConnectLayout() {
  return (
    <PageLayout
      background="bg-gradient-to-b from-slate-100 to-pink-100"
      title="Let's hang around"
    >
      <div className={"text-md md:text-xl p-1"}>
        <ConnectPage emailForm={<EmailForm />} followers={<Followers />} />
      </div>
    </PageLayout>
  )
}
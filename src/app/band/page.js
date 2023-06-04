'use client';

import PageLayout from '../components/pageLayout';
import { HIGHLIGHTS } from './data';

export default function Band() {
  return (
    <PageLayout
      background="bg-gradient-to-b from-slate-100 to-pink-50"
      title="Enter the Curcio-verse"
    >
      <div className={"text-md lg:text-xl p-1"}>
        <div>Hailing from the lands of San Francisco, Curcio is a band of mere mortals blessed with a divine gift: the power to rock your socks off.</div>
        <br />
        <div>
          Be sure to tune into our upcoming releases and live events:
        </div>
        <div>
          1. <a className="underline text-blue-800" target="_blank" href="https://www.instagram.com/curcioband/">Follow our instagram</a>
        </div>
        <div>
          2. <a className="underline text-blue-800" target="_blank" href="https://www.tiktok.com/@curcioband">Follow our tiktok</a>
        </div>
        <br />
        <div>Performance highlights:</div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {
            HIGHLIGHTS.map(({ id, title, date, embeddedPost }) => (
              <div key={id} className="flex flex-col items-center bg-white m-2 p-2">
                <div className="font-bold text-base lg:text-lg mt-5">
                  {title}
                </div>
                <div className="text-sm text-slate-600">
                  Performance date: {date}
                </div>
                <div className="scale-[.9]">
                  {embeddedPost}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </PageLayout>
  )
}

'use client';

import localFont from 'next/font/local';
import PageLayout from '../components/pageLayout';
import { HIGHLIGHTS } from './data';

const rangaBold = localFont({
  src: '../../fonts/Ranga-Bold.ttf'
});

export default function Band() {
  return (
    <PageLayout
      background="bg-[url('/curcio_banner.png')] bg-contain"
      title="Enter the Curcio-verse"
    >
      <div className={"text-md md:text-xl p-1"}>
        <div>Hailing from the lands of San Francisco, Curcio is a band of mere mortals blessed with a divine gift: the power to rock your socks off.</div>
        <br />
        <div>
          Be sure to tune into our upcoming releases and live events:
        </div>
        <div>
          1. <a className="link" target="_blank" href="https://www.instagram.com/curcioband/">Follow our instagram</a>
        </div>
        <div>
          2. <a className="link" target="_blank" href="https://www.tiktok.com/@curcioband">Follow our tiktok</a>
        </div>
        <br />
        <div>Performance highlights:</div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {
            HIGHLIGHTS.map(({ id, title, date, background, tiktokLink }) => (
              <div key={id} className="flex flex-col items-center bg-white/80 m-2 p-2 pb-10">
                <div className="m-5">
                  <div className="font-bold text-base md:text-lg">
                    {title}
                  </div>
                  <div className="text-sm text-slate-600">
                    Performance date: {date}
                  </div>
                </div>
                <a href={tiktokLink} target="_blank">
                  <div
                    className={
                      "relative flex items-end " +
                      "w-[250px] h-[136.5px] md:w-[350px] md:h-[192.5px] " +
                      background + " " +
                      "border-[2px] border-black"
                    }
                  >
                    <div
                      className={
                        `${rangaBold.className} text-blue-950 hover:text-white text-sm md:text-2xl ` +
                        "pt-1 pb-1 mb-2 bg-slate-200/75 hover:bg-slate-700/75 w-full text-center " +
                        "h-[22px] md:h-[40px]"
                      }
                    >
                      See the Highlights
                    </div>
                  </div>
                </a>
              </div>
            ))
          }
        </div>
      </div>
    </PageLayout>
  )
}

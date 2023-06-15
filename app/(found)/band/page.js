import { HIGHLIGHTS } from './data';
import PageStructure from 'components/page-structure';

export const metadata = { title: 'Curcio Band' };

export default function Band() {
  return (
    <PageStructure
      background="bg-[url('/curcio_banner.png')] bg-contain"
      title="Enter the Curcio-verse"
    >
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
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {
          HIGHLIGHTS.map(({ id, title, date, background, tiktokLink }) => (
            <div key={id} className="flex flex-col items-center bg-white/80 m-2 p-2 pb-10">
              <div className="m-5">
                <div className="font-bold text-base lg:text-lg">
                  {title}
                </div>
                <div className="text-sm text-slate-600">
                  Performance date: {date}
                </div>
              </div>
              <a href={tiktokLink} target="_blank">
                <div
                  className={
                    `relative flex items-end
                    w-[250px] h-[136.5px] lg:w-[350px] lg:h-[192.5px]
                    ${background} border-[2px] border-black`
                  }
                >
                  <div
                    className={
                      `w-full text-center font-ranga text-sm lg:text-2xl
                      mb-2 bg-slate-200/75 hover:text-white hover:bg-slate-700/75
                      h-[18px] lg:h-[30px]`
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
    </PageStructure>
  )
}

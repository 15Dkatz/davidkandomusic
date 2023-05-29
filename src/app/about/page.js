import Link from 'next/link';
import { Roboto_Condensed } from 'next/font/google';

// TODO: Should this be a layout.js file?
import PageLayout from '../components/pageLayout';

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: '400'
});

// TODO: Why do the interpolated strings work in ${robotoCondensed.className} and not other examples, like inserting the background image value? Probably because it's parsed at build time through the next Class, but ${} is not supported since the value is not known at build time. But + '' + is?

// TODO: Consider subtle linear gradient
export default function Page() {
  // TODO: delete either op_90 or op_75 depending on which is more legible against white text
  return (
    <PageLayout background="bg-[url('/goofy_bg_500_op_80.png')]">
      <div className={`${robotoCondensed.className} text-sm md:text-xl p-1`}>
        <div>
          Hey, you might be thinking, can David do music? Well yes, David Kando music.
        </div>
        <br />
        <div>Next, you might be thinking, did you choose your artist name off of a pun? Also yes. You kando anything. Life is too short to take it too serious.</div>
        <br />
        <div>I'm a filipino-american, and was born and raised in San Francisco.</div>
        <br />
        <div>
          My musical background consists of trying to get gold stars in piano books as a kid. Then in high school, I attempted to belt like Freddie Mercury. More recently, I've been in a cappella groups and riff rock bands.
        </div>
        <br />
        <div>
          At the end of the day, when you listen to my music, I want to feel like you're having a good time, like you're "just hanging around..."
        </div>
        <br />
        <div>
          Find my latest releases{' '}
          <Link
            href="/discography"
            className="text-purple-800 underline"
          >
            here
          </Link>.
        </div>
        <br />
        <div>
          Reach out for inquiries at davidkandomusic@gmail.com
        </div>
      </div>
    </PageLayout>
  )
}
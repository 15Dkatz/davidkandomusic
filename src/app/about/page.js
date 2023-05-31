import Link from 'next/link';
import PageLayout from '../components/pageLayout';

// TODO: Why do the interpolated strings work in ${robotoCondensed.className} and not other examples, like inserting the background image value? Probably because it's parsed at build time through the next Class, but ${} is not supported since the value is not known at build time. But + '' + is?

// TODO: Consider subtle linear gradient
export default function Page() {
  // TODO: delete either op_90 or op_75 depending on which is more legible against white text
  return (
    <PageLayout
      background="bg-[url('/goofy_bg_500_op_80.png')]"
      title="About David Kando"
    >
      <div className={"text-md lg:text-xl p-1"}>
        <div>
          Can David do music? Yes, David Kando music.
        </div>
        <br />
        <div>Did you base your artist name on a pun? Hell yes. You kando anything you want, really. Also, puns are cool.</div>
        <br />
        <div>I'm a Filipino-American, and was born and raised in San Francisco.</div>
        <br />
        <div>
          My musical background started with trying to get gold stars in piano books as a kid. Then in high school, I trained my vocal cords by attempting to belt like Freddie Mercury. More recently, I've been in a-cappella groups and riff rock bands.
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
          Reach out for inquiries at <span className="underline">davidkandomusic@gmail.com</span>
        </div>
      </div>
    </PageLayout>
  )
}
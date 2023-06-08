import Link from 'next/link';
import PageLayout from '../components/page-layout';

export default function Page() {
  return (
    <PageLayout
      background="bg-[url('/goofy_bg_500_op_80.png')] bg-contain"
      title="About David Kando"
    >
      <div className={"text-md md:text-xl p-1"}>
        <div>
          Can David do music? Yes, David Kando music.
        </div>
        <br />
        <div>Did you base your artist name on a pun? Hell yes. You kando anything you want, really. Also, puns are cool.</div>
        <br />
        <div>I&apos;m a Filipino-American, and was born and raised in San Francisco.</div>
        <br />
        <div>
          My musical background started with trying to get gold stars in piano books as a kid. Then in high school, I trained my vocal cords by attempting to belt like Freddie Mercury. More recently, I&apos;ve been in a-cappella groups and riff rock bands.
        </div>
        <br />
        <div>
          At the end of the day, when you listen to my music, I want to feel like you&apos;re having a good time, like you&apos;re &quot;just hanging around...&quot;
        </div>
        <br />
        <div>
          Find my latest releases{' '}
          <Link href="/discography" className="link">here</Link>.
        </div>
        <div>
          Reach out to me and/or join my email list{' '}
          <Link href="/connect" className="link">here</Link>.
        </div>
      </div>
    </PageLayout>
  )
}
import PageLayout from '../components/pageLayout';

export default function Studio() {
  return (
    <PageLayout
      background="bg-gradient-to-b from-slate-100 to-purple-50"
      title="David Kando Studios"
    >
      <div className={"text-md lg:text-xl p-1"}>
        <div>
          Let's make music together.
        </div>
        <br />
        <div>
          If you're in the Bay Area, and are looking to record instruments and/or vocals, reach out to <span className="underline">davidkandomusic@gmail.com</span>.
        </div>
        <br />
        <div>
          The studio's collection consists of a handful of studio-grade microphones, preamps, hardware compressors, and more. A more detailed list of gear can be provided over email.
        </div>
        <br />
        <div>
          Again, reach out to <span className="underline">davidkandomusic@gmail.com</span> to see if David Kando Studios is the right fit for you!
        </div>
      </div>
    </PageLayout>
  )
}

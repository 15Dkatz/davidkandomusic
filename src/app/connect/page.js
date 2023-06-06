import PageLayout from '../components/pageLayout';

export default function Connect() {
  return (
    <PageLayout
      // TODO: Consider a linear gradient or image background
      background="bg-gradient-to-b from-slate-100 to-pink-100"
      title="Let's hang around"
    >
      <div className={"text-md lg:text-xl p-1"}>
        <div>
          Find my latest projects, upcoming live events, and releases!
        </div>
        <br />
        <div>
          1. Support me with a follow on{' '}
          <a className="font-bold link" href="https://open.spotify.com/artist/6ep6Hvwexmaa5IqcPxMxqC?si=t24Vsf6LRsKSIy5lV0wvNw" target="_blank">Spotify</a>.
        </div>
        <div>
          2. Follow me on{' '}
          <a className="font-bold link" href="https://www.instagram.com/davidkandomusic/" target="_blank">instagram</a>.
        </div>
        <div>
          3. Check out my{' '}
          <a className="font-bold link" href="https://www.tiktok.com/@davidkandomusic" target="_blank">tiktok</a>.
        </div>
        <br />
        <div>
          Reach out for inquiries at <span className="underline">davidkandomusic@gmail.com</span>
        </div>
      </div>
    </PageLayout>
  )
}

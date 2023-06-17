import Spinner from 'components/spinner';

// NOTE: Show in Slow 3G network throttling.
export default function LoadingContent() {
  return (
    <div className="min-h-screen p-5">
      <Spinner />
    </div>
  )
}

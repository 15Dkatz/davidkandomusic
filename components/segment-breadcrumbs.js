import Link from 'next/link';

export default function SegmentBreadcrumbs({
  initialTitle,
  skipInitial,
  segmentTitlesMap,
  segments
}) {
  if (segments.length === 0) return initialTitle;

  const segmentsToRender = skipInitial && segments.length > 0
    ? segments.slice(1, segments.length)
    : segments;

  return (
    <div className="link decoration-4">
      {
        segmentsToRender.map((segment, i) => {
          const href = segments.slice(0, skipInitial ? i+2 : i+1).join('/');
          // console.log(`href`, href);
          const isLastSegment = i === segmentsToRender.length - 1;

          return (
            <span key={segment}>
              <Link
                href={href}
                className={`${isLastSegment ? "text-black" : ""}`}
              >
                {segmentTitlesMap[segment]}
              </Link>
              {isLastSegment ? <></> : <span>{' > '}</span>}
            </span>
          )
        })
      }
    </div>
  )
}
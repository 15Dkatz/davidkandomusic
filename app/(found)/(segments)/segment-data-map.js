// This could be named data.js.
// But the /record/[content]/[id] nesting another segment-metadata-map suggests a pattern common enough to
// create a new whole new common filename
import recordIdSegmentMap from './record/[id]/segment-data-map';

const SEGMENT_DATA_MAP = {
  '/about': {
    background: "bg-[url('/goofy_bg_500_op_80.png')] bg-contain",
    title: "About David Kando"
  },
  '/band': {
    background: "bg-[url('/curcio_banner.png')] bg-contain",
    title: "Enter the Curcio-verse"
  },
  '/connect': {
    background: "bg-gradient-to-b from-slate-100 to-pink-100",
    title: "Let's hang around"
  },
  '/discography': {
    background: "bg-gradient-to-b from-blue-100 to-pink-100",
    title: "Discography"
  },
  '/quiz': {
    background: "bg-gradient-to-b from-slate-100 to-purple-50",
    title: "Playlist Personality Quiz"
  },
  '/studio': {
    background: "bg-gradient-to-b from-slate-100 to-purple-50",
    title: "David Kando Studios"
  },
  ...recordIdSegmentMap
}

export default SEGMENT_DATA_MAP;

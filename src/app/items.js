import { POISON_WORMS_PARAMS, IN_PERPETUITY_PARAMS } from './album-data';

// Try merging this with item_type_settings. More elegant.
const ITEMS = [
  {
    id: 1,
    attributes: {
      href: '/about',
      background: "bg-[url('/about_b&w_500.png')] bg-contain",
      text: "About David Kando"
    }
  },
  {
    id: 2,
    attributes: {
      href: "/discography",
      background: "bg-[url('/discography_400.png')] bg-contain",
      text: "Discography"
    }
  },
  {
    id: 3,
    attributes: {
      href: `/record?${POISON_WORMS_PARAMS}`,
      text: 'Poison Worms',
      background: "bg-[url('/poison_worms_400.png')] bg-contain"
    }
  },
  {
    id: 4,
    attributes: {
      href: `/record?${IN_PERPETUITY_PARAMS}`,
      text: 'In Perpetuity',
      background: "bg-[url('/in_perpetuity_400.png')] bg-contain"
    }
  },
  {
    id: 5,
    attributes: {
      href: "/connect",
      background: "bg-[url('/connect_500.png')] bg-contain",
      text: "Connect with me"
    }
  },
  {
    id: 6,
    attributes: {
      href: "/studio",
      background: "bg-[url('/studio_500.png')] bg-contain",
      text: "Recording Studio"
    }
  },
  {
    id: 7,
    attributes: {
      href: "/quiz/form",
      background: "bg-[url('/quiz_500.png')] bg-contain",
      text: "Playlist Personality Quiz"
    }
  },
  {
    id: 8,
    attributes: {
      href: "/band",
      // TODO: Change background to an image
      background: "bg-[url('/curcio_500.png')] bg-contain",
      text: "CURCIO BAND"
    }
  }
];

export default ITEMS;

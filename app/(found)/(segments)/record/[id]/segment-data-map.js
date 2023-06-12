import NavTitle from './nav-title';

import { POISON_WORMS_ID, IN_PERPETUITY_ID } from 'app/(found)/data';

const POISON_WORMS_TITLE = 'Poison Worms';
const IN_PERPETUITY_TITLE = 'In Perpetuity';

export const SEGMENT_TITLES_MAP = {
  [POISON_WORMS_ID]: POISON_WORMS_TITLE,
  [IN_PERPETUITY_ID]: IN_PERPETUITY_TITLE,
  'lyrics': 'Lyrics',
  'gear': 'Gear used'
};

const poisonWormsContentMap = {
  title: <NavTitle skipInitial title="Poison Worms" />,
  background: `bg-[url('/poison_worms_background.png')] bg-contain`,
};

const inPerpetuityContentMap = {
  title: <NavTitle skipInitial title="In Perpetuity" />,
  background: `bg-[url('/in_perpetuity_background.png')] bg-contain`,
};

export default {
  [`/record/${POISON_WORMS_ID}`]: {
    title: POISON_WORMS_TITLE,
    background: `bg-[url('/poison_worms_background.png')] bg-contain`,
  },
  [`/record/${POISON_WORMS_ID}/lyrics`]: poisonWormsContentMap,
  [`/record/${POISON_WORMS_ID}/gear`]: poisonWormsContentMap,
  [`/record/${IN_PERPETUITY_ID}`]: {
    title: IN_PERPETUITY_TITLE,
    background: `bg-[url('/in_perpetuity_background.png')] bg-contain`,
  },
  [`/record/${IN_PERPETUITY_ID}/lyrics`]: inPerpetuityContentMap,
  [`/record/${IN_PERPETUITY_ID}/gear`]: inPerpetuityContentMap
}
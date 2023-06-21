import { lazy } from 'react';

// TODO: Preserve the following as proof of the Suspense loading
// export const PoisonWormsEmbed = lazy(
//   () => new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(import('./poison-worms-embed'));
//     }, 5000);
//   })
// );

export const PoisonWormsEmbed = lazy(() => import('./poison-worms-embed'));
export const InPerpetuityEmbed = lazy(() => import('./in-perpetuity-embed'));

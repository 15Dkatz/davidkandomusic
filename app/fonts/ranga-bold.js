// Only instantiate localFont once for all use cases since loading a font is expensive on the browser
import localFont from 'next/font/local';

const rangaBold = localFont({
  src: './Ranga-Bold.ttf'
});

export default rangaBold;
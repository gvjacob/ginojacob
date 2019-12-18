import Link from 'next/link';

const Index = () => (
  <div>
    <Link href={'/about'}>
      <a title={'About page'}>About</a>
    </Link>
    <Link href={'/dynamic/[id]'} as={'/dynamic/thisisid'}>
      <a>Dynamic</a>
    </Link>
    <p>Hello Next.js</p>
  </div>
);

export default Index;

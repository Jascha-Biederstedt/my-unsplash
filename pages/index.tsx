import type { NextPage } from 'next';

import Navbar from 'components/Navbar';
import Gallery from 'components/Gallery';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Gallery />
    </>
  );
};

export default Home;

import type { NextPage } from 'next';
import Head from 'next/head';

import { Container } from '../styles/pages/Home';

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <Head>
          <title>Quem sou eu</title>
        </Head>

        <h1>Hello World</h1>
      </Container>
    </>
  );
};

export default Home;

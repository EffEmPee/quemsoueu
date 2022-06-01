import type { NextPage } from 'next';
import Head from 'next/head';

import { Card, Container } from '../styles/pages/Home';

const Home: NextPage = () => (
  <Container>
    <Head>
      <title>Quem sou eu</title>
    </Head>

    <main>
      <h1>Quem sou eu?</h1>

      <h3>
        Escreva sobre você e compartilhe onde quiser, quantas vezes quiser!
      </h3>
      <p>
        Você pode descrever suas experiências, sua forma de pensar, ou o que
        melhor <strong>define você</strong>
      </p>

      <Card>
        <span>Vantagens:</span>
        <ul>
          <li>fácil de usar</li>
          <li>link personalizado e único</li>
          <li>totalmente de graça</li>
        </ul>
      </Card>
    </main>
  </Container>
);

export default Home;

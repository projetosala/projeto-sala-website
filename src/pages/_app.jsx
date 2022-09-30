/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import Head from 'next/head';
import '../styles/variables.css';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Uma abordagem lúdica sobre a importância da preservação do meio ambiente alagoano" />
        <title>Projeto S.A.L.A</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

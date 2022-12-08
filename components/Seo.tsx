import Head from 'next/head';

interface seoComponentProps {
  title: string;
}

function Seo({ title }: seoComponentProps) {
  return (
    <Head>
      <title> {title} | Heuron, Neuron & AI</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default Seo;

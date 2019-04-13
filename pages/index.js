import Head from 'next/head';
import dynamic from 'next/dynamic'


const DynamicMap = dynamic(() => import('../components/map'), {
  loading: () => <p>Loading...</p>,
  ssr: false
});

function IndexPage() {
  return (
     <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p>Hello world!</p>
      <DynamicMap />
    </div>
  );
}

export default IndexPage;

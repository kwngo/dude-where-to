import Head from 'next/head';

function IndexPage() {
  return (
     <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href='https://api.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css' rel='stylesheet' />
      </Head>
      <p>Hello world!</p>
    </div>
  );
}

export default IndexPage;

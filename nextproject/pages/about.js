import Head from "next/head"

const AboutPage = () => {
  return (
    <div>
      <Head>
        <title>about page</title>
        <meta content="about" property="og:title"/>
        <meta content="next practice" property="og:description"/>
      </Head>
      <h1>This is about page.</h1>
    </div>
  );
};

export default AboutPage;

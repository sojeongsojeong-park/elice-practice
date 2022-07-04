import Head from "next/head"

const PostsPage = () => {
  return (
    <div>
      <Head>
        <title>posts page</title>
        <meta content="posts" property="og:title"/>
        <meta content="next practice" property="og:description"/>
      </Head>
      <h1>This is posts page.</h1>
    </div>
  );
};

export default PostsPage;

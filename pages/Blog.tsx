import type { NextPage } from "next";
import Head from "next/head";

const Blog: NextPage = () => {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Blogs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <p> Hello </p>
      </main>
    </div>
  );
};

export default Blog;

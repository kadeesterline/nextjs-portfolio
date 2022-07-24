import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import dayjs from "dayjs";

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
        <title>{post.title}</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main></main>
    </div>
  );
};

export default Post;

export const getStaticProps = async () => {
    const res = await fetch(`https://dev.to/api/articles/${[id]}`){

    }
};

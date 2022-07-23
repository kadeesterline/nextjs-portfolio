import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import dayjs from "dayjs";

type Post = {
  title: string;
  url: string;
  conver_image: string;
  tags: string;
  reading_time_minutes: number;
  published_at: string;
};

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Blogs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <div className="m-5 p-5">
          <h2 className="text-4xl font-bold pb-4"> Blog </h2>
          {posts.map(
            (post: {
              title: string;
              url: string;
              cover_image: string;
              tags: string;
              reading_time_minutes: number;
              published_at: string;
            }) => (
              <div className="border-2 p-4 m-4 rounded-md flex justify-between bg-slate-100 dark:bg-slate-200">
                <div className="">
                  <h3 className="text-2xl font-bold dark:text-black">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400">
                    <em>{post.tags}</em>
                  </p>
                  <div className="flex justify-betwen">
                    <p className="p-2 pb-0 m-2 mb-0 text-slate-500 dark:text-slate-400">
                      {post.reading_time_minutes} minute read
                    </p>
                    <p className="p-2 pb-0 m-2 mb-0 text-slate-500 dark:text-slate-400">
                      {dayjs(post.published_at).format("MM/DD/YYYY")}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <a
                    className="text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:text-slate-200 dark:hover:bg-slate-600 p-1 rounded-md"
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read Article
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </main>
    </div>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const res = await fetch("https://dev.to/api/articles?username=kadeesterline");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};

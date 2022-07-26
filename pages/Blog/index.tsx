import type { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Link from "next/link";
import dayjs from "dayjs";

type Post = {
  id: number;
  title: string;
  url: string;
  conver_image: string;
  tags: string;
  reading_time_minutes: number;
  published_at: string;
};

const Blog = ({
  posts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Blogs</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <div className="m-5 p-5">
          <h2 className="text-4xl font-bold pb-4 border-b-2 "> Blog </h2>
          {posts.map(
            (post: {
              id: number;
              title: string;
              url: string;
              cover_image: string;
              tags: string;
              reading_time_minutes: number;
              published_at: string;
            }) => (
              <div className="border-2 p-4 m-4 rounded-md flex justify-between hover:bg-slate-100 dark:bg-slate-200">
                <h3 className="text-2xl font-bold dark:text-black m-2 p-2">
                  {post.title}
                </h3>

                {/* <div className="flex justify-between">
                  <p className="p-2 pb-0 m-2 mb-0 text-slate-500 dark:text-slate-400">
                    {post.reading_time_minutes} minute read
                  </p>

                  <p className="p-2 pb-0 m-2 mb-0 text-slate-500 dark:text-slate-400">
                    {dayjs(post.published_at).format("MM/DD/YYYY")}
                  </p>
                </div> */}

                <Link href={`/Blog/` + post.id} className="">
                  <a className="text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:text-slate-200 dark:hover:bg-slate-600 m-2 p-2 rounded-md h-10">
                    Read Article
                  </a>
                </Link>
              </div>
            )
          )}
        </div>
      </main>
    </div>
  );
};

export default Blog;

export const getServerSideProps = async () => {
  const res = await fetch("https://dev.to/api/articles?username=kadeesterline");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};

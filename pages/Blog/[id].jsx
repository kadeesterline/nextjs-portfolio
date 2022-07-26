import Head from "next/head";
import dayjs from "dayjs";
import ReactMarkdown from "react-markdown";
import "github-markdown-css";
import styles from "./styles/Markdown.module.css";

const Post = ({ post }) => {
  return (
    <div>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <div className="m-5 p-5">
          <h1 className="text-4xl font-bold pb-4">{post.title}</h1>

          <div className="flex justify-between mb-3 pb-1">
            <p className="p-2 pb-0 m-2 mb-0 text-slate-500 dark:text-slate-400">
              <em>{post.tag_list}</em>
            </p>
            <p className="p-2 pb-0 m-2 mb-0 text-slate-500 dark:text-slate-400">
              {post.reading_time_minutes} minute read
            </p>
            <p className="p-2 pb-0 m-2 mb-0 text-slate-500 dark:text-slate-400">
              {dayjs(post.published_at).format("MM/DD/YYYY")}
            </p>
          </div>
          <div className="p-3">
            <div className={styles.light}>
              <ReactMarkdown>{post.body_markdown}</ReactMarkdown>
            </div>
          </div>

          <p className="pt-4 mt-4">
            If you have any questions please leave a comment over on{" "}
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-600"
            >
              dev.to
            </a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Post;

export const getServerSidePaths = async () => {
  const res = await fetch("https://dev.to/api/articles?username=kadeesterline");
  const posts = await res.json();

  const paths = posts.map((post) => {
    return {
      params: {
        id: post.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getServerSideProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://dev.to/api/articles/${id}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
};

import Head from "next/head";
import dayjs from "dayjs";
import ReactMarkdown from "react-markdown";
import "github-markdown-css";

const Title = ({ children, ...props }) => <div {...props}>{children}</div>;
const Subtitle = ({ children, ...props }) => <div {...props}>{children}</div>;
const Paragraph = ({ children, ...props }) => <div {...props}>{children}</div>;

const CodeBlock = ({ children, ...props }) => <div {...props}>{children}</div>;

const Code = ({ children, ...props }) => <div {...props}>{children}</div>;
const Link = ({ children, ...props }) => <div {...props}>{children}</div>;

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

          <div className="flex justify-between">
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
          <div className="markdown-body">
            <ReactMarkdown>{post.body_markdown}</ReactMarkdown>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Post;

export const getStaticPaths = async () => {
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

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://dev.to/api/articles/${id}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
};

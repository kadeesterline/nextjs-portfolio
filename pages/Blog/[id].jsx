// import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import dayjs from "dayjs";
// import { getStaticPaths, getStaticProps } from "next";
import Markdown from "markdown-to-jsx";

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

          <div className="flex justify-betwen">
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
          <div className="">
            <Markdown
              options={{
                overrides: {
                  h2: {
                    component: Title,
                    props: {
                      className: "text-2xl font-bold p-2 m-2",
                    },
                  },
                  h3: {
                    component: Subtitle,
                    props: {
                      className: "text-xl font-bold p-2 m-2",
                    },
                  },
                  p: {
                    component: Paragraph,
                    props: {
                      className: "p-2 m-2",
                    },
                  },
                  code: {
                    component: Code,
                    props: {
                      className:
                        "p-1 m-1 bg-slate-200 rounded-md dark:bg-slate-400 inline",
                    },
                  },
                  a: {
                    component: Link,
                    props: {
                      className:
                        "p-1 m-1 text-blue-400 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-600 inline",
                    },
                  },
                },
              }}
            >
              {post.body_markdown}
            </Markdown>
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

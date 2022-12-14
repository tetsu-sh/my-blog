import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import type PostType from "../../interfaces/post";
import TOC from "../../components/toc";
import { useEffect } from "react";
import tocbot from "tocbot";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  useEffect(() => {
    tocbot.init({
      tocSelector: ".toc",
      contentSelector: ".post",
      headingSelector: "h1,h2, h3",
      scrollSmoothOffset: -80,
    });

    return () => tocbot.destroy();
  }, []);

  return (
    <Layout preview={preview}>
      <div className="flex min-h-screen flex-col">
        <Header />

        <Container>
          {router.isFallback ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <>
              <div>
                <Head>
                  <title>{post.title}</title>
                </Head>
              </div>
              <div>
                <PostHeader
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                />
              </div>
              <div className="flex">
                <div className="flex flex-col mx-10">
                  <article className="mb-32">
                    <PostBody content={post.content} />
                  </article>
                </div>
                <div className="flex flex-col">
                  <aside>
                    <TOC></TOC>
                  </aside>
                </div>
              </div>
            </>
          )}
        </Container>
      </div>
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

import PostContent from "@components/posts/postDetail/postContent";
import { getPostData, getPostsFiles } from "../../../lib/posts-util";
import Head from "next/head";

export default function SlugDetailPage(props) {
  return (
    <>
      <Head>
        <title>
          {`${props.post.category}  ${props.post.title} | Tao - Scuola
          Nazionale di Massaggio`}
        </title>
        <meta name="description" content={props.post.description} />
      </Head>
      <PostContent post={props.post} />
    </>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const { category } = params;
  const postData = getPostData(slug, category);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const corsiFileNames = getPostsFiles("corso");
  const diplomaFileNames = getPostsFiles("diploma");
  const corsiSlugs = corsiFileNames.map((fileName) =>
    fileName.replace(/\.md$/, "")
  );
  const diplomiSlugs = diplomaFileNames.map((fileName) =>
    fileName.replace(/\.md$/, "")
  );

  const corsiPath = corsiSlugs.map((corsiSlug) => ({
    params: { category: "corso", slug: corsiSlug },
  }));

  const diplomiPath = diplomiSlugs.map((diplomiSlug) => ({
    params: { category: "diploma", slug: diplomiSlug },
  }));

  return {
    paths: [...corsiPath, ...diplomiPath],
    fallback: false,
  };
}

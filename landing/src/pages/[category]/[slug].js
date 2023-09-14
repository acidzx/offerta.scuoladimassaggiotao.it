import PostContent from "@components/posts/postDetail/postContent";
import Head from "next/head";
import ModalForm from "@components/modalForm";
import {
  getPostData,
  getPostsFiles,
  getAllPosts,
} from "../../../lib/posts-util";

export default function SlugDetailPage(props) {
  return (
    <>
      <Head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          {`${props.post.category}  ${props.post.title} | Tao - Scuola
          Nazionale di Massaggio`}
        </title>
        <meta name="description" content={props.post.longcontent} />
      </Head>
      <PostContent post={props.post} {...props} />
      <ModalForm />
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const { category } = params;
  const postData = getPostData(slug, category);
  const allCorsi = getAllPosts("corso");
  const allDiplomi = getAllPosts("diploma");

  const res = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJgZIpTWlbKRMRQH75EJwkVKI&language=it&fields=review&key=${process.env.G_ACCESS_TOKEN}`,
    { cache: "force-cache" }
  );

  const reviews = await res.json();

  return {
    props: {
      post: postData,
      corsi: allCorsi,
      diplomi: allDiplomi,
      reviews,
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

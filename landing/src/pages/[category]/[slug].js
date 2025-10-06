import PostContent from "@components/posts/postDetail/postContent";
import Head from "next/head";
import ModalForm from "@components/modalForm";
import {
  getPostData,
  getPostsFiles,
  getAllPosts,
} from "../../../lib/posts-util";

const REVALIDATE_TIME_SECONDS = 3600; // Cache per 1 ora (ridotto da 3 ore)

export default function SlugDetailPage(props) {
  console.log(props.corsi);

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

  let reviewsData = null;

  const getRewiewResponse = await fetch(
    "https://www.scuoladimassaggiotao.it/api/getGoogleReviews",
    {
      method: "GET", // Esplicito per chiarezza
      next: {
        revalidate: REVALIDATE_TIME_SECONDS,
        tags: ["google-reviews"],
      },
      // Considera un timeout anche qui se necessario
      // signal: AbortSignal.timeout(9000) // Esempio: 9 secondi
    }
  );

  if (getRewiewResponse.ok) {
    reviewsData = await getRewiewResponse.json();
  }

  const reviews = [{}];

  return {
    props: {
      post: postData,
      corsi: allCorsi,
      diplomi: allDiplomi,
      reviews,
      reviewsData,
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

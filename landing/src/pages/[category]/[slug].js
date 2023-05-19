import PostContent from "@components/posts/postDetail/postContent";
import { getPostData, getPostsFiles } from "../../../lib/posts-util";

export default function SlugDetailPage(props) {
  return <PostContent post={props.post} />;
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  let { category } = params;
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
    fallback: true,
  };
}

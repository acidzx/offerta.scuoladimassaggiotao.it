import PostContent from "@components/posts/postDetail/postContent";
import { getPostData, getPostsFiles } from "../../../lib/posts-util";

export default function SlugDetailPage(props) {
  return <PostContent post={props.post} />;
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFileNames = getPostsFiles();

  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { category: "corso", slug: slug } })),
    fallback: false,
  };
}

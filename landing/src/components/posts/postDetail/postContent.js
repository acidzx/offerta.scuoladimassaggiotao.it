import ReactMarkdown from "react-markdown";

import PostHeader from "./postHeader";

export default function PostContent(props) {
  const { post } = props;
  const imgPath = `/assets/images/${post.category}/${post.slug}/${post.img}`;

  return (
    <article>
      <PostHeader img={imgPath} title={post.title} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}

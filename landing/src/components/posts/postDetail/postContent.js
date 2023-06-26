import ReactMarkdown from "react-markdown";
import PostHeader from "./postHeader";

export default function PostContent(props) {
  const { post } = props;
  const imgPath = `/assets/images/${post.category}/${post.slug}/${post.img}`;

  return (
    <>
      <div className="hero min-h-screen homebg">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <article>
        <PostHeader img={imgPath} title={post.title} />
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </>
  );
}

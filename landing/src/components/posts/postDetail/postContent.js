import PostHeader from "./postHeader";
import Cta from "@components/cta";
import ModalForm from "@components/modalForm";
import PostPresentation from "./postPresentation";
import PostVideoPresentation from "./postVideoPresentation";
import PostSchedaTecnica from "./postSchedaTecnica";
import PostPrice from "./postPrice";
import PostServiziInclusi from "./postServiziInclusi";
import { Fragment } from "react";

export default function PostContent(props) {
  const { post } = props;
  const imgPath = `/assets/images/${post.category}/${post.slug}`;

  return (
    <Fragment>
      <PostHeader
        img={`${imgPath}/${post.img}`}
        title={post.title}
        description={post.description}
        category={post.category}
      />
      <hr className="hidden lg:block h-px my-4 bg-gray-200 border-0 " />
      <PostPresentation
        longcontent={post.longcontent}
        benefici={post.benefici}
        slug={post.slug}
      />
      <PostVideoPresentation videosrc={post.videosrc} />
      <PostSchedaTecnica
        title={post.title}
        programma={post.programma}
        requisiti={post.requisiti}
        durata={post.durata}
        attestazione={post.attestazione}
        category={post.category}
      />

      <PostPrice price={post.price} />

      <PostServiziInclusi title={post.title} />

      <Cta />

      <ModalForm />
    </Fragment>
  );
}

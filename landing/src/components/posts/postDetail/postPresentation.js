import Image from "next/image";
import { Interweave } from "interweave";
import { polyfill } from "interweave-ssr";
import PostFeature from "./postFeature";

polyfill();

export default function PostPresentation(props) {
  const {
    longcontent,
    longcontent2,
    longcontentTitle,
    longcontentCollapseTitle,
    longcontentCollapseContent,
    longcontentCollapseTitle2,
    longcontentCollapseContent2,
    slug,
    category,
    features1,
    features2,
    features3,
  } = props;

  return (
    <>
      <div className="containerFull">
        <div className="gap-16 items-center px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2">
          <div className="font-light text-gray-500 sm:text-lg">
            <h2 className="mb-4 text-3xl font-extrabold text-gray-600 ">
              <Interweave
                content={longcontentTitle || "longcontentTitle missing"}
              />
            </h2>
            <article className="pLeft">
              <Interweave content={longcontent} />

              {longcontentCollapseTitle ? (
                <details className="collapse collapse-arrow bg-base-200">
                  <summary className="collapse-title text-md font-medium">
                    <Interweave content={longcontentCollapseTitle} />
                  </summary>
                  <div className="collapse-content pLeft">
                    <Interweave content={longcontentCollapseContent} />
                  </div>
                </details>
              ) : (
                []
              )}
              {longcontentCollapseTitle2 ? (
                <details className="collapse collapse-arrow bg-base-200">
                  <summary className="collapse-title text-md font-medium">
                    <Interweave content={longcontentCollapseTitle2} />
                  </summary>
                  <div className="collapse-content pLeft">
                    <Interweave content={longcontentCollapseContent2} />
                  </div>
                </details>
              ) : (
                []
              )}
              {longcontent2 ? (
                <div className="pLeft">
                  <Interweave content={longcontent2} />
                </div>
              ) : (
                ""
              )}
            </article>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <Image
              className="w-full rounded-lg"
              src={`/assets/images/${category}/${slug}/${slug}-vertical-1.png`}
              alt={slug}
              width={290}
              height={400}
            />
            <Image
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src={`/assets/images/${category}/${slug}/${slug}-vertical-2.png`}
              alt={slug}
              width={290}
              height={400}
            />
          </div>
        </div>
      </div>
      {category !== "diploma" ? (
        <PostFeature
          features1={features1}
          features2={features2}
          features3={features3}
        />
      ) : (
        ""
      )}
    </>
  );
}

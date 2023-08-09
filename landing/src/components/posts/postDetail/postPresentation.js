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
      <div className="bg-white ">
        <div className="flex items-center justify-center mx-auto">
          {/*      <h2 className="my-4 text-2xl font-extrabold tracking-tight  text-gray-600 md:text-3xl lg:text-4xl text-center leading-6 gap-y-3">
          Entra nel mondo del benessere con il
          <br />
          corso di massaggio base svedese
        </h2> */}
        </div>
        <div className="gap-16 items-center py-16 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg">
            <h2 className="mb-4 text-3xl font-extrabold text-gray-600 ">
              <Interweave
                content={longcontentTitle || "longcontentTitle missing"}
              />
            </h2>
            <article className="mb-4 text-justify text-base">
              <Interweave content={longcontent} />

              {longcontentCollapseTitle ? (
                <details className="collapse collapse-arrow bg-base-200">
                  <summary className="collapse-title text-xl font-medium">
                    <Interweave content={longcontentCollapseTitle} />
                  </summary>
                  <div className="collapse-content">
                    <Interweave content={longcontentCollapseContent} />
                  </div>
                </details>
              ) : (
                []
              )}
              {longcontentCollapseTitle2 ? (
                <details className="collapse collapse-arrow bg-base-200">
                  <summary className="collapse-title text-xl font-medium">
                    <Interweave content={longcontentCollapseTitle2} />
                  </summary>
                  <div className="collapse-content">
                    <Interweave content={longcontentCollapseContent2} />
                  </div>
                </details>
              ) : (
                []
              )}
              {longcontent2 ? (
                <div className="mb-4 text-justify text-base">
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

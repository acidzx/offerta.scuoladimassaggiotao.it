export default function PostVideoPresentation(props) {
  const { videosrc } = props;

  return (
    <div className="p-4">
      <div className="mt-8 container mx-auto border-2 rounded-xl p-4 lg:px-16 lg:py-16 max-w-6xl">
        <div className="aspect-w-16 aspect-h-9 mx-auto">
          <iframe
            src={videosrc}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

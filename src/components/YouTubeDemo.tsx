// YouTube's own player, lazy-loaded so it doesn't fetch until scrolled near.
// Visitors press YouTube's play button directly: a custom click-to-load
// facade with autoplay got stuck on a spinner/black frame because browsers
// block autoplay with sound. YouTube also requires a referrer from embeds
// (otherwise "Error 153"), hence the explicit referrerPolicy.
export function YouTubeDemo({
  id,
  title,
  vertical = false,
}: {
  id: string;
  title: string;
  vertical?: boolean;
}) {
  const frame = vertical
    ? "mx-auto aspect-[9/16] h-[min(70vh,640px)] max-w-full"
    : "aspect-video w-full";
  const watchUrl = vertical
    ? `https://www.youtube.com/shorts/${id}`
    : `https://www.youtube.com/watch?v=${id}`;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className={`relative overflow-hidden bg-black ${frame}`}>
        <iframe
          src={`https://www.youtube.com/embed/${id}?rel=0&playsinline=1`}
          title={title}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
      <a
        href={watchUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="font-pixel text-sm text-parchment underline underline-offset-4 hover:text-gold"
      >
        Video not loading? Watch on YouTube ↗
      </a>
    </div>
  );
}

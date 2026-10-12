"use client";

import { useState } from "react";

// Click-to-play YouTube embed. Shows only the thumbnail until clicked, so
// project pages don't load YouTube's player (or its cookies) up front.
export function YouTubeDemo({
  id,
  title,
  vertical = false,
}: {
  id: string;
  title: string;
  vertical?: boolean;
}) {
  const [playing, setPlaying] = useState(false);
  const frame = vertical
    ? "mx-auto aspect-[9/16] h-[min(70vh,640px)] max-w-full"
    : "aspect-video w-full";

  return (
    <div className={`relative overflow-hidden bg-wood-dark ${frame}`}>
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play ${title}`}
          className="group absolute inset-0 h-full w-full"
        >
          {/* Remote thumbnail; next/image would need a remote loader under static export. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            className="h-full w-full object-cover opacity-85 transition-opacity group-hover:opacity-100"
          />
          <span className="pixel-btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-3 text-xl whitespace-nowrap">
            ▶ Play demo
          </span>
        </button>
      )}
    </div>
  );
}

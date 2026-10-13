"use client";

import { useId, useRef, useState } from "react";

type Motion = "full" | "reduced";

// Current effective setting: an explicit choice wins, otherwise follow the OS.
function readMotion(): Motion {
  const saved = document.documentElement.dataset.motion;
  if (saved === "full" || saved === "reduced") return saved;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "reduced"
    : "full";
}

// 9x9 pixel-art cog; "#" cells are filled.
const gear = [
  "...#.#...",
  ".#######.",
  "..##.##..",
  "###...###",
  "..#...#..",
  "###...###",
  "..##.##..",
  ".#######.",
  "...#.#...",
];

function IconGear({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 9 9" className={className} shapeRendering="crispEdges" aria-hidden="true">
      {gear.flatMap((row, y) =>
        [...row].map((cell, x) =>
          cell === "#" ? <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill="currentColor" /> : null
        )
      )}
    </svg>
  );
}

export function Options() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const [motion, setMotion] = useState<Motion>("full");

  function open() {
    setMotion(readMotion());
    dialogRef.current?.showModal();
  }

  function choose(next: Motion) {
    setMotion(next);
    document.documentElement.setAttribute("data-motion", next);
    try {
      localStorage.setItem("motion", next);
    } catch {
      // Private mode or blocked storage: the choice just won't persist.
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-label="Options"
        className="pixel-btn h-10 w-10 shrink-0"
      >
        <IconGear className="h-5 w-5" />
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        className="pixel-panel m-auto w-[min(92vw,26rem)] p-6 text-ink backdrop:bg-[var(--dusk)]"
        onClick={(e) => {
          // Clicking the backdrop (the dialog element itself) closes it.
          if (e.target === e.currentTarget) dialogRef.current?.close();
        }}
      >
        <h2 id={titleId} className="text-center font-pixel text-2xl">
          Options
        </h2>

        <fieldset className="mt-5">
          <legend className="font-pixel text-lg">Motion</legend>
          <div className="mt-2 grid grid-cols-2 gap-3 px-1">
            {(["full", "reduced"] as const).map((m) => (
              <button
                key={m}
                type="button"
                data-active={motion === m}
                aria-pressed={motion === m}
                onClick={() => choose(m)}
                className="pixel-btn py-2 text-base capitalize"
              >
                {m}
              </button>
            ))}
          </div>
          <p className="mt-3 font-mono text-xs leading-relaxed text-muted">
            Reduced stops the drifting clouds, the splash bounce, and hover
            transitions. Defaults to your system setting.
          </p>
        </fieldset>

        <form method="dialog" className="mt-6 px-1">
          <button type="submit" className="pixel-btn w-full py-3 text-xl">
            Done
          </button>
        </form>
      </dialog>
    </>
  );
}

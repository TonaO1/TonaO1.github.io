// Fixed golden-hour pixel landscape behind every screen: sky gradient, a
// blocky sun, drifting clouds, and two layers of stepped hills. Pure CSS/SVG,
// no image assets. Clouds stop drifting when motion is reduced.

const farHills = [9, 10, 12, 13, 13, 12, 11, 11, 12, 14, 15, 15, 14, 12, 11, 10, 10, 11, 13, 14, 13, 11, 10, 9];
const nearHills = [6, 6, 7, 8, 8, 7, 6, 5, 5, 6, 7, 9, 10, 10, 9, 8, 7, 6, 6, 7, 8, 8, 7, 6];

// Turns a list of column heights into a stepped (pixel-staircase) path on a
// 24-column grid, so the hills render with hard edges at any width.
function steps(heights: number[]) {
  const top = Math.max(...heights) + 2;
  let d = `M0 ${top}`;
  heights.forEach((h, i) => {
    d += ` V${top - h} H${i + 1}`;
  });
  return { d: `${d} V${top} Z`, top };
}

const clouds = [
  { top: "9%", scale: 1.4, duration: 95, delay: -20 },
  { top: "18%", scale: 1, duration: 120, delay: -70 },
  { top: "5%", scale: 0.8, duration: 140, delay: -110 },
  { top: "26%", scale: 1.2, duration: 105, delay: -45 },
];

function Cloud({ scale }: { scale: number }) {
  return (
    <div style={{ transform: `scale(${scale})` }} className="relative h-12 w-40">
      <div className="absolute bottom-0 left-0 h-6 w-40 bg-[#fff6e4]" />
      <div className="absolute bottom-6 left-6 h-5 w-24 bg-[#fff6e4]" />
      <div className="absolute bottom-11 left-12 h-4 w-12 bg-[#fff6e4]" />
      <div className="absolute -bottom-2 left-2 h-2 w-36 bg-[#f1d9b5]" />
    </div>
  );
}

export function Scene() {
  const far = steps(farHills);
  const near = steps(nearHills);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, var(--sky-top) 0%, var(--sky-mid) 45%, var(--sky-low) 70%)",
      }}
    >
      {/* Sun */}
      <div className="absolute right-[14%] top-[12%] h-20 w-20 bg-[#ffe9a8] shadow-[0_0_0_8px_rgba(255,233,168,0.45),0_0_0_18px_rgba(255,233,168,0.2)]" />

      {clouds.map((c, i) => (
        <div
          key={i}
          className="cloud absolute left-0"
          style={{
            top: c.top,
            animationDuration: `${c.duration}s`,
            animationDelay: `${c.delay}s`,
          }}
        >
          <Cloud scale={c.scale} />
        </div>
      ))}

      <svg
        className="absolute bottom-0 left-0 h-[42%] w-full"
        viewBox={`0 0 24 ${far.top}`}
        preserveAspectRatio="none"
        shapeRendering="crispEdges"
      >
        <path d={far.d} fill="var(--hill-far)" />
      </svg>
      <svg
        className="absolute bottom-0 left-0 h-[26%] w-full"
        viewBox={`0 0 24 ${near.top}`}
        preserveAspectRatio="none"
        shapeRendering="crispEdges"
      >
        <path d={near.d} fill="var(--hill-near)" />
      </svg>
    </div>
  );
}

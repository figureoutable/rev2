"use client";

import { animate } from "framer-motion";
import { useEffect, useLayoutEffect, useRef } from "react";

/** Coral / orange-red — dotted paths + brand alignment */
const CORAL = "#FF5C3E";

/** Main path the email follows (left → across hero → toward illustration side) */
const MAIN_FLIGHT_PATH =
  "M -40 520 C 180 280 320 420 520 300 S 780 120 920 200 S 1080 380 1220 280";

const DECOR_PATH_A =
  "M 80 120 C 280 40 420 220 620 100 S 900 60 1120 140";

const DECOR_PATH_B =
  "M 60 640 Q 340 480 580 560 T 1040 420";

const DOT_DASH = "2 18";

/** One full loop along the main path (seconds) — lower = faster */
const FLIGHT_DURATION_SEC = 8.5 / 0.7;

function poseMailAlongPath(path: SVGPathElement, group: SVGGElement, t: number) {
  const len = path.getTotalLength();
  if (len < 2) return;
  const dist = t * len;
  const p = path.getPointAtLength(dist);
  const sampleDelta = Math.max(len * 0.004, 3);
  const pAhead = path.getPointAtLength(Math.min(dist + sampleDelta, len));
  const angleDeg = (Math.atan2(pAhead.y - p.y, pAhead.x - p.x) * 180) / Math.PI;
  group.setAttribute("transform", `translate(${p.x},${p.y}) rotate(${angleDeg})`);
}

/** White envelope, black stroke — leading edge aligns with path direction (+x) */
function MailEnvelope() {
  return (
    <g transform="translate(-20, -7)">
      <rect
        fill="#ffffff"
        height="14"
        rx="1.5"
        stroke="#1a1a1a"
        strokeWidth="1.6"
        width="22"
        x="0"
        y="0"
      />
      <path
        d="M 0 0 L 11 8.5 L 22 0"
        fill="none"
        stroke="#1a1a1a"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </g>
  );
}

export default function HeroDecorPaths() {
  const mainPathRef = useRef<SVGPathElement>(null);
  const mailRef = useRef<SVGGElement>(null);

  useLayoutEffect(() => {
    const path = mainPathRef.current;
    const mail = mailRef.current;
    if (!path || !mail) return;
    poseMailAlongPath(path, mail, 0);
  }, []);

  useEffect(() => {
    const path = mainPathRef.current;
    const mail = mailRef.current;
    if (!path || !mail) return;
    if (path.getTotalLength() < 2) return;

    const controls = animate(0, 1, {
      duration: FLIGHT_DURATION_SEC,
      ease: "linear",
      repeat: Infinity,
      onUpdate: (progress) => poseMailAlongPath(path, mail, progress),
    });

    return () => controls.stop();
  }, []);

  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full select-none"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1200 700"
    >
      <path
        d={DECOR_PATH_A}
        fill="none"
        stroke={CORAL}
        strokeDasharray={DOT_DASH}
        strokeLinecap="round"
        strokeWidth="2.2"
        opacity={0.55}
      />
      <path
        d={DECOR_PATH_B}
        fill="none"
        stroke={CORAL}
        strokeDasharray={DOT_DASH}
        strokeLinecap="round"
        strokeWidth="2.2"
        opacity={0.45}
      />
      <path
        ref={mainPathRef}
        d={MAIN_FLIGHT_PATH}
        fill="none"
        stroke={CORAL}
        strokeDasharray={DOT_DASH}
        strokeLinecap="round"
        strokeWidth="2.4"
        opacity={0.65}
      />
      <g ref={mailRef} transform="translate(0,0)">
        <title>Email in flight</title>
        <MailEnvelope />
      </g>
    </svg>
  );
}

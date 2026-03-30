"use client";

import { animate } from "framer-motion";
import { useEffect, useLayoutEffect, useRef } from "react";

/** Coral / orange-red — dotted paths + brand alignment */
const CORAL = "#FF5C3E";

/** Main path — sweeps across hero toward the illustration */
const MAIN_FLIGHT_PATH =
  "M -40 520 C 180 280 320 420 520 300 S 780 120 920 200 S 1080 380 1220 280";

/** Upper decorative arc */
const DECOR_PATH_A =
  "M 80 120 C 280 40 420 220 620 100 S 900 60 1120 140";

/**
 * Lower arc — few wide cubics (smooth Catmull-Rom, sparse waypoints) so the stroke
 * doesn’t micro-wiggle; ends at the right edge mid-height.
 */
const DECOR_PATH_B =
  "M 60 640 C 107 616 247 530 340 495 C 433 460 530 447 620 430 C 710 413 803 406 880 395 C 957 384 1031 380 1080 365 C 1129 350 1155 300 1175 305 C 1195 311 1196 383 1200 398";

/** Slightly longer dashes + gaps so dotted lines read smooth, not jittery */
const DOT_DASH = "4 22";

/** One full loop (seconds) */
const FLIGHT_DURATION_SEC = 8.5 / 0.7;

/** Second mail offset along its path (0–1) so it stays apart from the first */
const BOTTOM_PHASE = 0.52;

function poseMailAlongPath(path: SVGPathElement, group: SVGGElement, t: number) {
  const len = path.getTotalLength();
  if (len < 2) return;
  const dist = ((t % 1) + 1) % 1 * len;
  const p = path.getPointAtLength(dist);
  const sampleDelta = Math.max(len * 0.004, 3);
  const pAhead = path.getPointAtLength(Math.min(dist + sampleDelta, len));
  const angleDeg = (Math.atan2(pAhead.y - p.y, pAhead.x - p.x) * 180) / Math.PI;
  group.setAttribute("transform", `translate(${p.x},${p.y}) rotate(${angleDeg})`);
}

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
  const bottomPathRef = useRef<SVGPathElement>(null);
  const mailRef = useRef<SVGGElement>(null);
  const bottomMailRef = useRef<SVGGElement>(null);

  useLayoutEffect(() => {
    const mainPath = mainPathRef.current;
    const bottomPath = bottomPathRef.current;
    const mail = mailRef.current;
    const bottomMail = bottomMailRef.current;
    if (!mainPath || !mail || !bottomPath || !bottomMail) return;
    poseMailAlongPath(mainPath, mail, 0);
    poseMailAlongPath(bottomPath, bottomMail, BOTTOM_PHASE);
  }, []);

  useEffect(() => {
    const mainPath = mainPathRef.current;
    const bottomPath = bottomPathRef.current;
    const mail = mailRef.current;
    const bottomMail = bottomMailRef.current;
    if (!mainPath || !mail || !bottomPath || !bottomMail) return;
    if (mainPath.getTotalLength() < 2 || bottomPath.getTotalLength() < 2) return;

    const controls = animate(0, 1, {
      duration: FLIGHT_DURATION_SEC,
      ease: "linear",
      repeat: Infinity,
      onUpdate: (progress) => {
        poseMailAlongPath(mainPath, mail, progress);
        poseMailAlongPath(bottomPath, bottomMail, progress + BOTTOM_PHASE);
      },
    });

    return () => controls.stop();
  }, []);

  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full select-none"
      preserveAspectRatio="xMidYMid slice"
      shapeRendering="geometricPrecision"
      viewBox="0 0 1200 700"
    >
      <path
        d={DECOR_PATH_A}
        fill="none"
        opacity={0.55}
        stroke={CORAL}
        strokeDasharray={DOT_DASH}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
      />
      <path
        ref={bottomPathRef}
        d={DECOR_PATH_B}
        fill="none"
        opacity={0.45}
        stroke={CORAL}
        strokeDasharray={DOT_DASH}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
      />
      <path
        ref={mainPathRef}
        d={MAIN_FLIGHT_PATH}
        fill="none"
        opacity={0.65}
        stroke={CORAL}
        strokeDasharray={DOT_DASH}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.4"
      />
      <g ref={mailRef} transform="translate(0,0)">
        <title>Email in flight</title>
        <MailEnvelope />
      </g>
      <g ref={bottomMailRef} transform="translate(0,0)">
        <title>Email in flight</title>
        <MailEnvelope />
      </g>
    </svg>
  );
}

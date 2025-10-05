"use client";

import dynamic from "next/dynamic";
import type { YouTubeProps } from "react-youtube";

// react-youtube는 브라우저 전용 → SSR 금지
const YouTube = dynamic(() => import("react-youtube"), { ssr: false });

export default function YouTubePlayer({
  videoId,
  width = "100%",           // 바깥에서 가로폭만 정해주면 세로는 비율대로 자동
  aspectRatio = "9/16",
  autoplay = 0,
  rel = 0,
  modestbranding = 1,
  onReady,
  onPlay,
  onPause,
  onEnd,
}: {
  videoId: string;
  width?: string | number;     // ex) "100%" | "720px" | 720
  aspectRatio?: string;        // "16/9", "4/3" 등
  autoplay?: 0 | 1;
  rel?: 0 | 1;
  modestbranding?: 0 | 1;
  onReady?: YouTubeProps["onReady"];
  onPlay?: YouTubeProps["onPlay"];
  onPause?: YouTubeProps["onPause"];
  onEnd?: YouTubeProps["onEnd"];
}) {
  // iframe 자체는 항상 100% 채우게, 실제 크기는 부모 컨테이너가 결정
  const opts: YouTubeProps["opts"] = {
    width: "100%",
    height: "100%",
    playerVars: { autoplay, rel, modestbranding },
  };

  return (
    <div style={{ width }}>
      {/* 16:9 컨테이너: 가로폭이 변하면 세로가 비율대로 자동 결정 */}
      <div style={{ position: "relative", aspectRatio }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <YouTube
            videoId={videoId}
            opts={opts}
            onReady={onReady}
            onPlay={onPlay}
            onPause={onPause}
            onEnd={onEnd}
            // iframe이 부모를 꽉 채우도록
            iframeClassName="w-full h-full"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}

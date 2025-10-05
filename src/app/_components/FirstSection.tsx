import YouTubePlayer from "./func_components/YouTubePlayer";


export default function FirstSection() {
  return (
    <div className="flex w-full justify-center pt-30 pb-30 border border-black">
      <div className="flex gap-50 items-center">
      <h1>미용전문(입시,취업,창업)</h1>
      <div className="w-100 border-black border-4">
        <YouTubePlayer
        videoId="YZ85SufxkVc"
        // aspectRatio="16/9"
        autoplay={1}
        rel={0}
        modestbranding={1}
      /></div>
      </div>  
    </div>
  );
}

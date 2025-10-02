import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full text-white font-medium flex justify-between px-10 py-3 bg-gray-500">
      <div className="flex hover:text-amber-700">
      <Link href="https://google.com" target="_blank">
  커리큘럼
</Link>
</div>
<div className="flex hover:text-cyan-600">
<Link href="http://gangbuk.allthat-beauty.co.kr/customer/tuition.asp" target="_blank">수강료 조회</Link>
    </div>
    <div className="flex hover:text-cyan-600">
    <Link href="https://open.kakao.com/o/s53huYvh" target="_blank">카톡 상담</Link>
    </div>
    </nav>
  );
}

import Image from "next/image";
import FirstSection from "./_components/FirstSection";
import SecondSection from "./_components/SecondSection";
import ThirdSection from "./_components/ThirdScetion";
import Footer from "./_components/Footer";
import Navbar from "./_components/Nav";
import BackGround from "./_components/Background";

export default function Home() {
  return (
    <div className="text-2xl flex flex-col">
      <div className="flex flex-col items-center gap-2 justify-center">
      <BackGround/>
      <Navbar/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <Footer/>
      </div>
    </div>
  );
}

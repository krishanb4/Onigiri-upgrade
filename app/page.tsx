import Image from "next/image";
import Amount1 from "./components/Amount1/Amount1";
import Amount from "./components/Amount1/Amount1";
import Amount2 from "./components/Amount2/Amount2";
import Aprove from "./components/Aprove/Aprove";
import Arrow from "./components/Arrow/Arrow";
//import Description from "./components/Description/Description";
import Header from "./components/Header/Header";
//import Layerzero from "./components/Layerzero/Layerzero";
//import Mode from "./components/Mode/Mode";
import Swap from "./components/Swap/Swap";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex flex-col items-center justify-between min-h-screen p-24 bg-gradient-to-b from-pink-500 to-black/75">
        <div className="p-4 mx-auto mt-16 mb-[86px] flex flex-col gap-4 w-full max-w-[520px]">
          <Swap />
          <Amount1 />
          <Arrow />
          <Amount2 />
          <Aprove />
        </div>
      </main>
    </>
  );
}

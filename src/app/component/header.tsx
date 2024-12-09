import Link from "next/link"

export default function Header() {
  return (
    <div className="w-[1920px] h-[950px] bg-black text-white flex flex-col items-center gap-8 p-4">
      {/* </header> */}
      <div className="w-[109px] h-[32px] left-[605px]">
        <span className="text-[#FF9F0D] text-[24px] leading-[32px] font-bold">Food</span>
        <span className="text-white text-[24px] leading-[32px] font-bold">tuck</span>
      </div>
      <div className="justify-self-start mt-20 w-[472px] h-[365px] top-[293px] left-[300px] ">
        <h1 className="text-5xl font-bold text-orange-500">It's Quick & Amusing!</h1>
        <h2 className="text-3xl font-semibold mt-4">The Art of Speed & Food Quality</h2>
        <p className="text-lg mt-6 text-gray-300 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.
        </p>
        <button className="w-[190px] h-[60px] top-[589px] left-[300px] bg-[#FF9F0D]  border-[#FF9F0D] rounded-full text-white text-lg font-medium">
          See Menu
        </button>

      </div>
    </div>
  );
}

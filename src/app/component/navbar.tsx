import Link from "next/link";

export default function Navbar() {
  return (
    <div className="absolute top-[45px] left-[300px] w-[1320px] h-[87px] bg-black opacity-100 flex items-center justify-between ">

      {/* Navigation Links */}
      <nav className="font-[400px] text-[16px] leading-[24px] flex gap-8 text-white text-lg">
        <Link href="/" className="top-[48px] w-[45px] h-[24px]">Home</Link>
        <Link href="/menu" >Menu</Link>
        <Link href="/blog" >Blog</Link>
        <Link href="/pages" >Pages</Link>
        <Link href="/about" >About</Link>
        <Link href="/shop" >Shop</Link>
        <Link href="/contact" >Contact</Link>
      </nav>
      {/* ellipse */}
      <div className="absolute top-[72px] left-[17px] w-[7px] h-[7px] bg-[#FF9F0D] rounded-full"></div>
      {/* search bar */}
      <div className=" w-[310px] h-[54px] top-[33px] left-[978px] px-6 py-2 border-2 border-orange-500 rounded-full bg-black">
        <input
          type="text"
          placeholder="Search..."
          className=" text-white bg-transparent font-[400px] text-[16px] leading-[24px] w-[66px] h-[35px] top-[47px] left-[1004px] rounded-lg"
        />
      </div>

    </div>
  );
}

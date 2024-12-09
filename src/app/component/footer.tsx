import Image from "next/image"
import pic1 from "../../../images/pic1.png"
import pic2 from "../../../images/pic2.png"
import pic3 from "../../../images/pic3.png"
import grass from "../../../images/grass.png"

export default function Footer (){
    return(
    
            <footer className="w-[1920px] h-[740.15px] bg-black">
  <div className="justify-self-center w-[1170px] h-[142.62px] top-[7759px] left-[359px] border-b-[1px] border-b-orange-600 p-10 text-white">
    {/* <!-- Top Section --> */}
    <div className="text-start mb-5">
        <span className="text-[#FF9F0D] text-[24px] leading-[32px] font-bold">St</span>
        <span className="text-white text-[24px] leading-[32px] font-bold">ill You Need Our Support?</span>
      </div>

      <p className="text-sm text-gray-300 mt-2">
        Don't wait, make a smart & logical quote here. It's pretty easy.
      </p>


      <div className="justify-self-end ">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="w-[300px] h-[50px] p-4 bg-orange-500 text-gray-200"
        />
        <button className="h-[50px] px-6 bg-white text-orange-500 font-medium">
          Subscribe Now
        </button>
      </div>
    </div>
    <hr className="border-gray-700 mb-10" />
    {/* <!-- Footer Content --> */}
    <div className="grid grid-cols-4 gap-10">
      {/* <!-- About Us --> */}
      <div>
        <h3 className="text-white font-bold text-2xl mb-4">About Us.</h3>
        <p className="text-sm text-gray-400 mb-4">
          Corporate clients and leisure travelers have been relying on
          Groundlink for dependable, safe, and professional chauffeured car
          service in major cities across the World.
        </p>
        <div className="flex items-start space-x-4">
          <div className="w-[78px] h-[72px] bg-orange-500 flex justify-center items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="white"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-4.35-4.35m1.1-5.35a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
              />
            </svg>
          </div>
          <div className="text-sm text-white">
            <h2 className="text-base">Opening Houres</h2>
            <p>Mon - Sat(8.00 - 6.00)</p>
            <p>Sunday - Closed</p>
          </div>
        </div>
      </div>
      {/* <!-- Useful Links --> */}
      <div className="text-white">
        <h3 className="font-bold text-lg mb-4">Useful Links</h3>
        <ul className="space-y-2">
          <li>About</li>
          <li>News</li>
          <li>Partners</li>
          <li>Team</li>
          <li>Menu</li>
          <li>Contacts</li>
        </ul>
      </div>
      {/* <!-- Help --> */}
      <div className="text-white">
        <h3 className="font-bold text-lg mb-4">Help?</h3>
        <ul className="space-y-2">
          <li>FAQ</li>
          <li>Term & Conditions</li>
          <li>Reporting</li>
          <li>Documentation</li>
          <li>Support Policy</li>
          <li>Privacy</li>
        </ul>
      </div>
      {/* <!-- Recent Posts --> */}
      <div>
        <h3 className="text-white font-bold text-lg mb-4">Recent Posts</h3>
        <ul className="space-y-4">
          <li className="flex space-x-4">
            <Image
              src={pic1}
              alt="food items"
              className="w-12 h-12 rounded"
            />
            <div>
              <p className="text-gray-400 text-sm">20 Feb 2022</p>
              <p className="text-white">Keep Your Business</p>
            </div>
          </li>
          <li className="flex space-x-4">
            <Image
              src={pic2}
              alt="food iteme"
              className="w-12 h-12 rounded"
            />
            <div>
              <p className="text-gray-400 text-sm">20 Feb 2022</p>
              <p className="text-white">Keep Your Business</p>
            </div>
          </li>
          <li className="flex space-x-4">
            <Image
              src={pic3}
              alt="food iteme"
              className="w-12 h-12 rounded"
            />
            <div>
              <p className="text-gray-400 text-sm">20 Feb 2022</p>
              <p className="text-white">Keep Your Business</p>
            </div>
          </li>
          {/* <!-- Repeat for other posts --> */}
        </ul>
      </div>
    </div>
    {/* <!-- Bottom Section --> */}
    <div className="w-[1920px] h-[99px] top-[8379px] mt-20 flex justify-between items-center border-t bg-gray-700 ">
      <p className="text-sm text-white">
        Copyright © 2022 by Ayeman. All Rights Reserved.
      </p>
      <div className=" w-[240px] h-[34px] top-[8412px] left-[1380px] flex justify-center space-x-4 ">
        {/* <!-- Social Icons --> */}
        <a href="#" className="w-8 h-8 bg-white flex justify-center items-center rounded text-gray-700">
          F
        </a>
        <a href="#" className="w-8 h-8 bg-white flex justify-center items-center rounded text-gray-700">
          T
        </a>
        <a href="#" className="w-8 h-8 bg-white flex justify-center items-center rounded text-gray-700">
          Y
        </a>
      </div>
      <Image
      src={grass}
      alt="grass"
      className="opacity-[50%] w-[422.5px] h-[294.56px] top-[8076.68px] left-[1923.73px]"
      />
    </div>
</footer>


    )
}
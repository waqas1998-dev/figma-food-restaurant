// import Image from "next/image"
import egg from "../../../images/egg.png"
export default function About() {
    return (
        <div className=" justify-self-center bg-black text-white w-[1320px] h-[562px] top-[1070px] left-[300px] ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* <!-- Left Content --> */}
                <div>
                    <h5 className="text-orange-500 text-lg font-bold mb-2">About us</h5>
                    <h2 className="text-4xl font-extrabold leading-tight mb-4">
                        <span className="text-orange-400">We</span> Create the best <br /> foody product
                    </h2>
                    <p className="text-gray-400 mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                    </p>
                    <ul className="list-none space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-orange-500 text-xl mr-2">✔</span>
                            Lacus nisi, et ac dapibus sit eu velit in consequat.
                        </li>
                        <li className="flex items-start">
                            <span className="text-orange-500 text-xl mr-2">✔</span>
                            Quisque diam pellentesque bibendum non dui volutpat fringilla
                        </li>
                        <li className="flex items-start">
                            <span className="text-orange-500 text-xl mr-2">✔</span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </li>
                    </ul>
                    <button className="mt-6 px-6 py-3 bg-orange-500 text-black font-semibold rounded-full hover:bg-orange-600 transition">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    )
}

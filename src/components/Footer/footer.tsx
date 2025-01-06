
import Image from "next/image";

export default function Footer() {
    return (
        <div className="flex justify-center bg-[#222C1D] py-10">
            <div className="w-full max-w-7xl px-5 sm:px-10 flex flex-col sm:flex-row justify-between">
                <div className="flex flex-col gap-5 w-full sm:w-1/3">
                    <div className="flex items-center gap-4">
                        <Image
                            src="/images/logo.png"
                            alt="logo"
                            width={50}
                            height={50}
                            className="w-10 h-10"
                        />
                        <h1 className="text-2xl font-bold text-white">PetalBloom.</h1>
                    </div>
                    <p className="text-[16px] sm:text-[20px] text-white">
                        Lorem ipsum dolor sit amet, consectetur <br />
                        adipiscing elit, sed do eiusmod tempor <br />
                        incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className="w-full sm:w-1/3 mt-10 sm:mt-0">
                    <ul className="flex flex-col text-[16px] sm:text-[20px] text-white gap-5">
                        <li className="font-bold">Quick Link&apos;s</li>
                        <li>Home</li>
                        <li>Type&apos;s Of plant&apos;s</li>
                        <li>Contact</li>
                        <li>Privacy</li>
                    </ul>
                </div>
                <div className="w-full sm:w-1/3 mt-10 sm:mt-0">
                    <ul className="flex flex-col text-[16px] sm:text-[20px] gap-5">
                        <li className="font-bold text-white">For Every Update.</li>
                        <li className="flex gap-2 items-center border-2 rounded-md">
                            <input
                                type="text"
                                className="p-2 px-2 bg-transparent text-black w-full"
                                placeholder="Enter Email"
                            />
                            <button className="rounded-md border-2 border-[#222C1D] bg-white text-black p-2 px-3 font-semibold">
                                SUBSCRIBE
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

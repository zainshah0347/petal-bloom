'use client'
import { TopSelling, TopSelling2, CustomerReview } from "@/db/database";
import Image from "next/image";
import App from "./slider";

export default function OurTopSelling() {
    return (
        <div className="bg-[#1B2316] flex flex-col items-center pb-20">
            {/* Top Selling Section */}
            <div className="w-[90%] flex flex-col gap-10">
                <h1 className="text-[30px] sm:text-[45px] lg:text-[55px] text-white font-bold mt-10 mb-6 text-center">
                    Our Top Selling
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-28 lg:gap-6 pb-20">
                    {TopSelling.map((items, index) => {
                        const { productImage, productName, productDescription1, productDescription2, price, icon } = items;
                        return (
                            <div
                                className="border-2 border-t-2 rounded-[85px] bg-[#262E22] p-4 shadow-md hover:shadow-lg transition flex flex-col items-center"
                                key={index}
                            >
                                <div className="flex justify-center -mt-24">
                                    <Image
                                        src={productImage}
                                        alt="product"
                                        width={280}
                                        height={150}
                                        className="rounded-full"
                                    />
                                </div>
                                <div className="text-center mt-4 flex flex-col justify-center">
                                    <h2 className="text-[20px] lg:text-[24px] text-white font-semibold">
                                        {productName}
                                    </h2>
                                    <p className="text-[14px] lg:text-[16px] text-gray-300 mt-2">
                                        {productDescription1} <br />
                                        {productDescription2}
                                    </p>
                                    <div className="flex justify-center items-center mt-4 gap-5">
                                        <h2 className="text-white text-[18px] lg:text-[20px]">Rs. {price}</h2>
                                        <button className="border-2 border-white px-3 py-1 rounded-lg text-white">
                                            {icon}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-28 lg:gap-6">
                    {TopSelling2.map((items, index) => {
                        const { productImage, productName, productDescription1, productDescription2, price, icon } = items;
                        return (
                            <div
                                className="border-2 rounded-[100px] bg-[#262E22] p-4 shadow-md hover:shadow-lg transition"
                                key={index}
                            >
                                <div className="flex justify-center -mt-24">
                                    <Image
                                        src={productImage}
                                        alt="product"
                                        width={280}
                                        height={150}
                                        className="rounded-full"
                                    />
                                </div>
                                <div className="text-center mt-4">
                                    <h2 className="text-[20px] lg:text-[24px] text-white font-semibold">
                                        {productName}
                                    </h2>
                                    <p className="text-[14px] lg:text-[16px] text-gray-300 mt-2">
                                        {productDescription1} <br />
                                        {productDescription2}
                                    </p>
                                    <div className="flex justify-center items-center mt-4 gap-5">
                                        <h2 className="text-white text-[18px] lg:text-[20px]">Rs. {price}</h2>
                                        <button className="border-2 border-white px-3 py-1 rounded-lg text-white">
                                            {icon}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Customer Reviews */}
            <div className="w-[90%] mt-16">
                <h1 className="text-[30px] sm:text-[45px] lg:text-[55px] text-white font-bold text-center">
                    Customer Review
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {CustomerReview.map((items, index) => {
                        const { accountImg, accountName, rating, description1, description2, description3 } = items;
                        return (
                            <div
                                key={index}
                                className="bg-[#262E22] border-2 border-[#494F47] rounded-2xl p-4 shadow-md"
                            >
                                <div className="flex items-center gap-4">
                                    <Image
                                        src={accountImg}
                                        className="rounded-full object-cover w-16 h-16" // Ensures the image is circular
                                        alt="account"
                                        width={72}
                                        height={72}
                                    />
                                    <div>
                                        <p className="text-[18px] text-white">{accountName}</p>
                                        <span className="text-yellow-400">{rating}</span>
                                    </div>
                                </div>
                                <p className="text-gray-300 text-[14px] lg:text-[16px] mt-4 leading-relaxed">
                                    {description1} <br />
                                    {description2} <br />
                                    {description3}
                                </p>
                            </div>

                        );
                    })}
                </div>
            </div>

            {/* Our Best o2 */}
            <div className="w-[90%] flex items-center">
                <App />
            </div>

        </div>
    );
}

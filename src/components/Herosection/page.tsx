'use client';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import Image from 'next/image';
import Header from '../Header/header';
import BasicRating from './rating';
import { ProductData } from '@/db/database';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';


export default function HeroSection() {
    return (
        <div
            style={{
                backgroundImage: `url('/images/herosectionimg.png')`,
            }}
            className="h-auto w-full bg-cover bg-center bg-no-repeat flex flex-col justify-center pb-20"
        >
            <Header />

            {/* Main Content */}
            <div className="flex justify-center pt-10 lg:pt-20 px-4 md:px-8">
                <div className="w-full max-w-[90%] flex flex-col lg:flex-row gap-10">
                    {/* Left Section */}
                    <div className="lg:w-[70%] flex flex-col gap-6 lg:gap-14">
                        <div className="flex flex-col gap-6 text-center lg:text-left">
                            <h1 className="text-white text-[40px] sm:text-[60px] lg:text-[100px] font-semibold leading-tight">
                                Breath Natureal
                            </h1>
                            <p className="text-white text-[14px] sm:text-[18px] lg:text-[23px] leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <button className="border-2 border-white py-2 px-6 text-white text-lg rounded-xl">
                                    Explore
                                </button>
                                <p className="text-white flex items-center gap-2 text-sm">
                                    <PlayCircleOutlineOutlinedIcon className="text-white text-4xl" />
                                    Live Demo...
                                </p>
                            </div>
                        </div>

                        {/* User Card */}
                        <div className="w-full max-w-md p-6 rounded-3xl flex flex-col gap-4 backdrop-blur-sm shadow-lg border border-[#494F47] bg-transparent mx-auto lg:mx-0">
                            <div className="flex items-center gap-4">
                                <Image
                                    src="/images/account.jpg"
                                    className="rounded-full object-cover w-16 h-16"
                                    alt="account"
                                    width={64}
                                    height={64}
                                />
                                <div>
                                    <p className="text-[18px] text-white">Alena Patel</p>
                                    <BasicRating />
                                </div>
                            </div>
                            <p className="text-[14px] text-[#B7BAB6] leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...
                            </p>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex justify-center lg:justify-end lg:w-[30%]">
                        <div className="w-full h-fit max-w-sm shadow-lg border border-[#494F47] backdrop-blur-lg bg-transparent p-5 rounded-[100px] drop-shadow-2xl">
                            <div className="flex flex-col items-center">
                                <Image
                                    src="/images/product1.png"
                                    alt="product1"
                                    width={300}
                                    height={300}
                                    className="w-full -mt-24"
                                />
                                <div className="flex flex-col gap-2 items-center mt-4">
                                    <h4 className="text-[#C8CAC8] text-[18px] lg:text-[23px]">Trendy House Plant</h4>
                                    <h2 className="text-[24px] lg:text-[38px] text-[#C8CAC8]">Calathea Plant</h2>
                                    <button className="border-2 border-[#C8CAC8] py-2 px-5 text-[#C8CAC8] text-lg rounded-xl">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* First Our Trendy Plants Section */}
            <TrendyPlantsSection title="Our Trendy Plants" />

            {/* Second Our Trendy Plants Section */}
            <TrendyPlantsSection title=''/>
        </div>
    );
}
interface Title {
    title: string
}

// Reusable Trendy Plants Section Component
function TrendyPlantsSection({ title }: Title) {
    return (
        <div className="flex justify-center mt-10 lg:mt-20 px-4 md:px-8">
            <div className="w-full max-w-[90%] flex flex-col items-center">
                <h1 className="text-[36px] sm:text-[50px] lg:text-[55px] text-white font-bold text-center pb-20">
                    {title}
                </h1>

                <div className="flex flex-col gap-5 w-full">
                    {ProductData.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col lg:flex-row items-center gap-6 backdrop-blur-xl bg-transparent rounded-[100px] p-6 lg:p-8 drop-shadow-2xl border-2 border-x-neutral-400  border-y-neutral-400"
                        >
                            {/* Image */}
                            <div className="w-full lg:w-[40%] flex justify-center">
                                <Image
                                    src={item.productImage}
                                    alt={item.productName}
                                    width={900}
                                    height={500}
                                    className="w-[600px] md:w-[700px] -mt-40 h-auto object-contain"
                                />
                            </div>

                            {/* Content */}
                            <div className="w-full lg:w-[60%] flex flex-col gap-2 text-center lg:text-left">
                                <h2 className="text-white text-[22px] lg:text-[26px] font-semibold">
                                    {item.productName}
                                </h2>
                                <p className="text-[#B7BAB6] text-[16px] lg:text-[18px] leading-relaxed">
                                    {item.productDescription1}
                                </p>
                                <h3 className="text-white text-[20px] lg:text-[24px] font-bold mt-2">
                                    Rs. {item.price}
                                </h3>
                                <div className="flex justify-center lg:justify-start gap-4 mt-4">
                                    <button className="border-2 border-white text-white py-2 px-5 rounded-lg hover:bg-white hover:text-black transition-all">
                                        Explore
                                    </button>
                                    <button className="border-2 border-white text-white py-2 px-5 rounded-lg hover:bg-white hover:text-black transition-all">
                                        <LocalMallOutlinedIcon/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


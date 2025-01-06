'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import style from '@/components/Ourtopselling/style.module.css'

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
    return (
        <>
            <Swiper
            loop={true}
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className={style.container}
            >
                <SwiperSlide>
                    <div className="w-[100%] mt-16">
                        <h1 className="text-[30px] sm:text-[45px] lg:text-[55px] text-white font-bold text-center">
                            Our Best o2
                        </h1>
                        <div className="flex flex-col lg:flex-row items-center gap-6 mt-10 bg-[#262E22] rounded-3xl p-6 shadow-lg">
                            <Image
                                src="/images/blog.png"
                                alt="blog"
                                width={400}
                                height={350}
                                className="w-full max-w-[350px] lg:max-w-[400px] rounded-2xl"
                            />
                            <div className="text-white text-center lg:text-left flex flex-col gap-4">
                                <h2 className="text-[20px] lg:text-[28px] font-bold">
                                    We Have Small And Best O2 Plants Collection&apos;s
                                </h2>
                                <p className="text-[14px] lg:text-[16px]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua.
                                </p>
                                <p className="text-[14px] lg:text-[16px]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua.
                                </p>
                                <button className="border-2 border-white px-6 py-2 rounded-lg text-lg w-fit mx-auto lg:mx-0 hover:bg-white hover:text-black transition">
                                    Explore
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-[100%] mt-16">
                        <h1 className="text-[30px] sm:text-[45px] lg:text-[55px] text-white font-bold text-center">
                            Our Best o2
                        </h1>
                        <div className="flex flex-col lg:flex-row items-center gap-6 mt-10 bg-[#262E22] rounded-3xl p-6 shadow-lg">
                            <Image
                                src="/images/blog.png"
                                alt="blog"
                                width={400}
                                height={350}
                                className="w-full max-w-[350px] lg:max-w-[400px] rounded-2xl"
                            />
                            <div className="text-white text-center lg:text-left flex flex-col gap-4">
                                <h2 className="text-[20px] lg:text-[28px] font-bold">
                                    We Have Small And Best O2 Plants Collection&apos;s
                                </h2>
                                <p className="text-[14px] lg:text-[16px]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua.
                                </p>
                                <p className="text-[14px] lg:text-[16px]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua.
                                </p>
                                <button className="border-2 border-white px-6 py-2 rounded-lg text-lg w-fit mx-auto lg:mx-0 hover:bg-white hover:text-black transition">
                                    Explore
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

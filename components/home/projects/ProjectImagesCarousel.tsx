"use client"; 

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import Image from 'next/image';

type ProjectImagesCarouselProps = {
    images: Array<{ name: string }>
}

export default function ProjectImagesCarousel({ images } : ProjectImagesCarouselProps) {
    return (
        <div className="relative w-full max-w-5xl xl:max-w-6xl max-h-[650px] mx-auto rounded-2xl bg-gradient-to-bl dark:from-neutral-950 dark:via-slate-900 dark:to-gray-950 border border-gray-300 overflow-hidden group cursor-pointer shadow-[10px_10px_#00000020] dark:shadow-[10px_10px_#ffffff30] dark:border-gray-600">
            <div className="relative w-full max-w-5xl xl:max-w-6xl mx-auto rounded-2xl overflow-visible z-10">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ type: 'bullets', clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    {images.map((img, index) => (
                        <SwiperSlide
                            key={index}
                        >
                            <div className="relative w-full h-[600px]">
                                <Image
                                    src={`/website/${img.name}.webp`}
                                    alt="Website Photo"
                                    fill
                                    className="object-cover object-top"
                                    sizes="(max-width: 1024px) 100vw, 1200px"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* Optional overlay for better hover effect
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                */}
            </div>
        </div>
    )
}

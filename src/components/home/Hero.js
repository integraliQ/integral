'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    title: 'Transforming Visions into Scalable Realities',
    description: 'We architect digital futures with strategic intelligence and cutting-edge technology.',
    image: 'https://images.pexels.com/photos/5475790/pexels-photo-5475790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'Secure, Scalable Cloud Adoption',
    description: 'Build cloud-native agility with integraliQ’s deep domain expertise.',
    image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'AI-Powered Enterprise Solutions',
    description: 'Harness real-time insights through next-gen data ecosystems.',
    image: 'https://unity-connect-prd.storage.googleapis.com/20230713/learn/images/87375ee0-f0f0-4e4c-8388-95a0fbbbc4ec_Unity_Stock_1394052911.jpg',
  },
];

export default function HeroCarousel() {
  return (
    <section className="relative h-screen -mt-16">
      <Swiper
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        effect="fade"
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full bg-cover bg-center flex items-center justify-center text-white"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-white drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg sm:text-xl text-white/90 drop-shadow-md">
                  {slide.description}
                </p>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

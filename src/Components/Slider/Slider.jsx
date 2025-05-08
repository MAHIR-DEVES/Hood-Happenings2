// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';
import { Pagination, Navigation, HashNavigation } from 'swiper/modules';

import slide1 from '../../assets/slide 1.jpg';
import slide2 from '../../assets/slide2.jpg';
import slide3 from '../../assets/slide3.jpg';

const Slider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, HashNavigation]}
        className="mySwiper"
      >
        <SwiperSlide data-hash="slide0" className="relative">
          <div className="relative h-full w-full">
            <img
              className="w-full h-full object-cover"
              src="https://i.ibb.co.com/h1s7yW1H/15.jpg"
              alt="Slide content"
            />
            <div className="absolute inset-0 bg-black/40"></div>{' '}
          </div>

          <div className="absolute inset-0 flex items-center justify-center z-10 text-white p-8">
            <h2
              style={{ fontFamily: 'cursive' }}
              className="text-4xl font-bold f"
            >
              Event Management{' '}
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide data-hash="slide1" className="relative">
          <div className="relative w-full h-full">
            <img src={slide2} alt="" className="w-full h-full object-cover" />

            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide data-hash="slide1" className="relative">
          <div className="relative w-full h-full">
            <img src={slide1} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide data-hash="slide2" className="relative">
          <div className="relative w-full h-full">
            <img src={slide2} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide data-hash="slide3" className="relative">
          <div className="relative w-full h-full">
            <img src={slide3} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide data-hash="slide4" className="relative">
          <div className="relative w-full h-full">
            <img src={slide1} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide data-hash="slide5" className="relative">
          <div className="relative w-full h-full">
            <img src={slide2} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide data-hash="slide6" className="relative">
          <div className="relative w-full h-full">
            <img src={slide3} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;

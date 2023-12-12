import axios from 'axios'
import { useEffect, useState } from 'react'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Scrollbar } from 'swiper/modules';

const Section = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/items')
        .then(res => {
            setData(res.data.allItem)
            console.log(data)
        })
    }, [data.length])
  return (
    <div className='max-w-screen-2xl mx-auto flex justify-center items-center border-2 h-[530px] w-full'>

        
        <Swiper
         breakpoints={{
            320: {slidesPerView: 1, spaceBetween: 12},
            640:{slidesPerView: 4, spaceBetween: 32},
            1260:{slidesPerView: 4, spaceBetween: 17},
          }}
          className='w-full mySwiper h-[62%]'
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
        >
            {data.map((dt, i) => {
            return <SwiperSlide key={i} className='h-full w-full flex justify-center items-center'>
           <img src={'http://localhost:8000/Images/'+dt.file} className='object-fill h-full w-full rounded-full hover:rounded-none'/>
          </SwiperSlide>
           })}
        </Swiper>

    </div>  
  )
}

export default Section
import axios from 'axios'
import { useEffect, useState } from 'react'

import trash from '../../public/trash.png';
import download from '../../public/download.png';
import file from '../../public/google-docs.png';
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

    const handleDelete = async (id) => {
        axios.delete("http://localhost:8000/api/items/"+id)
        .then(res => {
          console.log(res.data)
          window.location.reload()
        })
    }

    const handleDownload = async (url) => {
      fetch(url)
      .then((res ) => res.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]))
        const fileName = url.split("/").pop()
        const aTag = document.createElement("a")
        aTag.href=blobURL
        aTag.setAttribute("download",fileName)
        aTag.click();
        aTag.remove()
      })
      
    }

  return (
    <div className='max-w-screen-2xl mx-auto flex justify-center items-center h-[530px] w-full'>

        
        <Swiper
         breakpoints={{
            320: {slidesPerView: 2, spaceBetween: 12},
            640:{slidesPerView: 4, spaceBetween: 32},
            1260:{slidesPerView: 5, spaceBetween: 17},
          }}
          className='w-full mySwiper h-[62%]'
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
        >
            {data.map((dt, i) => {
            return <SwiperSlide key={i} className='h-full w-full flex justify-center items-center relative'>
              <img src={file} className='object-cover'/>

              <div className='absolute h-full w-full flex justify-center items-center gap-5 opacity-0 hover:opacity-100 transition-all duration-500'>
                <img onClick={() => handleDownload("http://localhost:8000/Images/"+dt.file)}  src={download} className='xl:w-12 cursor-pointer w-8'/>
                 <img onClick={() => handleDelete(dt._id)} src={trash} className='xl:w-12 cursor-pointer w-8'/>
              </div>
          </SwiperSlide>
           })}
        </Swiper>

    </div>  
  )
}

export default Section
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Section from './Section'
import AddFile from './AddFile'
const Header = () => {
    
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8000/api/items")
    .then(res => {
        setData(res.data.allItem)
    })
    console.log(data)
  }, [])

  const [ons, setOn] = useState(false)

  return (
   <>
    <div className='h-screen max-w-screen-2xl mx-auto p-14 flex flex-col'>
        <div className='border-2 w-full h-[62px] flex justify-center items-center container xl:w-[28%]'>
          <button onClick={() => setOn(!ons)} className='text-white font-bold btn w-full'>Add new files</button>
        </div>
        <Section />

            <AddFile ons={ons} setOn={setOn}/>

    </div>


   </>
  )
}

export default Header
import React, { useState } from 'react'
import axios from 'axios'
const AddFile = ({ons, setOn}) => {

    const [values, setValues] = useState({
        name: "",
        file: ""
    })

    const handleAdd = async () => {
        await axios.post("http://localhost:8000/api/items", values)
        .then(res => {
            console.log(res)
            alert("Create")
        })
    }

  return (
    <div  className='max-w-screen-2xl mx-auto flex justify-center items-center'>
        <div className={` ${ons ? "fixed z-[62]" : "hidden"} w-[71%] xl:w-[44%] mx-auto h-[53%] bg-black/80 top-[28%] flex flex-col justify-center items-center container`}>
            <h1 className='text-white text-4xl mb-5'>Add new files</h1>
            <form className='w-[80%] h-[62%] text-white flex justify-between flex-col '>
                <div className='flex flex-col'>
                  <label>Name of file</label>
                  <input onChange={(e) => setValues({...values, name: e.target.value})} type='text'  className='h-[35px] px-3 text-black'></input>
                </div>

                <div className='flex flex-col'>
                  <input onChange={(e) => setValues({...values, file: e.target.files[0]})} type='file' className='h-[35px]'></input>
                </div>

                <button className='w-full bg-blue-500 py-3'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default AddFile
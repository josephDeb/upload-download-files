import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Header = () => {
    
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8000/api/items")
    .then(res => {
        setData(res.data.allItem)
    })
    console.log(data)
  }, [])
  return (
    <div className='h-screen max-w-screen-2xl mx-auto'>
        {data.map((dt, i) => {
            return <div key={i}>
                <img src={'http://localhost:8000/Images/'+dt.file}/>
            </div>
        })}
    </div>
  )
}

export default Header
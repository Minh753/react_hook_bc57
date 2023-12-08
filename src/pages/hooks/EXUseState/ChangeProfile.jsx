import React, { useState } from 'react'

const ChangeProfile = () => {
    const [num,setNum]=useState(0)

   
  return (
    <div className='container'>
        <div className='card w-25'>
            <img src={`https://i.pravatar.cc?u=${num}`}alt="..." />
            <div className='card-body'>
                <button className='btn btn-danger' onClick={()=>{
                setNum(num -1)
            }}>Prev</button>
                <button className='btn btn-danger mx-2' onClick={()=>{
                setNum(num +1)
            }}>Next</button>
            </div>
        </div>
    </div>
  )
}

export default ChangeProfile
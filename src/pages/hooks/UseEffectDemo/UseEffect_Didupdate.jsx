import React, { useState } from 'react'

const UseEffect_Didupdate = () => {
    const [number,setNumber]=useState(1)
    const [like,setLike]=useState(1)

  return (
    <div className='container'>
        <h3>Like: {like}</h3>
        <button className='btn btn-primary'>Like</button>
        <h3>Number: {number}</h3>
        <button className='btn btn-primary'>Number</button>

    </div>
  )
}

export default UseEffect_Didupdate
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function UseEffect_DidMount() {
    const[number,setNumber]=useState(1)
    const [arrProduct,setArrProduct] = useState([])


    console.log('render 123')

    useEffect(()=>{
        // console.log('lần 1: chạy sau khi giao diện render xong lần 1')
        // console.log('lần 2: sau mỗi lần component render lại')

        // setState ...

        getApiProduct();
    },[]) //Sử dụng tham số dependency là array rỗng thì chỉ chạy 1 lần sau render(tương tự didmount dùng để gọi api - api get all)
    const getApiProduct = () =>{
        let promise = axios ({
            url:'https://shop.cyberlearn.vn/api/Product',
            method:'GET'
        })
        promise.then((res)=>{
            console.log(res.data.content)
            setArrProduct(res.data.content)
        })
    }

  return (
    <div className='container'>
        <button onClick={()=>{
            
        }}>Get api</button>
        <h3>{number}</h3>
        <button className='btn btn-primary' onClick={()=>{setNumber(number+1)}}>+</button>
        <h3>Product list</h3>
        <div className='row'>
            {arrProduct.map((prod)=>{
                return <div className='col-md-3'key={prod.id}>
                <div className='card'>
                    <img src={prod.image} alt="..." />
                    <div className='card-body'>
                        <h3>{prod.name}</h3>
                        <p>{prod.price}$</p>
                        <button className='btn btn-dark'>
                            <i className='fa fa-cart-plus'></i>add to cart
                        </button>
                    </div>
                </div>

            </div>
            })}

        </div>
    </div>
  )
}

import React, { useEffect,useState } from 'react'

export default function UseEffectDemo(props) {


    let [like,setLike] = useState(1)
    let [number,setNumber] = useState(1)

    //thực hiện như componentDidMount (chạy 1 lần sau khi giao diện render)
    useEffect (()=>{
        console.log('componentDidMount');
        //chỗ này thường gọi api

        //chỗ ngày sẽ là unmount
        return ()=>{
            console.log('giong componentWillUnmount')
        }
    },[])

    // useEffect(()=>{
    //     /******nguy hiểm hạn chế sử dụng, vì nó sẽ update vô tận */
    //     console.log('thay didmount va didupdate')
    //     setLike(like+1)
    // })

    useEffect(()=>{
        //dc gọi khi setState or dispatch (thay đổi state hoặc props)
        console.log('componentDidUpdate');

    },[number])

    console.log('render')


    return (
        <div className="container">
            <h3>UseEffect</h3>
            <h1>{like}Like</h1>
            <button onClick={()=>{
                setLike(like+1)
            }} className="btn btn-info">+</button>
            <button onClick={()=>{
                setLike(like-1)
            }} className="btn btn-danger">-</button>
        </div>
    )
}

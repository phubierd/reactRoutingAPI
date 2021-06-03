import React, { useState } from 'react'

export default function UseStateDemo(props) {

    const [number, setNumber] = useState(1)

    const [car, setCar] = useState("./img/car/products/black-car.jpg")

    const changeColor = (color)=>{
        const newCar = `./img/car/products/${color}-car.jpg`;

        setCar(newCar)
    }



    return (
        <div className='container'>
            demo useState


            <h1>{number}</h1>
            <button onClick={() => {
                setNumber(number + 1)
            }}>+</button>




            <hr/>
            <h1>Bài tập chọn màu xe</h1>
            <div className="row">
                <div className="col-6">
                    <div className="col-12">
                        <img src={car} style={{width:'100%'}} alt={car}></img>
                    </div>
                    
                </div>
                <div className="col-6">
                    <button className="btn btn-dark" onClick={()=>{
                        {changeColor('black')}
                    }}>black</button>
                    <button className="btn btn-danger"  onClick={()=>{
                        {changeColor('red')}
                    }}>red</button>
                    <button className="btn btn-info"  onClick={()=>{
                        {changeColor('steel')}
                    }}>steel</button>
                    <button className="btn btn-success"  onClick={()=>{
                        {changeColor('silver')}
                    }}>silver</button>
                </div>
            </div>
        </div>
    )
}






// //cach viet class
// const [state, setState] = useState({
//     number: 1
// })
// //tương đương class
// /*
// this.state = {number:1}
// */
// const [number, setNumber] = useState(1)
// return (
//     <div className="container">
//         Demo UseState
//         <h1>{state.number}</h1>
//             <button onClick={() => {
//                 setState({
//                     number:state.number+1
//                 })
                
//             }}>+</button>

//     </div>
// )
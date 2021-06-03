import React from 'react'
import { useDispatch } from 'react-redux'

export default function SanPham(props) {

    const dispatch = useDispatch();

    const {SanPham} = props

    return (
        <div className="card text-white bg-primary">
            <img className="card-img-top" src={props.SanPham.hinhAnh} alt  style={{height:300}}/>
            <div className="card-body">
                <h4 className="card-title">{props.SanPham.tenSP}</h4>
                <p className="card-text">{props.SanPham.giaBan}</p>
                <button className="btn btn-info" onClick={()=>{
                    const action ={
                        type : 'XEM_CHI_TIET',
                        sanPhamClick:SanPham
                    }
                    //đưa dữ liệu lên redux
                    dispatch(action)
                }}>Xem Chi Tiet</button>
            </div>
        </div>

    )
}

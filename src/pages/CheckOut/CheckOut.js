import { render } from "@testing-library/react";
import React, { useEffect } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import { layChiTietPhongVeAction } from '../../redux/actions/FilmActions'

import './CheckOut.css'

export default function CheckOut(props) {

    const { chiTietPhongVe } = useSelector((state) => state.FilmReducer);
    const { thongTinPhim, danhSachGhe } = chiTietPhongVe

    const dispatch = useDispatch();

    useEffect(() => {
        //lay ID tu url
        let maLichChieu = props.match.params.id;

        const action = layChiTietPhongVeAction(maLichChieu)

        dispatch(action)
    }, [])

    console.log('chiTietPhongVe', chiTietPhongVe)

    const renderGhe = () => {
        return danhSachGhe?.map((ghe, index) => {

            let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : '';
            let classGheDaDat = ghe.daDat === true ? 'gheDaDat' : '';
            // if(ghe.loaiGhe === 'Vip'){
            //     classGheVip = 'gheVip'
            // }

            return <Fragment key={index}>

                <button disabled={ghe.daDat} className={`ghe ${classGheVip} ${classGheDaDat}`}>{ghe.stt}</button>


                {(index + 1)% 16 ===0 ? <br/> : ''}

            </Fragment>
        })
    }

    return (
        <div className="cointainer-fluid">
            <div className="row">
                <div className="col-8">
                    <div className="text-center">
                        <img src="https://tix.vn/app/assets/img/icons/screen.png" alt="..." />
                        <br/>
                        {renderGhe()}
                    </div>
                </div>
                <div className="col-4">
                    <div className="text-success display-4">0 Đ</div>
                    <hr />
                    <div className="thongTinPhim my-2">
                        <p>Ten Phim: {thongTinPhim?.tenPhim}</p>
                        <p>Dia diem: {thongTinPhim?.diaChi} - {thongTinPhim?.tenCumRap}</p>
                        <p>Ngay chieu: {thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu}</p>
                    </div>
                    <hr />
                    <div className="mt-2">
                        <div className="row">
                            <div className="col-9">Ghế: 01 02 03</div>
                            <div className="text-success font-weight-bold">100</div>
                        </div>
                    </div>
                    <hr />
                    <div className="mt-2">
                        <p>Email: diemlv94@gmail.com</p>
                        <hr />
                        <p>Phone: 0944013954</p>
                    </div>
                    <div
                        style={{ cursor: "pointer" }}
                        className="w-full text-white text-center"
                    >
                        <span className="display-4 py-2">ĐẶT VÉ</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
import { render } from "@testing-library/react";
import React, { useEffect } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import { layChiTietPhongVeAction } from '../../redux/actions/FilmActions'

import './CheckOut.css'
import _ from 'lodash'
import { USER_LOGIN } from "../../util/setting";

//redirect là thẻ chuyển hướng trang
import { Redirect } from "react-router";
import { datVeAction } from "../../redux/actions/UserAction";

//thư viện icon của adntd
import {UserAddOutlined} from '@ant-design/icons'

export default function CheckOut(props) {

    const { chiTietPhongVe, danhSachGheDangDat } = useSelector((state) => state.FilmReducer);
    // console.log('danhSachGheDangDat',danhSachGheDangDat)
    const { thongTinPhim, danhSachGhe } = chiTietPhongVe

    const { userLogin } = useSelector(state => state.UserReducer)

    const dispatch = useDispatch();

    useEffect(() => {
        //lay ID tu url
        let maLichChieu = props.match.params.id;

        const action = layChiTietPhongVeAction(maLichChieu)

        dispatch(action)
    }, [])

    if (!localStorage.getItem(USER_LOGIN)) {
        alert('Bạn cần phải Login')
        return <Redirect to="/login" />
    } else {

    }
    console.log('chiTietPhongVe', chiTietPhongVe)

    const renderGhe = () => {
        return danhSachGhe?.map((ghe, index) => {

            let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : '';
            let classGheDaDat = ghe.daDat === true ? 'gheDaDat' : '';
            //mỗi lần render ra 1 ghế đem ghế đó so sánh có trong mảng ghế đnag đặt ko, nếu có thêm css vào
            let classGheDangDat = '';

            let classGheMinhDat = '';
            if (ghe.taiKhoanNguoiDat === userLogin.taiKhoan) {
                classGheMinhDat = 'gheMinhDat'
            }

            let indexGheDD = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe);
            if (indexGheDD !== -1) {
                classGheDangDat = 'gheDangDat'
            }
            // if(ghe.loaiGhe === 'Vip'){
            //     classGheVip = 'gheVip'
            // }

            return <Fragment key={index}>

                <button onClick={() => {
                    const action = { type: 'DAT_GHE', ghe: ghe };
                    dispatch(action);
                }} disabled={ghe.daDat} className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classGheMinhDat}`}>
                    
                    {classGheMinhDat === '' ? ghe.stt : <UserAddOutlined />}
                    
                </button>


                {(index + 1) % 16 === 0 ? <br /> : ''}

            </Fragment>
        })
    }


    return (
        <div className="cointainer-fluid">
            <div className="row">
                <div className="col-8">
                    <div className="text-center">
                        <img src="https://tix.vn/app/assets/img/icons/screen.png" alt="..." />
                        <br />
                        {renderGhe()}

                    </div>
                </div>
                <div className="col-4 mt-5">
                    <div className="text-success display-4 text-center">
                        {danhSachGheDangDat.reduce((tongTien, gheDD, index) => {
                            return tongTien += gheDD.giaVe
                        }, 0).toLocaleString()} Đ</div>
                    <hr />
                    <div className="thongTinPhim my-2">
                        <p>Ten Phim: {thongTinPhim?.tenPhim}</p>
                        <p>Dia diem: {thongTinPhim?.diaChi} - {thongTinPhim?.tenCumRap}</p>
                        <p>Ngay chieu: {thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu}</p>
                    </div>
                    <hr />
                    <div className="mt-2">
                        <div className="row">
                            <div className="col-9">
                                Ghế: {_.sortBy(danhSachGheDangDat, ['stt']).map((gheDangDat, index) => {
                                    return <span key={index} className="font-weight text-danger"> {gheDangDat.stt}</span>
                                })}</div>
                            <div className="text-success font-weight-bold">
                                {danhSachGheDangDat.reduce((tongTien, gheDD, index) => {
                                    return tongTien += gheDD.giaVe
                                }, 0).toLocaleString()}
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="mt-2">
                        <p>Email: diemlv94@gmail.com</p>
                        <hr />
                        <p>Phone: 0944013954</p>
                    </div>
                    {/* <div className="text-center">
                        <button className='btn btn-info'> ĐẶT VÉ </button>
                    </div> */}
                    <div onClick={() => {

                        let thongTinDatVe = {

                            "maLichChieu": props.match.params.id,
                            "danhSachVe": danhSachGheDangDat,
                            "taiKhoanNguoiDung": userLogin.taiKhoan

                        }
                        console.log('thongTinDatVe', thongTinDatVe)
                        // return;
                        dispatch(datVeAction(thongTinDatVe))
                    }}
                        style={{ cursor: "pointer" }}
                        className="w-full text-white text-center btn-info"
                    >
                        <span className="display-4 py-2">ĐẶT VÉ</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
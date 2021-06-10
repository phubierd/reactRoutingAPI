import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFilmDetailAction } from '../../redux/actions/FilmActions'
import TabMenu from './TabMenu'

export default function Detail(props) {
    const dispatch = useDispatch();
    const { thongTinChiTiet } = useSelector(state => state.FilmReducer)

    console.log('thongTinChiTiet', thongTinChiTiet)

    //lấy dữ liệu load ra giao diện khi trang vừa load xong
    useEffect(() => {
        //hàm sử dụng tương đương componentDidMount tự kích hoạt sau khi giao diện load
        const action = getFilmDetailAction(props.match.params.postID);
        dispatch(action)
    }, [])


    return (
        <div className="container mt-t">
            <div className="row">
                <div className="col-6">
                    <img width={'100%'} src={thongTinChiTiet.hinhAnh} alt="..."></img>
                </div>
                <div className="col-6">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Ten Phim</th>
                                <th>{thongTinChiTiet.tenPhim}</th>
                            </tr>
                            <tr>
                                <th>Noi Dung</th>
                                {thongTinChiTiet.moTa}
                                <th></th>
                            </tr>
                        </thead>
                    </table>
                </div>

                <div className="mt-5">
                    <h3>Thông Tin Lịch Chiếu</h3>
                    <TabMenu heThongRapChieu={thongTinChiTiet.heThongRapChieu}/>
                </div>


            </div>
        </div>
    )
}

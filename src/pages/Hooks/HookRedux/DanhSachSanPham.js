import React from 'react'
import { useSelector } from 'react-redux'
import SanPham from './SanPham'

const data = [
    {
        "maSP": 1,
        "tenSP": "VinSmart Live",
        "manHinh": "AMOLED, 6.2\", Full HD+",
        "heDieuHanh": "Android 9.0 (Pie)",
        "cameraTruoc": "20 MP",
        "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
        "ram": "4 GB",
        "rom": "64 GB",
        "giaBan": 5700000,
        "hinhAnh": "./img/vsphone.jpg"
    },

    {
        "maSP": 2,
        "tenSP": "Meizu 16Xs",
        "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels",
        "heDieuHanh": "Android 9.0 (Pie); Flyme",
        "cameraTruoc": "20 MP",
        "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
        "ram": "4 GB",
        "rom": "64 GB",
        "giaBan": 7600000,
        "hinhAnh": "./img/meizuphone.jpg"
    },

    {
        "maSP": 3,
        "tenSP": "Iphone XS Max",
        "manHinh": "OLED, 6.5\", 1242 x 2688 Pixels",
        "heDieuHanh": "iOS 12",
        "cameraSau": "Chính 12 MP & Phụ 12 MP",
        "cameraTruoc": "7 MP",
        "ram": "4 GB",
        "rom": "64 GB",
        "giaBan": 27000000,
        "hinhAnh": "./img/applephone.jpg"
    }
]



export default function DanhSachSanPham() {

    //hook selector ket nối tới redux và lấy data về
    const sanPhamChiTiet = useSelector(state => state.QuanLySanPhamReducer.sanPhamChiTiet)
    console.log('san pham chi tiet', sanPhamChiTiet)

    const renderSanPham = () => {
        return data.map((sanPham, index) => {
            return <div className="col-4" key={index}>
                <SanPham SanPham={sanPham} />

            </div>
        })
    }



    return (
        <div className="container">
            <h3 className="text-center">Danh Sach SAN PHAM</h3>
            <div className="row">
                {renderSanPham()}
            </div>

            <div className="row">
                <div className="col-4">
                    <h3>Iphone</h3>
                    <img style={{ height: 300 }} src={sanPhamChiTiet.hinhAnh} alt="..."></img>
                </div>
                <div className="col-8">
                    <h3> Thong Tin San Pham</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Ma San Pham</th>
                                <th>{sanPhamChiTiet.maSP}</th>
                            </tr>
                            <tr>
                                <th>Ten San Pham</th>
                                <th>{sanPhamChiTiet.tenSP}</th>
                            </tr>
                            <tr>
                                <th>Man Hinh</th>
                                <th>{sanPhamChiTiet.manHinh}</th>
                            </tr>
                            <tr>
                                <th>He Dieu Hanh</th>
                                <th>{sanPhamChiTiet.heDieuHanh}</th>
                            </tr>
                            <tr>
                                <th>Camera Sau</th>
                                <th>{sanPhamChiTiet.cameraSau}</th>
                            </tr>
                            <tr>
                                <th>Camera Truoc</th>
                                <th>{sanPhamChiTiet.cameraTruoc}</th>
                            </tr>
                            <tr>
                                <th>Ram</th>
                                <th>{sanPhamChiTiet.ram}</th>
                            </tr>
                            <tr>
                                <th>Rom</th>
                                <th>{sanPhamChiTiet.rom}</th>
                            </tr>
                            <tr>
                                <th>Gia Ban</th>
                                <th>{sanPhamChiTiet.giaBan}</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    )
}



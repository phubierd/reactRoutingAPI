import { SET_FILMS, SET_FILM_DETAIL, SET_CHI_TIET_PHONG_VE } from "../actions/Type/FilmTypes"

const stateDefault = {
    arrFilm: [{ maPhim: 1, tenPhim: 'ABC', hinhAnh: 'https://picsum.photos/200/200' }],
    thongTinChiTiet: {},
    chiTietPhongVe: {},
    danhSachGheDangDat: [{
        daDat: false,
        giaVe: 75000,
        loaiGhe: "Thuong",
        maGhe: 49961,
        maRap: 467,
        stt: "01",
        taiKhoanNguoiDat: null,
        tenGhe: "01"
    }],
}


export const FilmReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_FILMS: {
            state.arrFilm = action.dataFilms
            return { ...state }
        }

        case SET_FILM_DETAIL: {
            state.thongTinChiTiet = action.thongTinChiTiet
            return { ...state }
        }

        case SET_CHI_TIET_PHONG_VE: {
            state.chiTietPhongVe = action.chiTietPhongVe;
            return { ...state }
        }

        case 'DAT_GHE' : {
            let danhSachGheCapNhat = [...state.danhSachGheDangDat];

            //tim actionGhe gửi lên có tồn tại trong mảng ghế đang đặt ko? nếu có => xóa đi, chưa có thì thêm vào
            let index = danhSachGheCapNhat.findIndex(gheDD => gheDD.maGhe === action.ghe.maGhe);
            if(index !== -1){
                danhSachGheCapNhat.splice(index,1);
            }else{
                danhSachGheCapNhat.push(action.ghe);
            }
            state.danhSachGheDangDat = danhSachGheCapNhat;
            return {...state}
        }

        case 'XOA_DANH_SACH_GHE_DANG_DAT':{
            state.danhSachGheDangDat=[];
            return{...state}
        }


        default: return state
    }
}
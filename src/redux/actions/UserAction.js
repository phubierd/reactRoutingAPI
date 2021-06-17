
import axios from "axios"
import { method } from "lodash";



import {history} from '../../App'
import { ACCESSTOKEN, DOMAIN, USER_LOGIN } from "../../util/setting";
import { layChiTietPhongVeAction } from "./FilmActions";
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";

export const dangKyAction = (thongTinNguoiDung) => {
    return async dispatch =>{

        


        try {
            const result = await axios ({
                url:'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
                method:'post',
                data:thongTinNguoiDung
            });

            history.push('/')
            console.log(result.data);
            
        }catch(errors){
            console.log('errors',errors.response.data)
        }
    }

}



export const dangNhapAction =(thongTinDangNhap)=>{
    // thongTinDangNhap: {taiKhoan:'', matKhau:''}
    return async dispatch =>{
        try{
            const result = await axios({
                url:`${DOMAIN}/api/QuanLyNguoiDung/DangNhap`,
                method:'post',
                data:thongTinDangNhap
            });

            //dua len reducer
            dispatch({
                type:'DANG_NHAP',
                userLogin : result.data
            })

            //luu du lieu vao localStorage
            localStorage.setItem(USER_LOGIN,JSON.stringify(result.data));

            localStorage.setItem(ACCESSTOKEN,result.data.accessToken)

            //đồng thời quay lại trang trước đó
            history.goBack();

        }catch (errors){    
            console.log('errors',errors.response?.data)
        }
    }
}


//goi api luu thong tin dat ve (gui ve backend)

// {
//     "maLichChieu": 0,
//     "danhSachVe": [
//       {
//         "maGhe": 0,
//         "giaVe": 0
//       }
//     ],
//     "taiKhoanNguoiDung": "string"
//   }


export const datVeAction = (thongTinDatVe)=>{

    return async dispatch =>{

        //loading
        dispatch(displayLoadingAction);



        try{
            const result = await axios({
                url:`${DOMAIN}/api/quanlydatve/datve`,
                method:'post',
                data: thongTinDatVe,

                //phần này để api xác nhận mình dã đăng nhập rồi
                headers:{
                    'Authorization': `Bearer ${localStorage.getItem(ACCESSTOKEN)}`
                }
            });
            //goi action xoa ghe
            await dispatch({
                type:'XOA_DANH_SACH_GHE_DANG_DAT'
            })

            //sau khi dat ve xong goi lại action load lại phòng vé
            await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu))
            //goij action khac (ma lich chieu => tu page checkout)

            console.log('result',result)

            //loading
            dispatch(hideLoadingAction)

        }catch(err){
            console.log('error', err.response?.data)
        }
    }
}





// 2 api chạy song song
/** 
 * hiển thị loading
 * đợi cả 2 api xử lý xong
 * tắt loading
 */

import axios from "axios"



import {history} from '../../App'
import { ACCESSTOKEN, DOMAIN, USER_LOGIN } from "../../util/setting";
export const dangKyAction = (thongTinNguoiDung) => {
    return async dispatch =>{
        try {
            const result = await axios ({
                url:'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
                method:'post',
                data:thongTinNguoiDung
            });

            history.push('/')
            console.log(result.data)
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
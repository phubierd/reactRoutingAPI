import axios from 'axios'
import { SET_FILMS, SET_FILM_DETAIL } from './Type/FilmTypes';


export const getApiFilmAction = (maNhom) => {
   return async (dispatch) => {
        try {
            let result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/quanlyphim/laydanhsachphim?manhom=${maNhom}`,
                method: 'get',
            });

            //sau khi lấy dữ liệu từ api về => đưa dữ liệu lên redux
            const action = {
                type: SET_FILMS,
                dataFilms: result.data
            }
            dispatch(action)
        }
        catch (errors) {
            console.log('errors', errors.response.data)
        }
    }
}


export const getFilmDetailAction = (maPhim)=>{


    return async dispatch =>{
        try {
            const result = await axios({
                url:`https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
                method:'get',
            });
            console.log('result',result)
            //đưa dữ liệu lên redux
            dispatch({
                type:SET_FILM_DETAIL,
                thongTinChiTiet:result.data
            })

        }catch (errors){
            console.log('errors',errors.response.data)
        }
    }
}
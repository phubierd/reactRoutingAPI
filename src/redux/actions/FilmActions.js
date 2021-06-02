import axios from 'axios'


export const getApiFilmAction = (maNhom) => {
   return async (dispatch) => {
        try {
            let result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/quanlyphim/laydanhsachphim?manhom=${maNhom}`,
                method: 'get',
            });

            //sau khi lấy dữ liệu từ api về => đưa dữ liệu lên redux
            const action = {
                type: 'SET_FILMS',
                dataFilms: result.data
            }
            dispatch(action)
        }
        catch (errors) {
            console.log('errors', errors.response.data)
        }
    }
}



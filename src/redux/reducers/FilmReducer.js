import { SET_FILMS, SET_FILM_DETAIL } from "../actions/Type/FilmTypes"

const stateDefault = {
    arrFilm: [{ maPhim: 1, tenPhim: 'ABC', hinhAnh: 'https://picsum.photos/200/200' }],
    thongTinChiTiet:{thongTinPhim:{maPhim:'12312312'}}
}


export const FilmReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_FILMS: {
            state.arrFilm = action.dataFilms
            return { ...state }
        }

        case SET_FILM_DETAIL:{
            state.thongTinChiTiet= action.thongTinChiTiet
            return{...state}
        }


        default: return state
    }
}
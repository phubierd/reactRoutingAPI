const stateDefault = {
    arrFilm: [{ maPhim: 1, tenPhim: 'ABC', hinhAnh: 'https://picsum.photos/200/200' }]
}


export const FilmReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'SET_FILMS': {
            state.arrFilm = action.dataFilms
            return { ...state }
        }


        default: return state
    }
}
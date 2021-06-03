//setup redux
import {applyMiddleware, combineReducers, createStore} from 'redux';
import { FilmReducer } from './reducers/FilmReducer';
//cài đặt redux thunk middleware
import reduxThunk from 'redux-thunk'
import { QuanLySanPhamReducer } from './reducers/QuanLySanPhamReducer';

const rootReducer = combineReducers({
    //Chứa các state của toàn ứng dụng
   FilmReducer:FilmReducer,

   QuanLySanPhamReducer,

})


export const store = createStore(rootReducer,applyMiddleware(reduxThunk));
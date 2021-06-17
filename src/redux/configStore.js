//setup redux
import {applyMiddleware, combineReducers, createStore} from 'redux';
import { FilmReducer } from './reducers/FilmReducer';
//cài đặt redux thunk middleware
import reduxThunk from 'redux-thunk'
import { QuanLySanPhamReducer } from './reducers/QuanLySanPhamReducer';
import {UserReducer} from './reducers/UserReducer'
import { LoadingReducer } from './reducers/LoadingReducer';

const rootReducer = combineReducers({
    //Chứa các state của toàn ứng dụng
   FilmReducer:FilmReducer,

   QuanLySanPhamReducer,

   UserReducer,
   LoadingReducer,

})


export const store = createStore(rootReducer,applyMiddleware(reduxThunk));
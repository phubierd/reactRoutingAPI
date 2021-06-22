import axios from 'axios';
import { baseService } from './baseService';


export class QuanLyPhimService extends baseService {
    constructor() {
        super();
    }

    layDanhSachPhim = () => {
        return this.get(`/api/quanlyphim/laydanhsachphim?manhom=GP01`)
    }




}

export const quanLyPhimService = new QuanLyPhimService()
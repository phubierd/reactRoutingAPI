import axios from "axios";
import { ACCESSTOKEN, DOMAIN } from "../util/setting"

export class baseService {
    constructor() {

    }

    get = (url) => {
        let promise = axios({
            url: `${DOMAIN}${url}`,
            method: 'get',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem(ACCESSTOKEN)}`
            }
        });

        return promise;
    }

    post = (url,data) => {
        let promise = axios({
            url: `${DOMAIN}${url}`,
            method: 'post',
            data:data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem(ACCESSTOKEN)}`
            }
        });

        return promise;
    }

    put = (url,data) => {
        let promise = axios({
            url: `${DOMAIN}${url}`,
            method: 'put',
            data:data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem(ACCESSTOKEN)}`
            }
        });

        return promise;
    }

    delete = (url) => {
        let promise = axios({
            url: `${DOMAIN}${url}`,
            method: 'delete',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem(ACCESSTOKEN)}`
            }
        });

        return promise;
    }

}
import axiosClient from "./axiosClient"
import * as Actions from "./../store/actions"
import { store } from './../index'


const authAPI = {
    login: async (params) => {
        try {
            const url = '/auth/login';
            const response = await axiosClient.post(url, params);
            if (response.data.status) {
                localStorage.setItem('token', response.data.data.access_token);
                store.dispatch(Actions.saveUserToRedux(localStorage.getItem('token')));
                localStorage.setItem('name', response.data.data.name);
                localStorage.setItem('avatar_url', response.data.data.avatar_url);
                localStorage.setItem('role', response.data.data.role);
                console.log("dang nhap oke");
            }
            return response;
        } catch (err) {
            console.log("khong oke");
            alert(err.message)
        }
    },

    logout: async () => {
        try {
            const url = '/auth/logout'
            localStorage.removeItem('token');
            store.dispatch(Actions.removeUserOutOfRedux(null))
            const response = await axiosClient.post(url);
        } catch (err) {
            alert(err.message);
        }

    }
}

export default authAPI;
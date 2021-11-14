import axiosClient from "./axiosClient"
import * as Actions from "./../store/actions"
import { store } from './../index'


const authAPI = {
    login: async (params) => {
        try {
            const url = '/auth/login';
            const response = await axiosClient.post(url, { params });
            localStorage.setItem('token', response.data.access_token);
            store.dispatch(Actions.saveUserToRedux(localStorage.getItem('token')));
            console.log(response)
            console.log("dang nhap oke");
            return response;
        } catch (err) {
            console.log("khong oke");
            alert(err.message)
        }
    },

    logout: async () => {
        try {
            const url = '/auth/logout'
            const response = await axiosClient.post(url);
            localStorage.removeItem('token');
            store.dispatch(Actions.removeUserOutOfRedux(null))
        } catch (err) {
            alert(err.message);
        }

    }
}

export default authAPI;

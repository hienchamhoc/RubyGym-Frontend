import axiosClient from "./axiosClient"
import * as Actions from "./../store/actions"
import { store } from './../index'


const authAPI = {
    login: async (params) => {
        try {
            const url = '/auth/login';
            const response = await axiosClient.post(url, { params });
            localStorage.setItem('token', JSON.stringify(response.data.access_token));
            store.dispatch(Actions.saveUserToRedux(JSON.parse(localStorage.getItem('token'))));
            console.log(response)
            return response;
        } catch (err) {
            alert(err.message)
        }
    },

    logout: () => {
        localStorage.removeItem('token');
        store.dispatch(Actions.removeUserOutOfRedux(null))
    }
}

export default authAPI;

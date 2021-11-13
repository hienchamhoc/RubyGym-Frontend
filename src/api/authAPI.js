import axiosClient from "./axiosClient"
import * as Actions from "./../store/actions"
import { store } from './../index'


const authAPI = {
    login: async ( navigate, params) => {
        try {
            const url = '/users';
            const response = await axiosClient.get(url, { params });
            localStorage.setItem('user', JSON.stringify(response.data[0]));
            store.dispatch(Actions.saveUserToRedux(JSON.parse(localStorage.getItem('user'))));
            return response;
        } catch (err) {
            alert(err.message)
        }
    },

    logout: () => {
        localStorage.removeItem('user');
        store.dispatch(Actions.saveUserToRedux(null))
    }
}

export default authAPI;

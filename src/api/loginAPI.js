import axiosClient from "./axiosClient"

export const loginAPI = {
    login: async () => {
        const url = '/users'
        return axiosClient.get(url);
    }
}

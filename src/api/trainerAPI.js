import axiosClient from "./axiosClient";

const trainerAPI = {
    getTrainerInfo: async () => {
        try {
            const url = '/trainers/1';
            const response = await axiosClient.get(url);
            return response;
        } catch (err) {
            alert(err.message)
        }
    },
    updateTrainerInfo: async (params) => {
        try {
            const url = '';
            const response = await axiosClient.put(url, params);
            return response
        } catch (err) {
            alert(err.message)
        }
    },
    updateTrainerAvatar: async (params) => {
        try {
            const url = '';
            const response = await axiosClient.put(url, params);
            return response
        } catch (err) {
            alert(err.message)
        }
    }
}

export default trainerAPI
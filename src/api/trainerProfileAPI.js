import axiosClient from "./axiosClient";

const trainerProfileAPI = {
    getProfile: async () => {
        try {
            const url = '/trainer/profile';
            const response = await axiosClient.get(url);
            return response;
        } catch (err) {
            alert(err.message);
        }
    },

    updateProfile: async (params) => {
        try {
            const url = '/trainer/profile'
            const response = await axiosClient.put(url, params);
            return response;
        } catch (err) {
            alert(err.message);
        }
    },

    updateAvatar: async (params) => {
        try {
            const url = 'upload/image';
            const response = await axiosClient.post(url, params);
            return response;
        } catch (err) {
            alert(err.message);
        }
    },
    getMyUser: async () => {
        try {
            const url = '/trainer/members';
            const response = await axiosClient.get(url);
            return response;
        } catch (err) {
            alert(err.message);
        }
    },
}

export default trainerProfileAPI
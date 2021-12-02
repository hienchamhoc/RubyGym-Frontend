import axiosClient from "./axiosClient";

const userProfileAPI = {
    getProfile: async () => {
        try {
            const url = '/member/profile';
            const response = await axiosClient.get(url);
            return response;
        } catch (err) {
            alert(err.message);
        }
    },

    updateProfile: async () => {
        try {

        } catch (err) {
            alert(err.message);
        }
    }
}

export default userProfileAPI
import axiosClient from "./axiosClient";

const trainingAPI = {
    getInfor: async () => {
        try {
            const url = '/member/training';
            const response = await axiosClient.get(url);
            return response;
        } catch (err) {
            alert(err.message);
        }
    },

    updateInfor: async (params) => {
        try {
            const url = '/member/training'
            const response = await axiosClient.post(url, params);
            return response;
        } catch (err) {
            alert(err.message);
        }
    },
    
    adminGetInfor: async (id) => {
        try {
            const url = '/admin/members/'+ id +'/training';
            const response = await axiosClient.get(url);
            return response;
        } catch (err) {
            alert(err.message);
        }
    },
}

export default trainingAPI;
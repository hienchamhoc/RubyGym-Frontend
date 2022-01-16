import { useParams } from "react-router-dom";
import axiosClient from "./axiosClient";

const practiceInfoAPI = {
    getPracticeInfo: async (id) => {
        try {
            const url = '/trainer/members/' + id + '/training';
            const response = await axiosClient.get(url);
            return response;
        } catch (error) {
            alert(error.message);
        }
    },
    updateRating: async (id, params) => {
        try {
            const url = '/trainer/members/' + id + '/training';
            const response = await axiosClient.post(url, params);
            return response;
        } catch (error) {
            alert(error.message);
        }
    }
}
export default practiceInfoAPI
import { useParams } from "react-router-dom";
import axiosClient from "./axiosClient";

const practiceInfoAPI = {
    getPracticeInfo: async () => {
        try {
            const url = 'localhost:5678/member/training';
            const response = await axiosClient.get(url);
            return response;
        } catch (error) {
            alert(error.message);
        }
    },
    updateRating: async (params) => {
        try {
            const url = 'localhost:5678/trainer/' + params.member_id + '/training';
            const response = await axiosClient.post(url, params);
            return response;
        } catch (error) {
            alert(error.message);
        }
    }
}
export default practiceInfoAPI
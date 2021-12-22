import axiosClient from "./axiosClient";

const calendarAPI = {
    getCalendar: async () => {
        try {
            const url = '/member/calendar';
            const response = await axiosClient.get(url);
            return response;
        } catch (err) {
            alert(err.message);
        }
    }
}

export default calendarAPI;
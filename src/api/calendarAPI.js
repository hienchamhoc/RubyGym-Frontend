import axiosClient from "./axiosClient";

const calendarAPI = {
    getCalendarMonthly: async (_year, _month) => {
        try {
            const url = '/trainer/calendars';
            const response = await axiosClient.get(url, {
                params: {
                    year: _year,
                    month: _month
                }
            });
            return response;
        } catch (err) {
            alert(err.message);
        }
    },
    getCalendarDaily: async (_date) => {
        try {
            const url = '/trainer/calendars';
            const response = await axiosClient.get(url, {
                params: {
                    date: _date
                }
            });
            return response;
        } catch (err) {
            alert(err.message);
        }
    },
    deleteCalendarDaily: async (schedule_id) => {
        try {
            const url = '/trainer/' + schedule_id;
            const response = await axiosClient.delete(url);
            return response;
        } catch (err) {
            alert(err.message);
        }
    }
}

export default calendarAPI;
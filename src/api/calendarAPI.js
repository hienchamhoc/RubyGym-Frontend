import axiosClient from "./axiosClient";

const calendarAPI = {
    getCalendarMonthly: async (_year, _month) => {
        try {
            const url = '/' + localStorage.getItem('role') + '/schedules';
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
            const url = '/' + localStorage.getItem('role') + '/schedules/details';
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
    // admin see member's or trainer's schedule
    getCalendarMonthlyUser: async (_year, _month, _id, _role) => {
        try {
            const url = '/admin/' + _role + 's/schedules/?id=' + _id;
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

    getCalendarDailyUser: async (_date, _id, _role) => {
        try {
            const url = '/admin/' + _role + 's/schedules/details/?id=' + _id;
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
            const url = '/trainer/schedules/' + schedule_id;
            const response = await axiosClient.delete(url);
            return response;
        } catch (err) {
            alert(err.message);
        }
    }
}

export default calendarAPI;
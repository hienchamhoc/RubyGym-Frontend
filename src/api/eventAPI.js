import axiosClient from "./axiosClient"
import * as Actions from "../store/actions"
import { store } from '../index'


const eventAPI = {
    eventList: async (params) => {
        try {
            const url = '/admin/events';
            const response = await axiosClient.get(url);
            return response;
        } catch (err) {
            console.log("khong oke");
            alert(err.message)
        }
    },
    eventDetail: async (id) => {
        try {
            const url = '/admin/events/' + id;
            const response = await axiosClient.get(url);
            return response;
        } catch (err) {
            console.log("khong oke");
            alert(err.message)
        }
    },
    createEvent: async (data) => {
        try {
            const url = '/admin/events';
            const response = await axiosClient.post(url, data);
            return response;
        } catch (err) {
            console.log("khong oke");
            alert(err.message)
        }
    },
    updateEvent: async (id, data) => {
        try {
            const url = '/admin/events/' + id;
            const response = await axiosClient.put(url, data);
            return response;
        } catch (err) {
            console.log("khong oke");
            alert(err.message)
        }
    },
    deleteEvent: async (id) => {
        try {
            const url = '/admin/events/' + id;
            const response = await axiosClient.delete(url);
            return response;
        } catch (err) {
            console.log("khong oke");
            alert(err.message)
        }
    }
}

export default eventAPI;
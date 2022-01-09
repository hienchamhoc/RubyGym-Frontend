import axiosClient from "./axiosClient"
import * as Actions from "../store/actions"
import { store } from '../index'


const managementAPI = {
    trainerList: async (params) => {
        try {
            const url = '/admin/trainers/list';
            const response = await axiosClient.get(url);
            return response;
        } catch (err) {
            console.log("khong oke");
            alert(err.message)
        }
    },
    trainerDetail: async (params) => {
        try {
            const url = '/admin/trainers/?id=' + params.id;
            const response = await axiosClient.get(url);
            return response;
        } catch (err) {
            console.log("khong oke");
            alert(err.message)
        }
    },
    memberList: async (params) => {
        try {
            const url = '/admin/members';
            const response = await axiosClient.get(url);
            return response;
        } catch (err) {
            console.log("khong oke");
            alert(err.message)
        }
    },    
    memberDetail: async (params) => {
        try {
            const url = '/admin/members/?id=' + params.id;
            const response = await axiosClient.get(url);
            return response;
        } catch (err) {
            console.log("khong oke");
            alert(err.message)
        }
    },
    eventList: async (params) => {
        try {
            const url = '/admin/events/list';
            const response = await axiosClient.get(url);
            return response;
        } catch (err) {
            console.log("khong oke");
            alert(err.message)
        }
    },
    eventDetail: async (params) => {
        try {
            const url = '/admin/events/?id=';
            const response = await axiosClient.get(url);
            return response;
        } catch (err) {
            console.log("khong oke");
            alert(err.message)
        }
    }
}

export default managementAPI;
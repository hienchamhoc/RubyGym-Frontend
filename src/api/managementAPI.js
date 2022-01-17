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
    trainerAdd: async (params) => {
        try {
            const url = '/admin/trainers';
            const response = await axiosClient.post(url, params);
            return response;
        } catch (err) {
            console.log("khong oke");
            alert(err.message)
        }
    },
    trainerDelete: async (params) => {
        try {
            const url = '/admin/trainers/' + params.id +'/delete';
            const response = await axiosClient.put(url);
            return response;
        } catch (err) {
            console.log("khong oke");
            alert(err.message)
        }
    },
    trainerRestore: async (params) => {
        try {
            const url = '/admin/trainers/' + params.id +'/restore';
            const response = await axiosClient.put(url);
            return response;
        } catch (err) {
            console.log("khong oke");
            alert(err.message)
        }
    },
    memberListOfTrainer: async (id) => {
        try {
            const url = '/admin/trainers/' + id + '/members';
            const response = await axiosClient.get(url);
            return response;
        } catch (err) {
            console.log("khong oke");
            alert(err.message)
        }
    },
    memberList: async (params) => {
        try {
            const url = '/admin/members/list';
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
    memberAdd: async (params) => {
        try {
            const url = '/admin/members';
            const response = await axiosClient.post(url, params);
            return response;
        } catch (err) {
            console.log("khong oke");
            alert(err.message)
        }
    },
    memberDelete: async (params) => {
        try {
            const url = '/admin/members/' + params.id +'/delete';
            const response = await axiosClient.put(url);
            return response;
        } catch (err) {
            console.log("khong oke");
            alert(err.message)
        }
    },
    memberRestore: async (params) => {
        try {
            const url = '/admin/members/' + params.id +'/restore';
            const response = await axiosClient.put(url);
            return response;
        } catch (err) {
            console.log("khong oke");
            alert(err.message)
        }
    },
    changeTrainer: async (id, trainerId) => {
        try {
            console.log(id, trainerId);
            const url = `admin/members/${id}/trainers`
            const response = await axiosClient.put(url, { trainer_id: trainerId });
            return response;
        } catch (err) {
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
import { AxiosInstance } from "./AxiosInstance";

export const getAllJobs = async () => {
    return await AxiosInstance.get("/jobs").then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const getJobById = async (id) => {
    return await AxiosInstance.get(`/jobs/${id}`).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const createJob = async (data) => {
    return await AxiosInstance.post("/jobs", data).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const updateJob = async (id, data) => {
    return await AxiosInstance.put(`/jobs/${id}`, data).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const deleteJob = async (id) => {    
    return await AxiosInstance.delete(`/jobs/${id}`).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const getAllJobsByUser = async (id) => {
    return await AxiosInstance.get(`/jobs/user/${id}`).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}   
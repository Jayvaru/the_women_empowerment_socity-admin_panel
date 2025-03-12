import { AxiosInstance } from "./AxiosInstance";

export const getAllJobsCategories = async () => {
    return await AxiosInstance.get("/jobs/categories").then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const getJobsCategories = async (id) => {
    return await AxiosInstance.get(`/jobs/categories/${id}`).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const createJobsCategories = async (data) => {
    return await AxiosInstance.post("/jobs/categories", data).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const updateJobsCategories = async (id, data) => {
    return await AxiosInstance.put(`/jobs/categories/${id}`, data).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const deleteJobsCategories = async (id) => {
    return await AxiosInstance.delete(`/jobs/categories/${id}`).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}
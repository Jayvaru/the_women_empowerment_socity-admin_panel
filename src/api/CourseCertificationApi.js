import { AxiosInstance } from "./AxiosInstance";

export const getAllCourseCertifications = async () => {
    return await AxiosInstance.get("/courses/certification").then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const getCourseCertifications = async (id) => {
    return await AxiosInstance.get(`/courses/certification/${id}`).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const createCourseCertifications = async (data) => {
    return await AxiosInstance.post("/courses/certification", data).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const updateCourseCertifications = async (id, data) => {
    return await AxiosInstance.put(`/courses/certification/${id}`, data).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const deleteCourseCertifications = async (id) => {
    return await AxiosInstance.delete(`/courses/certification/${id}`).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}   

export const getAllCourseCertificationsByUser = async (id) => {
    return await AxiosInstance.get(`/courses/certification/user/${id}`).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}   
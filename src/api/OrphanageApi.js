import { AxiosInstance } from "./AxiosInstance";

export const getAllOrphanages = async () => {
    return await AxiosInstance.get("/orphanages").then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const getOrphanageById = async (id) => {
    return await AxiosInstance.get(`/orphanages/${id}`).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const createOrphanage = async (data) => {
    return await AxiosInstance.post("/orphanages", data).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const updateOrphanage = async (id, data) => {
    return await AxiosInstance.put(`/orphanages/${id}`, data).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const deleteOrphanage = async (id) => {
    return await AxiosInstance.delete(`/orphanages/${id}`).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}
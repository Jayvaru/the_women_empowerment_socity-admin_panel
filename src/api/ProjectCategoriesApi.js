import { AxiosInstance } from "./AxiosInstance";

export const getAllProjectCategories = async () => {
    return await AxiosInstance.get("/projects/categories").then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const getProjectCategories = async (id) => {
    return await AxiosInstance.get(`/projects/categories/${id}`).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const createProjectCategories = async (data) => {
    return await AxiosInstance.post("/projects/categories", data).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const updateProjectCategories = async (id, data) => {
    return await AxiosInstance.put(`/projects/categories/${id}`, data).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const deleteProjectCategories = async (id) => {
    return await AxiosInstance.delete(`/projects/categories/${id}`).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}
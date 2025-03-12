import { AxiosInstance } from "./AxiosInstance";

export const getAllProjects = async () => {
    return await AxiosInstance.get("/projects").then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const getProjectById = async (id) => {
    return await AxiosInstance.get(`/projects/${id}`).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const createProject = async (data) => {
    return await AxiosInstance.post("/projects", data).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const updateProject = async (id, data) => {
    return await AxiosInstance.put(`/projects/${id}`, data).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const deleteProject = async (id) => {
    return await AxiosInstance.delete(`/projects/${id}`).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const getAllProjectsByUser = async (id) => {
    return await AxiosInstance.get(`/projects/user/${id}`).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}
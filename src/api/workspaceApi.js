import { AxiosInstance } from "./AxiosInstance";

export const getAllWorkspaces = async () => {
    return await AxiosInstance.get("/workspaces").then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const getWorkspaceById = async (id) => {
    return await AxiosInstance.get(`/workspaces/${id}`).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const createWorkspace = async (data) => {
    return await AxiosInstance.post("/workspaces", data).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const updateWorkspace = async (id, data) => {
    return await AxiosInstance.put(`/workspaces/${id}`, data).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const deleteWorkspace = async (id) => {
    return await AxiosInstance.delete(`/workspaces/${id}`).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}
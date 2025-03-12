import { AxiosInstance } from "./AxiosInstance";

export const getAllOrganizationDetails = async () => {
    return await AxiosInstance.get("/organization/details").then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const getOrganizationDetails = async (id) => {
    return await AxiosInstance.get(`/organization/details/${id}`).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const createOrganizationDetails = async (data) => {
    return await AxiosInstance.post("/organization/details", data).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const updateOrganizationDetails = async (id, data) => {  
    return await AxiosInstance.put(`/organization/details/${id}`, data).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const deleteOrganizationDetails = async (id) => {
    return await AxiosInstance.delete(`/organization/details/${id}`).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}   
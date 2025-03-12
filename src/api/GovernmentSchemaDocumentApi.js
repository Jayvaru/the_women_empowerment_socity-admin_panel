import { AxiosInstance } from "./AxiosInstance";

export const getAllGovernmentSchemaDocuments = async () => {
    return await AxiosInstance.get("/government/schema/documents").then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const getGovernmentSchemaDocuments = async (id) => {
    return await AxiosInstance.get(`/government/schema/documents/${id}`).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const createGovernmentSchemaDocuments = async (data) => {
    return await AxiosInstance.post("/government/schema/documents", data).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const updateGovernmentSchemaDocuments = async (id, data) => {
    return await AxiosInstance.put(`/government/schema/documents/${id}`, data).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const deleteGovernmentSchemaDocuments = async (id) => {
    return await AxiosInstance.delete(`/government/schema/documents/${id}`).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}    
import { AxiosInstance } from "./AxiosInstance";

export const getAllCoursesCategories = async () => {
    return await AxiosInstance.get("/courses/categories").then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const getCoursesCategories = async (id) => {
    return await AxiosInstance.get(`/courses/categories/${id}`).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const createCoursesCategories = async (data) => {
    return await AxiosInstance.post("/courses/categories", data).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const updateCoursesCategories = async (id, data) => {
    return await AxiosInstance.put(`/courses/categories/${id}`, data).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const deleteCoursesCategories = async (id) => {
    return await AxiosInstance.delete(`/courses/categories/${id}`).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}
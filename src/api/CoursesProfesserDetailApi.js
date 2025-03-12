import { AxiosInstance } from "./AxiosInstance";

export const getAllCoursesProfesserDetail = async () => {
    return await AxiosInstance.get("/courses/professer").then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const getCoursesProfesserDetail = async (id) => {
    return await AxiosInstance.get(`/courses/professer/${id}`).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const createCoursesProfesserDetail = async (data) => {
    return await AxiosInstance.post("/courses/professer", data).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const updateCoursesProfesserDetail = async (id, data) => {
    return await AxiosInstance.put(`/courses/professer/${id}`, data).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const deleteCoursesProfesserDetail = async (id) => {
    return await AxiosInstance.delete(`/courses/professer/${id}`).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}
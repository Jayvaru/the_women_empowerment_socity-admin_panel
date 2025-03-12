import { AxiosInstance } from "./AxiosInstance";

export const getAllCourses = async () => {
    return await AxiosInstance.get("/courses").then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const getCourseById = async (id) => {
    return await AxiosInstance.get(`/courses/${id}`).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const createCourse = async (data) => {
    return await AxiosInstance.post("/courses", data).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const updateCourse = async (id, data) => {
    return await AxiosInstance.put(`/courses/${id}`, data).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const deleteCourse = async (id) => {
    return await AxiosInstance.delete(`/courses/${id}`).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const getAllCoursesByUser = async (id) => {
    return await AxiosInstance.get(`/courses/user/${id}`).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}
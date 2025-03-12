import { AxiosInstance } from "./AxiosInstance";

export const getAllBlogs = async () => {
    return await AxiosInstance.get("/blogs").then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const getBlogById = async (id) => {
    return await AxiosInstance.get(`/blogs/${id}`).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const createBlog = async (data) => {
    return await AxiosInstance.post("/blogs", data).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const updateBlog = async (id, data) => {
    return await AxiosInstance.put(`/blogs/${id}`, data).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const deleteBlog = async (id) => {
    return await AxiosInstance.delete(`/blogs/${id}`).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}
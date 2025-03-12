import { AxiosInstance } from "./AxiosInstance";

export const getAllBlogCategories = async () => {
    return await AxiosInstance.get("/blogs/categories").then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const getBlogCategories = async (id) => {
    return await AxiosInstance.get(`/blogs/categories/${id}`).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const createBlogCategories = async (data) => {
    return await AxiosInstance.post("/blogs/categories", data).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const updateBlogCategories = async (id, data) => {
    return await AxiosInstance.put(`/blogs/categories/${id}`, data).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const deleteBlogCategories = async (id) => {
    return await AxiosInstance.delete(`/blogs/categories/${id}`).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}
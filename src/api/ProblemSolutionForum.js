import { AxiosInstance } from "./AxiosInstance";

export const getAllProblemSolutionForum = async () => {
    return await AxiosInstance.get("/problem/forum").then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const deleteProblemSolutionForum = async (id) => {
    return await AxiosInstance.delete(`/problem/forum/${id}`).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}
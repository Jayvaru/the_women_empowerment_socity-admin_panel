import { AxiosInstance } from "./AxiosInstance";

export const getAllProblemSolutions = async () => {
    return await AxiosInstance.get("/problem/solutions").then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const deleteProblemSolutions = async (id) => {
    return await AxiosInstance.delete(`/problem/solutions/${id}`).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}


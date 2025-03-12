import { AxiosInstance } from "./AxiosInstance";

export const getAllDonations = async () => {
    return await AxiosInstance.get("/donations").then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const deleteDonations = async (id) => {
    return await AxiosInstance.delete(`/donations/${id}`).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}
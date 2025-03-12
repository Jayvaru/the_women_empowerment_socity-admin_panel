import { AxiosInstance } from "./AxiosInstance";

export const Login = async (data) => {
    return await AxiosInstance.post("/login", data).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}
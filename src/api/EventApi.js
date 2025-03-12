import { AxiosInstance } from "./AxiosInstance";

export const getAllEvents = async () => {
    return await AxiosInstance.get("/events").then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const getEventById = async (id) => {
    return await AxiosInstance.get(`/events/${id}`).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const createEvent = async (data) => {
    return await AxiosInstance.post("/events", data).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const updateEvent = async (id, data) => {
    return await AxiosInstance.put(`/events/${id}`, data).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}

export const deleteEvent = async (id) => {
    return await AxiosInstance.delete(`/events/${id}`).then((res) => {
        return res.data;
    }).catch((err) => {
        return err.response.data;
    });
}
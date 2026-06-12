import axios from "axios";

const apiPort = "7192";

const localApi = `https://localhost:${apiPort}/api`;

const api = axios.create({
    baseURL: localApi
});

api.interceptors.request.use(config => {

    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization =
            `Bearer ${token}`;
    }

    return config;
});

export default api;
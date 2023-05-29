import { useAuth } from "@/stores/auth";

import axios from "axios";

window.axios = axios;

window.axios.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            const auth = useAuth();
            auth.destroyTokenAndRedirectTo("register");
        }

        return Promise.reject(error);
    }

);

if (localStorage.getItem("access_token")) {
    window.axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("access_token")}`;
}
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
window.axios.defaults.withCredentials = true;
window.axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1";
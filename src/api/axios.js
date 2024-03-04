import axios from "axios"
export const axiosClient=axios.create({
    baseURL:process.env.REACT_APP_BACKEND,
    headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
     }
});

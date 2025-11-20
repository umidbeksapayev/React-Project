import axios from "axios";
import { getItem } from "../helpers/persistance-storage";

axios.defaults.baseURL = 'http://localhost:3000/api'
axios.interceptors.request.use(config => {
    const token = getItem('token')
    const authth = token ? `Token ${token}`:''
    config.headers.Authorization = authth
    return config
})

export default axios
import axios from 'axios';


export const uploadImage = (data) => {
    return axios.post("/api/image/uploadImage", data)
}

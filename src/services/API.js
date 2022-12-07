import axios from "axios";

export default (url = "https://jsonplaceholder.typicode.com/posts") => {
    return axios.create({
        baseURL: url,
    });
};

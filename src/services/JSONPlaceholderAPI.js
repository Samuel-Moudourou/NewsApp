import API from "../services/API";

export default {
    getArticles() {
        return API().get("/");
    },
    createPost(data) {
        return API().post("/",data);
    },
    InsertPost(data) {
        return API().put("/1",data);
    },
};

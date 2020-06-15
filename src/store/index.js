import {createStore} from "redux";
import reducer from "../reducer";

let users=[],posts=[];
if(sessionStorage.getItem("users")){
    users = JSON.parse(sessionStorage.getItem("users"))
}
if(sessionStorage.getItem("posts")){
    posts = JSON.parse(sessionStorage.getItem("posts"))
}
// console.log("post",JSON.parse(sessionStorage.getItem("posts")))
// console.log("user",JSON.parse(sessionStorage.getItem("users")))
const initialState = {
    users,
    fUser: '',
    posts
}

const store = createStore(reducer, initialState);

export default store
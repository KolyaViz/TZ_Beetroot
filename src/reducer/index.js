export default function reducer(state,action) {

    let newState = Object.assign({},state);
    switch (action.type) {
        case 'ADD_USERS':
            if(!sessionStorage.getItem("users")){
                sessionStorage.setItem("users",JSON.stringify(action.data))
            }
            newState.users = action.data;
            return newState;
            break;
        case "ADD_POSTS":
            if(!sessionStorage.getItem("posts")){
                sessionStorage.setItem("posts",JSON.stringify(action.data))
            }
            newState.posts = action.data;
            return newState;
            break;

        default:
            return newState;
            break;
    }
}
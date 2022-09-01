export const blog_posts = (state = [], action) => {
    switch (action.type) {
        case "SET_BLOG_POSTS":
            return [...action.payload];
        case "CLEAR_BLOG_POSTS":
            return [];
        default:
            return state;
    }
}
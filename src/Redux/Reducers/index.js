import { combineReducers } from "@reduxjs/toolkit";
import { blog_posts } from "./Blogs/Blog_Posts_Reducer";

const rootReducer = combineReducers({
    BlogPosts: blog_posts
});

export default rootReducer;

export const set_blog_posts = (blog_posts) => {
    return {
        type: 'SET_BLOG_POSTS',
        payload: blog_posts
    }
}

export const clear_blog_posts = () => {
    return {
        type: 'CLEAR_BLOG_POSTS'
    }
}
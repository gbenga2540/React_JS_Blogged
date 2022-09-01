import React, { useState, useEffect } from 'react';
import './Home_Page.scss';
import Axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { api_base_endpoint } from '../../Configs/API_Base_Endpoint';
import BlogCard from '../../Components/Blog_Card/Blog_Card';
import { color_generator } from '../../Utils/Color_Generator/Color_Generator';
import { set_blog_posts, clear_blog_posts } from '../../Redux/Actions/Blogs/Blog_Posts_Action';

const HomePage = () => {
    const dispatch = useDispatch();
    const [isError, setIsError] = useState(false);
    const [tags, setTags] = useState([0]);
    const BlogPosts = useSelector(state => state.BlogPosts);

    useEffect(() => {
        dispatch(clear_blog_posts());
        Axios.get(`${api_base_endpoint()}blogs/?pagination_index=0&search=&tags=[${tags}]`, {
            headers: {
                "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzAwZTE5YmVhN2MzZTg3ZTM0NzIxYTIiLCJpYXQiOjE2NjEwMTM3NzF9.nvJiPzC9ckW6VxJG_ob6c-Vwi7so5qm_7H84EX3K6Xg"
            }
        })
            .catch(err => {
                setIsError(true);
                console.error(err);
            })
            .then(res => {
                if (res?.data?.status === "success") {
                    dispatch(set_blog_posts(res?.data?.response));
                } else {
                    setIsError(true);
                    console.error(res?.data?.code);
                }
            });
    }, [dispatch, tags])

    return (
        <div className='home_page_main'>
            <p style={{
                backgroundColor: color_generator(),
                color: "white"
            }}>{isError ? "Error" : "Home Page"}</p>
            <div>
                {BlogPosts?.length > 0 && BlogPosts?.map((blogpost, index) =>
                    <BlogCard key={index} blogpost={blogpost} />
                )}
            </div>
        </div>
    )
}

export default HomePage;

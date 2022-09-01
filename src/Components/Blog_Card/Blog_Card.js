import React from 'react';
import './Blog_Card.scss';
import { none_null_checker } from '../../Utils/None_Null_Checker/None_Null_Checker';
import { getCustomDate } from '../../Utils/Time_Converter/Time_Converter';

const BlogCard = ({ blogpost }) => {
    return (
        <div className='blog_card_main'>
            <div className='bcm_1'>
                {none_null_checker(blogpost?.b_dp_link) ?
                    <div>

                    </div> :
                    <img
                        src={blogpost?.b_dp_link}
                        alt={'Blog_Image'}
                    />
                }
            </div>
            <div className='bcm_2'>
                <h3>{blogpost?.title}</h3>
                <p>{getCustomDate(blogpost?.createdAt)}</p>
            </div>
        </div>
    )
}

export default BlogCard;

import React from "react";


interface BlogCardProps {
    imgUrl: string;
    title: string;
    description: string;
    contentUrl: string;
}


const BlogCard:React.FC<BlogCardProps> = ({ imgUrl, title, description, contentUrl }) => {
    return (
        <div>
            <div 
            className="h-52 md:72 rounded-t-tx relative"
            style={{ background: `url(${imgUrl})`, backgroundSize:"cover"}}>
            </div>
            <div className="bg-[#181818]py-6 px-2">
                <h5 className="text-left text-lg font-medium">{title}</h5>
                <p className="py-2">{description}</p>
                <a className="text-left text-lg font-bold pb-4" href={contentUrl} target="_blank" rel="noopener noreferrer"> Read more... </a> 
            </div>
        </div>
    )
}

export default BlogCard
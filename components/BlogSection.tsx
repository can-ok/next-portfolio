import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../lib/graphql';
import BlogCard from './BlogCard';
import { title } from 'process';

interface Post {
    node: {
        title: string;
        brief: string;
        url: string;
        coverImage?: {
            url: string;
        };
    };
}


const BlogSection: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const posts = await fetchPosts();
                setPosts(posts);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error);
                setLoading(false);
            }
        };

        getPosts();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading posts: {error.message}</p>;




    return (
        <>
          <h1 className='text-center text-2xl font-semibold py-6'>Recent Posts</h1>
          <div className="grid md:grid-cols-3 gap-8 md:gap12">
            {posts.map((post) => (
                <BlogCard key={post.node.url} title={post.node.title} imgUrl={post.node.coverImage?.url || ''} description = {post.node.brief } contentUrl={post.node.url} />
            ))}
          </div>
        </>
      );
}


export default BlogSection
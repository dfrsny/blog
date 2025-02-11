import { useState, useEffect } from "react";

import Article from "../components/Article";
import postsData from "../posts.json";
import Search from "../components/Search";

function HomePage() {
    const [posts, setPosts] = useState(postsData);
    const [totalPosts, setTotalPosts] = useState(0);

    const onSearchChange = (value) => {
        const filteredPosts = postsData.filter((item) => 
            item.title.includes(value))
        setPosts(filteredPosts);
        setTotalPosts(filteredPosts.length);
    }

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((Response) => Response.json())
    }, []);


    return (
        <>
            <h1>Simple blog</h1>
            <Search onSearchChange={onSearchChange} totalPosts={totalPosts}/>
            {
                posts.map((props, index) => (
                    <Article {...props} key={index} />
                ))
            }
            <hr />
        </>
    )
}

export default HomePage;
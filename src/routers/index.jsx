import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages";
import About from "../pages/About";
import Blog from "../pages/blogs";
import SinglePost from "../pages/blogs/_id";
import { posts, postById } from "../apis/loaders";
import ErrorPage from "../components/ErrorPage";

export const router = createBrowserRouter ([
    {
        path:"/",
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/blog",
                element: <Blog/>,
                loader: posts
            },
            {
                path: "/blog/:id",
                element: <SinglePost/>,
                loader: postById
            }
        ]
    },
]);
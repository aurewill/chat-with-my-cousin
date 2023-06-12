import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Chat } from "./Chat";
import { AboutMe } from "./AboutMe";
import { Press } from "./Press";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <AboutMe />,
            },
            {
                path: "chat",
                element: <Chat />,
            },
            {
                path: "press",
                element: <Press />
            }
        ],
    },
]);

ReactDOM.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
    document.getElementById("root"),
);

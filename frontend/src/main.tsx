import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Chat } from "./Chat";
import { AboutMe } from "./AboutMe";
import { Press } from "./Press";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

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
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root"),
);

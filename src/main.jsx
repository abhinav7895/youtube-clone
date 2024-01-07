import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utilities/store";
import Home from "./components/Home/Home";
import PlayVideo from "./components/PlayVideo/PlayVideo";
import "./index.css";

const bodyRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "watch",
        element: <PlayVideo />,
      },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={bodyRouter}/>
  </Provider>
);

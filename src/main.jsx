import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import router from "./Routes/Routes.jsx";
<<<<<<< HEAD
import store from "./Redux/Store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Wrap the App component with the Provider */}
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
=======
import AuthProvider from "./Pages/Providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <AuthProvider> <RouterProvider router={router} /></AuthProvider>
>>>>>>> d80b25f2e4a9bb5f7225712206f6e9ea7237c50d
  </React.StrictMode>
);

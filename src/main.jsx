import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import router from "./Routes/Routes.jsx";
import store from "./Redux/Store";
import AuthProvider from "./Pages/Providers/AuthProvider";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Wrap the App component with the Provider */}
    <Provider store={store}>
      <AuthProvider> 

     {/* <QueryClientProvider client={queryClient}> */}

     <RouterProvider router={router} />

     {/* </QueryClientProvider> */}

      </AuthProvider>
    </Provider>
  </React.StrictMode>
);

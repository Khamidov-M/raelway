import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Main from "./layouts/Main";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Main />}>
        <Route index path="/" element={<Home />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;

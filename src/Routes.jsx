import React from "react";
import { useRoutes } from "react-router-dom";
import Home1 from "pages/Home1";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home1 /> },
  ]);

  return element;
};

export default ProjectRoutes;

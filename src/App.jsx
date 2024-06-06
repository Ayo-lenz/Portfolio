import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from "./Components/Header.jsx";
import Home from "./Pages/Home.jsx";
import { Skills } from "./Pages/Skills.jsx";
import { Project } from "./Pages/Project.jsx";
import "./App.css";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/works",
        element: <Project />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
    ],
  },
]);


function App() {
  return (
    <div className="body-container">
      <RouterProvider router={router} />;
    </div>
  );
}

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from "./Components/Header.jsx";
import Home from "./Pages/Home.jsx";
import { Skills } from "./Pages/Skills.jsx";
import { Project } from "./Pages/Project.jsx";
import "./App.css";
import Contacts from "./Pages/Contacts.jsx";




const router = createBrowserRouter([
  {
    path: "/my-portfolio-app/",
    element: <Header />,
    children: [
      {
        path: "/my-portfolio-app/",
        element: <Home />,
      },
      {
        path: "/my-portfolio-app/works",
        element: <Project />,
      },
      {
        path: "/my-portfolio-app/skills",
        element: <Skills />,
      },
      {
        path: "/my-portfolio-app/contact",
        element: <Contacts />,
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

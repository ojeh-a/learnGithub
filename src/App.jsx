import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/styles/App.css";
import { About, ContactMe, Home, HomeLayout, Services } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <ContactMe />
      },
      {
        path: "services",
        element: <Services />
      }
    ]
  }
])
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

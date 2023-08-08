import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./components/ErrorPage.jsx";
import Contact from "./routes/Contact.jsx"
import OurCompany from './routes/OurCompany.jsx';
import Locations from './routes/Locations.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "our-company",
    element: <OurCompany title="Designo | Our Company"/>,
  },
  {
    path: "locations",
    element: <Locations title="Designo | Locations"/>,
  },
  {
    path: "contact",
    element: <Contact title="Designo | Contact"/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

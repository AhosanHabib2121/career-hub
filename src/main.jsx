import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/root/Root';
import Home from './components/home/Home';
import AppliedJobs from './components/appliedJobs/AppliedJobs';
import ErrorPage from './components/errorPage/ErrorPage';
import JobDetails from './components/jobDetails/JobDetails';

// contextAPI concept here and get kora hoise home bitor
export const GlobalContext = createContext(null);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/applied",
        loader: () => fetch('/jobs.json'),
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: "/jobDetails/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch('../jobs.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalContext.Provider value={{use:'true'}}> 
      <RouterProvider router={router} />
    </GlobalContext.Provider>
      
  </React.StrictMode>,
  
)

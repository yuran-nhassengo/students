import { createBrowserRouter } from "react-router-dom";

import {Home} from './pages/home'
import { ErrorPage } from "./pages/error-page";
import { StudentListPage } from "./pages/student-list-page";
import { ContactForm } from "./pages/contact-form";

export const route = createBrowserRouter([
    {
        path:'/',
        element:<Home/>,
        errorElement:<ErrorPage/>,
    },
    {
        path:'/student-list-page',
        element: <StudentListPage/>,
    },
    {
        path:'/contact-form',
        element:<ContactForm/>,
    }
])
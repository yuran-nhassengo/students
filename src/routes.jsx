import { createBrowserRouter } from "react-router-dom";

import {Home} from './pages/Home'
import { ErrorPage } from "./pages/error-page";
import { StudentListPage } from "./pages/student-list-page";
import { ContactForm } from "./pages/contact-form";
import { StudentProfilePage } from "./pages/student-profile-page";
import { CreateStudent } from "./pages/create-student";

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
        path:'/student-profile-page/:id',
        element: <StudentProfilePage/>,
    },
    {
        path:'/create-student',
        element:<CreateStudent/>,
    }
])
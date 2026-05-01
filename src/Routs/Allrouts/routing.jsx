

import { createBrowserRouter } from "react-router";
import Root from "../../Pages/Root/Root";
import Home from "../../Pages/Home/Home";
import Bookis from "../../Pages/Listed Books/Bookis";
import Read from "../../Pages/Read/Read";
import BookDetails from "../../Pages/BookDetails/BookDetails";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
            index:true,
            path:'/',
            element:<Home></Home>,
            loader: async()=>{
                const res= await fetch('/booksData.json');
                return res.json();
            }
        },
        {
            path:'/listed-books',
            element:<Bookis></Bookis>
        },
        {
            path:'/pages-to-read',
            element:<Read></Read>
        },
        {
            path:'/bookDetails/:bookId',
            element:<BookDetails></BookDetails>,
            loader: async()=>{
                const res= await fetch('/booksData.json');
                return res.json();
            }
        }
    ]
  },
]);
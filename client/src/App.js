
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login.jsx";
import Single from "./pages/Single";
import Home from "./pages/Home";
import Write from "./pages/Write";

const router = createBrowserRouter([{
   path: "/",
   element:<div>Home Page</div>
},
{
  path: "/Register",
  element:<Register/>,
},
{
  path: "/Login",
  element:<Login/>,
},
{
  path: "/Single",
  element:<Single/>,
},
{
  path: "/Write",
  element:<Write/>,
},
]);



function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}  


export default App;
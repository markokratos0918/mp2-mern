
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([{
   path: "/",
   element:<div>Home Page</div>
},
{
  path: "/test",
  element:<div>Home Test</div>
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
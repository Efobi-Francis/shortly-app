import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/* <Route path="" element={} /> */}
      {/* ... etc. */}
    </Route>
  )
);

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App

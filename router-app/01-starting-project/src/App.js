import { createBrowserRouter, createRoutesFromElements, Route, Routes, RouterProvider, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductPage from "./pages/Product";
import RootLayout from "./pages/Root";
import MainNavigation from "./components/MainNavigation";
import ProductDetailPage from "./pages/ProductDetail";
import Error from "./pages/Error";

// Define routes to support in this app, takes an [] of route definition objects
/*Here children are absolute paths as start with '/'. If change parent root from '/' -> '/root', problem would be clashing route definitions, that parent route start with '/root', while children start with '/'.
If remove '/' from children routes, means having relative paths, it means append them after the parent route */
const router1 = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductPage /> },
      { path: '/products/:productId', element: <ProductDetailPage />}
    ]
  }
]);

const routeDefinitions = createRoutesFromElements(
  <Route path="/" element={<RootLayout />} errorElement={<Error />}>
    <Route path="/" element={<HomePage />} />
    <Route path="/products" element={<ProductDetailPage />} />
  </Route>
);

const router2 = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router1} />;
  // return (
  //   <BrowserRouter>
  //       <MainNavigation/>
  //       <Routes>
  //           <Route path="/" element={<HomePage/>}/>
  //           <Route path="/products" element={<ProductPage/>}/>
  //           <Route path="*" element={<Error />} />
  //       </Routes>
  //   </BrowserRouter>
  // );
}

export default App;
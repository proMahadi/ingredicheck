import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
    //   {
    //     path: "/shop",
    //     element: <ShopPage />,
    //   },
    //   {
    //     path: "/shop/product-details/:id",
    //     element: <ProductDetails />,
    //   },
    //   {
    //     path: "/shop/product-details/cart",
    //     element: <Cart />,
    //   },
    //   {
    //     path: "/checkout",
    //     element: <CheckOut />,
    //   },
    //   {
    //     path: "/login",
    //     element: <LogInPage />,
    //   },
    //   {
    //     path: "/signup",
    //     element: <SignUpPage />,
    //   },
    //   {
    //     path: "/wishlist",
    //     element: <WishPage />,
    //   },
    //   {
    //     path: "/my-order",
    //     element: <MyOrder />,
    //   },
    ],
  },
]);

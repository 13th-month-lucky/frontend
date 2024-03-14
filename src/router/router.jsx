import React from "react";
import { createBrowserRouter } from "react-router-dom";
import FindOutPage from "~/pages/products/findout/page";
import LoginPage from "~/pages/LoginPage/LoginPage";
import MainPage from "~/pages/MainPage/MainPage";
import PreviewMain from "~/pages/preview/PreviewMain";
import MainLayout from "~/pages/layout";
import HousingFundLoan from "../components/HousingFundLoan";
import DaumPost from "~/components/address";
import PreviewResult from "~/pages/preview/PreviewResult";

export const mainRoutes = [
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
      {
        path: "/main",
        element: <MainPage />,
      },
      {
        path: "/product/findout",
        element: <FindOutPage />,
      },
      {
        path: "/preview/main",
        element: <PreviewMain></PreviewMain>,
      },
      {
        path: "/preview/housing",
        element: <HousingFundLoan />,
      },
      {
        path: "/preview/housing/address",
        element: <DaumPost />,
      },
      {
        path: "/preview/result",
        element: <PreviewResult />,
      },
    ],
  },
];

const router = createBrowserRouter(mainRoutes);

export default router;

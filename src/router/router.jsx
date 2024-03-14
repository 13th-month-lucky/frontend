import React from "react";
import { createBrowserRouter } from "react-router-dom";

import FindOutPage from "~/pages/products/findout/page";
import IndexPage from "~/pages/Main/IndexPage";
import Login from "~/pages/Main/Login";
import MainPage from "~/pages/Main/MainPage";
import MyPage from "~/pages/Main/MyPage";
import PreviewMain from "../pages/preview/PreviewMain";
import PreviewLoading from "../pages/preview/PreviewLoading";
import MainLayout from "~/pages/layout";
import PreviewResult from "~/pages/preview/PreviewResult";

export const mainRoutes = [
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <IndexPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/main",
        element: <MainPage />,
      },
      {
        path: "/mypage",
        element: <MyPage />,
      },
      {
        path: "/product/findout",
        element: <FindOutPage />,
      },
      {
        path: "/preview/main",
        element: <PreviewMain />,
      },
      {
        path: "/preview/loading",
        element: <PreviewLoading />,
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

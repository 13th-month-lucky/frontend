import React from "react";
import { createBrowserRouter } from "react-router-dom";
import FindOutPage from "~/pages/products/findout/page";
import IndexPage from "~/pages/Main/IndexPage";
import Login from "~/pages/Main/Login";
import MainPage from "~/pages/Main/MainPage";
import MyPage from "~/pages/Main/MyPage";
import EasyETF from "~/pages/EasySeries/EasyETF";
import EasyFound from "~/pages/EasySeries/EasyFound";
import EasyMain from "~/pages/EasySeries/EasyMain";
import EasyTax from "~/pages/EasySeries/EasyTax";
import PreviewMain from "~/pages/preview/PreviewMain";
import MainLayout from "~/pages/layout";
import HousingFundLoan from "../components/HousingFundLoan";
import DaumPost from "~/components/address";

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
        path: "/EasyETF",
        element: <EasyETF />,
      },
      {
        path: "/EasyFound",
        element: <EasyFound />,
      },
      {
        path: "/EasyMain",
        element: <EasyMain />,
      },
      {
        path: "/EasyTax",
        element: <EasyTax />,
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
    ],
  },
];

const router = createBrowserRouter(mainRoutes);

export default router;

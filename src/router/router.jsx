import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LoginPage from "~/pages/login/loginPage";
import MainPage from "~/pages/main/mainPage";
import PreviewMain from "~/pages/preview/previewMainPage";
import MainLayout from "~/pages/layoutPage";
import HousingFundLoan from "~/components/Preview/HousingFundLoan";
import DaumPost from "~/components/Preview/Address";
import PreviewResult from "~/pages/preview/previewResultPage";
import PreviewLoading from "~/pages/preview/previewLoadingPage";
import PreviewSolutionPage from "~/pages/preview/previewSolutionPage";
import ETFMain from "~/pages/ETF/ETFMain";
import EtfDetailPage from "~/pages/ETF/etfDetailPage";
import PreviewResultDetailPage from "~/pages/preview/previewResultDetailPage";
import InitialInfo from "~/components/Main/MyPage/InitialInfo";
import FundDetailPage from "~/pages/fund/fundDetailPage";
import FundMainPage from "~/pages/fund/fundMainPage";
import QuizMain from "~/pages/quiz/quizMain";

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
      {
        path: "/preview/result/detail",
        element: <PreviewResultDetailPage />,
      },
      {
        path: "/preview/loading",
        element: <PreviewLoading />,
      },
      {
        path: "/preview/solution",
        element: <PreviewSolutionPage />,
      },
      {
        path: "/etf/main",
        element: <ETFMain />,
      },
      {
        path: "/etf/detail/:code",
        element: <EtfDetailPage />,
      },
      {
        path: "/initialInfo",
        element: <InitialInfo />,
      },
      {
        path: "/fund/detail/:code",
        element: <FundDetailPage />,
      },
      {
        path: "/fund/main",
        element: <FundMainPage />,
      },
      {
        path: "/quiz",
        element: <QuizMain />,
      },
    ],
  },
];

const router = createBrowserRouter(mainRoutes);

export default router;

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
import FindOut from "~/pages/findout/findout";
import QuizMain from "~/pages/quiz/quizMain";
import PrevPreviewPage from "~/pages/preview/prevPreviewPage";

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
        path: "/main/:tab",
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
        path: "/preview/result/detail/:resultId",
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
        path: "/preview/prev",
        element: <PrevPreviewPage />,
      },
      {
        path: "/etf/main",
        element: <ETFMain />,
      },
      {
        path: "/etf/detail/:code/:tab",
        element: <EtfDetailPage />,
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
        path: "/fund/detail/:code/:tab",
        element: <FundDetailPage />,
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

      {
        path: "/findout",
        element: <FindOut />,
      },
    ],
  },
];

const router = createBrowserRouter(mainRoutes);

export default router;

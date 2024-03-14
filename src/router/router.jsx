import { createBrowserRouter } from "react-router-dom";
import FindOutPage from "~/pages/products/findout/page";
import IndexPage from "~/components/Main/IndexPage";
import Login from "~/components/Main/Login";
import MainPage from "~/components/Main/MainPage";
import MyPage from "~/components/Main/MyPage";
import EasyETF from "~/components/EasySeries/EasyETF";
import EasyFound from "~/components/EasySeries/EasyFound";
import EasyMain from "~/components/EasySeries/EasyMain";
import EasyTax from "~/components/EasySeries/EasyTax";

export const mainRoutes = [
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
];

const router = createBrowserRouter(mainRoutes);

export default router;

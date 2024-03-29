/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import Header from "~/components/Main/Header/Header";
import TabBar from "~/components/Main/TabBar/TabBar";

import FindOut from "~/components/Main/FindOut/FindOut";
import Quiz from "~/components/Main/Quiz/Quiz";
import Home from "~/components/Main/Home/Home";
import MyPage from "~/components/Main/MyPage/MyPage";
import EntireMenu from "~/components/Main/EntireMenu/EntireMenu";
import { useParams } from "react-router";

export default function MainPage() {
  const [currentTab, setCurrentTab] = useState(2);
  let { tab } = useParams();

  const tabs = [
    <FindOut />,
    <Quiz />,
    <Home setCurrentTab={setCurrentTab} />,
    <MyPage />,
    <EntireMenu setCurrentTab={setCurrentTab} />,
  ];

  useEffect(() => {
    if (0 <= tab && tab < tabs.length) {
      setCurrentTab(tab);
    }
  }, [tab]);

  return (
    <div>
      <Header setCurrentTab={setCurrentTab} />

      {tabs[currentTab]}

      <TabBar currentTab={currentTab} setCurrentTab={setCurrentTab} />
    </div>
  );
}

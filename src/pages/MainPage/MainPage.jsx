import React, { useState } from "react";
import Header from "~/components/Main/Header/Header";
import TabBar from "~/components/Main/TabBar/TabBar";

import TaxAdjustment from "~/components/Main/TaxAdjustment/TaxAdjustment";
import FindOut from "~/components/Main/FindOut/FindOut";
import Quiz from "~/components/Main/Quiz/Quiz";
import MyPage from "~/components/Main/MyPage/MyPage";

export default function MainPage() {
  const [currentTab, setCurrentTab] = useState(0);

  const tabs = [
    <TaxAdjustment></TaxAdjustment>,
    <FindOut></FindOut>,
    <Quiz></Quiz>,
    <MyPage></MyPage>,
  ];

  return (
    <div>
      <Header></Header>

      {tabs[currentTab]}

      <TabBar currentTab={currentTab} setCurrentTab={setCurrentTab}></TabBar>
    </div>
  );
}

import React, { useState } from "react";
import PersonComponent from "./Person";
import PreviewSolutionPage from "~/pages/preview/previewSolutionPage";

function ResultComponent() {
  const [totalPeopleNum, setTotalPeopleNum] = useState(0);
  console.log(totalPeopleNum);
  return (
    <div>
      <PersonComponent setTotalPeopleNum={setTotalPeopleNum}></PersonComponent>
      <PreviewSolutionPage totalResult={totalPeopleNum}></PreviewSolutionPage>
    </div>
  );
}

export default ResultComponent;

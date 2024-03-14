import React from "react";
import { Accordion } from "flowbite-react";

const HousingFundLoan = () => {
  return (
    <>
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title>🏠 주택 대출 상환 공제 추가하기</Accordion.Title>
          <Accordion.Content>
            {/* <p className="mb-2 text-gray-500 dark:text-gray-400"></p> */}
            <p>대출보유 여부</p> <input type="checkbox"> </input>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </>
  );
};
export default HousingFundLoan;

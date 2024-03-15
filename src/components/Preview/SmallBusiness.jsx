import { React, useEffect, useState } from "react";
import { Accordion, Checkbox } from "flowbite-react";
import businessBagImg from "~/assets/images/preview/travel-dynamic-color.png";
function SmallBusiness() {
  const [smallBusinessCheck, setSmallBusinessCheck] = useState(false);
  const checkHandler = () => {
    console.log(smallBusinessCheck);
    if (smallBusinessCheck) {
      setSmallBusinessCheck(false);
    } else {
      setSmallBusinessCheck(true);
    }
  };
  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title className="text-xl font-bold">
          {/* hover:bg-blue-200 */}
          <div className="flex items-center">
            <img
              src={businessBagImg}
              alt="card"
              className="w-12 h-15 mr-2 mb-1"
            />
            <span className="text-xl text-black font-bold">
              중소기업 공제 추가하기
            </span>
          </div>
        </Accordion.Title>
        <Accordion.Content>
          <div className="flex items-center justify-between mb-3">
            <p>중소기업 공제 추가시, </p>
            <p className=" text-black dark:text-black-400 text-lg mt-3">
              중소기업에 재직 중이신가요?
            </p>
            <Checkbox
              id="accept"
              onChange={checkHandler}
              className="mt-3 h-6 w-6"
            />
            <div className="flex items-center"></div>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}

export default SmallBusiness;

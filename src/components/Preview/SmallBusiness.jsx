import { React, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Accordion, Card, Checkbox } from "flowbite-react";
import businessBagImg from "~/assets/images/preview/travel-dynamic-color.png";
import { calculateTaxAmount } from "./Calculator/cacluatedTaxAmount";
function SmallBusiness({ updateTotal }) {
  const [smallBusinessJunior, setSmallBusinessJunior] = useState(false);
  const [smallBusinessSenior, setSmallBusinessSenior] = useState(false);
  const user = useSelector((state) => state.user13th);
  useEffect(() => {
    let result = 0;
    // totalPeopleNum이 변경될 때마다 totalPrice를 업데이트합니다.
    if ((user.age <= 35 || user.age >= 16) && smallBusinessJunior) {
      result = calculateTaxAmount() * 0.9;
    } else if (user.age >= 60 && smallBusinessSenior) {
      result = calculateTaxAmount() * 0.7;
    }
    if (result >= 2000000) {
      result = 2000000;
    }
    updateTotal("business", result);
  }, [smallBusinessJunior, smallBusinessSenior]);

  const checkHandler = (option, optionHandler) => {
    console.log(option);
    if (option) {
      optionHandler(false);
    } else {
      optionHandler(true);
    }
  };
  return (
    <Accordion collapseAll className="m-5">
      <Accordion.Panel>
        <Accordion.Title className="flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-5 px-5 text-left text-xl text-black-500 dark:text-gray-400 hover:bg-blue-100 focus:ring-4 focus:ring-blue-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800">
          <div className="flex flex-row align-center">
            <img src={businessBagImg} className="w-10 h-10 mt-1" />
            <h2 className="ml-2 mt-2"> 중소기업 공제 추가하기</h2>
          </div>
        </Accordion.Title>
        <Accordion.Content className="bg-gray-100">
          <Card>
            <div className="flex items-center justify-between mb-3">
              <p className=" text-black dark:text-black-400 text-base mt-3">
                중소기업에 재직 중이고, <br />
                재직 기간이 3년 미만이신가요?
              </p>
              <Checkbox
                id="accept"
                onChange={() =>
                  checkHandler(smallBusinessSenior, setSmallBusinessSenior)
                }
                className="mt-3 h-6 w-6"
              />
            </div>
          </Card>
          <Card>
            <div className="flex items-center justify-between mb-3">
              <p className=" text-black dark:text-black-400 text-base mt-3">
                중소기업에 재직 중이고, <br />
                재직 기간이 5년 미만이신가요?
              </p>
              <Checkbox
                id="accept"
                onChange={() =>
                  checkHandler(smallBusinessJunior, setSmallBusinessJunior)
                }
                className="mt-3 h-6 w-6"
              />
            </div>
          </Card>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}

export default SmallBusiness;

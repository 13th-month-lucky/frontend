import React, { useState } from "react";
import {
  Accordion,
  Checkbox,
  Label,
  TextInput,
  Radio,
  Card,
} from "flowbite-react";
import Address from "./Address"; // Import Address component
import houseImg from "~/assets/images/preview/house.png";

const MonthAndHouse = () => {
  const [checkLoan, setCheckLoan] = useState(false);
  const [checkMonthly, setCheckMonthly] = useState(false);
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const handleCheckLoanChange = (event) => {
    setCheckLoan(event.target.checked);
    console.log(event.target.checked);
  };

  const handleRadioChange = (event) => {
    if (event.target.value === "monthly") {
      setCheckMonthly(event.target.checked);
    } else {
      setCheckMonthly(false); // 자가 선택 시 checkMonthly 상태를 false로 설정
    }
  };

  const setAddressObj = (obj) => {
    setAddress(obj.areaAddress);
  };

  return (
    <>
      <div>
        <Accordion collapseAll className="m-5">
          <Accordion.Panel>
            <Accordion.Title className="flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-5 px-5 text-left text-xl text-black-500 dark:text-gray-400 hover:bg-blue-100 focus:ring-4 focus:ring-blue-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800">
              <div className="flex flex-row">
                <img src={houseImg} className="w-10 h-10" />
                <h2 className="ml-2 mb-1">
                  월세 및 주택 대출 <br />
                  상환 공제 추가하기
                </h2>
              </div>
            </Accordion.Title>
            <Accordion.Content className="bg-gray-100">
              <Card>
                <div>
                  <div className="flex justify-between items-center gap-2 mb-3">
                    <p>무주택 세대 해당 여부</p>{" "}
                    <Checkbox id="accept" defaultChecked className="w-6 h-6" />
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <Label htmlFor="promotion" className=" mt-1 text-base">
                      월세 및 대출 보유 여부
                    </Label>
                    <Checkbox
                      id="promotion"
                      checked={checkLoan}
                      onChange={handleCheckLoanChange}
                      className="mt-1 w-6 h-6"
                    />
                  </div>
                </div>
                {checkLoan && (
                  <div>
                    <div className="mt-1">
                      <div className="max-w-md">
                        <fieldset className="flex max-w-md flex-row gap-4 items-center justify-center mb-5">
                          <div className="flex items-center gap-2">
                            <Radio
                              id="monthly"
                              name="type"
                              value="monthly"
                              checked={checkMonthly}
                              onChange={handleRadioChange}
                            />
                            <Label htmlFor="monthly">월세</Label>
                          </div>
                          <div className="flex items-center gap-2">
                            <Radio
                              id="yearly"
                              name="type"
                              value="yearly"
                              onChange={handleRadioChange}
                            />
                            <Label htmlFor="yearly">전세</Label>
                          </div>
                          <div className="flex items-center gap-2">
                            <Radio
                              id="own"
                              name="type"
                              value="own"
                              onChange={handleRadioChange}
                            />
                            <Label htmlFor="own">자가</Label>
                          </div>
                        </fieldset>
                        {checkMonthly ? (
                          <div className="flex justify-between items-center gap-2 ml-2 mr-2">
                            <p className="text-nowrap">월세</p>
                            <div className="flex justify-end items-center gap-2 text-nowrap">
                              <input
                                type="number"
                                name="price"
                                id="price"
                                className="text-right block w-1/3 rounded-md border-0 py-1.5 pr-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="30"
                              />
                              <span>만원</span>
                            </div>
                          </div>
                        ) : null}
                        <TextInput
                          id="address"
                          type="text"
                          placeholder="주소"
                          className="mt-2"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>

                      <div className="max-w-md">
                        <TextInput
                          id="addressDetail"
                          type="text"
                          value={addressDetail}
                          placeholder="상세주소"
                          className="mt-2 mb-2"
                          onChange={(e) => setAddressDetail(e.target.value)}
                        />
                      </div>

                      <Address
                        className="items-end justify-end"
                        setAddressObj={setAddressObj}
                      />
                    </div>
                  </div>
                )}
              </Card>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </>
  );
};

export default MonthAndHouse;

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

const HousingFundLoan = () => {
  const [checkLoan, setCheckLoan] = useState(false);
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const handleCheckLoanChange = (event) => {
    setCheckLoan(event.target.checked);
    console.log(event.target.checked);
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
                <h2 className="ml-2 mt-2">주택 대출 상환 공제 추가하기</h2>
              </div>
            </Accordion.Title>
            <Accordion.Content className="bg-gray-100">
              <Card>
                <div>
                  <div className="flex justify-between items-center gap-2">
                    <Label htmlFor="promotion" className=" mt-1 text-base">
                      대출 보유 여부
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
                    <div className="mt-3">
                      <div className="max-w-md">
                        <fieldset className="flex max-w-md flex-row gap-4 items-center justify-center">
                          <div className="flex items-center gap-2">
                            <Radio id="monthly" name="type" value="monthly" />
                            <Label htmlFor="monthly">월세</Label>
                          </div>
                          <div className="flex items-center gap-2">
                            <Radio id="yearly" name="type" value="yearly" />
                            <Label htmlFor="yearly">전세</Label>
                          </div>
                          <div className="flex items-center gap-2">
                            <Radio id="own" name="type" value="own" />
                            <Label htmlFor="own">자가</Label>
                          </div>
                        </fieldset>
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

export default HousingFundLoan;

import { Accordion, Card, Checkbox } from "flowbite-react";
import React from "react";
import calenderImg from "~/assets/images/preview/calender.png";

export default function MonthlyRental() {
  return (
    <Accordion collapseAll className="m-5">
      <Accordion.Panel>
        <Accordion.Title className="flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-5 px-5 text-left text-xl text-black-500 dark:text-gray-400 hover:bg-blue-100 focus:ring-4 focus:ring-blue-100 dark:hover:bg-gray-800 dark:focus:ring-gray-800">
          <div className="flex flex-row align-center">
            <img src={calenderImg} className="w-10 h-10 mt-1" />
            <h2 className="ml-2 mt-2">월세 공제 추가하기</h2>
          </div>
        </Accordion.Title>
        <Accordion.Content className="bg-gray-100">
          <Card>
            <div className="flex justify-between items-center gap-2">
              <p>무주택 세대 해당 여부</p>{" "}
              <Checkbox id="accept" defaultChecked className="w-6 h-6" />
            </div>
            <div className="flex justify-between items-center gap-2">
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
          </Card>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}

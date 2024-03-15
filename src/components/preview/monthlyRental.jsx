import { Accordion, Card, Checkbox } from "flowbite-react";
import React from "react";
import calenderImg from "~/assets/images/preview/calender.png";

export default function MonthlyRental() {
  return (
    <Accordion>
      <Accordion.Panel className={"accordion"}>
        <Accordion.Title className={"accordion-title"}>
          <div className="flex align-items-center">
            <div>
              <img
                src={calenderImg}
                alt="calender"
                style={{ width: "2rem", height: "2rem" }}
              ></img>
            </div>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              월세 공제 추가하기
            </h5>
          </div>
        </Accordion.Title>
        <Accordion.Content className="bg-gray-100">
          <Card>
            <div className="flex justify-between items-center gap-2">
              <p>무주택 세대 해당 여부</p>{" "}
              <Checkbox id="accept" defaultChecked />
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

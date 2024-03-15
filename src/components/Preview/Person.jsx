import { React, useState } from "react";
import { Accordion } from "flowbite-react";
import peopleImg from "~/assets/images/preview/Group 43.png";
function PersonComponent() {
  const [spouseNum, setSpouseNum] = useState(0); //배우자 수
  const [babyNum, setBabyNum] = useState(0); // 자녀 수
  const [childNum, setChildNum] = useState(0); // 8세 이상 자녀의 수
  const [youngParentNum, setYoungParentNum] = useState(0); //60-70세 미만의 부모님
  const [oldParentNum, setOldParentNum] = useState(0); // 70세 이상의 부모님

  const PlusButton = ({ plusFunc }) => {
    // 더하기 버튼 컴포넌트
    return (
      <button
        type="button"
        className="flex-shrink-0 py-2.5 px-5 me-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        onClick={() => {
          handlePlusButton(plusFunc);
        }}
      >
        +
      </button>
    );
  };

  const MinusButton = ({ minusFunc }) => {
    //마이너스 버튼 컴포넌트
    return (
      <button
        type="button"
        className="flex-shrink-0 py-2.5 px-5 me-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        onClick={() => {
          handleMinusButton(minusFunc);
        }}
      >
        -
      </button>
    );
  };

  const handlePlusButton = (plusFunc) => {
    // 플러스 버튼 눌렀을때 들어온 set 함수 실행
    plusFunc((prevValue) => prevValue + 1);
  };

  const handleMinusButton = (minusFunc) => {
    //마이너스 버튼 눌렀을때 들어온 set 함수 실행
    minusFunc((prevValue) => {
      if (prevValue <= 0) {
        alert("음수가 될 수 없습니다");
        prevValue = 0;
        return prevValue;
      } else {
        return prevValue - 1;
      }
    });
  };
  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title className="text-xl font-bold">
          {/* hover:bg-blue-200 */}
          <div className="flex items-center">
            <img src={peopleImg} alt="card" className="w-12 h-15 mr-2 mb-1" />
            <span className="text-xl text-black font-bold">
              인적공제 추가하기
            </span>
          </div>
        </Accordion.Title>
        <Accordion.Content>
          <div className="flex items-center justify-between mb-3">
            <p className="mb-2 text-black dark:text-black-400">배우자</p>
            <div className="flex items-center">
              <PlusButton plusFunc={setSpouseNum} />
              <p className="mr-4 ml-3">{spouseNum}</p>
              <MinusButton minusFunc={setSpouseNum} />
            </div>
          </div>
          <div className="flex items-center justify-between mb-3">
            <p className="mb-2 text-black dark:text-gray-400">
              8세 미만의 자녀
            </p>
            <div className="flex items-center">
              <PlusButton plusFunc={setBabyNum} />
              <p className="mr-4 ml-3">{babyNum}</p>
              <MinusButton minusFunc={setBabyNum} />
            </div>
          </div>
          <div className="flex items-center justify-between mb-3">
            <p className="mb-2 text-black dark:text-gray-400">
              8세 이상 20세 이하의 자녀
            </p>
            <div className="flex items-center">
              <PlusButton plusFunc={setChildNum} />
              <p className="mr-4 ml-3">{childNum}</p>
              <MinusButton minusFunc={setChildNum} />
            </div>
          </div>
          <div className="flex items-center justify-between mb-3">
            <p className="mb-2 text-black dark:text-gray-400">
              60세 이상 70세 미만의 부모님
            </p>
            <div className="flex items-center">
              <PlusButton plusFunc={setYoungParentNum} />
              <p className="mr-4 ml-3">{youngParentNum}</p>
              <MinusButton minusFunc={setYoungParentNum} />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="mb-2 text-black dark:text-gray-400">
              70세 이상의 부모님
            </p>
            <div className="flex items-center">
              <PlusButton plusFunc={setOldParentNum} />
              <p className="mr-4 ml-3">{oldParentNum}</p>
              <MinusButton minusFunc={setOldParentNum} />
            </div>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}

export default PersonComponent;

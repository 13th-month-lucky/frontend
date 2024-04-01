import { React, useState, useEffect, useMemo } from "react";
import { Accordion, Card } from "flowbite-react";
import peopleImg from "~/assets/images/preview/Group 43.png";
import { useSelector } from "react-redux";
function PersonComponent({ updateTotal }) {
  const [spouseNum, setSpouseNum] = useState(0); //배우자 수
  const [babyNum, setBabyNum] = useState(0); // 자녀 수
  const [childNum, setChildNum] = useState(0); // 8세 이상 자녀의 수
  const [youngParentNum, setYoungParentNum] = useState(0); //60-70세 미만의 부모님
  const [oldParentNum, setOldParentNum] = useState(0); // 70세 이상의 부모님
  const [totalPeopleNum, setTotalPeopleNum] = useState(0);
  const [result, setResult] = useState(0);

  useEffect(() => {
    // totalPeopleNum이 변경될 때마다 totalPrice를 업데이트합니다.
    const result = calculatePrice();
    setResult(result);
    updateTotal("person", result);
  }, [totalPeopleNum]);

  const calculatePrice = () => {
    const pricePerPerson = 1500000; // 각 인원당 가격
    const calculatedPrice = totalPeopleNum * pricePerPerson;
    return calculatedPrice;
  };

  const handlePlusButton = (plusFunc) => {
    // 플러스 버튼 눌렀을때 들어온 set 함수 실행
    plusFunc((prevValue) => prevValue + 1);
    setTotalPeopleNum((prevTotal) => prevTotal + 1);
  };

  const PlusButton = useMemo(() => {
    const component = ({ plusFunc }) => {
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
    component.displayName = "PlusButton";
    return component;
  }, [handlePlusButton]);

  const handleMinusButton = (minusFunc) => {
    //마이너스 버튼 눌렀을때 들어온 set 함수 실행
    minusFunc((prevValue) => {
      if (prevValue <= 0) {
        alert("음수가 될 수 없습니다");
        prevValue = 0;
        return prevValue;
      } else {
        setTotalPeopleNum((prevTotal) => prevTotal - 1);
        return prevValue - 1;
      }
    });
  };

  const MinusButton = useMemo(() => {
    const component = ({ minusFunc }) => {
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
    component.displayName = "MinusButton";
    return component;
  }, [handleMinusButton]);

  return (
    <Accordion collapseAll className="m-5">
      <Accordion.Panel>
        <Accordion.Title className="flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-5 px-5 text-left text-xl text-black-500 dark:text-gray-400 hover:bg-blue-100 focus:ring-4 focus:ring-blue-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800">
          <div className="flex flex-row align-center">
            <img src={peopleImg} className="w-13 h-10 mt-1" />
            <h2 className="ml-1 mt-2">인적 공제 추가하기</h2>
          </div>
        </Accordion.Title>
        <Accordion.Content className="bg-gray-100">
          {result > 0 ? (
            <div className="flex items-center ml-2 mb-2">
              <p>
                인적 공제 시,
                <br /> 약 {result}원 돌려받을 수 있어요!
              </p>
            </div>
          ) : null}

          <Card>
            <>
              <div className="flex items-center justify-between mb-3 ">
                <p className="mb-2 text-black dark:text-black-400">배우자</p>
                <div className="flex items-center ml-3">
                  <MinusButton minusFunc={setSpouseNum} />
                  <p className="mr-2 ml-2">{spouseNum}</p>
                  <PlusButton plusFunc={setSpouseNum} />
                </div>
              </div>
              <div className="flex items-center justify-between mb-3">
                <p className="mb-2 text-black dark:text-gray-400">
                  8세 미만의 자녀
                </p>

                <div className="flex items-center">
                  <MinusButton minusFunc={setBabyNum} />
                  <p className="mr-2 ml-2">{babyNum}</p>
                  <PlusButton plusFunc={setBabyNum} />
                </div>
              </div>
              <div className="flex items-center justify-between mb-3">
                <p className="mb-2 text-black dark:text-gray-400">
                  8세 이상 20세 <br />
                  이하의 자녀
                </p>
                <div className="flex items-center">
                  <MinusButton minusFunc={setChildNum} />
                  <p className="mr-2 ml-2">{childNum}</p>
                  <PlusButton plusFunc={setChildNum} />
                </div>
              </div>
              <div className="flex items-center justify-between mb-3">
                <p className="mb-2 text-black dark:text-gray-400">
                  60세 이상 70세 <br />
                  미만의 부모님
                </p>
                <div className="flex items-center">
                  <MinusButton minusFunc={setYoungParentNum} />
                  <p className="mr-2 ml-2">{youngParentNum}</p>
                  <PlusButton plusFunc={setYoungParentNum} />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="mb-2 text-black dark:text-gray-400 ">
                  70세 이상의 <br />
                  부모님
                </p>
                <div className="flex items-center">
                  <MinusButton minusFunc={setOldParentNum} />
                  <p className="mr-2 ml-2">{oldParentNum}</p>
                  <PlusButton plusFunc={setOldParentNum} />
                </div>
              </div>
            </>
          </Card>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}

export default PersonComponent;

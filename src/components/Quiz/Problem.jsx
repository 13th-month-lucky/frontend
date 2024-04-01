import React, { useEffect, useState } from "react";
import { Button } from "flowbite-react";
import { getQuiz } from "~/lib/apis/quiz";

//O,X중에 버튼을 클릭이 되면 정답을 띄우고, 현재 퀴즈를 설정해주는 함수를 불러 다른 퀴즈를 넣어준다.
export default function Problem() {
  const [quizList, setQuizList] = useState([]);
  const [currentQuiz, setCurrentQuiz] = useState({});
  const [message, setMessage] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    getQuiz().then((quizes) => {
      setQuizList(quizes);
    });
  }, []);

  useEffect(() => {
    if (quizList.length > 0) {
      makeCurrentQuiz();
    }
  }, [quizList]);

  //범위 내의 난수 생성해주는 함수
  const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

  //현재 퀴즈를 설정해주는 함수
  const makeCurrentQuiz = () => {
    let index = getRandom(0, quizList.length);
    setCurrentQuiz(quizList[index]);
  };

  //O,X 버튼 눌렀을 ㄱ때
  const handleOnClick = (event) => {
    const answer = event.currentTarget.getAttribute("value");
    if (answer === currentQuiz.answer) {
      setMessage("정답입니다 🙂");
      setDescription("");
    } else {
      setMessage("오답입니다 🥲");
      setDescription(currentQuiz.description);
    }
  };

  //다음으로 버튼 누르기
  const handleNext = () => {
    makeCurrentQuiz();
    setMessage(null);
    setDescription(null);
  };

  return (
    <>
      <div className="ml-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 items-center mt-8">
        <div className="p-5">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-5 text-center tracking-normal">
            {currentQuiz.problem}
          </h5>
          <div className="flex mt-10 mb-5">
            <Button
              className="bg-white text-black font-semibold rounded-lg shadow-md w-full h-20 focus:ring-blue-300 enabled:hover:bg-blue-400 mr-2 "
              value={"O"}
              onClick={handleOnClick}
            >
              <p className="text-2xl text-bold">O</p>
            </Button>
            <Button
              className="bg-white text-black font-semibold rounded-lg shadow-md w-full h-20 focus:ring-red-300 enabled:hover:bg-red-400 ml-2"
              value={"X"}
              onClick={handleOnClick}
            >
              <p className="text-2xl text-bold">X</p>
            </Button>
          </div>
        </div>
      </div>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-10 text-center tracking-normal">
        {message}
      </h5>
      <div className="max-w-md mx-auto rounded-lg p-4">
        <p className="text-lg text-gray-900 dark:text-white">{description}</p>
      </div>
      {message ? (
        <div className=" flex items-center justify-center mb-8 mt-3">
          <Button
            className=" bg-blue-500 text-white text-lg font-semibold rounded-2xl shadow-md w-9/12 h-12 focus:ring-blue-200 enabled:hover:bg-blue-400  ml-1 mr-1 tracking-tight"
            onClick={handleNext}
          >
            <span className="text-xl"> 다음 문제로</span>
          </Button>
        </div>
      ) : null}
    </>
  );
}

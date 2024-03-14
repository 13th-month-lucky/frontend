import { Accordion } from "flowbite-react";
import "./accordion-custom.css";
import cardImg from "~/assets/image/card-dynamic-color.png";
const CardComponent = () => {
  return (
    <>
      <Accordion>
        <Accordion.Panel className={"accordion"}>
          <Accordion.Title className={"accordion-title"}>
            <div className="flex items-center">
              {" "}
              {/* Flexbox를 사용하여 이미지와 텍스트를 같은 줄에 정렬 */}
              <img src={cardImg} alt="card" className="w-12 h-15 mr-2 mb-1" />
              <span>카드 공제 사용하기</span>
            </div>
          </Accordion.Title>
          <Accordion.Content className={"accordion-content"}>
            <p>신용카드 공제 한도까지 100만원 남았습니다.</p>
            <p>
              현금카드 공제 한도까지 200만원 남았습니다
              <a
                href="https://flowbite.com/docs/getting-started/introduction/"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                get started&nbsp;
              </a>
              and start developing websites even faster with components on top
              of Tailwind CSS.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </>
  );
};

export default CardComponent;

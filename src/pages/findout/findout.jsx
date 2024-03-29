import React from "react";
import { Accordion } from "flowbite-react";
import img1 from "~/assets/images/findout/1.png";
import img2 from "~/assets/images/findout/2.png";
import img3 from "~/assets/images/findout/3.png";
import img4 from "~/assets/images/findout/4.png";
import img5 from "~/assets/images/findout/5.png";
import img6 from "~/assets/images/findout/6.png";
import img7 from "~/assets/images/findout/7.png";
import img8 from "~/assets/images/findout/8.png";
import img9 from "~/assets/images/findout/9.png";

const FindOut = () => {
  return (
    <div className="text-gray-600">
      <div className="mt-20 font-extrabold text-3xl">🕵️연말정산 알아보기🕵️</div>

      <div className="mt-16 font-bold text-lg">연말정산 기본정보</div>
      <Accordion className="mt-3" collapseAll>
        <Accordion.Panel>
          <Accordion.Title>연말정산이란?</Accordion.Title>
          <Accordion.Content>
            <p className="mt-3 mb-2 font-bold text-lg">■ 연말정산이란, </p>
            <p> 1년간의 총근로소득에 대한 납부세액을 확정하는 것으로</p>
            <p className="text-bold">
              근로자가 한해 동안 납부한 근로소득세를 정산하는 절차
            </p>
            입니다.
            <p className="mt-8 font-bold text-lg">■ 연말정산의 신고</p>
            <p className="mt-3">
              연말정산의 신고 의무자는 회사(원천징수 의무자)입니다.{" "}
            </p>
            <p>
              근로자에게 필요서류를 받아 회사나 회사에서 의뢰한 세무대리인이
              업무를 처리합니다.
            </p>
            <p className="mt-8 font-bold text-lg mb-5">
              ■ 연말정산 후 환급과 추가 납부
            </p>
            <p>
              그런데 급여가 같은 경우에도 왜 누군가는 돌려받고 누군가는 더
              납부를 해야할까요?
            </p>
            <p className="mb-5">
              간단히 말하면, 소득이 같더라도 나라에서 요구하는 세금이 다르기
              때문입니다.
            </p>
            <p>
              부양가족이 있거나, 기부금을 많이 냈거나, 교육비로 지출하는 비용이
              많은 경우 등 해당되는 사항이 있다면 납부해야하는 세금을 공제 또는
              감면받을 수 있습니다.
            </p>
            <p className="mt-5">
              예를들어, 독신으로 사는 A씨와 부모님과 자녀를 부양하는 B씨가 있을
              때
            </p>
            <p>
              나라에서는 B씨에게 세금공제 혜택을 주어 세금을 적게 낼 수 있도록
              합니다.
            </p>
            <p className="mt-3">
              그런데 이런 사항들을 매월 급여에 반영할 수 없으니 급여지급시에는
              회사가 일괄적인 비율로
            </p>
            <p>
              세금을 미리 공제하여 국가에 납부하고, 1년에 한번 연말정산이라는
              절차로 공제사항을 정확히 반영하여
            </p>
            <p>계산하는 것입니다.</p>
            <p className="mt-10 text-lg font-bold">■ 연말정산 후 세액차이 </p>
            <p className="mt-2 mb-2.5">
              월급여 200만원을 받는 근로자의 예시를 확인해 보겠습니다.{" "}
            </p>
            <img src={img3}></img>
            <p className="mt-8">
              근로자 홍길동씨는 매월 19,520원씩 근로소득세를 내서 연간
              234,240원을 납부했는데, 연말정산을 통해 공제사항을 검토하고
              계산하였더니 근로소득세가 200,000원인 경우, 나라에서는 34,240원을
              환급해주는 것입니다.
            </p>
            <p className="mt-10 text-lg font-bold">■ 환급시기와 방법</p>
            <p className="mt-2">
              연말정산 후 세액의 환급이나 추가 납부가 필요한 경우
            </p>
            <p> 근로자가 세무서에서 직접 환급받거나 납부하는 것이 아니라,</p>
            <p>
              회사(원천징수의무자)가 다음연도 2월분 급여에 반영하여 정산된
              급여를 지급하게 됩니다.
            </p>
            <p className="mt-10 text-lg font-bold">■ 세액을 줄이는 방법</p>
            <p className="mt-2">
              그렇다면, 가장 궁금한 부분은 ..그래서 세금을 어떻게 줄일 수
              있나요?..일 것입니다. 연말정산의 공식을 한번 살펴보겠습니다.{" "}
            </p>
            <p>
              적용되는 소득공제, 세액공제가 크면 클수록 결정되는 세액이 작아지는
              것을 알 수 있습니다.
            </p>
            <img src={img4} />
            <p>
              **공제란, 일정한 금액이나 수량을 빼는 것을 말합니다. 소득공제와
              세액공제 모두 해당하는 항목만큼의 정해진 금액을 감해주는 것이며
              방법과 항목이 다르기 때문에 소득공제, 세액공제로 나눕니다.
            </p>
            <p className="mt-5">결론적으로,</p>
            <p>
              근로자가 ..나는 이 소득공제, 세액공제 항목에 해당하니 이 부분은
              세금을 공제해달..라고 요청해야 합니다.
            </p>
            <p className="mt-3">
              이를 위해 공제항목에 해당함을 증명서류로 제출해야하는데 각각의
              근로자가 해당하는 공제항목은 회사가 알 수 없으니, 근로자가 직접
              확인하여 자료를 제출해야 해당 부분에 대한 세금을 공제받을 수
              있습니다.
            </p>
            <p className="mt-5 font-bold">
              해당여부를 꼭 확인하여 공제사항이 누락되지 않도록 해주시기
              바랍니다.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            연말정산 공제항목별 제출자료 및 유의사항
          </Accordion.Title>
          <Accordion.Content>
            <ul className="font-bold">
              <li>STEP 01. 연말정산 체크리스트 작성하기</li>
              <li>STEP 02. 연말정산 자료 제출하기</li>
              <li>STEP 03. 연말정산 원천징수 영수증 확인하기</li>
            </ul>
            <p className="mt-5">
              STEP 02 단계에서 자료를 제출하실 때 해당되는 항목의 증명자료를
              반드시 제출해 주셔야 공제받으실 수 있습니다. 공제 항목별
              제출자료와 유의사항을 다음과 같이 안내 드리겠습니다.
            </p>
            <p className="mt-10">
              <p className="font-bold mb-4 text-xl">■ 공제 항목별 제출자료</p> ※
              만약, 자비스에서 안내드린 연말정산 체크리스트 작성 및 자료 제출
              기한 내에 미 제출 시, 근로자 본인에 대해 인적공제(기본공제)및
              표준세액공제(13만원)만 적용하여 연말정산합니다.
            </p>
            <div className="mt-10 font-bold">
              <p>1. 대표적인 소득공제</p>
              <img src={img1} />
            </div>
            <div className="mt-10 font-bold">
              <p>2. 대표적인 세액공제</p>
              <img src={img2} />
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>2023년 귀속 연말정산 바뀌는 3가지</Accordion.Title>
          <Accordion.Content>
            <p>2023년 귀속 연말정산부터 변경되는 주요 사항을 안내드립니다.</p>
            <p className="font-bold text-lg mb-8 mt-8">1. 소득공제</p>
            <p>
              ㄱ. 신용카드 등 소득동제 공제율 및 추가소득공제 확대 2023년
              1월부터 12월까지 지출한 대중교통 이용금액에 대한 공제율이
              한시적으로 40%에서 80%로 두 배 상향 조정되었습니다.
            </p>
            <p className="font-bold text-lg mb-8 mt-8">2. 세액감면</p>
            <p>
              ㄱ. 중소기업 취업자에 대한 소득세 감면한도 확대 중소기업 취업자에
              대한 소득세 감면 한도액이 연간 150만원에서 200만원으로 상향
              되었습니다.
            </p>
            <p className="font-bold text-lg mb-8 mt-8">3. 세액공제</p>
            <p>
              ㄱ. 자녀 세액공제 대상 연령조정 아동수당 지급연령이 만 6세
              이하에서 만 7세 이하로 확대됨에 따라, 자녀 세액공제 대상 자녀의
              연령이 만 7세 이상에서 만 8세 이상으로 변경되었습니다.
            </p>
            <p className=" mb-8 mt-8">
              ㄴ. 고소득자에 대한 근로소득 세액공제 한도 축소 총 급여액 1.2억 원
              초과 고소득자에 대해서 근로소득 세액공제액이 기존 66~ 50만원까지
              공제되던 세액공제액이 최대 50~ 최소 20만원으로 한도 축소되었습니다
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>연말정산 간소화 서비스란?</Accordion.Title>
          <Accordion.Content>
            <p className="font-bold mt-7">연말정산 간소화 서비스란,</p>
            <p>은행, 학교, 병원 등 영수증 발급기관에서</p>
            <p>전산파일로 제출한 소득, 세액공제 증명서류를</p>
            <p>
              국세청에서 전산구축하여 홈택스를 통해 근로자에게 제공하는 서비스
              입니다.
            </p>
            <p>
              제출이 필요한 다수의 연말 정산 서류를 이 서비스로 간편하게 확인할
              수 있습니다.
            </p>
            <p className="mt-5">
              연말정산 간소화 서비스에서 제공하는 소득ㆍ세액공제 증명서류는
              아래의 표와 같습니다.
            </p>
            <img src={img5} className="mt-3" />
            <p className="mt-3">
              **연말 정산 간소화 서비스에서 제공받은 내역이 실제와 다르거나,{" "}
            </p>
            <p>
              자료제공 되지 않은 공제 증명 서류는 해당 영수증 발급기관에서
              발급받아 반드시 제출하셔야 합니다.
            </p>
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title>
            연말정산 더 많이 환급받는 절세방법은?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mt-3">
              연말정산은 동일한 수입과 지출이 이루어진다 하더라도 공제하는
              방법과 항목이 다르기 때문에 더 많이 공제 받을 수 있도록 꼼꼼히
              확인하는 것이 중요합니다.
            </p>
            <p className="mt-5">
              놓치지 말아야할 절세팁 5가지를 안내해 드립니다.{" "}
            </p>
            <p className="mt-5 font-bold">
              1. 소득이 높은 사람에게 부양가족을 몰아주자!
            </p>
            <p className="mt-5">
              맞벌이 부부의 경우 자녀를 누가 공제받을지, 형제가 모두 직장생활을
              하면 부모님을 누가 공제받을지 고민이 됩니다. 누가 공제를 받느냐에
              따라 세액의 차이가 큽니다. 일반적으로 연봉이 높아 높은 세율을
              적용받는 사람이 공제받는 것이 가족 전체의 세금 합계액을 줄일 수
              있어 유리합니다.
            </p>
            <p className="mt-5 font-bold">
              2. 소득이 있는 부모님의 병원비도 공제를 받을 수 있다!
            </p>
            <p className="mt-5">
              의료비 세액공제는 유일하게 소득과 나이요건 관계없이 공제가 가능한
              항목입니다. 만일 생계를 같이 하는 20세 이상 자녀의 의료비를 근로자
              본인이 지출했다면 의료비 공제를 받을 수 있습니다.
            </p>
            <p className="mt-5 font-bold">
              3. 맞벌이 부부의 의료비는 한쪽에 몰아서 공제받자!
            </p>
            <p className="mt-5">
              맞벌이 부부의 의료비는 소득이 적은 사람에게 몰아주는 것이
              유리합니다.
            </p>
            <p>
              의료비 세액공제는 총 급여액의 3%를 초과하는 부분부터 공제
              대상입니다. 큰 병을 앓지 않은 이상 의료비가 기준금액을 초과하기란
              쉽지 않습니다.
            </p>
            <p>
              예를 들어 총 급여액이 3,000만 원이라면 의료비로 90만 원 이상
              지출해야 공제받을 금액이 있습니다.
            </p>
            <p>
              따라서 양쪽 모두 각자의 의료비가 해당 금액을 넘지 않는다면 소득이
              낮은 사람에게 몰아주어 공제 금액을 만드는 것이 유리합니다.
            </p>
            <p className="mt-5 font-bold">
              4. 잘 쓰면 약이 되는 신용카드 사용법은?
            </p>
            <p className="mt-5">
              맞벌이 부부는 한쪽 명의의 신용카드만 사용하는게 유리합니다.
              신용카드공제는 총 급여액의 25%가 넘어야 적용되므로 맞벌이 부부라면
              어느 한쪽의 카드만 사용하여 최소 기준 25%를 넘기도록 합니다. 만일
              두 분 모두 해당 기준을 이미 넘는다면 소득이 많은 쪽의 신용카드를
              사용하는 것이 유리합니다.
            </p>
            <p className="mt-5 font-bold">
              5.신용카드보다는 현금영수증, 체크카드 사용하기
            </p>
            <p className="mt-5">
              신용카드 보다는 현금영수증, 체크카드의 공제율이 높습니다. 그러나
              현금영수증, 체크카드는 당장 현금이 있어야 하니 부담이 된다면 일단
              총 급여액의 25%까지는 신용카드를 사용하되 초과액에 대해서는 주로
              현금영수증, 체크카드를 사용하도록 합니다.
            </p>
            <p className="mt-5 font-bold">
              6. 모의 계산을 통해 환급액을 미리 확인하자!
            </p>
            <p className="mt-5">
              각종 사이트에서 제공하는 연말정산 모의계산기를 이용하여 상황별
              환급액을 확인해 보는 것이 좋습니다.
            </p>
            <p className="mt-5">
              특히 맞벌이 부부라면 자녀를 누가 공제 받는지, 의료비를 누가 공제
              받는지에 따라 환급액의 차이가 크므로 미리 확인하고 환급액을 최대한
              늘리도록 합니다.
            </p>
            <p></p>
            <p></p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            전 직장에서 지급받지 못한 환급세액이 있다면?
          </Accordion.Title>
          <Accordion.Content>
            <p>
              중도퇴직자의 연말정산(=퇴사정산)은 퇴직 월의 급여를 지급하는 때에
              하는 것이고,
            </p>
            <p>
              이 때 환급 세액이 발생하였을 경우 급여와 함께 지급하게 됩니다.{" "}
            </p>
            <p className="mt-3">
              퇴사정산 결과 발생된 근로소득세 환급세액을 원천징수 의무자(전
              직장)가 지급하지 아니할 경우,
            </p>
            <p>
              세법에서는 별도로 강제수단을 정한 바 없어 결국 체불 임금으로
              전직장으로부터 받아 내야 합니다.
            </p>
            <p className="mt-3">
              보통 원천징수 의무자(전 직장)에서 마지막 급여를 지급할 때 퇴사정산
              결과가 반영된 금액을 지급하게
            </p>
            <p>
              되는데, 환급세액을 지급 받으셨는지 잘 모르겠다면 전 직장에
              문의하시기 바랍니다.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>

      <div className="mt-10 font-bold text-lg">연말정산 소득공제 항목</div>
      <Accordion className="mt-3" collapseAll>
        <Accordion.Panel>
          <Accordion.Title>
            세액감면 - 중소기업 취업자 소득세 감면
          </Accordion.Title>
          <Accordion.Content>
            <p className="mt-5 font-bold">중소기업 취업자 소득세 감면이란,</p>
            <p>
              중소기업의 취업을 활성화 하고, 청년층과 노년층, 장애인과 경력단절
              여성의 취업을 장려하기 위해
              <div className="font-bold">해당 대상자의 소득세를 감면</div>해주는
              제도입니다.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>세액공제 1.자녀세액공제</Accordion.Title>
          <Accordion.Content>
            <p className="mt-8 font-bold">■ 자녀세액공제란,</p>
            <p> 자녀가 있는 근로자에게 혜택을 주는 세액공제 항목입니다. </p>
            <p>
              다음과 같은 총 2가지 유형이 있으며, 2가지는 중복 공제가
              가능합니다.
            </p>
            <p className="font-bold mt-5">A.자녀기본세액공제</p>
            <p className="font-bold mt-2"> B.출생, 입양 세액공제</p>
            <p className="mt-5 font-bold"> A. 자녀기본세액공제</p>
            <p className="mt-3">
              일반세액공제는 기본공제 대상자인 자녀 중 만8세 이상(8세 미만의
              취학아동 미포함)인 수만큼 세액을 공제해주는 항목입니다.
            </p>
            <p className="mt-3">
              기본공제 대상자인 자녀란, 연간소득금액이 100만원을 넘지 않고 20세
              이하인 자녀를 뜻합니다.
            </p>
            <p className="mt-3">
              공제대상에 해당되는 자녀가 1명인 경우 연 15만원, 2명인 경우 연
              30만원, 3명 이상이면 연 30만원,{" "}
            </p>
            <p className="mt-3">
              3명째부터는 1명 30만원을 추가로 공제받습니다.
            </p>
            <p className="mt-3">
              예: 공제대상에 해당하는 자녀가 4명인 경우, 연 30만원 +
              3명째(30만원)+4명째(30만원)
            </p>
            <p className="mt-3 font-bold">총 90만원을 공제 받습니다. </p>
            <p className="mt-6 font-bold">B. 출생, 입양 세액공제</p>
            <p className="mt-3">
              귀속기간인 2023년에 출생신고를 하거나 입양신고한 공제대상 자녀가
              있을 때 한 번 공제됩니다.
            </p>
            <p>
              출산.입양 신고한 공제대상 자녀가 첫째의 경우 30만원, 둘째인 경우
              50만원. 셋재 이상인 경우 70만원을 공제받을 수 있습니다.
            </p>
            <p className="mt-10 font-bold text-lg">■ 자녀세액 FAQ</p>
            <p className="mt-3">
              Q1.맞벌이 부부의 경우 근로자 본인이 자녀에 대해 기본공제를 받고
              배우자가 자녀세액공제를 받을 수 있나요?
            </p>
            <p className="mt-3">
              A1. 자녀세액공제는 기본공제대상자인 자녀의 인원수에 따라
              세액공제를 받는 부분이므로 본인이 자녀에 대해 기본공제를 받을 경우
              자녀세액공제도 본인이 받는 것입니다.
            </p>
            <p className="mt-5">
              Q2. 20세를 초과한 자녀에 대하여도 자녀세액공제가 가능한가요?
            </p>
            <p className="mt-3">
              A2. 20세가 초과되어 기본공제대상자에 해당하지 않는 자녀에 대해서는
              자녀세액공제를 적용할 수가 없 습니다. 단, 자녀가 장애인인 경우
              20세 초과의 경우 자녀세액공제를 적용할 수 있습니다.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>세액공제 2.연금계좌세액공제</Accordion.Title>
          <Accordion.Content>
            <p className="mt-10 font-bold">연금계좌란, </p>
            <p>
              2013년 세법개정에 따라 도입된 연금계좌로, 일정기간 이후 연금으로
              인출할 경우 일반소득세율(15.4%) 보다 낮은 연금소득세율(3.3~5.5%)로
              과세되는 세제혜택 상품입니다.{" "}
            </p>
            <p>
              연금계좌는 크게 A. 연금저축계좌와 B. 퇴직연금계좌로 구분됩니다.{" "}
            </p>
            <p className="mt-5 font-bold text-lg">■ 연금계좌의 종류 </p>
            <p className="font-bold mt-6"> A. 연금저축계좌 </p>
            <p className="mt-2">
              어떤 금융기관에서 가입하는지에 따라 연금저축신탁(은행),
              연금저축펀드(증권사), 연금저축보험(생 명, 손해보험사)로 구분하며,
              2020년부터 ISA(개인종합자산관리) 만기계좌를 연금계좌로 전환하는
              경우도 추가되었습니다.
            </p>
            <p className="mt-2 font-bold">모두 연말정산 공제대상입니다. </p>
            <p className="mt-5 font-bold"> B. 퇴직연금계좌 </p>
            <p className="mt-2">
              회사에서 납입해 주는 퇴직연금은 공제대상이 아닙니다. 아래의 두
              항목만 연말정산 대상입니다.
            </p>
            <p className="mt-4 font-bold">
              1. DC형 퇴직연금에 근로자 개인이 추가납부한 금액
            </p>
            <p className="mt-4 font-bold">
              {" "}
              2. 개인형 퇴직연금(IRP)에 납부한 금액{" "}
            </p>
            <p className="mt-8 font-bold">■ 공제한도 </p>
            <p className="mt-5">
              연금계좌와 퇴직연금의 납입금액을 합하여 연 700만원+ISA계좌 만기 시
              연금계좌 추가납입액의 10% (한도 연 300만원)
            </p>
            <p className="mt-3">
              {" "}
              - 이 중 연금계좌에 납입한 금액은 연 400만원 한도{" "}
            </p>
            <p className="mt-3">
              ex: 연금계좌에 연500만원, 퇴직연금에 연600만원, ISA만기계좌에서
              연금계좌 추가납입액 400만원 불입한 경우x 연금계좌에 연500만원,
              퇴직연금에 연600만원 불입한 경우 연금계좌는 연400만원이 공제금액
              대상이 되고, 총 한도 700만원에서 남은 금액 300만원은 퇴직연금에서
              공제금액 대상이며, 추가로 ISA만기계좌에서 전환된 추가 납입액 중
              40만원까지 공제대상 금액이 됩니다.(총급여액 7천만원 소득자 가정)
            </p>
            <p className="mt-8 font-bold text-lg">■ 세액공제율</p>
            <p>
              - 근로소득만 있는 경우 총급여액 5,500만원(또는 종합소득금액
              4천만원) 초과자 : 12%
            </p>
            <p>
              - 근로소득만 있는 경우 총급여액 5,500만원(또는 종합소득금액
              4천만원) 이하자 : 15%
            </p>
            <p className="mt-6 font-bold text-lg">■ 제출서류</p>
            <p>연금납입확인서 : 해당 금융회사에서 발급 </p>
            <p className="mt-8 font-bold text-lg">■ 연금계좌 세액공제 FAQ</p>
            <p className="mt-3">
              Q1. 배우자나 기본공제대상인 부양가족명의의 연금계좌에 납입한
              금액에 대해 공제가 가능한가요?
            </p>
            <p className="mt-2">
              A1. 연금계좌세액공제는 본인 명의인 경우에만 공제가 가능합니다.
            </p>
            <p className="mt-5">
              Q2. 연금저축 중도 해지시 해지연도 불입분에 대해 세액공제를 받을 수
              있나요?
            </p>
            <p className="mt-2">
              A2. 연금저출을 중도해지 하는 경우, 해지한 연도의 저출불입액은
              연금계좌세액공제를 받을 수 없습니다.
            </p>
            <p></p>
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title>세액공제 3.보험료</Accordion.Title>
          <Accordion.Content>
            <p className="mt-6 font-bold text-lg">보험료 세액공제란, </p>
            <p className="mt-3">
              근로소득자가 지출한 경비 중 기본공제대상자(소득요건, 나이요건
              제한있음) 를 위해 지출한 일반보장성보험료와
              장애인전용보장성보험료에 대하여 세액공제하는 것을 말합니다.{" "}
            </p>
            <p className="mt-3 font-bold">■ 보장성보험 종류 </p>
            <p className="mt-5 font-bold"> A.일반보장성 보험 </p>
            <p className="mt-3">
              보장성보험이란, 만기에 환급되는 금액이 납입한보험료를 추과하지
              않는 보험.
            </p>
            <p> 생명보험, 상해보험, 자동차보험, 기타손해보험이 해당합니다. </p>
            <p>
              보험계약이나 보험료납입 영수증에 보험료공제대상으로 표시되어
              있습니다.
            </p>
            <p className="mt-5 font-bold"> B.장애인전용보장성보험이란</p>
            <p className="mt-3">
              보장성보험이면서 기본공제대상자 중 장애인을 피보험자 또는 수익자로
              하는 보험.
            </p>
            <p>만기에 환급되는 금액이 납입보험료를 초과하지 아니하며, </p>
            <p>
              보험계약이나 보험료납입 영수증에 장애인전용보험으로 표시되어
              있습니다.
            </p>
            <p className="mt-3 font-bold">■ 공제한도X공제율</p>
            <p className="mt-2">
              일반보장성보험 : 보험료 (한도 연 100만원) X 12%
            </p>
            <p> 장애인전용보장성보험 : 보험료 (한도 연 100만원) x 15%</p>
            <p className="mt-5 font-bold">
              ■ 계약자/ 피보험자에 따른 공제 여부
            </p>
            <img src={img6} className="mt-4" />
            <p className="mt-5">■ 공제되지 않는 경우</p>
            <p className="mt-2">
              - 미지급 보험료 : 미납보험료는 납부한 연도에 공제합니다.{" "}
            </p>
            <p> - 외국에 납부한 보험료 </p>
            <p>
              - 피보험자가 태아인 보험 : 출생 전인 경우, 기본공제대상자에
              해당되지 않습니다.
            </p>
            <p> - 퇴직한 후에 지출한 보험료는 공제 안됨</p>
            <p className="mt-4 font-bold">■ 보험료 세액공제 </p>
            <p className="mt-2">
              Q1. 맞벌이 부부인 경우 본인이 계약자이고 배우자가 피보험자인 경우
              보험료 공제는 어떻게 하나요?
            </p>
            <p className="mt-2">
              A1. 본인 및 배우자가 모두 공제를 받을 수 없습니다.
            </p>
            <p>
              기본공제대상자를 피보험자로 하는 보험의 보험료를 지출한 경우에
              소득공제를 적용 받을 수 있으므로 맞벌이 부부인 경우에는 본인과
              배우자 모두 소득이 있어 서로 기본공제대상자에 해당하지 않아
              공제받을 수 없습니다.
            </p>
            <p>
              본인이 계약자이면서 피보험자인 경우에만 근로자 본인이 공제받을 수
              있습니다.
            </p>
            <p className="mt-5">
              Q2. 소득이 없는 아내가 기본공제대상자인 자녀를 피보험자로 가입하고
              해당 보험료를 본인(남편)이 지급 한 경우 보험료 공제를 받을 수
              있는지요?
            </p>
            <p className="mt-3">
              A2. 기본공제대상자를 피보험자로 하고 소득이 없는 가족명의로 계약한
              보험으로서 근로소득자가 당해연 도에 실제로 납입한 것은 보험료
              공제를 적용받을 수 있습니다.
            </p>
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title>세액공제 4.의료비</Accordion.Title>
          <Accordion.Content>
            <p className="text-lg font-bold mt-3">의료비세액공제란, </p>
            <p className="mt-8">
              근로소득자가 지출한 경비 중 기본공제 대상자(소득금액 및 연령제한
              없음) 를 위하여 지급한 의료비에 대하여 세액공제하는 것을 말합니다.{" "}
            </p>
            <p className="mt-3">
              *소득금액 및 연령의 제한을 받지 않는다는 의미
            </p>
            <p className="mt-3">
              생계를 같이하는 부양가족이 기본공제 요건 중 연령이나 소득금액
              요건이 충족되지 않아도 근로자가 부양가족을 위해 지출한 의료비
              공제가 가능하다는 의미입니다.{" "}
            </p>
            <p className="mt-5 font-bold text-lg">■ 공제 대상 항목, 공제율</p>
            <p className="mt-2"> A. 난임시술 의료비 X 30%</p>
            <p className="mt-2"> B. 미숙아 및 선천성이상아 의료비 X 20%</p>
            <p className="mt-2">
              C. 본인ㆍ65세 이상자 ㆍ장애인ㆍ건강보험산정특례자 X 15%
            </p>
            <p className="mt-2"> D. 위 2가지 항목 외의 의료비 X 15% </p>
            <p className="mt-5">■ 의료비 세액공제 한도</p>
            <p className="mt-4">
              - 의료비 세액공제는 총급여액의 3%를 초과한 금액에 대해서
              공제가능합니다.
            </p>
            <p className="mt-2">- 한도는 연700만원.</p>
            <p className="mt-2">
              다만, ①본인 의료비와 부양가족 중 ②장애인이나 ③65세 고령자
              ④건강보험산정특례자 ⑤ 난임시술비에 지출한 의료비는 한도없이 공제를
              받을 수 있습니다.
            </p>
            <p className="mt-4 font-bold">■ 공제대상 의료비 항목 </p>
            <p className="mt-4">
              - 진찰, 진료, 질병예방을 위하여 의료법 제3조에 따른 의료기관에
              지급하는 비용
            </p>
            <p className="mt-2">
              {" "}
              - 치료, 요양을 위하여 지급한 의약품 비용(한약 포함)
            </p>
            <p className="mt-2">
              - 장애인 보장구 및 의사 등의 처방에 따라 의료기기를 직접
              구입하거나 임차하기 위해 지출한 비용
            </p>
            <p className="mt-2">
              - 시력보정용 안경ㆍ콘택트렌즈 구입비용중 기본공제대상자(소득금액과
              연령불문) 1명당 연50만원
            </p>
            <p className="mt-2">- 보청기 구입을 위하여 지출한 비용</p>
            <p className="mt-2">- [노인장기요양법]</p>
            <p className="mt-2">
              제 40조 제1항에 따라 실제 지출한 본인일부부담금{" "}
            </p>
            <p className="mt-2"> - [노인장기요양법]</p>
            <p className="mt-2">
              제 40조 제2항 제3호에 따라 장기요양급여에 대한 비용으로서 실제
              지출한 본인부담금
            </p>
            <p className="mt-2">
              - 해당 과세기간 총급여액이 7천만원 이하인 근로자가 [모자보건법]
              제2조 제10호에 따른 산후조리원에 산후조리 및 요양의 대가로
              지급하는 비용으로서 출산 1회당 200만원 이내의 금액
            </p>
            <p className="mt-5 font-bold">
              ■ 공제대상에서 제외되는 대표적인 항목
            </p>
            <p className="mt-2">- 건강기능식품 구입비용 </p>
            <p className="mt-2">
              - 직접 지출한 것이 아닌 사용자로 부터 지급받아 지출된
              요양비ㆍ요양급여
            </p>
            <p className="mt-2">
              - 실제로 부양하지 않는 직계존속이나 생계를 같이하지 않는
              형제자매의 의료비
            </p>
            <p className="mt-2">
              - 보험회사로부터 수령한 보험금으로 지급한 의료비
            </p>
            <p className="mt-2"> - 간병인에게 지급하는 비용 </p>
            <p className="mt-2"> - 외국에 소재한 의료기관에 지출한 의료비</p>
            <p className="mt-2">
              - 사내근로복지기금으로부터 지급받은 의료비는 공제대상 의료비에
              포함되지 않는다.
            </p>
            <p className="mt-5 font-bold"> ■ 맞벌이부부의 의료비 세액공제</p>
            <p className="mt-3">
              맞벌이 부부는, 의료비는 자녀에 대한 기본공제를 받은 자가 지출한
              것만 공제 가능합니다.
            </p>
            <p>
              맞벌이하는 배우자를 위해 근로자가 의료비를 지출한 경우, 의료비
              세액공제 적용 가능합니다.
            </p>
            <p className="mt-5 font-bold">■ 의료비 세액공제 FAQ</p>
            <p className="mt-2">
              Q1. 맞벌이 부부는 배우자의 기본공제 대상자인 자녀의 의료비를
              근로자 본인이 세액공제 받을 수 있나요?
            </p>
            <p className="mt-2">
              A1. 다른 거주자의 기본공제를 적용 받는 부양가족을 위해 지출한
              의료비는 세액공제대상이 아니므로 자녀의 기본공제를 받는 배우자가
              세액공제를 받을 수 있습니다.
            </p>
            <p className="mt-4">
              Q2. 국세청에서 발행하는 근로소득자 소득/세액공제내역상 금액이 실제
              지출한 의료비 금액보다 훨씬 적 은 금액인데 세액공제를 받으려면
              어떻게 해야 되나요?
            </p>
            <p className="mt-2">
              A2. 의료기관 등이 국세청에 자료를 제출하지 않았거나 본인이 법에
              따라 자료가 국세청에 제출되는 것을 거부하는 경우 등의 사유로
              국세청연말정산간소화 서비스에서 발급한 내역과 실제 지출한 의료비
              금액 에 차이가 있을 수 있습니다.
            </p>
            <p className="mt-4">
              이와 같이 연말정산간소화서비스 홈페이지에 있는 의료비 금액이
              부족하 거나 누락된 경우 의료비 신고센터에 해당 내용을 신고할 수
              있습니다.
            </p>
            <p className="mt-2">
              신고한 내용은 세액공제를 받 을 수 있도록 홈페이지에 반영됩니다.
            </p>
            <p className="mt-2">
              - 신고할 내용: 환자 인적사항, 요양기관의 사업자번호(상호),
              지출시기, 실제 지출금액(총액)
            </p>
            <p className="mt-2">
              - 신고할 대상: 의료법상 의료기관, 약사법상 약국에 지출한 의료비
            </p>
            <p className="mt-2">
              (안경·보청기·장애인보장구·의료기기 구입비용 등은 신고 대상이 아님){" "}
            </p>
            <p className="mt-2">
              다만, 허위로 신고하여 부당하게 세액공제를 받는 경우 허위증거자료의
              작성 및 제출에 해당하여 사후에 세금(가산세 포함)이 추징될 수
              있으니 반드시 정확한 내용을 입력해야 합니다(사후에 국세청에서 해당
              병의원, 약국을 통해 신고내용의 사실 여부를 확인합니다.).
            </p>
            <p className="mt-2">
              신고센터에 신고하지 않거나 의료비 이외의 소득공제 항목의 자료가
              부족한 경우에는 해당 병의원 또는 약국 등에서 정확한 영수증을
              발급받아 제출해 주시면 됩니다.
            </p>
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title>세액공제 5.교육비</Accordion.Title>
          <Accordion.Content>
            <p className="mt-8 font-bold text-xl">교육비 세액공제란, </p>
            <p className="mt-4">
              근로소득자가 지출한 경비 중 근로자 본인과 기본공제 대상자(소득금액
              제한있음, 나이제한 없음, 직계존속 제외, 장애인의 기능향상과
              행동발달을 위한 발달재활서비스를 제공하는 기관에 지출한 교육비에
              대해서는 소득은 제한 없으나 나이는 과세기간 종료일 현재 18세
              미만인 사람만 해당한다.) 를 위하여 교육기관에 지급한 금액에 대하여
              세액공제하는 것을 말합니다.
            </p>
            <p className="font-bold mt-8">■ 공제대상과 공제액 </p>
            <img src={img7} />
            <p className="mt-8 font-bold">■ 학생 신분별 공제 대상 교육비</p>
            <img src={img8} />
            <p className="mt-8 font-bold">■ 공제되지 않는 경우</p>
            <p className="mt-2">- 유치원, 어린이집 현장학습비</p>
            <p className="mt-2">
              - 근로복지기본법에 의한 사내근로복지기금으로부터 받은 장학금 등
              각종 장학금
            </p>
            <p className="mt-2">
              - 직계비속 등이 학자금 대출을 받아 지급하는 교육비
            </p>
            <p className="mt-2">
              - 수업료와는 별도로 정규수업시간 인외 실기지도에 따른 외부강사의
              실기지도비
            </p>
            <p className="mt-2">
              - 장애인이 아닌 직계존속을 위하여 지출한 교육비
            </p>
            <p className="mt-2"> - 학교버스이용료, 교육자재값, 기숙사비</p>
            <p className="mt-2"> - 학습지를 이용하고 지출한 교육비 </p>
            <p className="mt-2"> - 입사 전 또는 퇴사 후 지출한 교육비 </p>
            <p>
              - 근로자 본인의 학자금으로 법정 요건에 해당하는 입학금, 수업료,
              수강료 기타 공납금(비과세 근로소득)
            </p>
            <p className="mt-6 font-bold">■ 자비스 제출서류</p>
            <p className="mt-2"> - 연말정산 간소화 PDF 자료</p>
            <p className="mt-2"> - 도서ㆍ교복 구입영수증</p>
            <p className="mt-2"> - 학원 , 체육시설 교육비 납입증명서 </p>
            <img src={img9} className="mt-2" />
            <p className="mt-8 font-bold">■ 교육비 세액공제 FAQ</p>
            <p className="mt-2">
              Q1. 교지대, 학생회비, 의료공제비, 특별활동비, 현장실습비, 기숙사비
              등도 교육비 세액공제를 받을 수 있나요?
            </p>
            <p className="mt-2">
              A1. 교육비 세액공제 대상이 아닙니다. 단, 어린이집, 학원 및
              체육시설, 유치원, 학교에서 실시하는 특별활 동비는 교육비
              세액공제가 가능합니다. 또한, 초,중,고교생 체험학습비(1인당 연
              30만원 한도) 교육비 공제가능합니다.
            </p>
            <p className="mt-5">
              Q2. 맞벌이 부부의 경우 배우자나 자녀에 대한 기본공제를 적용 받고
              본인이 자녀의 교육비를 세액공제 받을 수 있나요?
            </p>
            <p className="mt-2">
              A2. 다른 거주자의 기본공제를 적용 받는 부양가족을 위해 지출한
              교육비는 세액공제대상이 아니므로 자 녀의 기본공제를 받는 배우자가
              세액공제 받을 수 있는 것입니다.
            </p>
            <p className="mt-5">
              Q3. 초등학생이 방과후 초등돌봄교실에 다니면서 지급하는 수강료(식대
              포함)가 교육비 세액공제 대상에 해당하나요?
            </p>
            <p className="mt-2">
              A3. 초등돌봄교실 수강료는 방과후학교 수업료에 해당하므로 교육비
              세액공제를 적용 받을 수 있습니다.
            </p>
            <p className="mt-5">
              Q4. 2022년 7월에 입사하여 근로소득금액이 연간 100만원 이상인
              자녀에 대한 대학등록금을 아버지가 2022년 2월에 납부하였는데
              교육비공제를 받을 수 있나요?
            </p>
            <p className="mt-2">
              A4. 부양가족이 취업의 사유로 연도 중에 기본공제대상자에 해당하지
              않게 되는 경우에도 당해 사유가 발 생한 날까지 지급한 금액은
              세액공제가 가능합니다.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default FindOut;

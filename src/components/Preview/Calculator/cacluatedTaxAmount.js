import { useSelector } from "react-redux";
const user = useSelector((state) => state.user13th);

//산출 세액 계산하기
export const calculateTaxAmount = () => {
  const taxBase = user.earnedIncome;
  let result = 0;

  if (taxBase <= 14000000) {
    result *= 0.6;
  } else if (taxBase > 14000000 && taxBase <= 50000000) {
    result = (result - 14000000) * 0.15 + 840000;
  } else if (taxBase > 50000000 && taxBase <= 88000000) {
    result = (result - 50000000) * 0.24 + 6240000;
  } else if (taxBase > 88000000 && taxBase <= 150000000) {
    result = (result - 88000000) * 0.35 + 15360000;
  } else if (taxBase > 150000000 && taxBase <= 300000000) {
    result = (result - 150000000) * 0.38 + 37060000;
  } else if (taxBase > 300000000 && taxBase <= 500000000) {
    result = (result - 300000000) * 0.4 + 94060000;
  } else if (taxBase > 500000000 && taxBase <= 1000000000) {
    result = (result - 500000000) * 0.43 + 174060000;
  } else if (taxBase > 1000000000) {
    result = (result - 1000000000) * 0.45 + 384060000;
  }

  return result;
};

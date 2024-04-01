// 생일 -> 만나이
export function getAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);

  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
}

// 총급여를 기반으로 근로소득공제액 계산
export function getEITC(salary) {
  const unit = 10000;
  if (salary <= 500 * unit) return salary * 0.7;
  else if (salary <= 1500 * unit)
    return 350 * unit + (salary - 500 * unit) * 0.4;
  else if (salary <= 4500 * unit)
    return 750 * unit + (salary - 1500 * unit) * 0.15;
  else if (salary <= 10000 * unit)
    return 1200 * unit + (salary - 4500 * unit) * 0.05;
  else return 1475 * unit + (salary - 10000 * unit) * 0.02;
}

export function getTax(salary) {
  const simpleTaxRate = [
    [1200, 0.06],
    [4600, 0.15],
    [8800, 0.24],
    [15000, 0.35],
    [30000, 0.38],
    [50000, 0.4],
    [0, 0.42],
  ];

  const taxRate = [
    [1400, 0, 0],
    [5000, 84, 0.06],
    [8800, 624, 0.24],
    [15000, 1536, 0.35],
    [30000, 3706, 0.38],
    [50000, 9406, 0.4],
    [100000, 17406, 0.42],
    [0, 38406, 0.45],
  ];

  let taxToPaid;
  let taxRow;

  for (let row of taxRate) {
    if (salary <= row[0] * 10000 || row[0] === 0) {
      taxToPaid = row[1] * 10000 + salary * row[2];
      taxRow = row;
      break;
    }
  }

  let taxPaid;
  let simpleTaxRow;
  for (let row of simpleTaxRate) {
    if (salary <= row[0] * 10000 || row[0] === 0) {
      taxPaid = salary * row[1];
      simpleTaxRow = row;
      break;
    }
  }

  return { taxPaid, taxToPaid };
}

// json 모든 값 더해주기
export function getTotalValue(json) {
  let totalSum = 0;
  for (const key in json) {
    totalSum += json[key];
  }

  return totalSum;
}

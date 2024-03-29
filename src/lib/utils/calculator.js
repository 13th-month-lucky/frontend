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

function checkPolidrom(n) {
  const stringNumber = String(n);
  const reverse = stringNumber.split('').reverse().join('');
  if (n === Number(reverse)) {
    return true
  }
  return false
}

const i = 999;
const a = 999;

function checkMaxPolidrom(a, i) {
  if (a < 200) return

  for (i = 999; i >= 100; i -= 1) {
    let index1 = a;
    for (index1; index1 > a - 100; index1 -= 1) {
      if ((i * index1) % 10 === 0) continue
      if (checkPolidrom(i * index1)) {
        return i * index1
      }
    }
  }
  if (arr.length === 0) {
    return checkMaxPolidrom(a - 100, i)
  }
}

console.log(checkMaxPolidrom(a))

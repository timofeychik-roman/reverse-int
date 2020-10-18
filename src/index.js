module.exports = function reverse (n) {
    if (n < 0)
        n *= -1;
  let num = String(n);
  num = num.split("").reverse().join("");

  num = Number(num);
  return num;
}

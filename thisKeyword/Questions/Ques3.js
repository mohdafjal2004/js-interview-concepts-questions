//* Q-7: Implemen this below commented code
// const result = calc.add(10).multiply(5).substract(30).add(10);
// console.log(result.total);

const calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  multiply(b) {
    this.total *= b;
    return this;
  },
  substract(c) {
    this.total -= c;
    return this;
  },
};

const result = calc.add(10).multiply(5).substract(30).add(10);
console.log(result.total);

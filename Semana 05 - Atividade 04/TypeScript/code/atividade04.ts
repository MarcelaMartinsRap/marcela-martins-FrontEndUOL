
function manipulateNumber(num: number): number;
function manipulateNumber(nums: number[]): number[];
function manipulateNumber(i: number | number[]): number | number[] {
  if (typeof i === 'number') {
    return i * i;
  } else {
    return i.map(num => num * num);
  }
}

console.log(manipulateNumber(8));
console.log(manipulateNumber([10, 33, 44])); 


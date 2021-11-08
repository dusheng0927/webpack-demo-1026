let num1 = 5
console.log(num1 >> 2) // 1

// 结论：
// 负数按补码形式参加运算， 正数的不变直接参与运算
// 补码 = 反码 + 1
// 反码： 符号位不变，正数不变， 负数取反

// 按位非 运算 -（x+1）
let num2 = -3 // 1表示负数，原码：10011， 反码：11100， 补码：11101 （反码+1）
console.log(~num2) // 结果为 2


let num3 = 5 // 原码00101
console.log(~5) // 取反得 11010， 结果是负数， 反码：10101， +1 得到补码：10110， 即 -6
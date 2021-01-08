
let num = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i <= num.length; i++) {
  let add = num[i]
  for (let j = 0; j <= num.length - (i + 2); j ++) {
    add += ' 0'
  }
  console.log(add)
}


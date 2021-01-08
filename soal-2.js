let arr = [
  1,
  2,
  33,
  44,
  55,
  33,
  44,
  22,
  44,
  33,
  2,
  77,
  66,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  89,
  3,
  3,
  8,
  9,
  75,
  4,
  3,
  2,
  2,
  1,
  3,
];

// Bagi menjadi 3 Kelompok
let a = arr.slice(0, 11);
let b = arr.slice(11, 21);
let c = arr.slice(21, 33);

// Mengurutkan data dari besar ke kecil

let sortA = a.sort((x, y) => y - x);
console.log("sorting a =", sortA);

let sortB = b.sort((x, y) => y - x);
console.log("Sorting b", sortB);

let sortC = c.sort((x, y) => y - x);
console.log("Sorting c", sortC);

// Mencari total tiap kelompok data
let totalA = 0;
for (let i = 0; i < a.length; i++) {
  totalA += a[i];
}
console.log("Total A =", totalA);

let totalB = 0;
for (let i = 0; i < b.length; i++) {
  totalB += b[i];
}
console.log("Total B =", totalB);

let totalC = 0;
for (let i = 0; i < c.length; i++) {
  totalC += c[i];
}
console.log("Total C =", totalC);

// Mencari rata-rata setiap kelompok data
let rataA = totalA / a.length;
console.log("Hasil rata-rata A =", rataA);
let rataB = totalB / b.length;
console.log("Hasil rata-rata B =", rataB);
let rataC = totalC / c.length;
console.log("Hasil rata-rata C =", rataC);

// Mencari Nilai Maksimum
let nilaimaxA = Math.max(...a);
console.log("Nilai max a =", nilaimaxA);

let nilaimaxB = Math.max(...b);
console.log("Nilai max b =", nilaimaxB);

let nilaimaxC = Math.max(...c);
console.log("Nilai max c =", nilaimaxC);

// Mencari Nilai Minumum
let nilaiminA = Math.min(...a);
console.log("Nilai min a =", nilaiminA);

let nilaiminB = Math.min(...b);
console.log("Nilai min b =", nilaiminB);

let nilaiminC = Math.min(...c);
console.log("Nilai min c =", nilaiminC);

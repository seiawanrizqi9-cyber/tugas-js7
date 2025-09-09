// soal 1
let namaTeman = ["Najih", "Thoriq", "Harits", "Irgi", "Yusuf"];
console.log(namaTeman[0])
console.log(namaTeman[4])
console.log(namaTeman.length);

// soal 2
let hobi = [];
hobi.push("Berenang", "Membaca", "Menggambar");
console.log(hobi);

// soal 3
let mataPelajaran = ["Matematika", "IPA", "Fisika", "Kimia"];
const hapus = mataPelajaran.pop();
console.log(hapus);
console.log(mataPelajaran);

// soal 4
let angka = [1, 2, 3, 4, 5];
for(let i=0; i < angka.length; i++) {
    console.log(`Angka ke-`+ (i+1) + ': ' + angka[i])
}

// soal 5
let namaKota = ["Jakarta", "Madura", "Bandung", "kalimantan", "Aceh"];
console.log(namaKota.indexOf("Aceh"))
console.log(namaKota.indexOf("Jogjakarta"))

// 6
let namaFilm = ["Marvel", "Deadpool", "Fast & Forius", "Mission Impossible"]
console.log(`Sebelum perubahan: ${namaFilm}`)
namaFilm[0] = "John Wick";
console.log(`Setelah perubahan: ${namaFilm}`)

// 7
let olahraga = ["Berenang", "Bola Basket", "Bola Sepak"]
olahraga.unshift("Badminton");
console.log(olahraga);

// 8
let bulan = ["Januari", "Februari", "Maret", "April", "Mei"];
const hilang = bulan.shift();
console.log(`Bulang yang hilang adalah: ${hilang}`);
console.log(bulan);

// 9
let makananRingan = ["Nastar", "Snack", "Mie"];
let MakananBerat = ["Roti", "Bakso", "Sate"];
let gabung = makananRingan.concat(MakananBerat);
console.log(gabung);

// 10
let huruf = ["a", "b", "c", "d", "e"];
huruf.reverse();
console.log(huruf)

// 11
let namaSiswa = ["Rahmat", "Fikri", "Hafiz", "Irfan", "Yusuf"];
console.log(`Saat sebelum diurutkan: ${namaSiswa}`)
namaSiswa.sort()
console.log(`Setelah diurutkan: ${namaSiswa}`)

// 12 
let mapel = ["Sastra", "KKN", "Agama", "Bahasa indonesia"];
console.log(mapel.includes("KKN")); 
console.log(mapel.includes("Biologi")); 

// 13
let hari = ["senin", "Selasa", "rabu", "kamis", "jumat", "sabtu", "minggu"];
let potongan = hari.slice(0, 5);
console.log(potongan); 

// 14
let namaNegara = ["Indonesia", "Malaysia", "Singapura", "Thailand", "Myanmar"];
namaNegara.forEach(function(nama, index) {
    console.log(`negara ke-${index+1}: ${nama}`);
});

// 15
let angkaKuadrat = [1, 2, 3, 4, 5];
let kuadrat = angkaKuadrat.map(function(angka) {
    return angka * angka;
});
console.log(kuadrat);

// 16
let nilaiUjian = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let lulus = nilaiUjian.filter(function(nilai) {
    return nilai >= 70;
});
console.log(lulus);

// 17 
let barang = [
    { nama: "Jaket", harga: 185000},
    { nama: "Buku", harga: 112000},
    { nama: "Laptop", harga: 6000000},
    { nama: "Koko", harga: 135000},
    { nama: "Sepatu", harga: 142000},
]
let hargaTotal = barang.reduce(function(sum, item) {
    return sum + item.harga;
}, 0);
console.log(`Jadi harga total prmbrlian barang adalah: ${hargaTotal}`); 

// 18 
let namaOrang = ["Rahmat", "Fikri", "Hafiz", "Irfan", "Yusuf"];
let cari = namaOrang.find(function(nama) {
    return nama.startsWith("H");
});
console.log(cari);

// 19 
let tinggiBadan = [
    { nama: "Bagus", tinggi: 150 },
    { nama: "Sahal", tinggi: 165 },
    { nama: "Ranu", tinggi: 175 },
];
let adaTinggi = tinggiBadan.some(function(tinggi) {
    return tinggi.tinggi > 170;
});

let semuaTinngi = tinggiBadan.every(function(tinggi) {
    return tinggi.tinggi > 150;
});
console.log(`Apakah ada yang memilki tinggi lebih dari 170 cm: ${adaTinggi}`);
console.log(`Apakah Semua orang memiliki tinggi lebih dari 150 cm: ${semuaTinngi}`);

// 20 
let nomer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let hasil = nomer.filter(function(nomer) {
    return nomer % 2 == 1;
}).map(function(nomer) {
    return nomer * 2;
}).reduce(function(sum, item) {
    return sum + item;
}, 0);
console.log(hasil);

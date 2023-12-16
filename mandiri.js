var namaAnjing1 ="Dede"
var namaAnjing1 ="Djumi" //var can be reassigned and redeclared
console.log (namaAnjing1);


let namaSaya="Mariana";
namaSaya="Djum"; //Let can be reassigned but can't be redeclared 
//tapi let bs dideclared ulang dlm blockscope krn sudah dianggap variable berbeda
console.log ("nama saya " +namaSaya);

console.log (`nama anjing saya ${namaAnjing1} dan nama saya ${namaSaya}`)
//menggabungkan dua variable dengan menggunakan backtick dan deklarasi variable $

const jenisKelamin = "wanita"
console.log (jenisKelamin, typeof (jenisKelamin))
//const digunakan untuk menampung data yg tidak akan kt ubah
//type of untuk mengecek jenis variable apakah string, number or booelan

//contoh object
let dataDede ={
    tinggi: "35 cm",
    berat: "5.6 kg",
    warna: "putih"
    // properti : value dan memakai koma untuk melanjutkan ke properti selanjutnya
}
console.log (dataDede); //memanggil semua isi dlm object dataDede
console.log ("Memanggil warna bulu dede: " +dataDede.warna); //memanggil properti tertentu dlm object dataDede

//contoh array 
let contohArray=["Djumi","Dede","Bobby"];
contohArray.push("Jacky");
console.log (contohArray); //menambahkan array index 3 = Jacky
contohArray.push("Micky","Berry","WowWow"); //menambahkan lebih dari 1 array
console.log (contohArray);
//kl untuk hapus --> pop ()
//kl untuk tambah di dpn --> shift()
//kl untuk hapus di dpn --> unshift()



console.log("hello world");
//ini contoh komentar
/* contoh komentar tapi bisa
bbrp baris*/

var nama="mariana";
var alamat="the mansion";
console.log (nama);
console.log (alamat);

console.log (nama+ " " + alamat);
// untuk gabungin 2 var dan di kasih spasi..kl gk kegabung smua tmbh spasi

console.log (`${nama} ${alamat}`);
// cara ke dua gabungin 2 var dgn backtick `${var} (space) ${alamat}`

console.log ("nama saya " + nama + " " + "alamat saya di " + alamat);
//tambahin ketikan langsung string + variabel dgn metode +

console.log (`nama saya ${nama} alamat saya ${alamat}`);
//ataupun dgn backtick lebih mudah 'string ${variabel} string ${variabel}

// belajar variabel Var & Let
var namaSaya ="djumi";
var namaSaya ="dede";
/*var namaSaya akan menjadi dede krn sudah di deklarasi ulang
jd tipe var itu bs di deklarasi ulang dan dpt di reassigned */
console.log (namaSaya);

let pekerjaan = "pengangguran";
//Let pekerjaan ="tidak jelas"; ini akan error krn kt declare ulang variabel pekerjaan
//variabel Let tidak bisa di declare ulang tp bs di reassigned

pekerjaan = "tidak jelas" //ini bs jalan krn ini kt reassigned valuenya
console.log (pekerjaan);

const statusSaya = "single";
//statusSaya ="married"; ini akan error krn variabel const tidak bs di redeclare ataupun di reassigned
console.log (statusSaya);

//contoh hoisting kt declare variabel tp blm diisi value
var jenisKelamin;
let jensiKelamin1;

console.log ("variabel var sebelum diisi " +jenisKelamin); //akan undefined
console.log ("variabel let sebelum diisi " +jensiKelamin1); //akan undefined

//sekarang baru kt isi data
jenisKelamin = "cewek";
jensiKelamin1 = "cowok";

console.log ("variabel var stlh diisi " +jenisKelamin);
console.log ("variabel let stlh diisi " +jensiKelamin1);

//deklarasi bbrp variabel sekaligus
let namaDog1 ="djumi" , namaDog2 ="Day2";

//contoh pemakaian IF dan variabel dlm scope
let diskon =500, gratis ="kosong";
if(diskon<600){
    let gratis = "minuman"; //karena variabel gratis kt deklarasi ulang dlm scope maka tidak ada error
    //dan ini akan menjadi variabel yg berdiri sendiri dan tidak mengubah nilai awal variabel gratis
    //yg sudah kt deklarasi di luar scope dgn value "kosong"
    console.log (gratis);
    }
else {
    gratis ="voucher"
    console.log (gratis);
}
console.log (gratis); //akan tetap bernilai "kosong" sesuai deklarasi awal krn di dlm scope
//kt ada deklarasi ulang variabel let gratis, shg variable let gratis diluar scope tidak berubah.
//tetapi kl variable let ddlm scope if tidak kt deklarasi ulang maka value ini akan ikut berubah menjadi
//"minuman" sesuai nilai yg diubah krn kondisi if terpenuhi


/* object deklarasi sekaligus semua, jadi pas mau ditampilin tinggal console.log (dataDiri)
dan di deklarasi dgn bentuk properti */
let dataDiri ={
    nama: "Dede", //nama itu properti dan value dede
    alamat: "rumah mewah", //alamat itu properti dan value rumah mewah
    hobi: "tidur" //hobi itu properti dan value tidur
}
console.log ("contoh object " +dataDiri);

//bisa juga kalau cuma mau ambil 1 data aja dlm object dgn memanggil properti aja
console.log ("ambil data hobi aja dr object " +dataDiri.hobi);


/* array deklarasi dgn []
menyimpan data jenisnya sama misal kt simpan data merek mobil
jadi kt usah deklarasi 1 persatu merek mobil dlm variable*/
let merkMobil =["toyota","honda","nissan"]
// jadi hampir sama sperti object ini bs kt panggil tp dlm bentuk indeks yg dimulai dr 0,1,2...

console.log (merkMobil);
//memanggil array no 1 atau honda
console.log (merkMobil[1]);

//untuk merubah merkMobil di array 0
merkMobil[0]= "Ford" //mengubah toyota menjadi ford
console.log ("ubah array nol " +merkMobil);

//untuk menambah 1 merkMobil dgn fungsi push
merkMobil.push("VOlvo");
console.log (merkMobil);

//untuk menambah lbh dari 1 merkMobil dgn fungsi push ..(PERLU LIAT ULANG RECORDING)!
//merkMobil.push(..."mercy", "BMW");
//console.log (merkMobil);

//manipulasi string
let data = "nama saya mariana";
let hasil = data.replace("mariana", "dede") //ubah string mariana di replace dgn dede
console.log (hasil);

//fungsi substring untuk tampilin string dr indeks tertentu
let data2 ="Produk Rinso"
let hasil2=data.substring(7,10); //tampilin string 7-10 saja yaitu RIN
console.log (hasil2);

//tolowercase untuk merubah dr huruf capital jd huruf kecil
let data3="NAMA SAYA DJUMI";
let hasil3=data3.toLocaleLowerCase();
console.log (hasil3);
//masih bnyk lg fungsi manipulasi string lainnya misal kt mau ubah string jd interger ataupun sblknya
//perbandingan
let a=1, b=2, c="1";
//let hasil = a=b; //ini brrti nilai a itu diisi dgn b jd hasilnya 2
//let hasil = a==c //hasilnya true krn == tidak diecek sampai ke tipe data..jd anggap 1 number = 1 string
//let hasil = a===c //hasilnya akan false krn === dicek sampai ke tipe data

//aritmatika
//let hasil = a+c; //akan menghasilkan 11 krn 1 num n 1 string jdnya digabung
//let hasil = a-c; //akan menghasilkan 0 berbeda dgn + krn js membaca fungsi + itu bs gabung atau tambah
//sedangkan - itu hanya pnya 1 fungsi cuma untuk pengurangan.
//console.log (hasil);

//random
console.log(Math.random()); //angka random antara 0 s.d 1

let data = 4.4;
console.log(Math.ceil(data)); //membulatkan keatas, untuk membulatkan kebawah floor
//console.log(Math.max(1,5,9,2)); //memilih data yg plg besar
//console.log(Math.round(data)); //membulatkan sesuai datanya

//fungsi math lainnya bs di cek di materi ch3 top2 hlmn 79-80

//waktu
console.log(new Date());//tampilannya kurang mengerti

//jd kt bisa buat variabel untuk menampung
let waktu=new Date(); //menampung data tanggal yg lengkap
let tahun=waktu.getFullYear(); //memanggil tahun
let bulan=waktu.getMonth(); //memanggil bulan tetapi month di mulai dr 0-11 kyk indeks jd mesti +1
let tanggal=waktu.getDate(); //memanggil tgl
let hari =waktu.getDay(); //memanggil hari
let jam=waktu.getHours(); //memanggil jam ttpi 0-23
let menit=waktu.getMinutes(); //memanggil menit ttpi 0-59

//kalau mau tampilin hari ini 16 12 2023
//let hasilWaktu= `${tanggal} ${bulan+1} ${tahun}`
//console.log(hasilWaktu);

//kalu mau tampilin 16 Dec 2023
//buat array tampung bulan dl
let tampungBulan =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
let hasilWaktu=`${tanggal} ${tampungBulan[bulan]} ${tahun}`;
//$tampungBulan[bulan] krn let bulan itu sudah memanggil indeks bulan 11 secara sistem
console.log (hasilWaktu);
//hal sama jg berlaku kl mau ambil hari, jadi buat array tampung hari dl



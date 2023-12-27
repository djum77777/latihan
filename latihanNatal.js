//tampilkan tgl hari ini 25 Dec 2023
data = new Date(); //data tanggal lengkap
console.log(data);
tanggal = data.getDate();
hari = data.getDay(); //getDay dimulai dari 1-7 dimana 0=minggu , 1 = senin dst
bulan = data.getMonth(); //getMonth dimulai dr 0-11 dimana 0=januari, 1= februari dst
tahun = data.getFullYear();

tampungHari=["minggu","senin","selasa","rabu","kamis","jumat","sabtu"];
tampungBulan=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];

console.log(`hari ini hari ${tampungHari[hari]}, tanggal ${tanggal} - ${tampungBulan[bulan]} - ${tahun} `);
//result hari ini hari senin, tanggal 25 - Dec - 2023

//latihan ternary
let x = 3
let y = 5
let z = x>y ? "x > y" : "x < y";
console.log(z);

function banding(a,b) {
    c=a>b? "a>b" : "a<b"; //memakai ternary ddlm fungsi function
    return c;
}
console.log(banding(5,6));

let tampung, tampung1;
function urut (d,e){
h=d<e ? (tampung=d,tampung1 = e): (tampung =e,tampung1 = d); 
console.log(tampung, tampung1);
}
urut(8,6)

//belajar Array
//let stok=["mangga","manggis","durian","duku","jambu","salak"]
let produk=[
    {
    nama:"mangga",
    jumlah:10,
    harga:10000
},
    {
        nama :"manggis",
        jumlah:8,
        harga:15000
},
    {
        nama :"durian",
        jumlah:5,
        harga:30000
}]
function cekStok() {
    for(let i=0;i<produk.length;i++)
    {
        
        //console.log(produk[i].jumlah);
        if(produk[i].jumlah < 10){ 
        //melakukan penambahan stok bila stok brg dibawah 10 item ditmbhkn 5 item
            produk[i].jumlah=produk[i].jumlah+5;
            console.log(produk[i]);
        }
        else {console.log(produk[i])}
        
    }    
}

cekStok();

//latihan object
//There is a given object, write node.js program to print the given object's properties, 
//delete the second property and get length of the object.
var user = {
    first_name: "John",
    last_name: "Smith",
    age: "38",
    department: "Software"
    };

console.log(user);
console.log ("panjang dari object user adalah " +Object.keys(user).length);
//object.keys(namaobjek).fungsiYgMauDipanggil
delete user.last_name;
if (user.first_name==="John"){
    user.first_name="Mariana";
}

console.log(user);

//array
//latihan print out array 1 per 1 tnpa fungsi for

let namaIkan=['fish', 'crab', 'dolphin', 'whale', 'starfish'];
//forEach() function that is used to iterate over items in a given array.

namaIkan.forEach(element => {
    console.log(element);
  });

  let namaUnggas=["ayam","bebek","burung","angsa"];
  namaUnggas.forEach(Element=> {
    console.log(Element);
  }
);

var namaProduk =[{
    nama:"sabun",
    merek:"lifebouy",
    fungsi:"mandi",
    harga:10000,
    lengkap:function() {return this.nama+" "+this.merek;
        
    }
},
{
    nama:"handuk",
    merek:"abc",
    fungsi:"lap",
    harga:25000
}]

console.log("total jumlah produk terdaftar :" +namaProduk.length);
namaProduk[0].nama="sabun mandi";
console.log(namaProduk);


totalHarga=namaProduk[0].harga+namaProduk[1].harga;
console.log(totalHarga);

//count loop
function loopHit(a) {
    for (let i=0 ;i<a;i++)
    {
        
        console.log(i);
    }
    
}
loopHit(5);
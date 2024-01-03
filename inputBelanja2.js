//hitung input belanja
listBarang=[{
    nama : "Astor",
    harga : 15000
},
{
    nama : "Choky",
    harga : 8000
},
{
    nama : "Chitato",
    harga : 11000
},
{
    nama : "Teh Kotak",
    harga : 6500
}]

console.log(listBarang);
console.log("Masukkan data belanja :");
console.log("Bila sudah selesai langsung di enter aja");
let hit=0;
let totalHarga={total:0};
function hitBarang()
{
    const dataBarang=[];
    const prompt = require('prompt-sync')();
    const belanja = prompt (`belanjaan :`)
    if (belanja !== "")
    {
        dataBarang.push(belanja);
        hitBarang();
    hit++;
    }
    
    for(i=0;i<hit;i++)
    {
        
        for (j=0;j<listBarang.length;j++)
        {
          
        if(dataBarang[i]===listBarang[j].nama)
        {       
            console.log(listBarang[j].nama +" " +listBarang[j].harga);  
            totalHarga.total=totalHarga.total+listBarang[j].harga;
            if(i===j) //pengecekan total barang biar tidak ada looping total harga
            {
                console.log(`Total Item : ${hit}`);
                console.log(totalHarga);
            }
        } 
    }
}
};

hitBarang();

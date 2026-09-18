let grafik;



function rupiah(n){

return "Rp " + 
n.toLocaleString("id-ID");

}




function hitung(){


let nama =
document.getElementById("nama").value;


let umur =
Number(document.getElementById("umur").value);


let pensiun =
Number(document.getElementById("pensiun").value);


let pengeluaran =
Number(document.getElementById("pengeluaran").value);


let tabungan =
Number(document.getElementById("tabungan").value);


let investasi =
Number(document.getElementById("investasi").value);


let keuntungan =
Number(document.getElementById("return").value);


let inflasi =
Number(document.getElementById("inflasi").value);



if(!umur || !pensiun){

alert("Lengkapi data");

return;

}




let tahun =
pensiun-umur;



let bulan =
tahun*12;



let r =
keuntungan/100/12;



let dana =
tabungan;



for(let i=0;i<bulan;i++){

dana =
(dana+investasi)*(1+r);

}




let kebutuhan =
0;


let biaya =
pengeluaran*12;


for(let i=0;i<20;i++){

kebutuhan+=biaya;

biaya*=1+(inflasi/100);

}




let persen =
(dana/kebutuhan)*100;



let status;



if(persen>=100){

status=
"🟢 Risiko Rendah - Dana aman";

}

else if(persen>=60){

status=
"🟡 Risiko Sedang - Perlu tambahan investasi";

}

else{

status=
"🔴 Risiko Tinggi - Dana belum cukup";

}



document.getElementById("hasil").innerHTML=`

<b>${nama}</b><br>

Dana terkumpul:
${rupiah(dana)}
<br>

Kebutuhan:
${rupiah(kebutuhan)}

<br>

Kesiapan:
${persen.toFixed(2)}%

<br>

${status}

`;



buatGrafik(dana,kebutuhan);


}




function buatGrafik(dana,kebutuhan){


if(grafik){

grafik.destroy();

}



grafik=
new Chart(
document.getElementById("chart"),

{

type:"bar",

data:{

labels:[
"Dana Anda",
"Kebutuhan"
],

datasets:[{

data:[
dana,
kebutuhan
]

}]


}


}

);


}




function resetData(){

location.reload();

}

let iwak = document.querySelectorAll(".iwak"),
    binner = document.querySelectorAll(".binner"),
    hasilKonversi = document.querySelector("#hasil"),
    check = document.querySelectorAll(".check"),
    spanBinner = document.querySelectorAll("span");

// for( let i = 0; i < iwak.length; i++){
//     iwak[i].style.display = "none";
// }

// for( let i = 0; i < binner.length; i++){
//     binner[i].onclick = () => {
//         alert("piring ke" + i);
//     }
// }
let hasil = 0;
let pangkat = check.length-1;
// for( let i = 0; i <= check.length; i++){
//     check[i].onclick = () => {
//         iwak[i].classList.toggle("muncul")
//         console.log("ok")
//         if(check[i].checked == true){
//             hasil += 2**(pangkat-i);
//             spanBinner[i].innerHTML = 1
//         }else{
//             hasil -= 2**(pangkat-i);
//             spanBinner[i].innerHTML = 0
//         }
//         hasilKonversi.innerHTML = hasil
//     }
// }
for( let i = 0; i < check.length; i++){
    check[i].onclick = () => {
        iwak[i].classList.toggle("muncul")
        console.log("ok")
        if(check[i].checked == true){
            hasil += 2**(pangkat-i);
            spanBinner[i].innerHTML = 1
        }else{
            hasil -= 2**(pangkat-i);
            spanBinner[i].innerHTML = 0
        }
        hasilKonversi.innerHTML = hasil
    }
}


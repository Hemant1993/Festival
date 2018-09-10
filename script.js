document.getElementById("index1").addEventListener("click",silentref1);//checking if the index is clicked
document.getElementById("index2").addEventListener("click",silentref2);
document.getElementById("index3").addEventListener("click",silentref3);
document.getElementById("index4").addEventListener("click",silentref4);
document.getElementById("index5").addEventListener("click",silentref5);
document.getElementById("index6").addEventListener("click",silentref6);
document.getElementById("index7").addEventListener("click",silentref7);
document.getElementById("index8").addEventListener("click",silentref8);
document.getElementById("index9").addEventListener("click",silentref9);
document.getElementById("index10").addEventListener("click",silentref10);
document.getElementById("index11").addEventListener("click",silentref11);
document.getElementById("index12").addEventListener("click",silentref12);
document.getElementById("index13").addEventListener("click",silentref13);
function silentref1() {//calling on the particular page on particular click
    document.getElementById("line1").style.opacity = "0";//removing svg line
    silentref();//calling animation function to remove the index animatedly
    setTimeout(() => {window.location.href = "silent.html";}, 6290);  //calling new page to appear
}
function silentref2() {
    document.getElementById("line2").style.opacity = "0";
    document.getElementById("line3").style.opacity = "0";
    silentref();
    setTimeout(() => {window.location.href = "picnicvines.html";}, 6290);  
}
function silentref3() {
    document.getElementById("line2").style.opacity = "0";
    document.getElementById("line3").style.opacity = "0";
    silentref();
    setTimeout(() => {window.location.href = "picnicvines.html";}, 6290);  
}
function silentref4() {
    document.getElementById("line4").style.opacity = "0";
    document.getElementById("line5").style.opacity = "0";
    silentref();
    setTimeout(() => {window.location.href = "blancdeblanc.html";}, 6290);  
}
function silentref5() {
    document.getElementById("line4").style.opacity = "0";
    document.getElementById("line5").style.opacity = "0";
    silentref();
    setTimeout(() => {window.location.href = "blancdeblanc.html";}, 6290);  
}
function silentref6() {
    document.getElementById("line6").style.opacity = "0";
    silentref();
    setTimeout(() => {window.location.href = "flavours.html";}, 6290);  
}
function silentref7() {
    document.getElementById("line7").style.opacity = "0";
    document.getElementById("line8").style.opacity = "0";
    silentref();
    setTimeout(() => {window.location.href = "gala.html";}, 6290);  
}
function silentref8() {
    document.getElementById("line7").style.opacity = "0";
    document.getElementById("line8").style.opacity = "0";
    silentref();
    setTimeout(() => {window.location.href = "gala.html";}, 6290);  
}
function silentref9() {
    document.getElementById("line9").style.opacity = "0";
    document.getElementById("line10").style.opacity = "0";
    silentref();
    setTimeout(() => {window.location.href = "rest.html";}, 6290);  
}
function silentref10() {
    document.getElementById("line9").style.opacity = "0";
    document.getElementById("line10").style.opacity = "0";
    silentref();
    setTimeout(() => {window.location.href = "rest.html";}, 6290);  
}
function silentref11() {
    document.getElementById("line11").style.opacity = "0";
    silentref();
    setTimeout(() => {window.location.href = "visits.html";}, 6290);  
}
function silentref12() {
    document.getElementById("line12").style.opacity = "0";
    document.getElementById("line13").style.opacity = "0";
    silentref();
    setTimeout(() => {window.location.href = "chef.html";}, 6290);  
}
function silentref13() {
    document.getElementById("line12").style.opacity = "0";
    document.getElementById("line13").style.opacity = "0";
    silentref();
    setTimeout(() => {window.location.href = "chef.html";}, 6290);  
}
function silentref() {
    setTimeout(() => {document.getElementById("index13").classList.add("downslide");}, 10);
    setTimeout(() => {document.getElementById("index12").classList.add("downslide");}, 950);
    setTimeout(() => {document.getElementById("index20").classList.add("downslidebreak");}, 1230);
    setTimeout(() => {document.getElementById("index11").classList.add("downslide");}, 1280);
    setTimeout(() => {document.getElementById("index19").classList.add("downslidebreak");}, 1650);
    setTimeout(() => {document.getElementById("index10").classList.add("downslide");}, 1700);
    setTimeout(() => {document.getElementById("index9").classList.add("downslide");}, 2040);
    setTimeout(() => {document.getElementById("index18").classList.add("downslidebreak");}, 2660);
    setTimeout(() => {document.getElementById("index8").classList.add("downslide");}, 2710);
    setTimeout(() => {document.getElementById("index7").classList.add("downslide");}, 3050);
    setTimeout(() => {document.getElementById("index17").classList.add("downslidebreak");}, 3230);
    setTimeout(() => {document.getElementById("index6").classList.add("downslide");}, 3280);
    setTimeout(() => {document.getElementById("index16").classList.add("downslidebreak");}, 3800);
    setTimeout(() => {document.getElementById("index5").classList.add("downslide");}, 3850);
    setTimeout(() => {document.getElementById("index4").classList.add("downslide");}, 4110);
    setTimeout(() => {document.getElementById("index15").classList.add("downslidebreak");}, 4950);
    setTimeout(() => {document.getElementById("index3").classList.add("downslide");}, 5000);
    setTimeout(() => {document.getElementById("index2").classList.add("downslide");}, 5200);
    setTimeout(() => {document.getElementById("index14").classList.add("downslidebreak");}, 5640);
    setTimeout(() => {document.getElementById("index1").classList.add("downslide");}, 5690);
}
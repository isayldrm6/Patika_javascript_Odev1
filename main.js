let kullanici_adi = prompt("Adınızı Giriniz");
let myName = document.querySelector("#myName");
myName.innerHTML = `${myName.innerHTML} ${kullanici_adi};`;

window.onload = startTime;
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();

  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  let myClock = document.querySelector("#myClock");
  myClock.innerHTML = `${(myClock.innerHTML = h + ":" + m + ":" + s)}`;
  t = setTimeout("startTime()", 1000);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

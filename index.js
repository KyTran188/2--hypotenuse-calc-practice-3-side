console.log("Hello World");
document.querySelector(".sumitbutton").addEventListener("click", function () {
  a = Number(document.querySelector(".inputA").value);
  b = Number(document.querySelector(".inputB").value);
  c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  document.querySelector(".Clabel").innerHTML = `Side C : ${c}`;
});

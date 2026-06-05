import '../main.css'
let generateBtn = document.querySelector("#generate");
let copyBtn = document.querySelector("#copy");
let rgbBox = document.querySelector("#rgb");
let colorBox = document.querySelector("#color");
// generate random color 
generateBtn.addEventListener("click", function () {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let colorCode = `RGB(${red} , ${green} , ${blue})`;
  rgbBox.innerHTML = colorCode;
  colorBox.style.backgroundColor = colorCode;
});
// copy colorCode 
copyBtn.addEventListener("click" , function(){
   navigator.clipboard.writeText(rgbBox.textContent);

})

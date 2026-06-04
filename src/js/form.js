const iranProvinces = {
  تهران: ["تهران", "ری", "اسلام‌شهر", "شهریار", "دماوند", "ورامین"],
  اصفهان: [
    "اصفهان",
    "کاشان",
    "نجف‌آباد",
    "خمینی‌شهر",
    "شاهین‌شهر",
    "آران و بیدگل",
  ],
  فارس: ["شیراز", "مرودشت", "جهرم", "فسا", "لار", "کازرون"],
  خراسان_رضوی: ["مشهد", "نیشابور", "سبزوار", "تربت حیدریه", "قوچان", "کاشمر"],
  آذربایجان_شرقی: ["تبریز", "مراغه", "مرند", "اهر", "میانه", "بناب"],
  خوزستان: ["اهواز", "آبادان", "خرمشهر", "دزفول", "اندیمشک", "ماهشهر"],
  مازندران: ["ساری", "بابل", "آمل", "قائم‌شهر", "چالوس", "تنکابن"],
  گیلان: ["رشت", "انزلی", "لاهیجان", "لنگرود", "آستارا", "تالش"],
};

// console.log(Object.keys(iranProvinces))
// let ostan = document.querySelector("#ostan");
// console.log(Object.keys(iranProvinces));
// ostan.addEventListener("change", function () {
//   let allOstan = Object.keys(iranProvinces);
//   allOstan.forEach((element) => {
//     if (ostan.value === element) {
//       console.log(iranProvinces[element]);
//     }
//   });
// });
let ostan = document.querySelector("#ostan");
let city = document.querySelector("#city");

ostan.addEventListener("change", () => {
  city.innerHTML = "";
  let citiesUser = iranProvinces[ostan.value];
  console.log(citiesUser);
  citiesUser.forEach((shahr) => {
    let option = document.createElement("option");
    option.value = shahr;
    option.textContent = shahr;
    city.appendChild(option);
  });
});


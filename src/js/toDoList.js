let input = document.querySelector("#list-input");
let addBtn = document.querySelector("#list-btn");

let fullTime;
let day;
let hours;
let minutes;
let todayFa;
let clock;
let daysOfWeek = [
  "یکشنبه",
  "دوشنبه",
  "سه شنبه",
  "چهارشنبه",
  "پنج شنبه",
  "جمعه",
  "شنبه",
];
let listBox = document.querySelector("#list-wrapper");

function createToDo() {
  let inputValue = input.value;
  if (inputValue.trim() === "") {
    return;
  }
  fullTime = new Date();
  day = fullTime.getDay();
  hours = fullTime.getHours();
  minutes = fullTime.getMinutes();
  todayFa = daysOfWeek[day];
  clock = `${hours}:${minutes}`;
  fullTime = ` ${todayFa} , ${clock} `;
  let eachListCard = document.createElement("div");
  eachListCard.classList.add(
    "relative",
    "w-full",
    "bg-white/50",
    "rounded-xl",
    "px-6",
    "py-4",
  );
  listBox.prepend(eachListCard);
  let listContentBox = document.createElement("div");
  listContentBox.classList.add("w-full", "max-w-[60%]");
  eachListCard.appendChild(listContentBox);
  let userPlan = document.createElement("p");
  let userTime = document.createElement("p");
  userPlan.classList.add("text-black", "text-lg", "line-clamp-1", "mb-2");
  userTime.classList.add("text-gray-400", "font-light", "text-sm");

  userPlan.textContent = inputValue;
  userTime.textContent = fullTime;
  listContentBox.appendChild(userPlan);
  listContentBox.appendChild(userTime);
  let checkBtn = document.createElement("input");
  checkBtn.type = "checkbox";
  checkBtn.classList.add(
    "absolute",
    "left-4",
    "top-1/2",
    "-translate-y-1/2",
    "h-5",
    "w-5",
    "rounded-2xl",
    "accent-purple-500",
  );
  eachListCard.appendChild(checkBtn);
  let xBtn = document.createElement("button");
  xBtn.type = "button";
  xBtn.textContent = "x";
  xBtn.classList.add(
    "rounded",
    "text-white",
    "cursor-pointer",
    "text-lg/5",
    "absolute",
    "bg-red-300",
    "w-5",
    "h-5",
    "left-11",
    "top-1/2",
    "-translate-y-1/2",
  );
  eachListCard.append(xBtn);
  xBtn.addEventListener("click", function (e) {
    let thisCard = e.target.parentElement;
    thisCard.remove();
  });
  input.value = "";
}

addBtn.addEventListener("click", createToDo);
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    createToDo();
  }
});

// let changeBtn = document.querySelector("#change-icon-btn")
// let listIcons = document.querySelector("#change-icon-list")
// changeBtn.addEventListener("click" , function(){
// listIcons.classList.toggle("invisible")
// listIcons.classList.toggle("opacity-100")
// listIcons.classList.toggle("pointer-events-none")


// })

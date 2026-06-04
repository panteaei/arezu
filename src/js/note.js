const changeApp = document.querySelector("#changeApp");
const todoWrapper = document.querySelector("#todo-wrapper");
const mainTitle = document.querySelector("#title");
const subTitle = document.querySelector("#sub-title");
const noteTitle = "یادداشت های من";
const todoTitle = "لیست کارها";
const noteSubTitle = "کارهای کوچیک، تغییرات بزرگ";
const todoSubTitle = "برنامه ریزی امروز، موفقیت فردا...";
let isTodoWrapper = true;
const extentionAppIcon = document.querySelector("#extention-app-icon");
const extentionAppText = document.querySelector("#extention-app-text");
const todoListWrapper = document.querySelector("#todolist-content-wrapper");
const noteListWrapper = document.querySelector("#notelist-content-wrapper");
const textArea = document.querySelector("#textarea");
const promptWrapper = document.querySelector("#prompt-wrapper");
const promptWrapperBtns = document.querySelector("#prompt-wrapper-Btns");
// text animation
function textAnimation(title, firstTitle, secondTitle) {
  if (title.innerHTML === secondTitle) {
    title.classList.remove("opacity-100");
    title.classList.add("opacity-0", "-translate-x-10");
    setTimeout(function () {
      title.innerHTML = firstTitle;
      title.classList.remove("opacity-0", "-translate-x-10");
      title.classList.add("opacity-100");
    }, 700);
  } else {
    title.classList.remove("opacity-100");
    title.classList.add("opacity-0", "-translate-x-10");

    setTimeout(function () {
      title.innerHTML = secondTitle;
      title.classList.remove("opacity-0", "-translate-x-10");
      title.classList.add("opacity-100");
    }, 700);
  }
}

// change Current App
function changeCurrentApp() {
  textAnimation(mainTitle, todoTitle, noteTitle);
  textAnimation(subTitle, todoSubTitle, noteSubTitle);
  //   if isTodoWrapper then change it to notewrapper
  if (isTodoWrapper) {
    input.setAttribute("placeholder", "عنوان یادداشت جدید");
    input.classList.remove(
      "focus:outline-1",
      "focus:outline-blue-600",
      "focus:bg-white",
    );
   
    promptWrapper.classList.remove("h-14");
    promptWrapper.classList.add("h-53");
    promptWrapperBtns.classList.remove("top-1/2", "-translate-y-1/2");
    promptWrapperBtns.classList.add("bottom-3");
    textArea.classList.remove("hidden");
    textArea.focus()
    noteListWrapper.classList.remove("hidden");
    noteListWrapper.classList.add("grid");


    isTodoWrapper = false;
  } else {
    input.setAttribute("placeholder", "برنامه جدید خود را وارد کنید ...");
    input.classList.add(
      "focus:outline-1",
      "focus:outline-blue-600",
      "focus:bg-white",
    );
   
    promptWrapper.classList.add("h-14");
    promptWrapper.classList.remove("h-53");
    promptWrapperBtns.classList.add("top-1/2", "-translate-y-1/2");
    promptWrapperBtns.classList.remove("bottom-3");
    textArea.classList.add("hidden");
    noteListWrapper.classList.remove("grid");
    noteListWrapper.classList.add("hidden");

    isTodoWrapper = true;
  }
  todoListWrapper.classList.toggle("hidden");
}
changeApp.addEventListener("click", changeCurrentApp);

// create notes 
document.createElement("div")



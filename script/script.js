let slides = document.querySelectorAll(".slideItem");
let slideIdx = 0;
setInterval(()=>{
    let prevIdx = slideIdx;
    slides[prevIdx].setAttribute("class", "slideItem prev");

    slideIdx = ++slideIdx % slides.length;
    slides[slideIdx].setAttribute("class", "slideItem current");

    setTimeout(()=>{
        slides[prevIdx].classList.remove("prev")
    }, 2000)
}, 2500)











let boardTap = document.querySelectorAll(".titleWrap > h2 > a"),
    boardContents = document.querySelectorAll(".boardInner > ul");


boardTap.forEach((title, idx)=>{
    title.addEventListener("click", e=>{
        boardTap.forEach(i=>i.classList.remove("active"));
        e.currentTarget.classList.add("active");

        boardContents.forEach(i=>i.classList.remove("active"));
        boardContents[idx].classList.add("active");
    })
})



let noticeItem = document.querySelector(".notice > li:first-of-type > a");

noticeItem.addEventListener("click", e=>{
    e.preventDefault();
    document.querySelector(".modalWrap").classList.add("active");
})

let btnClose = document.querySelector(".modal .btnClose");


btnClose.addEventListener("click", e=>{
    e.preventDefault();
    document.querySelector(".modalWrap").classList.remove("active");
})

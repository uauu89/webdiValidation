// slide

let slides = document.querySelectorAll(".slideItem"),
    idx = 0;

setInterval(()=>{
    current = (idx + 1) % slides.length;
    slides[idx].classList.remove("current");
    slides[current].classList.add("current");
    idx = current;
}, 3000)


// tab

let tabBtn = document.querySelectorAll(".titleWrap a"),
    boardList = document.querySelectorAll(".boardInner ul");

tabBtn.forEach((btn, idx)=>{
    btn.addEventListener("click", e=>{
        // e.preventDefault();
        tabBtn.forEach(i=>i.classList.remove("active"));
        boardList.forEach(i=>i.classList.remove("active"));
        e.currentTarget.classList.add("active");
        boardList[idx].classList.add("active");
    })
})


// modal

let noticeItem = document.querySelector(".notice > li:first-of-type > a"),
    modalWrap = document.querySelector(".modalWrap"),
    btnClose = modalWrap.querySelector(".btnClose");

noticeItem.addEventListener("click", e=>{
    // e.preventDefault();
    modalWrap.classList.add("active");
})

btnClose.addEventListener("click", e=>{
    // e.preventDefault();
    modalWrap.classList.remove("active");
})
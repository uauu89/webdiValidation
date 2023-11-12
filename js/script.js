// 슬라이드

let slides = document.querySelectorAll(".slideItem"),
    slideIdx = 0;

setInterval(()=>{
    let prevIdx = slideIdx,
        currentIdx = ++slideIdx % slides.length;

        slides[prevIdx].setAttribute("class", "slideItem prev");
        slides[currentIdx].classList.add("current");

        setTimeout(()=>{
            slides[prevIdx].classList.remove("prev");
            slideIdx = currentIdx;
        },2000)

}, 2800)

// /슬라이드



// 공지사항/갤러리 탭 기능
let boardBtn = document.querySelectorAll(".boardTitleWrap a"),
    boardContents = document.querySelectorAll(".boardInner ul");


boardBtn.forEach((btn, idx)=>{
    btn.addEventListener("click", e=>{
        e.preventDefault();
        boardBtn.forEach(i=>i.classList.remove("active"));
        boardContents.forEach(i=>i.classList.remove("active"));
    
        boardBtn[idx].classList.add("active");
        boardContents[idx].classList.add("active");
    })
})
// /공지사항/갤러리 탭 기능


// 모달 기능
let modalItem = document.querySelector("ul.notice > li:first-of-type > a"),
    modalWrap = document.querySelector(".modalWrap"),
    modalClose = document.querySelector(".modal .btnClose");

modalItem.addEventListener("click", e=>{
    e.preventDefault();
    modalWrap.classList.add("active");
})

modalClose.addEventListener("click", e=>{
    e.preventDefault();
    modalWrap.classList.remove("active");
})
// /모달 기능
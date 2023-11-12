let slides = document.querySelectorAll(".slideItem"),
    slideIdx = 0;

setInterval(()=>{
    let prevIdx = slideIdx,
        currentIdx = (slideIdx+1) % slides.length;

    slides[prevIdx].classList.remove("current");
    slides[currentIdx].classList.add("current");

    slideIdx = currentIdx;
}, 2800)


let modalOpen = document.querySelector(".notice li:first-of-type > a"),
    modalWrap = document.querySelector(".modalWrap"),
    modalClose = modalWrap.querySelector(".btnClose");

modalOpen.addEventListener("click", e=>{
    e.preventDefault();
    modalWrap.classList.add("active");
})
modalClose.addEventListener("click", e=>{
    e.preventDefault();
    modalWrap.classList.remove("active");
})
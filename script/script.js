
let bannerDom = document.querySelectorAll(".bannerImg"),
    bannerNum = bannerDom.length,
    currentIdx = 0;

setInterval(()=>{
    bannerDom[currentIdx].classList.remove("active");
    currentIdx = ++currentIdx % bannerNum;
    bannerDom[currentIdx].classList.add("active");
}, 2500)



let noticeDom = document.querySelector(".noticeItem"),
    modalDom = document.querySelector(".modalWrap"),
    modalCloseBtn = modalDom.querySelector(".btnClose");


noticeDom.addEventListener("click", e=>{
    modalDom.classList.add("active");
})

modalCloseBtn.addEventListener("click", e=>{
    e.preventDefault();
    modalDom.classList.remove("active");
})
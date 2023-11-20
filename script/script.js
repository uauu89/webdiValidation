// slide

let slides = document.querySelectorAll(".slide li a"),
    idx = 0;

let slideAnimation = setInterval(()=>{
    let currentIdx = idx,
        nextIdx = (idx + 1) % slides.length;

    slides[currentIdx].setAttribute("class", "prev");
    slides[nextIdx].classList.add("current");

    let removeClass = setTimeout(()=>{
        slides[currentIdx].classList.remove("prev");
        idx = nextIdx;
        clearTimeout(removeClass);
    }, 2100)
}, 2800)